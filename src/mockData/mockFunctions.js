
export function createFakeIMDBRating(){
    return (Math.random() * 10).toFixed(2); 
}
  
export function matchGenreIdsToName(movieItemGenres, availableGenres){
    var movieGenresNamed = []

    console.log('MovieItem Genres', movieItemGenres)
    console.log('Available Genres', availableGenres)

    movieItemGenres.forEach(genreNum => {
        availableGenres.forEach(listItem => {
            if(listItem.genreId === genreNum){
                movieGenresNamed.push(String(listItem.genreName))
            }
        }); 
    });
    console.log('Genres matched ', movieGenresNamed)

    return movieGenresNamed;
}

export const POSTER_SIZES = {
    w300: 'w300',
    w500: 'w500'
}

export function createPosterPathFull(size, endPath){

    const apiPosterPath = 'https://image.tmdb.org/t/p/'
    
    return `${apiPosterPath}/${size}/${endPath}`

}
