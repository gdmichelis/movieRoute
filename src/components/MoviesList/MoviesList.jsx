import "./MoviesList.css";
import MovieItem from "../MovieItem/MovieItem";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Button from "../Button/Button";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberOfMovies } from "../Pagination/PaginationLinks";

export default function MoviesList({
  currentPage,
  setCurrentPage,
  filterText,
  setFilterText,
  sortText,
  setSortText,
  searchText,
  setSearchText,
}) {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="outer-box">
      <Search
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Sort sortText={sortText} setSortText={setSortText} />
      <Filter filterText={filterText} setFilterText={setFilterText} />
      <div className="main-container">
        <div className="button-outer">
          <Link to="/add">
            <Button color="#c2b921" bgColor="#5a4af4">
              + Add movie
            </Button>
          </Link>
        </div>
        <div className="movies-container">
          <div
            className={`movies-total-number ${
              movies.length === 0 ? "hidden" : ""
            }`}
          >
            <span>Total {numberOfMovies} movies</span>
          </div>
          {movies.length > 0 &&
            movies.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  imageURL={movie.imageURL}
                  imdbRating={movie.imdbRating}
                  releasedYear={movie.releasedYear}
                  duration={movie.duration}
                  systemRated={movie.systemRated}
                  genre={movie.genre}
                />
              );
            })}
        </div>
        {movies.length === 0 && (
          <p className="no-movies-message">
            ⚠ We didn't find any movie here yet!
          </p>
        )}
      </div>
    </div>
  );
}
