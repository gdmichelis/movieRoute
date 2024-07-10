import "./Sort.css";
import { useState, useEffect } from "react";
import { sortedMovie, fetchMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import { MOVIES_PER_PAGE } from "../../pages/Home";

export default function Sort({ sortText, setSortText }) {
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();

  function handleSort() {
    const sortData = { sortText, order };
    if (sortText === "") {
      const paginationData = { currentPage: 0, MOVIES_PER_PAGE };
      dispatch(fetchMovies(paginationData));
      return;
    } else {
      dispatch(sortedMovie(sortData));
    }
  }
  useEffect(handleSort, [sortText, order]);

  return (
    <div className="sort-container">
      <div className="sort-inner">
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          onChange={(e) => {
            setSortText(e.target.value);
          }}
          value={sortText}
        >
          <option value="">Choose an option</option>
          <option value="">Not Sorting</option>
          <option value="imdbRating">IMDB Rating</option>
          <option value="duration">Duration</option>
          <option value="releasedYear">Year</option>
        </select>
      </div>

      <div className="sort-inner">
        <label htmlFor="order">Order by</label>
        <select
          id="order"
          onChange={(e) => setOrder(e.target.value)}
          value={order}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}
