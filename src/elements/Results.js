import { useState, useEffect } from "react";
import axios from 'axios';
import {useSearchParams, Link} from "react-router-dom";
import sweetAlert from 'sweetalert2';



function Results (props) {
    const apiKey = "fca49abe981340566a30ab32d23b37ed";

    let [searchParams] = useSearchParams();
    let keyword = searchParams.get("keyword");

    

    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
      const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`;
        axios.get(endpoint)
        .then(result => {
            
            let resultData = result.data.results;
            if(resultData.length === 0 ){
              sweetAlert.fire({
                title: 'Error',
                        text: 'No se econtraron resultados',
                        icon: 'missing',
                        confirmButtonText: 'Ok'
              })
            }
            setSearchResult(resultData)
        })
        .catch( () =>{sweetAlert.fire({
            title: 'Error',
                    text: 'Ha ocurrido un error, intenta mas tarde',
                    icon: 'missing',
                    confirmButtonText: 'Ok'
          })})
    },
    [keyword]
    )

    console.log(searchResult)
   

    return(
      <div className="row">{searchResult.length === 0 && <p>No hay resultados</p>}
    {searchResult.map((movie, index)=>{
        return(<div className="col-3" key={index}>
        <div className="card my-4">
          {movie.backdrop_path !== null? <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..."/>: <img src="https://cdn.onlinewebfonts.com/svg/img_98811.png" className="card-img-top" alt="..."/> }
          <button 
    movie-id={movie.id}
    onClick={props.addOrRemoveFromFavorites}
    className="heart-shape"/>
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview.substring(0, 60)}. . .</p>
            <Link to={`/detail?ID=${movie.id}`} className="btn btn-primary"> Detail </Link>
          </div>
        
        </div>
        </div>)
        

    })}</div>)
    
}

export default Results