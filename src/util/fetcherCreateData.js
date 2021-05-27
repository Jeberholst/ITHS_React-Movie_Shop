export function createMovieItem(adult, backdropPath, genreIds, id, originalLanguage,	originalTitle, overview, popularity,	posterPath,	releaseDate, title, video, voteAverage, voteCount){
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
  
export function createGenre(genreId, genreName){
    return {
       genreId,
       genreName,
    };
}