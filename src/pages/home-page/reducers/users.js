import {
    CREATE_USER_SUCCEED,
    DELETE_USER_SUCCEED,
    GET_USERS_SUCCEED,
    UPDATE_USER_SUCCEED
} from "../action-types";

const initialState = [];

export const users = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS_SUCCEED:
            return payload;
        case CREATE_USER_SUCCEED:
            return [payload, ...state];
        case UPDATE_USER_SUCCEED:
            return state.map(user => user.id === payload.id ? payload : user);
        case DELETE_USER_SUCCEED:
            return state.filter(user => user.id !== payload);

        default: return state;
    }
};