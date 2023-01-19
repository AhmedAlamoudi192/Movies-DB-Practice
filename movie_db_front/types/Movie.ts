export type movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
export type movie_details = {
    adult: Boolean,
    backdrop_path: string,
    belongs_to_collection:{backdrop_path:string,name:string,id:number,poster_path:string},
    budget: number,
    genres: {name:string,id:number}[],
    homepage:string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview:string,
    popularity: number,
    poster_path: string,
    production_companies: any[],
    production_countries: {iso_3166_1:string,name:string}[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: {
        name: string,
        iso_639_1: string,
        english_name: string
      }[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }