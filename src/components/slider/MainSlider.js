import './MainSlider.css';
import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggelSlider,fetchTopMovies, resetSlider} from '../../redux/features/mainSliderSlice'
import { Link } from 'react-router-dom';
import  { actions }  from '../../redux/features/movieSection'




//slidecontainer element
const MainSliderContainer = ({width,children,tran}) =>{
    const sliderStyle = {
        transform: `translateZ(0) translateX(${tran}px)`,
        transition:`transform 0.25s ease-in-out`,
        width:`${width}px`
    }

    return (
    <div style={sliderStyle} className="main-slider__content-container" >
    {children}
    </div>
    )
} 

//slide element 
const Slide = ({movie}) => {
    let dispatch = useDispatch()
    
    function setMovie(film){
        dispatch(actions.setSelectedMovie(movie));
    }

    const posterBaseUrl = "https://image.tmdb.org/t/p/w500/"
    return (
        <Link onClick={() => setMovie(movie)} to={`/movie/${movie.id}`} style={{backgroundImage:`url(${posterBaseUrl}${movie.backdropPath})`}} className="mainslider__slide">
        </Link>
     
    )
}


const MainSlider = () => {
    let dispatch = useDispatch()
    //keep track of slide for navigation dots.
    let currentSlide = useRef(0)
    //reset slider.
    function reset(){
        currentSlide.current = 0;
        dispatch(resetSlider())
    } 
    


    useEffect(()=> {
        dispatch(fetchTopMovies())
        return () =>  reset()
    },[])

    let movieList = useSelector(state => state.mainslider.slides)

    const left = "LEFT",
          right ="RIGHT"
    


    //get full width of slider.
    const getWidth = () => {
        return window.innerWidth * movieList.length
    }
    //sets current slide and calls reducer for state handeling. 
    const navigateSlider = (direction) => {
        if(direction === left && currentSlide.current>0){
            currentSlide.current--
            dispatch(toggelSlider(direction))
            
        }else if (direction === right && currentSlide.current < movieList.length -1){
            currentSlide.current++
            dispatch(toggelSlider(direction))
        }else{
            return
        }
    }

    var translate = useSelector( (state) =>  state.mainslider.translateX)
    return(
        <div className="main-slider__container">
        <div onClick={() => navigateSlider(left)} className="arrow-box-left"><i className="arrow left"></i></div>
        <div onClick={() => navigateSlider(right)} className="arrow-box-right"><i className="arrow right"></i></div>
        {/*container with width = 100vw * num of slides */}
            <MainSliderContainer width={getWidth()} tran={translate}>
                {!movieList.length? null : movieList.map((movie,i) => ( <Slide key={`${i}${movie.id}`} movie={movie} /> ))}
            </MainSliderContainer>
            <div className="main-slider__dot-indicator-container">
                {!movieList.length? null : movieList.map((movie,i) => <div key={`dot:${i}`} className={`dots ${i === currentSlide.current ? "white" : "" }`}></div> )}
            </div>

        </div>
    )

}





export default MainSlider;
