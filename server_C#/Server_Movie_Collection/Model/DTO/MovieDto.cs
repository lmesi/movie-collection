using Server_Movie_Collection.Entities;

namespace Server_Movie_Collection.Model.DTO;

public class MovieDto
{
    public string Title { get; set; }
    public string PosterUrl { get; set; }
    public int Year { get; set; }
    public List<long> DirectorIds { get; set; }
    public string Length { get; set; }
    public Boolean Favourite { get; set; }
    public Boolean Watched { get; set; }
}