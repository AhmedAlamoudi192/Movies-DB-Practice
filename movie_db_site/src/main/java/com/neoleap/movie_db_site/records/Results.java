package com.neoleap.movie_db_site.records;

public record Results(
    boolean adult,
    String backdrop_path,
    long[] genre_ids,
    long id,
    String original_title,
    String original_language,
    String overview,
    float popularity,
    String poster_path,
    String release_date,
    String title,
    Boolean video,
    float vote_average,
    long vote_count
){}