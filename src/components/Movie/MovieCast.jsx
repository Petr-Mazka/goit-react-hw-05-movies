import { getMoviesCast } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CastPart from "./CastPart";

const MovieCast = () => {
    const { id } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const fetchData = async id => {
            try {
                const { data } = await getMoviesCast(id);
                setCasts(data.cast);
            } catch (error) {
                console.log(error);
            } finally {
            }
        }
        fetchData(id);
    }, [id]);

    return (
        <div>
            {casts.length !== 0 ? <CastPart casts={casts} /> : <p>Loading...</p>}
        </div>
    )
}

export default MovieCast;