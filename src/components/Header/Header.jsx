import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src="src/assets/icons/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="user-message-container">
          <img src="src/assets/icons/user.png" alt="user" />
          <p>Welcome, Georgios</p>
        </div>
      </nav>
      <div className="heading-container">
        <h3>My Personal Movies Collection</h3>
        <p>
          Here you can collect information, about the favorite movies you have
          seen so far, and manage them in one place!
        </p>
      </div>
    </header>
  );
}
