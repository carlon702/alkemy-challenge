import { Routes, Route } from 'react-router-dom';

import Login from "./elements/Login"
import List from "./elements/List"
import Header from "./elements/Header"
import Footer from "./elements/Footer"
import Detail from "./elements/Detail"
import Results from "./elements/Results"

import "./css/app.css"
import "./css/bootstrap.min.css"


function App() {
  
  const addOrRemoveFromFavorites = e => {
    const favMovies = localStorage.getItem('favs');

    let tempMoviesFavs;


    if (favMovies === null) {
      tempMoviesFavs = []
    } else {
      tempMoviesFavs = JSON.parse(favMovies)
    }

   const parentElement = e.currentTarget.parentElement;
   const img = parentElement.querySelector('img').getAttribute('src');
   const title = parentElement.querySelector('h5').innerText;
   const overview = parentElement.querySelector('p').innerText;
   const movieId = parentElement.querySelector('button').getAttribute('movie-id');
  
   const favoritedMovie = { id: movieId, img, title, overview};

   let movieIsAlreadyFavorite = tempMoviesFavs.find(movie => movie.id === favoritedMovie.id)

   if (!movieIsAlreadyFavorite) {

    tempMoviesFavs.push(favoritedMovie);
    localStorage.setItem('favs', JSON.stringify(tempMoviesFavs))
    console.log(localStorage)

   } else {
    let remainingMovies = tempMoviesFavs.filter(movie => movie.id !== favoritedMovie.id)
    tempMoviesFavs.push(remainingMovies);
    localStorage.setItem('favs', JSON.stringify(remainingMovies))
    console.log(localStorage)
   }

 
   

   
  }

  


  return(
  <>
  <Header/>
  <div className='container mt-3'>
  <Routes>
   

    <Route id='login' path='/login' element={<Login/>} />

    <Route id='list' path="/list" element={<List addOrRemoveFromFavorites={addOrRemoveFromFavorites} />} />

    <Route id='detail' path='/detail' element={<Detail/>} />

    <Route id='results' path='/results' element={<Results addOrRemoveFromFavorites={addOrRemoveFromFavorites} />} />
  </Routes>
  </div>
  <Footer/>
   

  </>
  );
}

export default App;
