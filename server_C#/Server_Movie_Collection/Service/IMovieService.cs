using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;

namespace Server_Movie_Collection.Service;

public interface IMovieService
{
    Task<List<Movie>> GetAllMovies();
    Task<List<Movie>> GetFirstFiveMovies();
    MovieDetailsDto? GetMovie(long movieId);
    Task<bool> AddMovie(MovieDto movie);

    Task<HashSet<Movie>> SearchForMovies(String? title, int year);
}