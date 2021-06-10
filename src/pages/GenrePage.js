import {useParams} from 'react-router-dom'
import Header from '../components/Header.js'
import React, { useEffect, useRef } from 'react'
import { actions, MOVIE_SECTION_SCREENS } from './../redux/features/movieSection';
import { useDispatch, useSelector } from 'react-redux'
import {fetchGenreMovies,setGenre,movieResults} from '../redux/features/genrePageSlice'
import FilterBar from '../components/filterbar/FilterBar'
import { resetFilter } from '../redux/features/filterBarSlice'
import MovieSectionPontus from '../components/fetcher-components/MovieSectionPontus.jsx';
import Loading from '../components/Loading/LoadingIcon.jsx';
import { setError } from '../redux/features/ErrorHandlingSlice.js';
import LoadEhandling from '../components/ErrorHandler/ErrorPopUp.jsx';




const GenrePage = () => {
    const params = useParams()
    let dispatch = useDispatch()
    let id = useRef("")
    let status = useSelector(state => state.genrePage.status)
    let movies = useSelector(movieResults)
    
   
    

    useEffect(() => {
        dispatch(actions.setScreen(MOVIE_SECTION_SCREENS.SLIDER_MOVIES))
        if (params.id !== id.current){
                id.current = params.id.toLowerCase()
                dispatch(resetFilter())
                dispatch( fetchGenreMovies( {genre:params.id.toUpperCase() ,amount: 50}))
        }
      
            dispatch(actions.setMovieList(movies))
        
        
        return () => {
            dispatch(setGenre([]))
        }
    })

    useEffect(() => {
        return () => dispatch(actions.resetMovieList()) 
    },[])

    if(status === "READY"){
        return(  
            <div className="App-Content">
                <Header page={`${id.current}`}>{id.current}</Header>
                <FilterBar currentID = {id} />
                <React.Fragment>
                <MovieSectionPontus/>
                {/* <MovieSection />  */}
                </React.Fragment>
            </div>
        ) 
    } else if (status === "LOADING"){
        return(
            <div className="App-Content">
                <Header page={`${id.current}`}>{id.current}</Header>
                <Loading></Loading>
            </div>
        )
    }else{
        dispatch(setError(true))
        return( 
        <div className="App-Content">
            <Header page={`${id.current}`}>{id.current}</Header>
            <LoadEhandling></LoadEhandling>
        </div>
        )
    }
 
   

}

export default GenrePage