import "./App.css";
import Header from "./components/Header/Header";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import DeleteMovie from "./pages/DeleteMovie";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home.jsx";
import Resources from "./pages/Resources.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
import Credits from "./pages/Credits.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />;
          <Route path="/add" element={<AddMovie />} />;
          <Route path="/edit/:id" element={<EditMovie />} />;
          <Route path="/delete/:id" element={<DeleteMovie />} />;
          <Route path="/resources" element={<Resources />} />;
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
