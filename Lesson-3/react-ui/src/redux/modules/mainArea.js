import fetch from 'cross-fetch';
const GET_LOCATIONS = 'rta/mainArea/GET_LOCATIONS';
const GET_LOCATIONS_SUCCESS = 'rta/mainArea/GET_LOCATIONS_SUCCESS';
const GET_LOCATIONS_FAILURE = 'rta/mainArea/GET_LOCATIONS_FAILURE';

export const requestLocations = () => ({ type: GET_LOCATIONS });
export const receiveLocations = locations => ({ type: GET_LOCATIONS_SUCCESS, locations });
export const receiveLocationsFail = error => ({ type: GET_LOCATIONS_FAILURE, error });

export const fetchLocations = () => (dispatch) => {
  dispatch(requestLocations());
  return fetch('/api/locations').then(
    res => res.json(),
    error => dispatch(receiveLocationsFail(error))
  )
    .then(locations => dispatch(receiveLocations(locations)))
};

const initialState = {
  locations: [],
  isFetching: false,
  error: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        isFetching: true
      };
    case GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations,
        isFetching: false
      };
    case GET_LOCATIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};
