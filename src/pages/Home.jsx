import { useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import PaginationContainer from "../components/Pagination/PaginationContainer";

const MOVIES_PER_PAGE = 4;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [sortText, setSortText] = useState("");
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <MoviesList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filterText={filterText}
        setFilterText={setFilterText}
        sortText={sortText}
        setSortText={setSortText}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <PaginationContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchText={searchText}
        filterText={filterText}
        sortText={sortText}
      />
    </>
  );
}

export { MOVIES_PER_PAGE };
