import {all, fork} from "redux-saga/effects";
import getUsersSaga from "./get-users-saga";
import createUserSaga from "./create-user-saga";
import deleteUserSaga from "./delete-user-saga";
import updateUserSaga from "./update-user-saga";

export function* homePageSaga() {
    yield all([
        fork(getUsersSaga),
        fork(createUserSaga),
        fork(deleteUserSaga),
        fork(updateUserSaga)
    ]);
}