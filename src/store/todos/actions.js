import constants from "./actionTypes";

export const fetchTodo = () => ({
    type: constants.FETCH_TODO
});

export const fetchTodoFinished = payload => ({
    type: constants.FETCH_TODO_FINISHED,
    payload
});

export const fetchTodoFailed = payload => ({
    type: constants.FETCH_TODO_FAILED,
    payload
});

export const getMoreNews = () => ({
    type: constants.GET_MORE_NEWS
});

export const getNewsSucces = payload => ({
    type: constants.GET_MORE_NEWS_SUCCESS,
    payload
});

export const getNewsFail = payload => ({
    type: constants.GET_MORE_NEWS_FAIL,
    payload
});


export const getPrevNews = () => ({
    type: constants.GET_PREV_NEWS
});

export const getPrevNewsSuccess = payload => ({
    type: constants.GET_PREV_NEWS_SUCCESS,
    payload
});

export const getPrevNewsFail = payload => ({
    type: constants.GET_PREV_NEWS_FAIL,
    payload
});



