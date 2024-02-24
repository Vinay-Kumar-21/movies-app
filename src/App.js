import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import WatchList from './Components/WatchList';


function App() {
  const [watchList, setWatchList] = useState([]);
  const [pageNo, setPageNo] = useState(1);


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

  const handleAddToWatchList = (movieObj) => {
    // const newWatchList = [...watchList];
    // newWatchList.push(id);
    const newWatchList = [...watchList, movieObj];
    localStorage.setItem('watchList', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }
  const handleRemoveFromWatchList = (movieObj) => {
    const newWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    })
    localStorage.setItem('watchList', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home
          watchList={watchList}
          setWatchList={setWatchList}
          handleAddToWatchList={handleAddToWatchList}
          handleRemoveFromWatchList={handleRemoveFromWatchList}
          pageNo={pageNo}
          handleNext={handleNext}
          handlePrev={handlePrev} />}>
        </Route>

        <Route path='/watchlist' element={<WatchList
          watchList={watchList}
          handleAddToWatchList={handleAddToWatchList}
          handleRemoveFromWatchList={handleRemoveFromWatchList}
          setWatchList={setWatchList} />}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
