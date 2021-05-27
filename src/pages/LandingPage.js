
import MainSlider from "../components/slider/MainSlider.js";
import GenreSlider from "../components/slider/GenreSlider";
import React from "react";
import FetcherAPI, {  } from '../util/FetcherAPI.jsx';

const LandingPage = () => {

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
            <MainSlider></MainSlider>
             {GENRES.map((gener) => <GenreSlider key = {gener} id = {gener.toUpperCase()}  movies={posters}>{gener}</GenreSlider>)}



            <div className="App-Content">
                <p>LandingPage</p> 
                <FetcherAPI {...{ type: "LIST_POPULAR", extras: { id: '', search: ''}}}/>
            </div>
        </div>
    )


}

export default LandingPage