import {Link} from "react-router-dom"

export const Movie = ({movie}) => (
  <div>
    
    <div>
        <img src={`${movie.image_url}`} alt=""/>
    </div>

    <div className="movie-excerpt">
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`} className="btn btn-primary">Ver Detalhes</Link>
    </div>

  </div>
);
