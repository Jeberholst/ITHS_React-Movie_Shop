import axios from 'axios'
const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "?api_key=5a3613e5d83a68124a38ea398536e34b"

function createMovieItem(adult, backdrop_path, genre_ids, id, original_language,	original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count){
    return {
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
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

 async function fetchGenre(genre,amount,year,sort,voteAverage){
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

    function createFetchUrl(year = 2021,sort="popularity.desc",voteAverage = 7, genre,page=1){
        //returns fetch url, check TMDB for options.
        return `${baseUrl}discover/movie${apiKey}&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${voteAverage}&sort_by=${sort}&page=${page}`
    }
    
    //get responses.
     await axios.get(createFetchUrl(year,sort,voteAverage,GENRE)).then(
        res =>{
        let promises = []
        //max num movies per page = 20
        if (res.data.total_pages > 1 && amount > 20){
            //if requested num movies is lager than 20, get all pages.
            for(var i = 1; i<res.data.total_pages+1;i++){
                promises.push(axios.get(createFetchUrl(year,sort,voteAverage,GENRE,i)))
           }
           return Promise.all(promises)
        }else{
            promises.push(res)
            return Promise.all(promises)
        }
    }
    ).then(d => {
        //reduce array of movies to one array.
        let response = d.map(data => data.data.results).reduce((a,b) => [...a,...b],[])
        //handel movie data and push to array
        response.forEach(props => {
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
    })
           
        

    //return array based on amount wanted.
   return genreList.slice(0,amount)

 
}
export {fetchSearch, fetchTopFive, fetchGenre}

