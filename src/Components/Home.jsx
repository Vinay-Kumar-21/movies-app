import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import TrendingMovies from "./TrendingMovies";
import Pagination from "./Pagination";


function Home() {
    return (
        <>

            <NavBar></NavBar>
            <Banner></Banner>
            {/* <TrendingMovies></TrendingMovies>
            <Pagination></Pagination> */}
        </>

    )
}

export default Home;