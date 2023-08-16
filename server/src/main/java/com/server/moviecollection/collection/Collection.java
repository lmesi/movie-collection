package com.server.moviecollection.collection;

import com.server.moviecollection.movie.Movie;
import com.server.moviecollection.series.Series;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;

import java.util.List;

public class Collection {
    @Id
    @GeneratedValue
    private Integer id;
    @Size(min=5)
    private String title;
    @ManyToMany(mappedBy = "collections")
    private List<Movie> movies;
    @ManyToMany(mappedBy = "collections")
    private List<Series> series;
}
