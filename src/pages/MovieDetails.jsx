import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import { DetailsContainer, BackButton, LinkContainer, LinkItemCast, LinkItemReview } from './MovieDetails.styled';

const DetailedMoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();

    const goBack = location.state?.from ?? '/';
    
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data } = await getMovieById(id);
                setMovie(data);
            } catch (error) {
                console.log(error);
            } finally {
            }
        }
        fetchData();
    }, [id]);
    
    return (
        <DetailsContainer>
            <BackButton to={goBack}>Go back</BackButton>
            {movie && <MovieCard movie={movie} />}
            <LinkContainer>
            <LinkItemCast to={`/movies/${id}/cast`}>Cast</LinkItemCast>
            <LinkItemReview to={`/movies/${id}/reviews`}>Reviews</LinkItemReview>
            </LinkContainer>
            <Outlet />
        </DetailsContainer>
    );
}

export default DetailedMoviePage;
