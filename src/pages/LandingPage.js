import MockDataHolder from "../mockData/MockDataHolder";
import React,{useEffect, useRef} from "react";
import {getSearchedTitlePaged, getTitleFull} from "../mockData/mock-data-fetcher.js";
import MainSlider from "../components/slider/MainSlider.js";
import GenreSlider from "../components/slider/GenreSlider";



const LandingPage = () => {
    const movies = useRef(null)
    useEffect(()=>{
        getTitleFull()
       movies.current = getSearchedTitlePaged()
    },[])


    
  
    const images = [
        'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
      ];

    const posters = [
        'https://image.tmdb.org/t/p/w300/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
        'https://image.tmdb.org/t/p/w300/AoWY1gkcNzabh229Icboa1Ff0BM.jpg',
        'https://image.tmdb.org/t/p/w300/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
        'https://image.tmdb.org/t/p/w300/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
        'https://image.tmdb.org/t/p/w300/AmUGn1rJ9XDDP6DYn9OA2uV8MIg.jpg'

    ]
    const GENRES = [      
        "action",
        "comedy",
        "drama",
        "fantasy",
        "horror",  
        "mystery",
        "romance",
        "thriller",     
        "western",     
    ];

    return(

    <div className="App-Content">
        <MainSlider imgList = {images} ></MainSlider>
        {GENRES.map((gener) => <GenreSlider key = {gener} id = {gener.toUpperCase()}  movies={posters}>{gener}</GenreSlider>)}
    </div>
    )


}

export default LandingPage