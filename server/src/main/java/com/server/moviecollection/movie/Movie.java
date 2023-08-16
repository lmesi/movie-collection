package com.server.moviecollection.movie;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.moviecollection.collection.Collection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.lang.reflect.Array;
import java.util.List;

@Entity
public class Movie {
    @Id
    @GeneratedValue
    private Integer id;
    private String title;
    private String posterUrl;
    private Integer year;
    private String[] directors;
    private String length;
    private boolean favourite;
    private boolean watched;
    @ManyToMany
    @JsonIgnore
    private List<Collection> collections;

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public Integer getYear() {
        return year;
    }

    public String[] getDirectors() {
        return directors;
    }

    public String getLength() {
        return length;
    }

    public boolean isFavourite() {
        return favourite;
    }

    public boolean isWatched() {
        return watched;
    }

    public List<Collection> getCollections() {
        return collections;
    }
}
