package com.neoleap.movie_db_site.records;

public record SearchedResult(
    boolean adult,
    String backdrop_path,
    long[] genre_ids,
    long id,
    String original_language,
    String original_title,
    String overview,
    float popularity,
    String poster_path,
    String release_date,
    String title,
    boolean video,
    long vote_average,
    long vote_count
) {
    
}
