import {fork, takeLatest, call, put} from "redux-saga/effects";
import {UPDATE_USER} from "../action-types";
import {putUser} from "../../../services/users-api";
import {updateUserSucceed} from "../actions";

function* workUpdateUser({ payload }) {
    try {
        const updatedUser = yield call(putUser, payload);
        yield put(updateUserSucceed(updatedUser.data));
    } catch (error) {
        throw Error(error);
    }
}

function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER, workUpdateUser)
}

export default function* () {
    yield fork(watchUpdateUser);
}