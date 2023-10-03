using Microsoft.AspNetCore.Mvc;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;
using Server_Movie_Collection.Service;

namespace Server_Movie_Collection.Controllers;

[Route("/api/collections")]
public class MediaCollectionController: ControllerBase
{
    private ICollectionService _collectionService;

    public MediaCollectionController(ICollectionService collectionService)
    {
        _collectionService = collectionService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCollections([FromQuery] bool isLimited = false)
    {
        if (isLimited)
            return Ok(await _collectionService.GetFirstFiveCollection());
        return Ok(await _collectionService.GetAllCollections());
    }

    [HttpGet("{id}")]
    public IActionResult GetCollectionById(long id)
    {
        MediaCollection? collection = _collectionService.GetCollectionById(id);

        return collection is not null ? Ok(collection) : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> AddCollection([FromBody] MediaCollectionDto mediaCollectionDto)
    {
        bool success = await _collectionService.AddCollection(mediaCollectionDto);
        return success ? Ok() : BadRequest();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCollection(long id)
    {
        bool success = await _collectionService.DeleteCollection(id);

        return success ? Ok() : BadRequest();
    }

    [HttpPut("{id}/add")]
    public async Task<IActionResult> AddMediaToCollection(long id, [FromQuery] String type,
        [FromQuery(Name = "id")] int mediaId)
    {
        bool success = await _collectionService.AddMediaToCollection(id, mediaId, type);

        return success ? Ok() : BadRequest();
    }
    
    [HttpPut("{id}/remove")]
    public async Task<IActionResult> RemoveMediaToCollection(long id, [FromQuery] String type,
        [FromQuery(Name = "id")] int mediaId)
    {
        bool success = await _collectionService.RemoveMediaFromCollection(id, mediaId, type);

        return success ? Ok() : BadRequest();
    }
}