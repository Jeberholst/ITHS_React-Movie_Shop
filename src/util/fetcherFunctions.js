import { createGenre, createMovieItem} from './fetcherCreateData'
import { actions } from './../redux/features/fetcherApi';

const BASE_API_URL_V3 = "https://api.themoviedb.org/3/"
const API_KEY = "9f9816e8ad3f4241eaf738efa1c54328"
const API_KEY_CALL = `api_key=${API_KEY}`

const EXTENDED_PATHS = {
    POPULAR: 'movie/popular',
    GENRE: 'genre/movie/list'
}

export function fetchListGenres(dispatch){

    let fullApiUrl = `${BASE_API_URL_V3}${EXTENDED_PATHS.GENRE}?${API_KEY_CALL}`
    console.log('Genres fetch URL: ', fullApiUrl)

    fetch(fullApiUrl)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
        
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        var tempArr = [];

       // console.log('DATA!!: ', JSON.stringify(data.genres));
        const stringifyResponse = JSON.stringify(data.genres)

        JSON.parse(stringifyResponse).forEach(props => {
      
            tempArr.push(createGenre(
                props.id,
                props.name,
            ));
      
        });

        dispatch(actions.fetchSuccess(tempArr))

    })
    .catch(error => {
        console.error('There was an error!', error);
        dispatch(actions.fetchFailed());
    });
}

export function fetchListPopular(dispatch){
    
    console.log('Popular fetch DISPATCHER: ', dispatch)

    let fullApiUrl = `${BASE_API_URL_V3}${EXTENDED_PATHS.POPULAR}?${API_KEY_CALL}`
    console.log('Popular fetch URL: ', fullApiUrl)

    fetch(fullApiUrl)

      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
        
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        var tempArr = [];

        //console.log('DATA!!: ', JSON.stringify(data.results));
        const stringifyResponse = JSON.stringify(data.results)

        JSON.parse(stringifyResponse).forEach(props => {
      
            tempArr.push(createMovieItem(
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
        
        dispatch(actions.fetchSuccess(tempArr));

    })
    .catch(error => {
        console.error('There was an error!', error);
        dispatch(actions.fetchFailed());
    });
}