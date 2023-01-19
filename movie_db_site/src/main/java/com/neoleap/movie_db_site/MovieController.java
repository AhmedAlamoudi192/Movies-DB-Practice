package com.neoleap.movie_db_site;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.RequestParam;
import com.neoleap.movie_db_site.records.Movie;
import com.neoleap.movie_db_site.records.MovieDetails;
import com.neoleap.movie_db_site.records.Results;
import com.neoleap.movie_db_site.records.SearchedMovie;
import com.neoleap.movie_db_site.records.SearchedResult;

@RestController
public class MovieController {
	@Value("${API_KEY}")
    private String API_KEY;
	@Value("${base_url}")
    private String base_url;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/movies")
	public Results[] getMovie(@RequestParam(value = "page", defaultValue = "1") String page) {
		RestTemplate restTemplate = new RestTemplate();
		Map<String, String> uriParams = new HashMap<String, String>();
		uriParams.put("api_key", API_KEY);
		uriParams.put("page", page);

		Movie result = restTemplate.getForObject(base_url+"movie/popular?api_key={api_key}&page={page}", Movie.class,uriParams);
		return result.results();
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/movie/{movieId}")
	public MovieDetails getMovieDetails(@PathVariable("movieId") Integer movieId) {
		RestTemplate restTemplate = new RestTemplate();
		Map<String, String> uriParams = new HashMap<String, String>();
		uriParams.put("api_key", API_KEY);
		uriParams.put("movieId", movieId.toString());

		MovieDetails result = restTemplate.getForObject(base_url+"movie/{movieId}?api_key={api_key}", MovieDetails.class,uriParams);
		return result;
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/search")
	public SearchedResult[] searchMovie(@RequestParam(value = "query", defaultValue = "") String query) {
		RestTemplate restTemplate = new RestTemplate();
		Map<String, String> uriParams = new HashMap<String, String>();
		uriParams.put("api_key", API_KEY);
		uriParams.put("query", query);

		SearchedMovie result = restTemplate.getForObject(base_url+"search/movie?api_key={api_key}&query={query}", SearchedMovie.class,uriParams);
		return result.results();
	}
}