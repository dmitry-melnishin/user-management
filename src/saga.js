import {all, fork} from "redux-saga/effects";
import {homePageSaga} from "./pages/home-page/sagas";

export function* saga() {
    yield all([
        fork(homePageSaga)
    ]);
}