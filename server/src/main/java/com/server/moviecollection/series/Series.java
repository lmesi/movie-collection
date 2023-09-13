package com.server.moviecollection.series;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.moviecollection.collection.Collection;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Series {

    protected Series(){

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String posterUrl;
    private int startYear;

    private int endYear;
    private String[] directors;
    private String length;
    private Integer episodes;
    private  Integer seasons;
    private boolean favourite;
    private boolean watched;
    @ManyToMany(mappedBy = "series")
    @JsonIgnore
    private List<Collection> collections = new ArrayList<>();

    public Series(String title, String posterUrl, int startYear, int endYear, String[] directors, String length, Integer episodes, Integer seasons, boolean favourite, boolean watched) {
        this.title = title;
        this.posterUrl = posterUrl;
        this.startYear = startYear;
        this.endYear = endYear;
        this.directors = directors;
        this.length = length;
        this.episodes = episodes;
        this.seasons = seasons;
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

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public void setDirectors(String[] directors) {
        this.directors = directors;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public void setEpisodes(Integer episodes) {
        this.episodes = episodes;
    }

    public void setSeasons(Integer seasons) {
        this.seasons = seasons;
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

    public int getStartYear() {
        return startYear;
    }

    public void setStartYear(int startYear) {
        this.startYear = startYear;
    }

    public int getEndYear() {
        return endYear;
    }

    public void setEndYear(int endYear) {
        this.endYear = endYear;
    }
}
