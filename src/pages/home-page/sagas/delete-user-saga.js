import {fork, takeLatest, call, put} from "redux-saga/effects";
import {DELETE_USER} from "../action-types";
import {deleteUser} from "../../../services/users-api";
import {deleteUserSucceed} from "../actions";

function* workDeleteUser({ payload }) {
    try {
        yield call(deleteUser, payload);
        yield put(deleteUserSucceed(payload));
    } catch (error) {
        throw Error(error);
    }
}

function* watchDeleteUser() {
    yield takeLatest(DELETE_USER, workDeleteUser)
}

export default function* () {
    yield fork(watchDeleteUser);
}