import "./Footer.css";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyright-container">
        <p>&copy; MovieRoute {year} , All Rights Reserved.</p>
      </div>
      <div className="icons-right-container">
        <Link to="/credits">
          <p>Credits</p>
        </Link>
        <Link to="/resources">
          <p>Icons</p>
        </Link>
      </div>
    </footer>
  );
}
