import { useEffect, useState } from "react";

const GENRE_NAME = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

export default function WatchList({ watchList, handleRemoveFromWatchList, setWatchList }) {
    const [genreList, setGenreList] = useState(["All Genres"])
    const [search, setSearch] = useState("");
    const [filList, setFilLest] = useState([]);

    function handleIncrease() {
        const sorted = filList.sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
        setWatchList([...sorted])
    }
    function handleDecrease() {
        const sorted = filList.sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
        setWatchList([...sorted])
    }
    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleGenreClick(genre) {
        if (genre === "All Genres") {
            setFilLest([...watchList]);
        } else {
            const tmpArray = watchList.filter((gen) => {
                if (genre === GENRE_NAME[gen.genre_ids[0]]) {
                    return true;
                }
            })
            setFilLest([...tmpArray]);
        }

    }

    useEffect(() => {
        setFilLest([...watchList]);
    }, [])

    useEffect(() => {
        let tmp = watchList.map((movieObj) => GENRE_NAME[movieObj.genre_ids[0]])
        tmp = new Set(tmp);
        setGenreList(["All Genres", ...tmp]);
    }, [filList])



    return (
        <>
            <div className="flex justify-center space-x-2">
                {genreList.map((genre) => {
                    return <div className="py-1 px-2 bg-gray-400 h-[3rem] w-[12rem] hover:bg-blue-400
                    rounded-xl text-white flex justify-center items-center 
                    font-bold " onClick={() => handleGenreClick(genre)} key={genre}>{genre}</div>
                })}
            </div>


            <div onChange={handleSearch} value={search} className="flex justify-center my-4">
                <input className="h-[3rem] w-[18rem] bg-gray-200
                 outline-none px-4 text-lg " placeholder="Search movies"
                    type="text" />
            </div>

            <div className="m-7 overflow-hidden rounded-lg border shadow-md">
                <table className="p-4 w-full text-center">
                    <thead className="h-[3rem] bg-gray-50 border-b-2">
                        <tr>
                            <th>Name</th>
                            <th className="flex">
                                <div onClick={handleIncrease} className="p-2 cursor-pointer"><i className="fa-solid fa-up-long"></i></div>
                                <div className="p-2"> Ratings</div>
                                <div onClick={handleDecrease} className="p-2 cursor-pointer"><i className="fa-solid fa-down-long"></i></div>
                            </th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th className="text-red-500">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filList.filter((movieObj) => {
                            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());
                        })
                            .map((movieObj) => {
                                return <tr className=" border-b-2">
                                    <td className="flex items-center mx-4 py-4"> <img className="h-[6rem] w-[10rem]"
                                        src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path} alt="" />
                                        <div className="mx-4">{movieObj.title}</div>
                                    </td>
                                    <td >{movieObj.vote_average}</td>
                                    <td>{movieObj.popularity}</td>
                                    <td>{GENRE_NAME[movieObj.genre_ids[0]]}</td>
                                    <td onClick={() => handleRemoveFromWatchList(movieObj)}
                                        className=" text-red-500 cursor-pointer">
                                        <i className="fa-solid fa-trash"></i>
                                    </td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}