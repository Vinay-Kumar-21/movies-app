import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";

function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [watchList, setWatchList] = useState([]);

    const handleAddToWatchList = (id) => {
        const newWatchList = [...watchList];
        newWatchList.push(id);
        localStorage.setItem('watchList', JSON.stringify(newWatchList));
        setWatchList(newWatchList);
    }
    const handleRemoveFromWatchList = (id) => {
        const newWatchList = watchList.filter((movieId) => {
            return id !== movieId;
        })
        localStorage.setItem('watchList', JSON.stringify(newWatchList));
        setWatchList(newWatchList);
    }

    const handleNext = function () {
        setPageNo(pageNo + 1);
    }

    const handlePrev = function () {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }

    }
    useEffect(() => {
        let watchListFromLocalStorage = JSON.parse(localStorage.getItem('watchList'));
        setWatchList(watchListFromLocalStorage);
    }, [])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=b96471c489fa528e5b4d6882d93e4312&page=${pageNo}`)
            .then(function (response) {
                setMovies(response.data.results)

            })
    }, [pageNo])

    if (movies.length === 0) {
        return <>...Loading</>
    }
    return (
        <>
            <div className="text-center text-2xl font-bold m-4">Trending Movies</div>
            <div className="mx-2 flex flex-wrap justify-around gap-4">
                {
                    movies.map((movieObj) => {
                        return <MovieCard
                            key={movieObj.id}
                            id={movieObj.id}
                            title={movieObj.title}
                            poster_path={movieObj.poster_path}
                            watchList={watchList}
                            handleAddToWatchList={handleAddToWatchList}
                            handleRemoveFromWatchList={handleRemoveFromWatchList} />
                    })
                }
            </div>
            <Pagination pageNo={pageNo}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </>

    )
}

export default TrendingMovies;