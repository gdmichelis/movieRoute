import { Link } from "react-router-dom";
import "./Credits.css";

export default function Credits() {
  return (
    <div className="tmdb-container">
      <div className="tmdb-logo-credits-header-container">
        <h2>Credits</h2>
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>

      <div className="tmdb-logo-credits-container">
        <span>
          I would like to thank "The Movie Database" team for it's kindness to
          let me use their incredible API. Please check out their website!
        </span>
        <Link to="https://www.themoviedb.org" target="_blank">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB Logo"
          />
        </Link>
      </div>
    </div>
  );
}
