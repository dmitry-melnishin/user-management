import {fork, takeLatest, call, put} from "redux-saga/effects";
import {GET_USERS} from "../action-types";
import {getUsers} from "../../../services/users-api";
import {getUsersSuccess} from "../actions";

function* workGetUsers() {
    try {
        const users = yield call(getUsers);
        yield put(getUsersSuccess(users.data));
    } catch (error) {
        throw Error(error);
    }
}

function* watchGetUsers() {
    yield takeLatest(GET_USERS, workGetUsers)
}

export default function* () {
    yield fork(watchGetUsers);
}