import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import SharedLayout from "./SharedLayout/SharedLayout";
import DetailedMoviePage from "../pages/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<DetailedMoviePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};
