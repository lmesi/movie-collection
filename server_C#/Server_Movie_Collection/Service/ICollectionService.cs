using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;

namespace Server_Movie_Collection.Service;

public interface ICollectionService
{
    Task<List<MediaCollection>> GetAllCollections();
    Task<List<MediaCollection>> GetFirstFiveCollection();
    Task<bool> AddCollection(MediaCollectionDto mediaCollectionDto);
    MediaCollection? GetCollectionById(long collectionId);
    Task<bool> DeleteCollection(long collectionId);
    Task<bool> AddMediaToCollection(long collectionId, long mediaId, String mediaType);
    Task<bool> RemoveMediaFromCollection(long collectionId, long mediaId, String mediaType);
}