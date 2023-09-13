package com.server.moviecollection.movie;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.moviecollection.collection.Collection;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Movie {

    protected Movie(){

    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String posterUrl;
    private Integer year;
    private String[] directors;
    private String length;
    private boolean favourite;
    private boolean watched;
    @ManyToMany(mappedBy = "movies")
    @JsonIgnore
    private List<Collection> collections = new ArrayList<>();

    public Movie(String title, String posterUrl, Integer year, String[] directors, String length, boolean favourite, boolean watched) {
        this.title = title;
        this.posterUrl = posterUrl;
        this.year = year;
        this.directors = directors;
        this.length = length;
        this.favourite = favourite;
        this.watched = watched;
    }

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

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public void setDirectors(String[] directors) {
        this.directors = directors;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public void setFavourite(boolean favourite) {
        this.favourite = favourite;
    }

    public void setWatched(boolean watched) {
        this.watched = watched;
    }

    public void setCollections(List<Collection> collections) {
        this.collections = collections;
    }
}
