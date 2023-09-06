package com.server.moviecollection.movie;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    List<Movie> findByTitleContaining(String keyword);
    List<Movie> findByYear(Integer year);
    List<Movie> findTop5ByOrderByIdAsc();
}
