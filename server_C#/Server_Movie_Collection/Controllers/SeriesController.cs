using Microsoft.AspNetCore.Mvc;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;
using Server_Movie_Collection.Service;

namespace Server_Movie_Collection.Controllers;

[ApiController, Route("/api/series")]
public class SeriesController : ControllerBase
{
    private ISeriesService _seriesService;

    public SeriesController(ISeriesService service)
    {
        _seriesService = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllSeries([FromQuery] bool isLimited = false)
    {
        if (isLimited)
            return Ok(await _seriesService.GetFirstFiveSeries());
        return Ok(await _seriesService.GetAllSeries());
    }

    [HttpGet("{id}")]
    public IActionResult GetSeriesById(long id)
    {
        SeriesDetailsDto? series = _seriesService.GetSeriesById(id);
        return series is null ? BadRequest() : Ok(series);
    }

    [HttpPost]
    public async Task<IActionResult> AddSeries([FromBody] SeriesDto seriesDto)
    {
        bool success = await _seriesService.AddSeries(seriesDto);
        return success ? Ok() : BadRequest();
    }
    
    [HttpGet("search")]
    public async Task<IActionResult> SearchForMovies([FromQuery] String? title = null, [FromQuery] int year = 0)
    {
        return Ok(await _seriesService.SearchForSeries(title, year));
    }
}