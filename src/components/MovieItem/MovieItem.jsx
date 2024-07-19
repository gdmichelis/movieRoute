import "./MovieItem.css";
import Pencil from "../../assets/pencil.svg";
import Trash from "../../assets/trash.svg";
import { Link } from "react-router-dom";

export default function MovieItem({
  id,
  title,
  imageURL,
  imdbRating,
  releasedYear,
  duration,
  systemRated,
  genre,
}) {
  return (
    <div className="movie-item">
      <Link className="movie-details-link" to={`/movie-details/${id}`}>
        <div className="movie-img-container">
          <img src={imageURL} alt={title}></img>
        </div>
        <div className="title-container">
          <h3>{title}</h3>
        </div>
        <div className="imdb-container">
          <span>{`IMDB: ${imdbRating} / 10`}</span>
          <span>{`Year: ${releasedYear}`}</span>
        </div>
        <div className="duration-container">
          <span>{`Duration: ${duration} min`}</span>
          <span>{`Rated: ${systemRated}`}</span>
        </div>
        <div className="genre-container">
          <span>{`Genre: ${genre}`}</span>
        </div>
      </Link>
      <div className="buttons">
        <Link to={`edit/${id}`}>
          <button type="button">
            <img src={Pencil} alt="edit" />
          </button>
        </Link>
        <Link to={`delete/${id}`}>
          <button type="button">
            <img src={Trash} alt="delete" />
          </button>
        </Link>
      </div>
    </div>
  );
}
