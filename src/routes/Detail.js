import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import Movie from '../components/Movie';


function Detail() {
  const [movie, setMovie] = useState([]); 

    const { id } = useParams();
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json(); 
        console.log(json); 
        setMovie(json.data.movie); 
    };

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <Movie 
        id={movie.id}
        coverImage={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
        />
    )
}

export default Detail; 