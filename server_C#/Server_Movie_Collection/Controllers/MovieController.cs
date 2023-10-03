using Microsoft.AspNetCore.Mvc;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;
using Server_Movie_Collection.Service;

namespace Server_Movie_Collection.Controllers;

[ApiController, Route("/api/movies")]
public class MovieController : ControllerBase
{
    private readonly IMovieService _movieService;

    public MovieController(IMovieService movieService)
    {
        _movieService = movieService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllMovies([FromQuery] bool isLimited = false)
    {
        if (isLimited)
            return Ok(await _movieService.GetFirstFiveMovies());
        return Ok(await _movieService.GetAllMovies());
    }

    [HttpGet("{id}")]
    public IActionResult GetMovieById(long id)
    {
        MovieDetailsDto? movie = _movieService.GetMovie(id);
        return movie is not null ? Ok(movie) : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> AddMovie([FromBody] MovieDto movieDto)
    {
        bool success = await _movieService.AddMovie(movieDto);
        return success ? Ok() : BadRequest();
    }

    [HttpGet("search")]
    public async Task<IActionResult> SearchForMovies([FromQuery] String? title = null, [FromQuery] int year = 0)
    {
        return Ok(await _movieService.SearchForMovies(title, year));
    }
}