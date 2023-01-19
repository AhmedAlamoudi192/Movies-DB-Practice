package com.neoleap.movie_db_site.records;

public record Movie(long page, Results[] results,long total_pages, long total_results) {
    
}

