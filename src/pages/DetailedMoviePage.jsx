import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../services/api';

const DetailedMoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getMovieById(id);
                setMovie(data);
            } catch (error) {
                console.log(error);
            } finally {
            }
        }
        fetchData();
    } , [id]);
    return (
        <div>
            <h1>{movie.title}</h1>
            <img scr={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="card"/>
            <p>{movie.overview}</p>
            <Outlet />
        </div>
    );
}

export default DetailedMoviePage;