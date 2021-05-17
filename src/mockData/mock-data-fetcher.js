import mockGenres from './mock-data-genre.json';
import mockPopular from './mock-data-popular.json';
import mockDataGeneral from './mock-data-general.json';

var listGenres = [];
var listPopular = [];
var userBillingInfo = createBillingInfo();

// THE MOVIE DB
// https://api.themoviedb.org/3/genre/movie/list?
const fetchGenres = async () => {

  const arr = [];
  listGenres = arr;
  const stringifyResponse = JSON.stringify(mockGenres.genres)

  JSON.parse(stringifyResponse).forEach(props => {

      listGenres.push(createGenre(
        props.id, 
        props.name,     
      ));

    }); 
};

// THE MOVIE DB
// https://api.themoviedb.org/3/movie/popular?
const fetchPopular = async () => {

  const arr = [];
  listPopular = arr;
  const stringifyResponse = JSON.stringify(mockPopular.results)

  JSON.parse(stringifyResponse).forEach(props => {

      listPopular.push(createMovieItem(
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

    });

};

const fetchBillingInfo = async () => {
  // userBillingInfo
  // const response = JSON.stringify(mockDataGeneral.billingInfo)
  const response = mockDataGeneral.billingInfo
  const billingInfo = createBillingInfo(
    response.firstName, 
    response.lastName,
    response.address, 
    response.postalCode, 
    response.county, 
    response.country
  );
  
  userBillingInfo = billingInfo
    

}


function createGenre(genreId, genreName){
  return {
     genreId,
     genreName,
  };
}

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

function createBillingInfo(firstName, lastName, address, postalCode, county, country){
  return {
     firstName,
     lastName,
     address, 
     postalCode, 
     county, 
     country
  };
}

export const fetchers = { fetchGenres, fetchPopular, fetchBillingInfo }

export {
  listGenres,
  listPopular,
  userBillingInfo
}