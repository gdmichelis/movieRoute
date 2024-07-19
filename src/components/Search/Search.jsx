import search from "../../assets/search.png";
import close from "../../assets/close.png";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import "./Search.css";
import { searchedMovie, fetchMovies } from "../../features/movies/movieSlice";
import { MOVIES_PER_PAGE } from "../../pages/Home";

export default function Search({ currentPage, searchText, setSearchText }) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const paginationData = { currentPage, MOVIES_PER_PAGE };

  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.focus();
    if (!searchText) return;
    dispatch(searchedMovie(searchText));
  }

  return (
    <div className="search-box">
      <div className="search-inner">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            id="movies"
            name="movies"
            type="text"
            ref={inputRef}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <label htmlFor="movies">Search movies...</label>
          <button
            type="button"
            className={`clear-btn ${!searchText ? "hidden" : ""}`}
            onClick={() => {
              setSearchText("");
              dispatch(fetchMovies(paginationData));
            }}
          >
            <img src={close} alt="clear" />
          </button>

          <button type="submit" className="search-btn">
            <img src={search} alt="Search" />
          </button>
        </form>
      </div>
    </div>
  );
}
