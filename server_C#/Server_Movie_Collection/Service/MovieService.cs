using Microsoft.EntityFrameworkCore;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model;
using Server_Movie_Collection.Model.DTO;

namespace Server_Movie_Collection.Service;

public class MovieService : IMovieService
{
    private readonly MediaCollectionContext _context;
    private readonly IDirectorService _directorService;

    public MovieService(MediaCollectionContext context, IDirectorService directorService)
    {
        _context = context;
        _directorService = directorService;
    }
    
    public async Task<List<Movie>> GetAllMovies()
    {
        return await _context.Movies.Include(movie => movie.Directors).ToListAsync();
    }

    public async Task<List<Movie>> GetFirstFiveMovies()
    {
        return await _context.Movies.Include(movie => movie.Directors).Take(5).ToListAsync();
    }

    public MovieDetailsDto? GetMovie(long movieId)
    {
        try
        {
            Movie? movie = _context.Movies.Include(movie => movie.Directors)
                .FirstOrDefault(movie => movie!.Id.Equals(movieId));
            if (movie is not null)
            {
                return new MovieDetailsDto()
                {
                    Title = movie.Title,
                    Id = movie.Id,
                    Favourite = movie.Favourite,
                    Length = movie.Length,
                    PosterUrl = movie.PosterUrl,
                    Watched = movie.Watched,
                    Year = movie.Year,
                    Directors = movie.Directors.Select(director => director.Name).ToList(),
                };
            }

            return null;
        }
        catch (Exception e)
        {
            return null;
        }
        
    }

    public async Task<HashSet<Movie>> SearchForMovies(String title, int year)
    {
        HashSet<Movie> foundMovies = new HashSet<Movie>();

        if (!string.IsNullOrEmpty(title))
        {
            List<Movie> movies =
                (await GetAllMovies()).FindAll(movie => movie.Title.ToLower().Contains(title.ToLower()));
            foundMovies.UnionWith(movies);
        }

        if (year != 0)
        {
            List<Movie> movies = (await GetAllMovies()).FindAll(movie => movie.Year.Equals(year));
            foundMovies.UnionWith(movies);
        }

        return foundMovies;
    }

    public async Task<bool> AddMovie(MovieDto movieDto)
    {
        try
        {
            List<Director> directors = _directorService.GetDirectorsById(movieDto.DirectorIds).ToList();

            Movie movie = new Movie()
            {
                Title = movieDto.Title,
                Favourite = movieDto.Favourite,
                Watched = movieDto.Watched,
                Year = movieDto.Year,
                Length = movieDto.Length,
                Directors = directors,
                PosterUrl = movieDto.PosterUrl,
                Collections = new List<MediaCollection>(),
            };

            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}