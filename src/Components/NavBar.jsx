import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div className="flex py-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" alt="clipkart" className="h-10 mx-4"></img>
                <Link to="/" className="text-3xl font-bold text-sky-500	mx-2">Movies</Link>
                <Link to="/watchlist" className='text-3xl font-bold text-sky-500 mx-2'>WatchList</Link>
            </div>
        </>
    )
}