import {useState, useEffect} from "react";
import { getTrendingMovies } from "../services/api";
import { Link } from "react-router-dom";

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
        <ul>
            {movies.map(movie => (
                <li key={movie.id}><Link to={`/movies/${movie.id}`} >{movie.title}</Link></li>
            ))}
        </ul>
    );
}

export default TrendingList;