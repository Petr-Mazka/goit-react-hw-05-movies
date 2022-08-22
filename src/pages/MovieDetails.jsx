import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../services/api';
import MovieCard from 'components/MovieCard/MovieCard';

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
            {movie && <MovieCard movie={movie} />}
            <Outlet />
        </div>
    );
}

export default DetailedMoviePage;