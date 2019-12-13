import { all, takeEvery, call, put, take, select } from "redux-saga/effects"
import constants from "../todos/actionTypes"
import { fetchTodoFinished,fetchTodoFailed,getNewsSucces,getNewsFail,getPrevNewsSuccess,getPrevNewsFail } from "../todos/actions";
import { fetchNews} from '../../services/services';





function* fetchTodos() {
  try {
    const state = yield select();
    const {indexOfLastPost, indexOfFirstPost} = state.news;
    const ids = yield call(fetchNews, [indexOfLastPost, indexOfFirstPost])
    yield put(fetchTodoFinished(ids))
  } catch (e) {
    yield put(fetchTodoFailed(e.message))
  }
}


function* moreNews() {
  try {
    const state = yield select();
    const {indexOfLastPost, indexOfFirstPost} = state.news;
    const ids = yield call(fetchNews, [indexOfLastPost, indexOfFirstPost])
    console.log(ids);
    yield put(getNewsSucces(ids))
  } catch (e) {
    yield put(getNewsFail(e.message))
  }
}


function* prevNews() {
  try {
    const state = yield select();
    const {indexOfLastPost, indexOfFirstPost} = state.news;
    const ids = yield call(fetchNews, [indexOfLastPost, indexOfFirstPost])
    yield put(getPrevNewsSuccess(ids))
  } catch (e) {
    yield put(getPrevNewsFail(e.message))
  }
}

function* todosSaga() {
  yield all([
    takeEvery(constants.FETCH_TODO, fetchTodos),
    takeEvery(constants.GET_MORE_NEWS, moreNews),
    takeEvery(constants.GET_PREV_NEWS, prevNews)
  ])
}

export default todosSaga
