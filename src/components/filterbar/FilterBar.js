
import React, {  useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchGenreMovies,setGenre} from '../../redux/features/genrePageSlice'
import { setYear, setSort, setVoteAvg } from '../../redux/features/filterBarSlice'
import './FilterBar.css'



 const FilterBar = () => {
    let dispatch = useDispatch()
    const year = useSelector(state => state.filterBar.year)
    const sorting = useSelector(state => state.filterBar.sortBy)
    const params = useParams()
   
    function setFilter(){
        console.log(sorting)
        dispatch(fetchGenreMovies({genre:params.id.toUpperCase(), year:year,sorted:sorting, amount: 50})) 
    } 
     function updateSorting(val){
        dispatch(fetchGenreMovies({genre:params.id.toUpperCase(), year:year,sorted:val, amount: 50})) 
        dispatch(setSort(val))
    }

  
    
    return (
        <>
        <div className="filterbar_cont">
            <div className="filterbar_slider-cont">
                <input value={year} type="range" min="1950" max="2021" className="filterbar_slider" onChange={e => dispatch(setYear(e.target.value)) } onTouchEnd={e => setFilter()}/>
                <h3>{year}</h3>
            </div>
            <div className="filterbar_sort-cont">
                <select name="sort" id="sort" onChange={e => updateSorting(e.target.value)} value={sorting}>
                    <option value="original_title.asc">A-Z</option>
                    <option value="original_title.desc">Z-A</option>
                    <option value="popularity.desc">Popularity</option>
                </select>
            </div>

        </div>
        </>
    )
}

export default FilterBar