
export function matchGenreIdsToName(movieItemGenres, availableGenres) {
    var movieGenresNamed = [];

    movieItemGenres.forEach(genreNum => {
        availableGenres.forEach(listItem => {
            if (listItem.id === genreNum) {
                movieGenresNamed.push(String(listItem.name));
            }
        });
    });

    return movieGenresNamed;
}
