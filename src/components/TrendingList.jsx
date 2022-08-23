import {useState, useEffect} from "react";
import { getTrendingMovies } from "../services/api";
import { MovieList, MovieListItem, MovieListItemLink } from "./TrendingList.styled";

const TrendingList = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getTrendingMovies();
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            } finally {
            }
        }
        fetchData();
    }, []);

    return (
        <MovieList>
            {movies.map(movie => (
                <MovieListItem key={movie.id}><MovieListItemLink to={`/movies/${movie.id}`} >{movie.title}</MovieListItemLink></MovieListItem>
            ))}
        </MovieList>
    );
}

export default TrendingList;