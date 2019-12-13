import constants from "./actionTypes";

const initState = {
  items: [],
  loading: false,
  error: '',
  currentPage: 1,
  indexOfLastPost: 20,
  indexOfFirstPost: 0
};

export default (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case constants.FETCH_TODO:
      return {
        ...state,
        loading: true,
        currentPage: 1,
        indexOfLastPost: 20,
        indexOfFirstPost: 0
      }
    case constants.FETCH_TODO_FINISHED:
      return{
        ...state,
        loading: false,
        items: payload,
        currentPage: 1 
      }
    case constants.FETCH_TODO_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case constants.GET_MORE_NEWS:
        const newState = {
          ...state,
          error: '',
          loading: true
        }
        newState.indexOfFirstPost +=20; 
        newState.currentPage += 1; 
        newState.indexOfLastPost +=20; 
        console.log(newState)
        return newState
    case constants.GET_MORE_NEWS_SUCCESS:
        return{
          ...state,
          loading: false,
          items: payload
        }  
    case constants.GET_MORE_NEWS_FAIL:
        return{
          ...state,
          loading: false,
          error: payload
        }
    case constants.GET_PREV_NEWS:
        const prevState = {
          ...state,
          error: '',
          loading: true
        }
        prevState.indexOfLastPost -=20; 
        prevState.currentPage -= 1; 
        prevState.indexOfFirstPost -=20; 
        // console.log(prevState)
        return prevState
    case constants.GET_PREV_NEWS_SUCCESS:
        return{
          ...state,
          loading: false,
          items: payload
        }  
    case constants.GET_PREV_NEWS_FAIL:
        return{
          ...state,
          loading: false,
          error: payload
        }
    default:
      return state;
  }
};

