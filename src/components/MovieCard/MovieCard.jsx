import { MovieCardContainer, MovieCardImage, MovieCardContent, MovieCardTitle, MovieCardDescription, MovieCardGenres, MovieCardGenre } from "./MovieCard.styled";

const MovieCard = ({ movie }) => {

    return (
        <MovieCardContainer>
            <MovieCardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <MovieCardContent>
                <MovieCardTitle>{movie.title}</MovieCardTitle>
                <MovieCardDescription>{`User score : ${movie.vote_average}`}</MovieCardDescription>
                <MovieCardDescription>{movie.overview}</MovieCardDescription>
                <MovieCardGenres>{movie.genres && movie.genres.map(genre => <MovieCardGenre key={genre.id}>{genre.name}</MovieCardGenre>)}</MovieCardGenres>
            </MovieCardContent>
        </MovieCardContainer>
    );
}

export default MovieCard;