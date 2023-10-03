using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server_Movie_Collection.Entities;

public class Series
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public string Title { get; set; }
    public string PosterUrl { get; set; }
    public int StartYear { get; set; }
    public int EndYear { get; set; }
    public List<Director> Directors { get; set; }
    public string Length { get; set; }
    public int Episodes { get; set; }
    public int Seasons { get; set; }
    public Boolean Favourite { get; set; }
    public Boolean Watched { get; set; }

    [JsonIgnore] 
    public List<MediaCollection> Collections { get; set; } = new();
}