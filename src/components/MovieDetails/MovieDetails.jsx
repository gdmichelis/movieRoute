import { useState, useEffect } from "react";
import "./MovieDetails.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DonutChart from "../DonutChart/DonutChart";

export default function MovieDetails() {
  const params = useParams();
  const [overview, setOverview] = useState("");
  const [poster, setPoster] = useState("");
  const [movieCast, setMovieCast] = useState([]);
  const movies = useSelector((state) => state.movies.movies);

  const movieDetails = movies.filter((m) => m.id === Number(params.id));
  const movieTitle = movieDetails[0].title ? movieDetails[0].title : "";
  const movieYear = movieDetails[0].releasedYear
    ? movieDetails[0].releasedYear.slice(0, 5).trim("")
    : "";
  const moviePoster = movieDetails[0].imageURL ? movieDetails[0].imageURL : "";
  const movieSystemRated = movieDetails[0].systemRated || "";
  const movieYearLocale = new Date(
    movieDetails[0].releasedYear
  ).toLocaleDateString();

  const movieGenres = movieDetails[0].genre;
  const movieDuration = movieDetails[0].duration;
  const movieImdbRating = movieDetails[0].imdbRating;

  async function fetchMovieDetails() {
    const res1 = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&primary_release_year=${movieYear}&page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_TMDB_ACCESS_TOKEN__KEY
          }`,
          accept: "application/json",
        },
      }
    );
    const data1 = await res1.json();
    setOverview(data1.results[0].overview);
    setPoster(data1.results[0]["backdrop_path"]);
    return data1.results[0].id;
  }

  async function fetchMovieDetailsWrapper() {
    const movieTmdbId = await fetchMovieDetails();
    const res2 = await fetch(
      `https://api.themoviedb.org/3/movie/${movieTmdbId}/credits?language=en-US`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_TMDB_ACCESS_TOKEN__KEY
          }`,
          accept: "application/json",
        },
      }
    );
    const data2 = await res2.json();
    setMovieCast(data2.cast);
  }

  useEffect(() => {
    fetchMovieDetailsWrapper();
  }, []);

  return (
    <div className="movie-details-container">
      <div className="back-link-box">
        <Link className="back-link" to="/">
          &larr; back
        </Link>
      </div>
      <div
        className="movie-details-wrapper"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`,
          maxHeight: "570px",
          height: "570px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left calc((50vw - 170px) - 340px) top",
        }}
      >
        <div className="movie-details-overlay">
          <div className="movie-details-single-column">
            <section className="movie-details-content">
              <div className="poster-wrapper">
                <img src={moviePoster} alt={`${movieTitle}`} />
              </div>
              <div className="header-poster-wrapper">
                <div className="header-poster-title">
                  <h3>
                    {movieTitle} <span>{`(${movieYear})`}</span>
                  </h3>
                </div>
                <div className="header-poster-details">
                  <span className="system-rated">{movieSystemRated}</span>
                  <span className="released-year">{movieYearLocale} • </span>
                  <span className="genres">{movieGenres} • </span>
                  <span>{movieDuration} min</span>
                </div>
                <div className="header-poster-imdbrating">
                  <DonutChart number={movieImdbRating} />
                  <span>IMDB Rating</span>
                </div>
                <div className="header-poster-overview">
                  <h3>Overview</h3>
                  <p>{overview}</p>
                </div>
                <div className="header-poster-actors">
                  <h3>Actors</h3>
                  <div>
                    {movieCast.slice(0, 10).map((actor) => (
                      <span key={actor.name}>{actor.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
