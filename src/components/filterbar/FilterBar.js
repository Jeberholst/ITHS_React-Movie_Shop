
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchGenreMovies,setGenre} from '../../redux/features/genrePageSlice'
import './FilterBar.css'



 const FilterBar = () => {
    let dispatch = useDispatch()
    const [sliderVal,setSliderVal] = useState("2021")
   
    function setFilter(){
        console.log(sliderVal)
        dispatch(fetchGenreMovies({year:sliderVal, amount: 50})) 
    } 
    
    return (
        <>
        <div className="filterbar_cont">
            <div className="filterbar_slider-cont">
                <input value={sliderVal} type="range" min="1950" max="2021" className="filterbar_slider" onChange={e => setSliderVal(e.target.value) } onTouchEnd={e => setFilter()}/>
                <h3>{sliderVal}</h3>
            </div>

        </div>
        </>
    )
}

export default FilterBar