using Server_Movie_Collection.Entities;

namespace Server_Movie_Collection.Service;

public interface IDirectorService 
{
    Director? GetDirectorById(long directorId);
    IEnumerable<Director> GetDirectorsById(List<long> directorIds);
}