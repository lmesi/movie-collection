package com.server.moviecollection.series;

import com.server.moviecollection.movie.Movie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@RestController
public class SeriesController {

    private SeriesRepository seriesRepository;

    public SeriesController(SeriesRepository seriesRepository){
        this.seriesRepository = seriesRepository;

//        seriesRepository.save(new Series("Friends", "/assets/Friends.jpg", 1994, 2004, new String[]{"David Crane", "Marta Kauffman"}, "20m", 234, 10, true, true));
//        seriesRepository.save(new Series("Rick and Morty", "/assets/Rick_and_Morty.jpg", 2013, 2024, new String[]{"Dan Harmon", "Justin Roiland"}, "23m", 63, 6, false, false));
//        seriesRepository.save(new Series("The Office", "/assets/The_Office.jpg", 2005, 2013, new String[]{"Greg Daniels", "Ricky Gervais", "Stephen Merchant"}, "22m", 188, 9, false, true));
//        seriesRepository.save(new Series("House M.D.", "/assets/House_MD.jpg", 2004, 2012, new String[]{"David Shore"}, "44m", 176, 8, false, true));
//        seriesRepository.save(new Series("Stranger Things", "/assets/Stranger_Things.jpg", 2016, 2024, new String[]{"Matt Duffer", "Ross Duffer"}, "51m", 42, 5, false, true));
    }

    @GetMapping("/api/series")
    public List<Series> getAllSeries(){
        return seriesRepository.findAll();
    }

    @GetMapping("/api/series/{id}")
    public ResponseEntity<Object> getSeriesById(@PathVariable int id){
        Series series = seriesRepository.findById(id).orElse(null);
        if(series == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(series);
    }

    @GetMapping("api/series/search")
    public ResponseEntity<Object> searchForSeries(@RequestParam String title, @RequestParam Integer year){
        Set<Series> series = new HashSet<>();
        if(!title.equals("")){
            series.addAll(seriesRepository.findByTitleContaining(title));
        }

        if(year != 0){
            series.addAll(seriesRepository.findByStartYearLessThanEqualAndEndYearGreaterThanEqual(year, year));
        }

        return ResponseEntity.ok(series);
    }
}
