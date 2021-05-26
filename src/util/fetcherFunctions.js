import { createGenre, createMovieItem} from './fetcherCreateData'
import { actions } from './../redux/features/fetcherApi';

export function fetchListGenres(dispatch, fullApiUrl){
    
    console.log(dispatch)
    console.log(fullApiUrl)

    fetch(fullApiUrl)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
        
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        var tempArr = [];

        console.log('DATA!!: ', JSON.stringify(data.genres));
        const stringifyResponse = JSON.stringify(data.genres)

        JSON.parse(stringifyResponse).forEach(props => {
      
            tempArr.push(createGenre(
                props.id,
                props.name,
            ));
      
        });

        console.log('TEMP ARR GENRE:',  tempArr)

        dispatch(actions.fetchSuccess(tempArr))
     
    

    })
    .catch(error => {
        console.error('There was an error!', error);
        dispatch(actions.fetchFailed());
    });
}

export function fetchListPopular(dispatch, fullApiUrl){
    
    console.log('Popular fetch DISPATCHER: ', dispatch)
    console.log('Popular fetch URL: ', fullApiUrl)

    fetch(fullApiUrl)

      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
        
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        var tempArr = [];

        console.log('DATA!!: ', JSON.stringify(data.results));
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

        console.log('tempArr' + tempArr)
        dispatch(actions.fetchSuccess(tempArr));

    })
    .catch(error => {
        console.error('There was an error!', error);
        dispatch(actions.fetchFailed());
    });
}