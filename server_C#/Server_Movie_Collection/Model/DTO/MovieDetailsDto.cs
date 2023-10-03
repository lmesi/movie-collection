namespace Server_Movie_Collection.Model.DTO;

public class MovieDetailsDto
{
    public long Id { get; set; }
    public string Title { get; set; }
    public string PosterUrl { get; set; }
    public int Year { get; set; }
    public List<string> Directors { get; set; }
    public string Length { get; set; }
    public bool Favourite { get; set; }
    public bool Watched { get; set; }
}