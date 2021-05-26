import { Switch } from "react-router";


const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "?api_key=5a3613e5d83a68124a38ea398536e34b"

function createMovieItem(adult, backdropPath, genreIds, id, originalLanguage,	originalTitle, overview, popularity,	posterPath,	releaseDate, title, video, voteAverage, voteCount){
    return {
      adult,
      backdropPath,
      genreIds,
      id,
      originalLanguage,
      originalTitle,
      overview,
      popularity,
      posterPath,
      releaseDate,
      title,
      video,
      voteAverage,
      voteCount,
    };
  }

async function fetchSearch(searchFor){
    let searchResult = []
    await fetch(`${baseUrl}search/movie${apiKey}&query=${searchFor}`).then(res => res.json()).then(res => { 
        if (!res.results.length){
            
        }else{
            res.results.forEach(props => {
                searchResult.push(createMovieItem(
                    props.adult,
                    props.backdrop_path,
                    props.genre_ids,
                    props.id,
                    props.original_language,
                    props.original_title,
                    props.overview,
                    props.popularity,
                    props.poster_path,
                    props.release_date,
                    props.title,
                    props.video,
                    props.vote_average,
                    props.vote_count,
                  ));
            } )
            
          
        }
    } )
    return searchResult
}

async function fetchTopFive(){
    let topFive = []
    await fetch(`${baseUrl}trending/movie/day${apiKey}`).then(res => res.json()).then(res => { 
        if (!res.results.length){
            
        }else{
            res.results.forEach(props => {
                topFive.push(createMovieItem(
                    props.adult,
                    props.backdrop_path,
                    props.genre_ids,
                    props.id,
                    props.original_language,
                    props.original_title,
                    props.overview,
                    props.popularity,
                    props.poster_path,
                    props.release_date,
                    props.title,
                    props.video,
                    props.vote_average,
                    props.vote_count,
                  ));
            } )
            
          
        }
    } )
    return topFive
}


async function fetchGenre(genre){
    let genreList = []
    let GENRE = null 
    
    switch(genre){
        case "ACTION":{
            GENRE = 28 
            break;
        }
        case "COMEDY":{
            GENRE = 35 
            break;
        }
        case "DRAMA":{
            GENRE = 18 
            break;
        }
        case "FANTASY":{
            GENRE = 14 
            break;
        }
        case "HORROR":{
            GENRE = 27 
            break;
        }
        case "MYSTERY":{
            GENRE = 9648 
            break;
        }
        case "ROMANCE":{
            GENRE = 10749 
            break;
        }
        case "THRILLER":{
            GENRE = 53 
            break;
        }
        case "WESTERN":{
            GENRE = 37 
            break;
        }
        default:{
            GENRE = 12 //adventure.
            break;
        }      
    }
    //can make one large request and sort films manually. 
    await fetch(`${baseUrl}discover/movie${apiKey}&with_genres=${GENRE}&primary_release_year=2021&sort_by=popularity.desc&vote_average.gte=7`).then(res => res.json()).then(res => { 
        if (!res.results.length){
            return genreList
        }else{
            res.results.forEach(props => {
                genreList.push(createMovieItem(
                    props.adult,
                    props.backdrop_path,
                    props.genre_ids,
                    props.id,
                    props.original_language,
                    props.original_title,
                    props.overview,
                    props.popularity,
                    props.poster_path,
                    props.release_date,
                    props.title,
                    props.video,
                    props.vote_average,
                    props.vote_count,
                  ));
            } )
            
          
        }
    } )
    
   return genreList.slice(0,10)
}

export {fetchSearch, fetchTopFive, fetchGenre}

