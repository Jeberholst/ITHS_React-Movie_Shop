import React from 'react';
import {Link} from 'react-router-dom'
import './GenreSlider.css'

const SlideContainer = ({children}) => {
    return(
        <div className="slidecontainer">
            {children}
        </div>
    )
   

}
const Slide = ({img}) => {
    return <div style={{backgroundImage:`url(${img})`}} className="gener__slide"></div>
}

const GenreSlider = ({children,movies}) => {
    return(
        <div className="genre-slider__cont">
            <div className="genre-slider__header">
                <h2><Link to = {`/genre/${children}`}>{children}</Link></h2>
            </div>
            <SlideContainer>{movies.map((movie,i) => <Slide key = {i+12} img = {movie} ></Slide>)}</SlideContainer>
        </div>
      
    )
}

export default GenreSlider