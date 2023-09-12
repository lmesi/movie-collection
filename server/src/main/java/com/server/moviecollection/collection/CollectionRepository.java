package com.server.moviecollection.collection;

import com.server.moviecollection.movie.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CollectionRepository extends JpaRepository<Collection, Integer> {
    List<Collection> findTop5ByOrderByIdAsc();
}
