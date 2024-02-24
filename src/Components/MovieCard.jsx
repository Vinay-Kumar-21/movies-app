import React from 'react'

function MovieCard({ title, poster_path, movieObj,
    watchList,
    handleAddToWatchList,
    handleRemoveFromWatchList }) {

    function isContain(movieObj) {
        for (let i = 0; i < watchList.length; i++) {
            if (movieObj.id == watchList[i].id) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="flex flex-col justify-between hover:scale-[0.9] duration-200 justify-center items-end h-80 w-56 rounded-lg overflow-hidden bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
        >
            {isContain(movieObj) ?
                <div onClick={() => handleRemoveFromWatchList(movieObj)} className='text-2xl m-2 py-0.5 rounded cursor-pointer bg-slate-950/50'>&#10060;</div> :
                <div onClick={() => handleAddToWatchList(movieObj)} className='text-2xl m-2 py-0.5 rounded cursor-pointer bg-slate-950/50'>&#128525;</div>
            }

            <div className="text-white py-0.5 bg-slate-950/50 w-full text-center">
                {title}
            </div>
        </div>
    )
}

export default MovieCard
