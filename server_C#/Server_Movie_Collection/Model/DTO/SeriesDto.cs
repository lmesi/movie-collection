namespace Server_Movie_Collection.Model.DTO;

public class SeriesDto
{
    public string Title { get; set; }
    public string PosterUrl { get; set; }
    public int StartYear { get; set; }
    public int EndYear { get; set; }
    public List<long> DirectorIds { get; set; }
    public string Length { get; set; }
    public int Episodes { get; set; }
    public int Seasons { get; set; }
    public Boolean Favourite { get; set; }
    public Boolean Watched { get; set; }
}