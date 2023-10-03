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

        if (context.Directors.Any() && !context.Series.Any())
        {
            context.Series.AddRange(
                new Series(){Title = "Friends", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("David Crane")),context.Directors.First(director => director.Name.Equals("Marta Kauffman"))}, PosterUrl = "/assets/Friends.jpg", Episodes = 234, Seasons = 10, Length = "20m", StartYear = 1994, EndYear = 2004, Favourite = true, Watched = true},
                new Series(){Title = "Rick and Morty", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Dan Harmon")),context.Directors.First(director => director.Name.Equals("Justin Roiland"))}, PosterUrl = "/assets/Rick_and_Morty.jpg", Episodes = 63, Seasons = 6, Length = "23m", StartYear = 2013, EndYear = 2024, Favourite = false, Watched = false},
                new Series(){Title = "The Office", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Greg Daniels")),context.Directors.First(director => director.Name.Equals("Ricky Gervais")), context.Directors.First(director => director.Name.Equals("Stephen Merchant"))}, PosterUrl = "/assets/The_Office.jpg", Episodes = 188, Seasons = 9, Length = "22m", StartYear = 2005, EndYear = 2013, Favourite = false, Watched = true},
                new Series(){Title = "House M.D.", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("David Shore"))}, PosterUrl = "/assets/House_MD.jpg", Episodes = 176, Seasons = 8, Length = "44m", StartYear = 2004, EndYear = 2012, Favourite = false, Watched = true},
                new Series(){Title = "Stranger Things", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Matt Duffer")),context.Directors.First(director => director.Name.Equals("Ross Duffer"))}, PosterUrl = "/assets/Stranger_Things.jpg", Episodes = 42, Seasons = 5, Length = "51m", StartYear = 2016, EndYear = 2024, Favourite = true, Watched = true},
                new Series(){Title = "The Big Bang Theory", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Chuck Lorre")),context.Directors.First(director => director.Name.Equals("Bill Prady"))}, PosterUrl = "/assets/The_Big_Bang_Theory.jpg", Episodes = 280, Seasons = 12, Length = "22m", StartYear = 2007, EndYear = 2019, Favourite = false, Watched = false},
                new Series(){Title = "Doctor Who", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Sydney Newman"))}, PosterUrl = "/assets/Doctor_Who.jpg", Episodes = 211, Seasons = 14, Length = "45m", StartYear = 2005, EndYear = 2023, Favourite = true, Watched = true},
                new Series(){Title = "The Queen's Gambit", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Scott Frank")),context.Directors.First(director => director.Name.Equals("Allan Scott"))}, PosterUrl = "/assets/The_Queen's_Gambit.jpg", Episodes = 7, Seasons = 1, Length = "1h", StartYear = 2020, EndYear = 2020, Favourite = true, Watched = true},
                new Series(){Title = "Battlestar Galactica", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Glen A. Larson")),context.Directors.First(director => director.Name.Equals("Ronald D. Moore"))}, PosterUrl = "/assets/Battlestar_Galactica.jpg", Episodes = 74, Seasons = 4, Length = "44m", StartYear = 2004, EndYear = 2009, Favourite = true, Watched = true},
                new Series(){Title = "Star Trek: Strange New Worlds", Directors = new List<Director>(){context.Directors.First(director => director.Name.Equals("Akiva Goldsman")),context.Directors.First(director => director.Name.Equals("Alex Kurtzman")), context.Directors.First(director => director.Name.Equals("Jenny Lumet"))}, PosterUrl = "/assets/Star_Trek.jpg", Episodes = 30, Seasons = 3, Length = "52m", StartYear = 2022, EndYear = 2023, Favourite = true, Watched = true}
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