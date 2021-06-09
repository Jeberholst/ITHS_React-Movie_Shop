export const POSTER_SIZES = {
    w200: 'w200',
    w300: 'w300',
    w400: 'w400',
    w500: 'w500',
    w800: 'w800'
};

export function createPosterPathFull(size, endPath) {
    const apiPosterPath = 'https://image.tmdb.org/t/p/';
    return `${apiPosterPath}/${size}/${endPath}`;
}
