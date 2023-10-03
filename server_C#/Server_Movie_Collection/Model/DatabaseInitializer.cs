using Microsoft.EntityFrameworkCore;
using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;
using Server_Movie_Collection.Service;

namespace Server_Movie_Collection.Model;

public static class DatabaseInitializer
{
    public static IMovieService MovieService { get; set; }
    public static ISeriesService SeriesService { get; set; }
    public static ICollectionService CollectionService { get; set; }
    public static IDirectorService DirectorService { get; set; }
    
    public static async void SeedData(IServiceProvider serviceProvider)
    {
        await using var context = new MediaCollectionContext(serviceProvider.GetRequiredService<DbContextOptions<MediaCollectionContext>>());
        if (!context.Directors.Any())
        {
            context.Directors.AddRange(
                new Director(){Name = "Andrew Adamson"},
                new Director(){Name = "Vicky Jenson"},
                new Director(){Name = "Robert Zemeckis"},
                new Director(){Name = "David Fincher"},
                new Director(){Name = "Lana Wachowski"},
                new Director(){Name = "Lilly Wachowski"},
                new Director(){Name = "Christopher Nolan"},
                new Director(){Name = "David Crane"},
                new Director(){Name = "Marta Kauffman"},
                new Director(){Name = "Dan Harmon"},
                new Director(){Name = "Justin Roiland"},
                new Director(){Name = "Greg Daniels"},
                new Director(){Name = "Ricky Gervais"},
                new Director(){Name = "Stephen Merchant"},
                new Director(){Name = "David Shore"},
                new Director(){Name = "Matt Duffer"},
                new Director(){Name = "Ross Duffer"},
                new Director(){Name = "Robert Zemeckis"},
                new Director(){Name = "Gus Van Sant"},
                new Director(){Name = "Roger Allers"},
                new Director(){Name = "Rob Minkoff"},
                new Director(){Name = "Chris Columbus"},
                new Director(){Name = "Chuck Lorre"},
                new Director(){Name = "Bill Prady"},
                new Director(){Name = "Sydney Newman"},
                new Director(){Name = "Scott Frank"},
                new Director(){Name = "Allan Scott"},
                new Director(){Name = "Glen A. Larson"},
                new Director(){Name = "Ronald D. Moore"},
                new Director(){Name = "Akiva Goldsman"},
                new Director(){Name = "Alex Kurtzman"},
                new Director(){Name = "Jenny Lumet"}
            );
            await context.SaveChangesAsync();
        }

        if (context.Directors.Any() && !context.Movies.Any())
        {
            context.Movies.AddRange(
                new Movie(){Title = "Shrek", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Andrew Adamson")),context.Directors.First(director => director.Name.Equals("Vicky Jenson"))}, PosterUrl = "/assets/Shrek.jpg", Favourite = false, Watched = true, Length = "1h 30m", Year = 2001},
                new Movie(){Title = "Forrest Gump", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Robert Zemeckis"))}, PosterUrl = "/assets/Forrest_Gump.jpg", Favourite = false, Watched = true, Length = "2h 22m", Year = 1994},
                new Movie(){Title = "Fight Club", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("David Fincher"))}, PosterUrl = "/assets/Fight_Club.jpg", Favourite = false, Watched = true, Length = "2h 19m", Year = 1999},
                new Movie(){Title = "The Matrix", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Lana Wachowski")), context.Directors.First(director => director.Name.Equals("Lilly Wachowski"))}, PosterUrl = "/assets/The_Matrix.jpg", Favourite = false, Watched = true, Length = "2h 16m", Year = 1999},
                new Movie(){Title = "Inception", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Christopher Nolan"))}, PosterUrl = "/assets/Inception.jpg", Favourite = false, Watched = true, Length = "2h 28m", Year = 2010},
                new Movie(){Title = "Back to the Future", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Robert Zemeckis"))}, PosterUrl = "/assets/Back_To_The_Future.jpg", Favourite = false, Watched = true, Length = "1h 56m", Year = 1985},
                new Movie(){Title = "Back to the Future II", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Robert Zemeckis"))}, PosterUrl = "/assets/Back_To_The_Future_2.jpg", Favourite = false, Watched = true, Length = "1h 48m", Year = 1989},
                new Movie(){Title = "Back to the Future III", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Robert Zemeckis"))}, PosterUrl = "/assets/Back_To_The_Future_3.jpg", Favourite = false, Watched = true, Length = "1h 58m", Year = 1990},
                new Movie(){Title = "Good Will Hunting", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Gus Van Sant"))}, PosterUrl = "/assets/Good_Will_Hunting.jpg", Favourite = false, Watched = true, Length = "2h 06m", Year = 1997},
                new Movie(){Title = "The Lion King", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Roger Allers")), context.Directors.First(director => director.Name.Equals("Rob Minkoff"))}, PosterUrl = "/assets/The_Lion_King.jpg", Favourite = false, Watched = true, Length = "1h 28m", Year = 1994},
                new Movie(){Title = "Harry Potter and the Philosopher's Stone", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Chris Columbus"))}, PosterUrl = "/assets/Harry_Potter_1.jpg", Favourite = false, Watched = true, Length = "2h 32m", Year = 2001}
            );

            await context.SaveChangesAsync();
        }

        if (!context.Collections.Any())
        {
            context.Collections.AddRange(
                new MediaCollection(){Title = "Already Seen"},
                new MediaCollection(){Title = "Want to watch"},
                new MediaCollection(){Title = "Favourite"},
                new MediaCollection(){Title = "Never watch again"},
                new MediaCollection(){Title = "Untitled"},
                new MediaCollection(){Title = "Untitled2"},
                new MediaCollection(){Title = "Untitled3"}
            );

            await context.SaveChangesAsync();
        }
    }
}