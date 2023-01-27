import { useState, useEffect } from "react";
import {useSearchParams, Navigate} from "react-router-dom";
import axios from 'axios';
import sweetAlert from 'sweetalert2';




function Detail () {
    let token = sessionStorage.getItem('token'); 

    const [movieDetail, setMovieDetail] = useState([]);

    //obtain id from query
    // let query = new URLSearchParams(window.location.search)
    // query.get("ID")

    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("ID"));

    const movieId = searchParams.get("ID");

    const apiKey = "fca49abe981340566a30ab32d23b37ed";
    useEffect(()=>{axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(movie => {
        let movieData = movie.data;
        setMovieDetail(movieData)
    })
    .catch(e=>{sweetAlert.fire({
        title: 'Error',
                text: 'Ha ocurrido un error, intenta mas tarde',
                icon: 'missing',
                confirmButtonText: 'Ok'
      })})}, setMovieDetail)
    

      console.log(movieDetail)

    return(
        <>{!token &&  <Navigate to={'/login'} replace={true}/>}
        <div className="container">
            <section className="member-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="img-container">
                                <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} alt="team member" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="member_designation">
                                <h2>{}</h2>
                                <span>{movieDetail.title}</span>
                            </div>
                            <div className="member_desc">
                                <p>
                                    {movieDetail.overview}
                                </p>
                                </div>

                                <ul>
                                    <span>Genres</span>
                                   
                                </ul>
                                </div>
                                </div>
                                </div>
                                </section>
                                </div>
                                </>
    )
}

export default Detail 