import { SHOW_USERS } from "./../actions";

const initialState = {
    list: []
}

export function showUsers(state = { list: []}, action) {
    switch (action.type){
        case SHOW_USERS: 
            return Object.assign({}, state, {list: action.payload})
        default:
            return state
    }
}