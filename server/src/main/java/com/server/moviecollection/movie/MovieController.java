package com.server.moviecollection.movie;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class MovieController {
    private MovieRepository movieRepository;

    public MovieController (MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @GetMapping("/api/movies")
    public List<Movie> getMovies(@RequestParam(required = false) boolean isLimited){
        if(isLimited) {
            return movieRepository.findTop5ByOrderByIdAsc();
        }

        return movieRepository.findAll();
    }

    @GetMapping("/api/movies/{id}")
    public ResponseEntity<Object> getMovieById(@PathVariable int id){
        Movie movie = movieRepository.findById(id).orElse(null);
        if(movie == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(movie);
    }

    @GetMapping("api/movies/search")
    public ResponseEntity<Object> searchForMovie(@RequestParam String title, @RequestParam Integer year){
        Set<Movie> movies = new HashSet<>();
        if(!title.equals("")){
            movies.addAll(movieRepository.findByTitleContaining(title));
        }

        if(year != 0){
            movies.addAll(movieRepository.findByYear(year));
        }

        return ResponseEntity.ok(movies);
    }
}
