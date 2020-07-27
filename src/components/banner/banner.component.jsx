import axios                        from 'axios';
import React, {useEffect, useState} from 'react';
import Requests                     from '../../services/requestsApi';
import './banner.scss';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    const fetchData = async () => {
        const request = await axios.get('https://api.themoviedb.org/3' + Requests.fetchNetflixOriginal);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        return request;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n - 1) + '...' : str;
    }

    return (
        <header className="banner" style={{
            background : `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}") center center / cover no-repeat `,
            // backgroundSize    : 'cover',
            // background   : `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            // backgroundPosition: 'center center'
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className={`banner__description`}>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
};

export default Banner;
