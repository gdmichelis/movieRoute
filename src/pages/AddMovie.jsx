import { useState } from "react";
import "./AddMovie.css";
import Button from "../components/Button/Button";
import { addMovie } from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    imageURL: "https://placehold.co/280x420?text=Image Not Found",
    imdbRating: "",
    releasedYear: "",
    duration: "",
    systemRated: "",
    genre: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !newMovie.title ||
      !newMovie.imageURL ||
      !newMovie.imdbRating ||
      !newMovie.releasedYear ||
      !newMovie.duration ||
      !newMovie.systemRated ||
      !newMovie.genre
    )
      return alert("Please fill in all the fields!");
    dispatch(addMovie(newMovie));
    navigate("/");
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div className="add-movie-container">
      <h2>Add Movie</h2>
      <div>
        <form
          className="add-movie-form-outer"
          onSubmit={handleSubmit}
          aria-label="Add a new movie"
        >
          <div className="add-movie-form-body">
            <div className="add-movie-input-container">
              <div className="title-box">
                <label htmlFor="title">Title</label>
                <input
                  className="add-movie-input"
                  type="text"
                  id="title"
                  name="title"
                  value={newMovie.title}
                  onChange={handleChange}
                />
              </div>
              <div className="image-box">
                <label htmlFor="image">ImageURL</label>
                <input
                  className="add-movie-input"
                  type="text"
                  id="image"
                  name="imageURL"
                  value={newMovie.imageURL}
                  onChange={handleChange}
                />
              </div>
              <div className="imdb-box">
                <label htmlFor="imdb">IMDB Rating</label>
                <input
                  className="add-movie-input"
                  type="number"
                  id="imdb"
                  name="imdbRating"
                  min="1"
                  max="10"
                  step="0.1"
                  value={newMovie.imdbRating}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr></hr>
            <div className="add-movie-input-container">
              <div className="year-box">
                <label htmlFor="date">Released Year</label>
                <input
                  className="add-movie-input"
                  type="date"
                  id="date"
                  pattern="\d{4}-\d{2}-\d{2}"
                  name="releasedYear"
                  value={newMovie.releasedYear}
                  onChange={handleChange}
                />
              </div>
              <div className="duration-box">
                <label htmlFor="duration">Duration</label>
                <input
                  className="add-movie-input"
                  type="number"
                  id="duration"
                  name="duration"
                  min="1"
                  value={newMovie.duration}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr></hr>
            <div className="add-movie-input-container">
              <div className="rating-box">
                <label htmlFor="rated">Rating</label>
                <input
                  className="add-movie-input"
                  type="text"
                  id="rated"
                  name="systemRated"
                  value={newMovie.systemRated}
                  onChange={handleChange}
                />
              </div>
              <div className="genre-box">
                <label htmlFor="genre">Genre</label>
                <input
                  className="add-movie-input"
                  type="text"
                  id="genre"
                  name="genre"
                  value={newMovie.genre}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* Form footer*/}
          <div className="add-movie-form-footer">
            <Button
              type="button"
              color="#212121"
              bgColor="#fff"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button type="submit" color="#fff" bgColor="#5a4af4">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
