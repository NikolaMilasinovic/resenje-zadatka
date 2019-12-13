import { all } from "redux-saga/effects";
import News from "./todos/saga"

export default function* () {
    yield all([
        News()
    ])
}
