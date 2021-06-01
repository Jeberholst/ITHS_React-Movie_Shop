import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './GenreSlider.css'
import { useSelector, useDispatch } from 'react-redux'
import {swipeGenre,addSlider,fetchGenerSlides} from '../../redux/features/genreSliderSlice'
import  { actions }  from '../../redux/features/movieSection'

const SlideContainer = ({children,width,translate,id}) => {
    
    let dispatch = useDispatch()
    let clientX = null 
    
    function handelSwipe(endPosX){
        
        if(clientX < endPosX){
            //swipe right
            if(translate<0 && translate + (endPosX - clientX) * 2 < 0){
                
                dispatch(swipeGenre( {translateX:(endPosX - clientX)*2,id:id}))
            }else{
              dispatch(swipeGenre( {translateX:(translate * -1) + (-3),id:id} )  )
            
            }
            
        }
        else{
            let maxRigth = width - window.innerWidth;
          
            //swipe left
              if(translate + (endPosX - clientX) * 2 > (-maxRigth) ){
                dispatch(swipeGenre( {translateX:(endPosX - clientX)*2,id:id}))
            }else{
                //set to start pos when swipe is bigger than whats left of swipe.
                if(translate<maxRigth){
                    dispatch(swipeGenre({translateX:(maxRigth + translate) * -1,id:id}))
                }else{
                    return
                }
                
            }
        }
            
        
    
    }
    const sliderStyle = {
        transform: `translateZ(0) translateX(${translate}px)`,
        transition:`transform 0.25s ease-in-out`,
        width:` ${width}px`
    }

    return(
        <div  onTouchStart = { (e) => clientX = e.targetTouches[0].clientX } onTouchEnd = {(e) => handelSwipe(e.changedTouches[0].clientX)} style={sliderStyle} className="slidecontainer">
            {children}
        </div>
    )
   

}

const Slide = ({movie}) => {
    let dispatch = useDispatch()
    const posterBaseUrl = "https://image.tmdb.org/t/p/w300/"
    
    return <Link to={`/movie/${movie.id}`} onClick={() => dispatch(actions.setSelectedMovie(movie))}  style={{backgroundImage:`url(${posterBaseUrl+movie.posterPath})`}} className="gener__slide"></Link>
}


const GenreSlider = ({children,movies,id}) => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGenerSlides({genere:id,amount:10}))
    },[])

    //add slider for controll over slideffect.
    dispatch(addSlider(id))
 

    let slider = useSelector( (state) => { return state.genreSlider.sliders.find( obj => obj.slider === id )}  )

    return(
        <div className="genre-slider__cont">
            <div className="genre-slider__header">
                <h2><Link to = {`/genre/${children}`}>{children}</Link></h2>
            </div>
           {!slider.movieList.length? null : <SlideContainer id ={id} translate = {slider.translateX} width = {(window.innerWidth * 0.3 + 14) * slider.movieList.length} >{slider.movieList.map((movie,i) => <Slide key = {i+12} movie = {movie} ></Slide>)}</SlideContainer>} 
        </div>
      
    )
}

export default GenreSlider