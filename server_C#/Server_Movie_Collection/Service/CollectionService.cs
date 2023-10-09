using Microsoft.EntityFrameworkCore;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model;
using Server_Movie_Collection.Model.DTO;

namespace Server_Movie_Collection.Service;

public class CollectionService : ICollectionService
{
    private MediaCollectionContext _context;
    private IMovieService _movieService;
    private ISeriesService _seriesService;

    public CollectionService(MediaCollectionContext mediaCollectionContext, IMovieService movieService, ISeriesService seriesService)
    {
        _context = mediaCollectionContext;
        _movieService = movieService;
        _seriesService = seriesService;
    }
    
    public async Task<List<MediaCollection>> GetAllCollections()
    {
        return await _context.Collections.Include(collection => collection.Movies)
            .Include(collection => collection.Series).ToListAsync();
    }

    public async Task<List<MediaCollection>> GetFirstFiveCollection()
    {
        return await _context.Collections.Include(collection => collection.Movies)
            .Include(collection => collection.Series).Take(5).ToListAsync();
    }

    public async Task<bool> AddCollection(MediaCollectionDto mediaCollectionDto)
    {
        try
        {
            MediaCollection collection = new MediaCollection()
            {
                Title = mediaCollectionDto.Title,
                Movies = new List<Movie>(),
                Series = new List<Series>()
            };
            _context.Collections.Add(collection);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public MediaCollection? GetCollectionById(long collectionId)
    {
        try
        {
            return _context.Collections.Include(collection => collection.Movies)
                .Include(collection => collection.Series)
                .FirstOrDefault(collection => collection.Id.Equals(collectionId));
        }
        catch (Exception e)
        {
            return null;
        }
    }

    public async Task<bool> DeleteCollection(long collectionId)
    {
        try
        {
            MediaCollection? collection = GetCollectionById(collectionId);

            if (collection is null) return false;

            _context.Collections.Remove(collection);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public async Task<bool?> AddMediaToCollection(long collectionId, long mediaId, string mediaType)
    {
        try
        {
            MediaCollection? collection = GetCollectionById(collectionId);
            if (collection is null) return false;

            if (mediaType.Equals("movie"))
            {
                Movie? movie = _context.Movies.Include(media => media.Directors)
                    .FirstOrDefault(media => media.Id.Equals(mediaId));
                if (movie is null) return false;

                if (collection.Movies.Contains(movie)) return null;
                
                collection.Movies.Add(movie);
                _context.Collections.Update(collection);
                await _context.SaveChangesAsync();
                return true;
            }
            
            if (mediaType.Equals("series"))
            {
                Series? series = _context.Series.Include(media => media.Directors)
                    .FirstOrDefault(media => media.Id.Equals(mediaId));
                if (series is null) return false;
                
                if (collection.Series.Contains(series)) return null;
                
                collection.Series.Add(series);
                _context.Collections.Update(collection);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public async Task<bool> RemoveMediaFromCollection(long collectionId, long mediaId, string mediaType)
    {
        try
        {
            MediaCollection? collection = GetCollectionById(collectionId);
            if (collection is null) return false;

            if (mediaType.Equals("movie"))
            {
                Movie? movie = _context.Movies.Include(media => media.Directors)
                    .FirstOrDefault(media => media.Id.Equals(mediaId));
                if (movie is null) return false;
                
                collection.Movies.Remove(movie);
                _context.Collections.Update(collection);
                await _context.SaveChangesAsync();
                return true;
            }
            
            if (mediaType.Equals("series"))
            {
                Series? series = _context.Series.Include(media => media.Directors)
                    .FirstOrDefault(media => media.Id.Equals(mediaId));
                if (series is null) return false;
                
                collection.Series.Remove(series);
                _context.Collections.Update(collection);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}