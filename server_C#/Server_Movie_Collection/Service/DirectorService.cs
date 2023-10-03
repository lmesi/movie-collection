using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model;

namespace Server_Movie_Collection.Service;

public class DirectorService : IDirectorService
{
    private MediaCollectionContext _context;

    public DirectorService(MediaCollectionContext context)
    {
        _context = context;
    }
    
    public Director? GetDirectorById(long directorId)
    {
        return _context.Directors.Find(directorId);
    }

    public IEnumerable<Director> GetDirectorsById(List<long> directorIds)
    {
        foreach (var directorId in directorIds)
        {
            Director? director = GetDirectorById(directorId);
            if (director is not null)
                yield return director;
        }
    }
}