package com.neoleap.movie_db_site.records;
import java.util.HashMap;

public record MovieDetails(
	boolean adult,
	String backdrop_path,
	HashMap<String,Object> belongs_to_collection,
	long budget,
	HashMap<String,Object>[] genres,
	String homepage,
	long id,
	String imdb_id,
	String original_language,
	String original_title,
	String overview,
	String popularity,
	String poster_path,
	String[] production_companies,
	HashMap<String,Object>[] production_countries,
	String release_date,
	long revenue,
	long runtime,
	HashMap<String,Object>[] spoken_languages,
	String status,
	String tagline,
	String title,
	boolean video,
	float vote_average,
	long vote_count
) {
    
}
