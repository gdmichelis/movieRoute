import "./Filter.css";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { filteredMovie, fetchMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import { MOVIES_PER_PAGE } from "../../pages/Home";

export default function Filter({ filterText, setFilterText }) {
  const dispatch = useDispatch();
  const paginationData = { currentPage: 0, MOVIES_PER_PAGE };

  useEffect(
    function () {
      if (filterText === "") {
        dispatch(fetchMovies(paginationData));
      } else {
        dispatch(filteredMovie(filterText));
      }
    },
    [dispatch, filterText]
  );

  return (
    <div className="filter-outer">
      <div className="filter-inner">
        <label htmlFor="filter">Filter by Genre</label>
        <select
          id="filter"
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          value={filterText}
        >
          <option value="">Choose an option</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      <div className={`clear-container ${!filterText ? "hidden" : ""}`}>
        <Button
          type="reset"
          color="#fff"
          bgColor="#004d6d"
          onClick={() => {
            setFilterText("");
          }}
        >
          Clear filter
        </Button>
      </div>
    </div>
  );
}
