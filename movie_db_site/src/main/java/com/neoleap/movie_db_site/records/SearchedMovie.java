package com.neoleap.movie_db_site.records;

public record SearchedMovie(long page, SearchedResult[] results,long total_pages, long total_results) {
    
}

