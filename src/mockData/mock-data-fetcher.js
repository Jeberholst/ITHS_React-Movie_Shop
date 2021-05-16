import mockGenres from './mock-data-genre.json';
import mockPopular from './mock-data-popular.json';

var listGenres = [];
var listPopular = [];

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
  

function createGenre(genreId, genreName){
  return {
     genreId,
     genreName,
  };
}

function createMovieItem(adult, backdropPath, genreIds, id,	originalLanguage,	originalTitle,	overview,	popularity,	posterPath,	releaseDate,	title,	video,	voteAverage,	voteCount){
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


export const fetchers = { fetchGenres, fetchPopular }

export {
  listGenres,
  listPopular
}