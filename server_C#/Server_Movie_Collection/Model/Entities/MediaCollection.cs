using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server_Movie_Collection.Entities;

public class MediaCollection
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    [MinLength(5)]
    public string Title { get; set; }

    public List<Movie> Movies { get; set; } = new();
    public List<Series> Series { get; set; } = new();
}