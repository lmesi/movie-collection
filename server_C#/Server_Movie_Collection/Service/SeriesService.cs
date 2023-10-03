using Microsoft.EntityFrameworkCore;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model;
using Server_Movie_Collection.Model.DTO;

namespace Server_Movie_Collection.Service;

public class SeriesService : ISeriesService
{
    private readonly MediaCollectionContext _context;
    private readonly IDirectorService _directorService;

    public SeriesService(MediaCollectionContext context, IDirectorService directorService)
    {
        _context = context;
        _directorService = directorService;
    }
    
    public async Task<List<Series>> GetAllSeries()
    {
        return await _context.Series.Include(series => series.Directors).ToListAsync();
    }

    public async Task<List<Series>> GetFirstFiveSeries()
    {
        return await _context.Series.Include(series => series.Directors).Take(5).ToListAsync();
    }

    public SeriesDetailsDto? GetSeriesById(long seriesId)
    {
        try
        {
            Series? series = _context.Series.Include(series => series.Directors)
                .FirstOrDefault(series => series.Id.Equals(seriesId));
            if (series is not null)
            {
                return new SeriesDetailsDto()
                {
                    Id = series.Id,
                    Title = series.Title,
                    Directors = series.Directors.Select(director => director.Name).ToList(),
                    StartYear = series.StartYear,
                    EndYear = series.EndYear,
                    Favourite = series.Favourite,
                    Length = series.Length,
                    Episodes = series.Episodes,
                    PosterUrl = series.PosterUrl,
                    Seasons = series.Seasons,
                    Watched = series.Watched
                };
            }

            return null;
        }
        catch (Exception e)
        {
            return null;
        }
    }

    public async Task<bool> AddSeries(SeriesDto seriesDto)
    {
        try
        {
            List<Director> directors = _directorService.GetDirectorsById(seriesDto.DirectorIds).ToList();

            Series series = new Series()
            {
                EndYear = seriesDto.EndYear,
                StartYear = seriesDto.StartYear,
                Length = seriesDto.Length,
                Favourite = seriesDto.Favourite,
                Watched = seriesDto.Watched,
                Episodes = seriesDto.Episodes,
                Seasons = seriesDto.Seasons,
                Collections = new List<MediaCollection>(),
                Directors = directors,
                PosterUrl = seriesDto.PosterUrl,
                Title = seriesDto.Title
            };

            _context.Series.Add(series);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public async Task<HashSet<Series>> SearchForSeries(string? title, int year)
    {
        HashSet<Series> foundSeries = new HashSet<Series>();

        if (!string.IsNullOrEmpty(title))
        {
            List<Series> series =
                (await GetAllSeries()).FindAll(ser => ser.Title.ToLower().Contains(title.ToLower()));
            foundSeries.UnionWith(series);
        }

        if (year != 0)
        {
            List<Series> series = (await GetAllSeries()).FindAll(ser => ser.StartYear <= year && ser.EndYear >= year);
            foundSeries.UnionWith(series);
        }

        return foundSeries;
    }
}