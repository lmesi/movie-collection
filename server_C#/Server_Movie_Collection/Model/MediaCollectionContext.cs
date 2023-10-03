using Microsoft.EntityFrameworkCore;
using Server_Movie_Collection.Entities;

namespace Server_Movie_Collection.Model;

public class MediaCollectionContext : DbContext
{
    public MediaCollectionContext(DbContextOptions<MediaCollectionContext> options) : base(options){}
    
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Series> Series { get; set; }
    public DbSet<MediaCollection> Collections { get; set; }
    public DbSet<Director> Directors { get; set; }
}