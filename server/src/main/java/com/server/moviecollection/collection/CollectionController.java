package com.server.moviecollection.collection;

import com.server.moviecollection.movie.Movie;
import com.server.moviecollection.movie.MovieRepository;
import com.server.moviecollection.series.Series;
import com.server.moviecollection.series.SeriesRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CollectionController {

    private CollectionRepository collectionRepository;
    private MovieRepository movieRepository;
    private SeriesRepository seriesRepository;

    public CollectionController(CollectionRepository collectionRepository, MovieRepository movieRepository, SeriesRepository seriesRepository){
        this.collectionRepository = collectionRepository;
        this.movieRepository = movieRepository;
        this.seriesRepository = seriesRepository;
    }

    @GetMapping("/api/collections")
    public List<Collection> getAllCollections(@RequestParam(required = false) boolean isLimited){
        if(isLimited){
            return collectionRepository.findTop5ByOrderByIdAsc();
        }
        return collectionRepository.findAll();
    }

    @PostMapping("/api/collections")
    public void addCollection(@Valid @RequestBody Collection collection){
        collectionRepository.save(collection);
    }

    @GetMapping("/api/collections/{id}")
    public Collection getCollectionById(@PathVariable int id){
        return collectionRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/api/collections/{id}")
    public boolean deleteCollection(@PathVariable int id){
        Collection collectionToDelete = collectionRepository.findById(id).orElse(null);

        if(collectionToDelete == null)
            return false;

        collectionRepository.delete(collectionToDelete);
        return true;
    }

    @PutMapping("/api/collections/{id}/add")
    public ResponseEntity<Object> addMediaToCollection(@RequestParam String type, @RequestParam(name = "id") int mediaId, @PathVariable int id){
        Optional<Collection> optionalCollection = collectionRepository.findById(id);

        if(optionalCollection.isEmpty()) return ResponseEntity.notFound().build();
        Collection collection = optionalCollection.get();

        if(type.equals("movie")) {
            Optional<Movie> movie = movieRepository.findById(mediaId);
            if (movie.isEmpty()) return ResponseEntity.notFound().build();

            if(collection.getMovies().contains(movie.get())) return ResponseEntity.badRequest().build();

            collection.getMovies().add(movie.get());

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        if(type.equals("series")) {
            Optional<Series> series = seriesRepository.findById(mediaId);
            if (series.isEmpty()) return ResponseEntity.notFound().build();

            if(collection.getSeries().contains(series.get())) return ResponseEntity.badRequest().build();

            collection.getSeries().add(series.get());

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/api/collections/{id}/remove")
    public ResponseEntity<Object> removeMediaFromCollection(@RequestParam String type, @RequestParam(name = "id") int mediaId, @PathVariable int id){
        Optional<Collection> optionalCollection = collectionRepository.findById(id);

        if(optionalCollection.isEmpty()) return ResponseEntity.notFound().build();
        Collection collection = optionalCollection.get();

        if(type.equals("movie")) {
            Optional<Movie> movie = movieRepository.findById(mediaId);
            if (movie.isEmpty()) return ResponseEntity.notFound().build();

            collection.getMovies().remove(movie.get());

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        if(type.equals("series")) {
            Optional<Series> optionalSeries = seriesRepository.findById(mediaId);
            if (optionalSeries.isEmpty()) return ResponseEntity.notFound().build();

            collection.getSeries().remove(optionalSeries.get());

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        return ResponseEntity.badRequest().build();
    }
}
