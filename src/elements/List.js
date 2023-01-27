import { Link, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import sweetAlert from 'sweetalert2';



function List() {


  const [moviesList, setMoviesList] = useState([]);
  
  let token = sessionStorage.getItem('token'); 



  useEffect(()=>{
    const apiKey = "fca49abe981340566a30ab32d23b37ed";
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
    axios.get(endpoint)
    .then(res=>{ 
      let apiData = res.data
      setMoviesList(apiData.results)
    })
    .catch(e => {
      sweetAlert.fire({
        title: 'Error',
                text: 'Ha ocurrido un error, intenta mas tarde',
                icon: 'missing',
                confirmButtonText: 'Ok'
      })
    })
  }, [setMoviesList]);

  console.log(moviesList)
  
  return (
      <>
     
      {!token &&  <Navigate to={'/login'} replace={true}/>}
    
<div className="row">

{moviesList.map((movie, index)=> {
  return(
    <div className="col-3" key={index}>
  <div className="card my-4">
    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..."/>
    <button className="favorite-btn"> 🖤 </button>
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text">{movie.overview.substring(0, 60)}. . .</p>
      <Link to={`/detail?ID=${movie.id}`} className="btn btn-primary"> Detail </Link>
    </div>
  
  </div>
  </div>
  )
})}




</div>
</>
    )
}


// https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id"} className="btn btn-primary"
export default List 