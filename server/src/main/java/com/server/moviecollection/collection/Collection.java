package com.server.moviecollection.collection;

import com.server.moviecollection.movie.Movie;
import com.server.moviecollection.series.Series;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Collection {

    protected Collection(){

    }
    @Id
    @GeneratedValue
    private Integer id;
    @Size(min=5)
    private String title;
    @ManyToMany
    private List<Movie> movies;
    @ManyToMany
    private List<Series> series;

    public Collection(String title) {
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public List<Series> getSeries() {
        return series;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public void setSeries(List<Series> series) {
        this.series = series;
    }

    public void addMovie(Movie movie){
        this.movies.add(movie);
    }

    public void removeMovie(Movie movie){
        this.movies.remove(movie);
    }

    public void addSeries(Series newSeries){
        this.series.add(newSeries);
    }

    public void removeSeries(Series media){
        this.series.remove(media);
    }

}
