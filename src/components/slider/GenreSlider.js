import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './GenreSlider.css'
import { useSelector, useDispatch } from 'react-redux'
import {swipeGenre,addSlider,fetchGenerSlides, setWidth} from '../../redux/features/genreSliderSlice'
import  { actions }  from '../../redux/features/movieSection'
import { SlideshowTwoTone } from '@material-ui/icons';

const SlideContainer = ({children,width,translate,id}) => {
    
    let dispatch = useDispatch()
    let clientX = null 
    
    function handelSwipe(endPosX){
        if (clientX - endPosX > 30 || clientX - endPosX < -30){
            if(clientX < endPosX){
                //swipe right
                if(translate<0 && translate + (endPosX - clientX) * 4 < 0){
                    
                    dispatch(swipeGenre( {translateX:(endPosX - clientX)*4,id:id}))
                }else{
                  dispatch(swipeGenre( {translateX:(translate * -1) + (10),id:id} )  )
                
                }
                
            }
            else{
                let maxRigth = width - window.innerWidth;
              
                //swipe left
                  if(translate + (endPosX - clientX) * 4 > (-maxRigth) ){
                    dispatch(swipeGenre( {translateX:(endPosX - clientX)*4,id:id}))
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
 
            
        
    
    }
    const sliderStyle = {
        transform: `translateZ(0) translateX(${translate}px)`,
        transition:`transform 0.25s ease-in-out`,
        width:` ${width}px`
    }

    return(
        <div   onMouseDown = {e => clientX = e.clientX} onMouseUp = {e => handelSwipe(e.clientX)} onTouchStart = { (e) => clientX = e.targetTouches[0].clientX } onTouchEnd = {(e) => handelSwipe(e.changedTouches[0].clientX)} style={sliderStyle} className="slidecontainer">
            {children}
        </div>
    )
   

}

const Slide = ({movie}) => {
    let dispatch = useDispatch()
    const posterBaseUrl = "https://image.tmdb.org/t/p/w300/"
    
    return <Link to={`/movie/${movie.id}`} onClick={() => dispatch(actions.setSelectedMovie(movie))}  style={{backgroundImage:`url(${posterBaseUrl+movie.poster_path})`}} className="gener__slide"></Link>
}


const GenreSlider = ({children,movies,id}) => {
    let dispatch = useDispatch()
    //add slider for controll over slideffect.

    var resizeId
    function setW(){
        clearTimeout(resizeId)
        resizeId = setTimeout( () => dispatch(setWidth({id:id})), 500)
    }
 
    
    useEffect(() => {
        dispatch(fetchGenerSlides({genere:id,amount:10}))
        dispatch(addSlider(id))
        window.addEventListener('resize', () => setW())  
        return () => window.removeEventListener('resize',e => setW())
    },[])

    let sliders = useSelector( (state) => { return state.genreSlider.sliders}) 
    let slider = null 
    if (sliders.length === 0){
    }else{
       slider = sliders.find( obj => obj.slider === id )
    }
 
  
    function handelSlide(direction){
        if(slider != null){
            let move = 300;
            if(direction === "RIGHT"){
                if ((slider.translateX * -1) + 60  < slider.width/2){
                    
                    dispatch(swipeGenre( {translateX:(move * -1),id:id}))
                }else{
                    dispatch(swipeGenre( {translateX:slider.translateX * -1 + ((slider.width/2)*-1) + 50 , id:id}))
                }
            }else{
                    if (slider.translateX + move < -40){
                        dispatch(swipeGenre({translateX:move,id:id}))
                    }else{
                        dispatch(swipeGenre({translateX:( slider.translateX * -1) + 10 , id:id})) 
                    }
            }
        }
        
    }
  
  
  

    return(
        <div className="wrapper">
        <div onClick={() => handelSlide("LEFT")} className="arrow-box-left_genre"><i className="arrow_genre left"></i></div>
        <div onClick={() => handelSlide("RIGHT")} className="arrow-box-right_genre"><i className="arrow_genre right" ></i></div>
               <div className="genre-slider__cont">
            <Link to = {`/genre/${children}`} className="genre-slider__header">
                <h2>{children.toUpperCase()}</h2>
            </Link>
           {!sliders.length? null : <SlideContainer id ={id} translate = {slider.translateX} width = {slider.width} >{slider.movieList.map((movie,i) => <Slide key = {i+12} movie = {movie} ></Slide>)}</SlideContainer>} 
            </div>
        </div>
      
    )
}

export default GenreSlider