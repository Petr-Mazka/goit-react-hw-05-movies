import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import SharedLayout from "./SharedLayout/SharedLayout";
import DetailedMoviePage from "../pages/MovieDetails";
import MovieCast from "../components/Movie/MovieCast";
import MovieReview from "../components/Movie/MovieReview";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<DetailedMoviePage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};
