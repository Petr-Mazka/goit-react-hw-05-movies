import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesQuery } from "../../services/api";
import SearchBar from "../../components/SearchBar";
import MovieQuery from "../../components/MovieQuery";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchWord = searchParams.get('searchWord');

    useEffect(() => {
    if (searchWord) {
      const fetchMovies = async () => {
        try {
          const { data } = await getMoviesQuery(searchWord);
          setMovies(data.results);
        } catch (error) {
        } finally {
        }
      };
      fetchMovies();
    }
    }, [searchWord]);
    
    const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ searchWord: event.target.elements.searchWord.value });
  };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <MovieQuery movies={movies} />
        </div>
    )
}

export default MoviesPage;