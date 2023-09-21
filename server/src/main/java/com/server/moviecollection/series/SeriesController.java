package com.server.moviecollection.series;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class SeriesController {

    private SeriesRepository seriesRepository;

    public SeriesController(SeriesRepository seriesRepository){
        this.seriesRepository = seriesRepository;
    }

    @GetMapping("/api/series")
    public List<Series> getSeries(@RequestParam(required = false) boolean isLimited){
        if(isLimited)
            return seriesRepository.findTop5ByOrderByIdAsc();

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
