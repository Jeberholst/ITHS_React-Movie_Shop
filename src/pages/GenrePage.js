import {useParams} from 'react-router-dom'
import Header from '../components/Header.js'
import React, { useEffect, useRef } from 'react'

import MovieSection from '../components/fetcher-components/MovieSection.jsx'
import { actions, MOVIE_SECTION_SCREENS } from './../redux/features/movieSection';
import { useDispatch, useSelector } from 'react-redux'
import {fetchGenreMovies,setGenre,movieResults} from '../redux/features/genrePageSlice'
import FilterBar from '../components/filterbar/FilterBar'
import { resetFilter } from '../redux/features/filterBarSlice'




const GenrePage = () => {
    const params = useParams()
    let dispatch = useDispatch()
    let id = useRef("")
    let ready = useSelector(state => state.genrePage.ready)
    let movies = useSelector(movieResults)
    
   
    
     
    useEffect(() => {
        dispatch(actions.setScreen(MOVIE_SECTION_SCREENS.GRID_MOVIES))
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

    console.log("RERENDEr")
    return(  
        <div className="App-Content">
           
            
            <Header page={`${id.current}`}>{id.current}</Header>
            <FilterBar currentID = {id} />
            {ready?
            <>
            <MovieSection /> 
            </>
            :
            <h1>LOADING</h1>
            }
        </div>
    ) 

}

export default GenrePage