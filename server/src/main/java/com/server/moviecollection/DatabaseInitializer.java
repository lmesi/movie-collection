package com.server.moviecollection;

import com.server.moviecollection.collection.Collection;
import com.server.moviecollection.collection.CollectionRepository;
import com.server.moviecollection.movie.Movie;
import com.server.moviecollection.movie.MovieRepository;
import com.server.moviecollection.series.Series;
import com.server.moviecollection.series.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private SeriesRepository seriesRepository;
    @Autowired
    private CollectionRepository collectionRepository;

    @Override
    public void run(String... args) throws Exception {
        if(movieRepository.count() == 0){
            movieRepository.save(new Movie("Shrek", "/assets/Shrek.jpg", 2001, new String[]{"Andrew Adamson", "Vicky Jenson"}, "1h 30m", false, true));
            movieRepository.save(new Movie("Forrest Gump", "/assets/Forrest_Gump.jpg", 1994, new String[]{"Robert Zemeckis"}, "2h 22m", false, false));
            movieRepository.save(new Movie("Fight Club", "/assets/Fight_Club.jpg", 1999, new String[]{"David Fincher"}, "2h 19m", false, true));
            movieRepository.save(new Movie("The Matrix", "/assets/The_Matrix.jpg", 1999, new String[]{"Lana Wachowski", "Lilly Wachowski"}, "2h 16m", false, false));
            movieRepository.save(new Movie("Inception", "/assets/Inception.jpg", 2010, new String[]{"Christopher Nolan"}, "2h 28m", false, true));
            movieRepository.save(new Movie("Back to the Future", "/assets/Back_To_The_Future.jpg", 1985, new String[]{"Robert Zemeckis"}, "1h 56m", true, true));
            movieRepository.save(new Movie("Back to the Future II", "/assets/Back_To_The_Future_2.jpg", 1989, new String[]{"Robert Zemeckis"}, "1h 48m", true, true));
            movieRepository.save(new Movie("Back to the Future III", "/assets/Back_To_The_Future_3.jpg", 1990, new String[]{"Robert Zemeckis"}, "1h 58m", true, true));
            movieRepository.save(new Movie("Good Will Hunting", "/assets/Good_Will_Hunting.jpg", 1997, new String[]{"Gus Van Sant"}, "2h 06m", true, true));
            movieRepository.save(new Movie("The Lion King", "/assets/The_Lion_King.jpg", 1994, new String[]{"Roger Allers", "Rob Minkoff"}, "1h 28m", false, true));
            movieRepository.save(new Movie("Harry Potter and the Philosopher's Stone", "/assets/Harry_Potter_1.jpg", 2001, new String[]{"Chris Columbus"}, "2h 32m", false, true));
        }

        if(seriesRepository.count() == 0) {
            seriesRepository.save(new Series("Friends", "/assets/Friends.jpg", 1994, 2004, new String[]{"David Crane", "Marta Kauffman"}, "20m", 234, 10, true, true));
            seriesRepository.save(new Series("Rick and Morty", "/assets/Rick_and_Morty.jpg", 2013, 2024, new String[]{"Dan Harmon", "Justin Roiland"}, "23m", 63, 6, false, false));
            seriesRepository.save(new Series("The Office", "/assets/The_Office.jpg", 2005, 2013, new String[]{"Greg Daniels", "Ricky Gervais", "Stephen Merchant"}, "22m", 188, 9, false, true));
            seriesRepository.save(new Series("House M.D.", "/assets/House_MD.jpg", 2004, 2012, new String[]{"David Shore"}, "44m", 176, 8, false, true));
            seriesRepository.save(new Series("Stranger Things", "/assets/Stranger_Things.jpg", 2016, 2024, new String[]{"Matt Duffer", "Ross Duffer"}, "51m", 42, 5, false, true));
            seriesRepository.save(new Series("The Big Bang Theory", "/assets/The_Big_Bang_Theory.jpg", 2007, 2019, new String[]{"Chuck Lorre", "Bill Prady"}, "22m", 280, 12, false, true));
            seriesRepository.save(new Series("Doctor Who", "/assets/Doctor_Who.jpg", 2005, 2023, new String[]{"Sydney Newman"}, "45m", 211, 14, true, false));
            seriesRepository.save(new Series("The Queen's Gambit", "/assets/The_Queen's_Gambit.jpg", 2020, 2020, new String[]{"Scott Frank","Allan Scott"}, "1h", 7, 1, true, true));
            seriesRepository.save(new Series("Battlestar Galactica", "/assets/Battlestar_Galactica.jpg", 2004, 2009, new String[]{"Glen A. Larson","Ronald D. Moore"}, "44m", 74, 4, false, true));
            seriesRepository.save(new Series("Star Trek: Strange New Worlds", "/assets/Star_Trek.jpg", 2022, 2023, new String[]{"Akiva Goldsman","Alex Kurtzman","Jenny Lumet"}, "52m", 30, 3, false, false));
        }

        if(collectionRepository.count() == 0) {
            collectionRepository.save(new Collection("Already Seen"));
            collectionRepository.save(new Collection("Want to watch"));
            collectionRepository.save(new Collection("Favourite"));
            collectionRepository.save(new Collection("Never watch again"));
            collectionRepository.save(new Collection("Untitled"));
            collectionRepository.save(new Collection("Untitled2"));
            collectionRepository.save(new Collection("Untitled3"));
        }
    }
}
