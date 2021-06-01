
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchGenreMovies,setGenre} from '../../redux/features/genrePageSlice'
import './FilterBar.css'



 const FilterBar = () => {
    let dispatch = useDispatch()
    return (
        <>
        <div className="filterbar_cont">
            <select name="Year" id="year" className="filter_year">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
            </select>
        </div>
        </>
    )
}

export default FilterBar