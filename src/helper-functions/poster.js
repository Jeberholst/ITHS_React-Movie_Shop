export const POSTER_SIZES = {
    w300: 'w300',
    w500: 'w500'
};

export function createPosterPathFull(size, endPath) {
    const apiPosterPath = 'https://image.tmdb.org/t/p/';
    return `${apiPosterPath}/${size}/${endPath}`;
}