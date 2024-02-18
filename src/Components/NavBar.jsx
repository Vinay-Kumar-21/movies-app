import React from "react";

export default function NavBar() {
    return (
        <>
            <div className="flex">
                <img src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" alt="clipkart" className="h-10 mx-4"></img>
                <a href="/" className="text-3xl font-bold text-sky-500	mx-2">Movies</a>
                <a href="/watchList" className='text-3xl font-bold text-sky-500 mx-2'>WatchList</a>
            </div>
        </>
    )
}
