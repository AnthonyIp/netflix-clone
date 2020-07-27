import axios                        from 'axios';
import movieTrailer                 from 'movie-trailer';
import React, {useEffect, useState} from 'react';
import Youtube                      from 'react-youtube';
import './row.scss';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = 'https://image.tmdb.org/t/p/original';

    const fetchData = async () => {
        const request = await axios.get('https://api.themoviedb.org/3' + fetchUrl);
        setMovies(request.data.results);
        return request;
    }

    const opts = {
        height    : '390',
        width     : '100%',
        playerVars: {
            autoplay: 1,
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchUrl])

    const handleTrailer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(err => console.log(err));
        }
    }

    return (
        <div className={`row`}>
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => {
                        return !isLargeRow && (movie.backdrop_path == null || false)
                               ? ''
                               : <img className={`row__poster ${isLargeRow ? "row__posterLarge" : ''}`}
                                      key={movie.id}
                                      src={`${base_url}/${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                                      alt={movie?.title || movie?.name || movie?.original_name}
                                      onClick={() => handleTrailer(movie)}
                                      style={{}}
                               />

                    })
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
};

export default Row;
