import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks for API Calls
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (paginationData) => {
    const { currentPage, MOVIES_PER_PAGE } = paginationData;
    const response = await fetch(
      `http://localhost:5000/movies?_page=${
        currentPage + 1
      }&_limit=${MOVIES_PER_PAGE}`
    );
    const data = await response.json();
    const numberOfPagesBeforePagination = Number(
      response.headers.get("X-Total-Count")
    );
    return { data, numberOfPagesBeforePagination };
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovie) => {
    const response = await fetch("http://localhost:5000/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    });
    const data = response.json();
    return data;
  }
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ id, updatedMovie }) => {
    const response = await fetch(`http://localhost:5000/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id) => {
    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const searchedMovie = createAsyncThunk(
  "movies/searchMovie",
  async (searchText) => {
    const response = await fetch(
      `http://localhost:5000/movies?q=${searchText}`
    );

    const data = await response.json();
    return data;
  }
);

export const sortedMovie = createAsyncThunk(
  "movies/sortMovie",
  // Payload creator accepts only ONE argument
  async (sortData) => {
    const { sortText: sortValue, order: orderValue } = sortData;
    const response = await fetch(
      `http://localhost:5000/movies?_sort=${sortValue}&_order=${orderValue}`
    );
    const data = response.json();
    return data;
  }
);

export const filteredMovie = createAsyncThunk(
  "movies/filterMovie",
  async (filterText) => {
    const response = await fetch(
      `http://localhost:5000/movies?genre_like=${filterText}`
    );
    const data = response.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    pagesCount: 0,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.pagesCount = action.payload.numberOfPagesBeforePagination;
      })

      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.unshift(action.payload);
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex((m) => m.id === action.payload.id);
        state.movies[index] = action.payload;
      })

      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((m) => m.id !== action.payload);
      })

      .addCase(searchedMovie.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(sortedMovie.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(filteredMovie.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export default movieSlice.reducer;
