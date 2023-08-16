package com.server.moviecollection.collection;

import com.server.moviecollection.movie.Movie;
import com.server.moviecollection.movie.MovieRepository;
import com.server.moviecollection.series.Series;
import com.server.moviecollection.series.SeriesRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<Collection> getAllCollections(){
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
        Collection collection = collectionRepository.findById(id).orElse(null);

        if(collection == null) return ResponseEntity.notFound().build();

        if(type.equals("movie")) {
            Movie movie = movieRepository.findById(mediaId).orElse(null);
            if (movie == null) return ResponseEntity.notFound().build();

            collection.addMovie(movie);

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        if(type.equals("series")) {
            Series series = seriesRepository.findById(mediaId).orElse(null);
            if (series == null) return ResponseEntity.notFound().build();

            collection.addSeries(series);

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/api/collections/{id}/remove")
    public ResponseEntity<Object> removeMediaFromCollection(@RequestParam String type, @RequestParam(name = "id") int mediaId, @PathVariable int id){
        Collection collection = collectionRepository.findById(id).orElse(null);

        if(collection == null) return ResponseEntity.notFound().build();

        if(type.equals("movie")) {
            Movie movie = movieRepository.findById(mediaId).orElse(null);
            if (movie == null) return ResponseEntity.notFound().build();

            collection.removeMovie(movie);

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        if(type.equals("series")) {
            Series series = seriesRepository.findById(mediaId).orElse(null);
            if (series == null) return ResponseEntity.notFound().build();

            collection.removeSeries(series);

            return ResponseEntity.ok(collectionRepository.save(collection));
        }

        return ResponseEntity.badRequest().build();
    }
}
