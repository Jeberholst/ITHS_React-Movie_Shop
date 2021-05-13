import searchedPaged from './mock-data-title-search-paged.json';
import searchedTitlePlotFull from './mock-data-single-search-id-or-title.json';

var arrayTitleSearchPlotFull = [];
var arrayTitleSearchPaged = [];

// movie, series, episode

// By ID or Title
// type 'http://www.omdbapi.com/?t=Batman&plot=full'

const getTitlePlotFullData = async () => {

  const arr = [];
  arrayTitleSearchPlotFull = arr;

  searchedTitlePlotFull.forEach(props => {

    arrayTitleSearchPlotFull.push(titlePlotFullItem(
            props.Title,
            props.Year,
            props.Rated,
            props.Released,
            props.Runtime,
            props.Genre,
            props.Director,
            props.Writer,
            props.Actors,
            props.Plot,
            props.Language,
            props.Country,
            props.Awards,
            props.Poster,
            props.Ratings,
            props.Metascore,
            props.imdbRating,
            props.imdbVotes,
            props.imdbID,
            props.Type,
            props.DVD,
            props.BoxOffice,
            props.Production,
            props.Website,
            props.Response,  
          ));
    }); 
};
  

// By SEARCH
// http://www.omdbapi.com/?s=Batman&page=1
  
const getTitleSearchPagedData = async () => {

  const arr = [];
  arrayTitleSearchPaged = arr;

  searchedPaged.forEach(props => {

    arrayTitleSearchPaged.push(pagedTitleSearchItem(
            props.Title, 
            props.Year, 
            props.imdbID, 
            props.Type, 
            props.Poster,     
      ));

  }); 

};


function titlePlotFullItem(title,	year,	rated,	released,	runtime,	
  genre, director,	writer,	actors,	plot,	language,	country, awards,	
  poster,	ratings,	metascore, imdbrating,	imdbvotes,	imdbid,	type,	dvd,	
  boxoffice,	production,	website,	response) {
  return {
      title,
      year,
      rated,
      released,
      runtime,
      genre,
      director,
      writer,
      actors,
      plot,
      language,
      country,
      awards,
      poster,
      ratings,
      metascore,
      imdbrating,
      imdbvotes,
      imdbid,
      type,
      dvd,
      boxoffice,
      production,
      website,
      response,
  };
};


function pagedTitleSearchItem(title, year, imdbID, type, poster) {
  return {
      title,
      year,
      imdbID,
      type,
      poster,
  };
};

export {
  getTitlePlotFullData as getTitleFull,
  arrayTitleSearchPlotFull as arrayPlotFull,
  getTitleSearchPagedData as getSearchedTitlePaged,
  arrayTitleSearchPaged as arraySearchPaged,
}