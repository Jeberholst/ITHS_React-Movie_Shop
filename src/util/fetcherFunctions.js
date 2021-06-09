import { actions } from './../redux/features/fetcherApi';
import mockDataGenre from './../mockData/mock-data-genre.json'

const BASE_API_URL_V3 = "https://api.themoviedb.org/3/"
const API_KEY = "9f9816e8ad3f4241eaf738efa1c54328"
const API_KEY_CALL = `api_key=${API_KEY}`

const EXTENDED_PATHS = {
    POPULAR: 'movie/popular',
    GENRE: 'genre/movie/list',
    DISCOVER_WITH_GENRE:`discover/movie?${API_KEY_CALL}&with_genres=`
}

//CAN BE SENT THROUGH extras or another variable

export function fetchListGenres(dispatch, id){

    let FULL_API_URL = `${BASE_API_URL_V3}${EXTENDED_PATHS.GENRE}?${API_KEY_CALL}`

    const PRIMARY_RELEASE_YEAR = "primary_release_year=2021"
    const SORT_BY_DESC = "popul§arity.desc"
    const VOTE_AVARAGE = 7
    const PAGE = 1

    const genreOBJ = mockDataGenre.genres.find(item => String(item.name).toUpperCase() === String(id).toUpperCase())
    console.log('FOUND GENRE: ', genreOBJ.id, ' ', genreOBJ.name)
    const GENRE_API_URL = `${BASE_API_URL_V3}${EXTENDED_PATHS.DISCOVER_WITH_GENRE}${genreOBJ.id}&${PRIMARY_RELEASE_YEAR}&sort_by=${SORT_BY_DESC}&vote_average.gte=${VOTE_AVARAGE}`
    
        fetch(GENRE_API_URL)

            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
              
                dispatch(actions.fetchSuccess(data.results));

            })
            .catch(error => {
                console.error('There was an error!', error);
                dispatch(actions.fetchFailed());
        });

}

export function fetchListPopular(dispatch){

    let fullApiUrl = `${BASE_API_URL_V3}${EXTENDED_PATHS.POPULAR}?${API_KEY_CALL}`

    fetch(fullApiUrl)

      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
        
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        dispatch(actions.fetchSuccess(data.results));

    })
    .catch(error => {
        console.error('There was an error!', error);
        dispatch(actions.fetchFailed());
    });
}

export function fetchAllForLandingPage(dispatch){
  
    dispatch(actions.resetState(''))
    dispatch(actions.startFetch());
    let fetchAllGenres = `${BASE_API_URL_V3}${EXTENDED_PATHS.GENRE}?${API_KEY_CALL}`

    console.log('fetchAllForLandingPage')

    const PRIMARY_RELEASE_YEAR = "primary_release_year=2021"
    const SORT_BY_DESC = "popul§arity.desc"
    const VOTE_AVARAGE = 7
    const PAGE = 1

    fetch(fetchAllGenres)
        .then(async response => {
            
            const data = await response.json();
            
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            
            const genreArray = JSON.stringify(data.genres)
         
            JSON.parse(genreArray).forEach((props) => {

                const fetchPageOneInGenre = `${BASE_API_URL_V3}${EXTENDED_PATHS.DISCOVER_WITH_GENRE}${props.id}&${PRIMARY_RELEASE_YEAR}&sort_by=${SORT_BY_DESC}&vote_average.gte=${VOTE_AVARAGE}&page=${PAGE}`

                fetch(fetchPageOneInGenre)
                    .then(async response => {
  
                        const data = await response.json();
  
                        if (!response.ok) {
                            const error = (data && data.message) || response.statusText;
                            return Promise.reject(error);
                        }
                        
                        const movies = data.results;

                        const myObj = {
                            "id": props.id,
                            "name": props.name,
                            "movies": movies 
                        }

                        dispatch(actions.pushPartFetch(myObj))
                        dispatch(actions.pushPartsCompleted('null'))

                    })
  
                    .catch(error => {
                        console.error('There was an error!', error);
                    });

             
            });

          
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

  }
