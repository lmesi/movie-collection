using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server_Movie_Collection.Entities;

public class Director
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    public string Name { get; set; }
    [JsonIgnore]
    public List<Movie> Movies { get; set; }
    
    [JsonIgnore]
    public List<Series> Series { get; set; }
}