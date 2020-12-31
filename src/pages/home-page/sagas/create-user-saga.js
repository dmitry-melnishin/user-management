import {fork, takeLatest, call, put} from "redux-saga/effects";
import {CREATE_USER} from "../action-types";
import {postUser} from "../../../services/users-api";
import {createUserSucceed} from "../actions";

function* workCreateUser({ payload }) {
    try {
        const newUser = yield call(postUser, payload);
        yield put(createUserSucceed(newUser.data));
    } catch (error) {
        throw Error(error);
    }
}

function* watchCreateUser() {
    yield takeLatest(CREATE_USER, workCreateUser)
}

export default function* () {
    yield fork(watchCreateUser);
}