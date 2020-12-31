import {createAction} from "../../helpers/create-action";
import {
    CREATE_USER,
    CREATE_USER_SUCCEED,
    DELETE_USER,
    DELETE_USER_SUCCEED,
    GET_USERS,
    GET_USERS_SUCCEED,
    UPDATE_USER,
    UPDATE_USER_SUCCEED
} from "./action-types";

export const getUsers = createAction(GET_USERS);
export const getUsersSuccess = createAction(GET_USERS_SUCCEED);
export const createUser = createAction(CREATE_USER);
export const createUserSucceed = createAction(CREATE_USER_SUCCEED);
export const updateUser = createAction(UPDATE_USER);
export const updateUserSucceed = createAction(UPDATE_USER_SUCCEED);
export const deleteUser = createAction(DELETE_USER);
export const deleteUserSucceed = createAction(DELETE_USER_SUCCEED);
