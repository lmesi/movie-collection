using Microsoft.AspNetCore.Mvc;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Service;

namespace Server_Movie_Collection.Controllers;

[ApiController, Route("/api/directors")]
public class DirectorController : ControllerBase
{
    private IDirectorService _directorService;

    public DirectorController(IDirectorService directorService)
    {
        _directorService = directorService;
    }

    [HttpGet("{id}")]
    public IActionResult GetDirectorById(long id)
    {
        Director? director = _directorService.GetDirectorById(id);
        return director is not null ? Ok(director) : NotFound();
    }
}