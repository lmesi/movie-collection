package com.server.moviecollection.series;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.moviecollection.collection.Collection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Series {

    @Id
    @GeneratedValue
    private Integer id;
    private String title;
    private String posterUrl;
    private Integer year;
    private String[] directors;
    private String length;
    private Integer episodes;
    private  Integer seasons;
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

    public Integer getEpisodes() {
        return episodes;
    }

    public Integer getSeasons() {
        return seasons;
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
