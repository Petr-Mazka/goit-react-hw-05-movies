import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import HomePage from "../pages/HomePage/HomePage";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
import SharedLayout from "./SharedLayout/SharedLayout";
// import DetailedMoviePage from "../pages/MovieDetails";
// import MovieCast from "../components/Movie/MovieCast";
// import MovieReview from "../components/Movie/MovieReview";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const DetailedMoviePage = lazy(() => import("../pages/MovieDetails"));
const MovieCast = lazy(() => import("../components/Movie/MovieCast"));
const MovieReview = lazy(() => import("../components/Movie/MovieReview"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
