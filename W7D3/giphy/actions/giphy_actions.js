import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';

export const receiveSearchGiphys = (giphys) => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
}
// Export a function fetchSearchGiphysthat
// Receives a search term
// Returns a function that can be called with dispatch and uses a promise to 
// dispatch receiveSearchGiphys with the received data after APIUtil.fetchSearchGiphys 
// is successful.

export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
      .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  }
}