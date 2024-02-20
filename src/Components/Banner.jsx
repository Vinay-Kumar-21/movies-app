import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {

    const [movieObj, setMovieObj] = useState({});

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b96471c489fa528e5b4d6882d93e4312')
            .then(function (response) {
                // handle success
                let movies = response.data.results;
                //console.log(movies);
                let randomMovie = movies[Math.floor(Math.random() * 20)];
                //console.log(randomMovie);
                setMovieObj(randomMovie);
            })
    }, [])


    if (movieObj.backdrop_path === undefined) {
        return <>
            .....Loading
        </>
    }
    return (
        <div className=" h-[40vh] md:h-[60vh]
        bg-center bg-cover
        flex items-end  "
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})` }}
        >
            <div className="text-white py-1 bg-slate-950/50 w-full text-center">
                {movieObj.title}
            </div>
        </ div >
    )
}

export default Banner;