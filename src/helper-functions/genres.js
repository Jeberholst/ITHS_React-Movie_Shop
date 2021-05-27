
export function matchGenreIdsToName(movieItemGenres, availableGenres) {
    var movieGenresNamed = [];

    movieItemGenres.forEach(genreNum => {
        availableGenres.forEach(listItem => {
            if (listItem.genreId === genreNum) {
                movieGenresNamed.push(String(listItem.genreName));
            }
        });
    });

    return movieGenresNamed;
}
