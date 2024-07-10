import "./PaginationContainer.css";
import PaginationLinks from "./PaginationLinks";
import { useSelector } from "react-redux";

export default function PaginationContainer({
  currentPage,
  setCurrentPage,
  searchText,
  sortText,
  filterText,
}) {
  const moviesLength = useSelector((state) => state.movies.movies.length);

  if (
    moviesLength === 0 ||
    searchText !== "" ||
    sortText !== "" ||
    filterText !== ""
  )
    return;

  return (
    <div className="pagination-container">
      <div className="pagination-inner">
        <PaginationLinks
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
