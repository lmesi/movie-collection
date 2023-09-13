package com.server.moviecollection.collection;

import com.server.moviecollection.movie.Movie;
import com.server.moviecollection.series.Series;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Collection {

    protected Collection(){

    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Size(min=5)
    private String title;
    @ManyToMany
    private List<Movie> movies = new ArrayList<>();

    @ManyToMany
    private List<Series> series = new ArrayList<>();

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
}
