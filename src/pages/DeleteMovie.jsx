import "./DeleteMovie.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteMovie } from "../features/movies/movieSlice";

export default function DeleteMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(
    function () {
      const confirmMsg = window.confirm(
        "Are you sure you want to delete this movie?"
      );

      if (!confirmMsg) {
        return navigate("/");
      }
      dispatch(deleteMovie(id));
      navigate("/");
    },
    [id, dispatch, navigate]
  );

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}
