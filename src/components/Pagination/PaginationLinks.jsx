import "./PaginationLinks.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../features/movies/movieSlice";
import { MOVIES_PER_PAGE } from "../../pages/Home";

export let numberOfMovies;

function PaginationLinks({ currentPage, setCurrentPage }) {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  numberOfMovies = useSelector((state) => state.pagesCount.pagesCount);
  const dispatch = useDispatch();
  const numberOfPages = Math.ceil(numberOfMovies / MOVIES_PER_PAGE);
  const paginationItemsArray = [...Array(numberOfPages).keys()];
  const paginationFirstItem = paginationItemsArray[0];
  const paginationLastItem = paginationItemsArray[numberOfPages - 1];
  const paginationData = { currentPage, MOVIES_PER_PAGE };

  useEffect(
    function () {
      dispatch(fetchMovies(paginationData));
    },
    [currentPage]
  );

  function handleClick(e) {
    const targetItem = Number(e.target.id);
    setCurrentPage(targetItem);
    if (targetItem === paginationFirstItem) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
    if (targetItem === paginationLastItem) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }

  function handlePrevious() {
    setIsLastPage(false);
    setCurrentPage((cur) => cur - 1);
    dispatch(fetchMovies(paginationData));
    if (currentPage - 1 === paginationFirstItem) setIsFirstPage(true);
  }

  function handleNext() {
    setIsFirstPage(false);
    setCurrentPage((cur) => cur + 1);
    dispatch(fetchMovies(paginationData));
    if (currentPage + 1 === paginationLastItem) setIsLastPage(true);
  }

  return (
    <ul className={`pagination-box ${numberOfPages === 1 ? "hidden" : ""}`}>
      <span
        className={`pagination-previous ${
          isFirstPage || !numberOfMovies ? "hidden" : ""
        }`}
        onClick={handlePrevious}
      >
        &lt;&lt;
      </span>
      {paginationItemsArray?.map((item) => {
        return (
          <li
            key={item}
            className={`pagination-link ${
              item !== paginationFirstItem &&
              item !== paginationLastItem &&
              item !== currentPage - 1 &&
              item !== currentPage + 1 &&
              item !== currentPage
                ? "hidden"
                : ""
            }`}
          >
            <a
              id={item}
              className={`pagination-anchor ${
                currentPage === item ? "active" : ""
              }`}
              onClick={handleClick}
            >
              {item + 1}
            </a>
          </li>
        );
      })}
      <span
        className={`pagination-next ${
          isLastPage || !numberOfMovies ? "hidden" : ""
        }`}
        onClick={handleNext}
      >
        &gt;&gt;
      </span>
    </ul>
  );
}
export default PaginationLinks;
