import "./EditMovie.css";
import Button from "../components/Button/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editMovie } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function EditMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const [updatedMovie, setUpdatedMovie] = useState({
    title: "",
    imageURL: "",
    imdbRating: "",
    releasedYear: "",
    duration: "",
    systemRated: "",
    genre: "",
  });

  useEffect(
    function () {
      const selectedMovie = movies.find((m) => m.id === Number(id));
      if (selectedMovie) {
        setUpdatedMovie(selectedMovie);
      }
    },
    [id, movies]
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatedMovie({ ...updatedMovie, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !updatedMovie.title ||
      !updatedMovie.imageURL ||
      !updatedMovie.imdbRating ||
      !updatedMovie.releasedYear ||
      !updatedMovie.duration ||
      !updatedMovie.systemRated ||
      !updatedMovie.genre
    )
      return alert("Please fill in all the fields!");
    dispatch(editMovie({ id, updatedMovie }));
    navigate("/");
  }

  function handleCancel() {
    navigate("/");
  }
  return (
    <div className="edit-movie-container" onSubmit={handleSubmit}>
      <h2>Edit Selected Movie</h2>
      <div>
        <form
          className="edit-movie-form-outer"
          aria-label="Edit the selected movies"
        >
          <div className="edit-movie-form-body">
            <div className="edit-movie-input-container">
              <div className="title-box">
                <label htmlFor="title">Title</label>
                <input
                  className="edit-movie-input"
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleChange}
                  value={updatedMovie.title}
                />
              </div>
              <div className="image-box">
                <label htmlFor="image">ImageURL</label>
                <input
                  className="edit-movie-input"
                  type="text"
                  id="image"
                  name="imageURL"
                  onChange={handleChange}
                  value={updatedMovie.imageURL}
                />
              </div>
              <div className="imdb-box">
                <label htmlFor="imdb">IMDB Rating</label>
                <input
                  className="edit-movie-input"
                  type="number"
                  id="imdb"
                  name="imdbRating"
                  onChange={handleChange}
                  value={updatedMovie.imdbRating}
                />
              </div>
            </div>
            <hr></hr>
            <div className="edit-movie-input-container">
              <div className="year-box">
                <label htmlFor="date">Released Year</label>
                <input
                  className="edit-movie-input"
                  type="text"
                  id="date"
                  name="releasedYear"
                  onChange={handleChange}
                  value={updatedMovie.releasedYear}
                />
              </div>
              <div className="duration-box">
                <label htmlFor="duration">Duration</label>
                <input
                  className="edit-movie-input"
                  type="number"
                  id="duration"
                  name="duration"
                  onChange={handleChange}
                  value={updatedMovie.duration}
                />
              </div>
            </div>
            <hr></hr>
            <div className="edit-movie-input-container">
              <div className="rating-box">
                <label htmlFor="rated">Rating</label>
                <input
                  className="edit-movie-input"
                  type="text"
                  id="rated"
                  name="systemRated"
                  onChange={handleChange}
                  value={updatedMovie.systemRated}
                />
              </div>
              <div className="genre-box">
                <label htmlFor="genre">Genre</label>
                <input
                  className="edit-movie-input"
                  type="text"
                  id="genre"
                  name="genre"
                  onChange={handleChange}
                  value={updatedMovie.genre}
                />
              </div>
            </div>
          </div>
          {/* Form footer*/}
          <div className="edit-movie-form-footer">
            <Button color="#212121" bgColor="#fff" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" color="#fff" bgColor="#0d6efd">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
