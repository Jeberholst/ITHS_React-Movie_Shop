import './MainSlider.css';
import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggelSlider} from '../../redux/features/mainSliderSlice'


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
const Slide = ({img}) => {
    return (
        <div style={{backgroundImage:`url(${img})`}} className="mainslider__slide"></div>
    )
}


const MainSlider = ({imgList}) => {
    const left = "LEFT",
          right ="RIGHT"
    //keep track of slide for navigation dots.
    let currentSlide = useRef(0) 

    let dispatch = useDispatch()
    
    //get full width of slider.
    const getWidth = () => {
        return window.innerWidth * imgList.length
    }
    //sets current slide and calls reducer for state handeling. 
    const navigateSlider = (direction) => {
        if(direction === left && currentSlide.current>0){
            currentSlide.current--
            dispatch(toggelSlider(direction))
            
        }else if (direction === right && currentSlide.current < imgList.length -1){
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
                {imgList.map((img,i) => ( <Slide key={`${i}`} img={img}/> ))}
            </MainSliderContainer>
            <div className="main-slider__dot-indicator-container">
                {imgList.map((img,i) => <div key={`dot:${i}`} className={`dots ${i === currentSlide.current ? "white" : "" }`}></div> )}
            </div>

        </div>
    )

}





export default MainSlider;
