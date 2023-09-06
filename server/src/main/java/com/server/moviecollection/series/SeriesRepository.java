package com.server.moviecollection.series;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeriesRepository extends JpaRepository<Series, Integer> {
    List<Series> findByTitleContaining(String keyword);
    List<Series> findByStartYearLessThanEqualAndEndYearGreaterThanEqual(int startYear, int endYear);
    List<Series> findTop5ByOrderByIdAsc();
}
