namespace Server_Movie_Collection.Model.DTO;

public class SeriesDetailsDto
{
    public long Id { get; set; }
    public string Title { get; set; }
    public string PosterUrl { get; set; }
    public int StartYear { get; set; }
    public int EndYear { get; set; }
    public List<string> Directors { get; set; }
    public string Length { get; set; }
    public int Episodes { get; set; }
    public int Seasons { get; set; }
    public bool Favourite { get; set; }
    public bool Watched { get; set; }
}