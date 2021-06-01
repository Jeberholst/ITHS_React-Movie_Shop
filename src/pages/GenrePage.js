import {useParams} from 'react-router-dom'
import Header from '../components/Header.js'
import React, { useEffect, useRef } from 'react'

import MovieSection from '../components/fetcher-components/MovieSection.jsx'
import { actions, MOVIE_SECTION_SCREENS } from './../redux/features/movieSection';
import { useDispatch, useSelector } from 'react-redux'
import {fetchGenreMovies,setGenre} from '../redux/features/genrePageSlice'
import FilterBar from '../components/filterbar/FilterBar'



const GenrePage = () => {
    const params = useParams()
    let dispatch = useDispatch()
    let id = useRef("")
    let results = useSelector(state => state.genrePage.result)
   
    
     
    useEffect(() => {
        
        if (params.id !== id.current){
                id.current = params.id.toLowerCase()
                dispatch( fetchGenreMovies( {genre:params.id.toUpperCase() ,amount: 50}))
        }
        return () => dispatch(setGenre([]))
    })
    console.log(results)
    console.log("RERENDEr")
    return(  
        <div className="App-Content">
            {!results.length? null :
            <>
            <Header page={`${id.current}`}>{id.current}</Header> 
            <FilterBar/>
            <MovieSection {...{RESULT: results}}/> 
            </>
            }
        </div>
    ) 

}

export default GenrePage