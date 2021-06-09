import React from 'react'
import MovieSingle from '../components/fetcher-components/MovieSingle'


const SingelMoviePage = () => {

//return mockmoviesingel... 
const styling = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"20px",
}
    window.scrollTo(0,0)
    return (
        <div  className="App-Content" style={styling}>
            <MovieSingle/>
        </div>
        
    )
}

export default SingelMoviePage