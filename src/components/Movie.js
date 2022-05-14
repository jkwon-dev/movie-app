import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 

function Movie({coverImage, title, summary, genres}) {
    return (
        <div>
                  <img src={coverImage} alt={title} />
                  <h2>
                      <Link to="/movie">{title}</Link>
                    </h2>
                  <p>{summary}</p>
                  <ul> {genres &&  
                   genres.map((g)=> <li key={g}>{g}</li>)}
                   </ul>
                  </div>
                  )}

export default Movie; 

Movie.prototype = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, 
}