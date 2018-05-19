import { createStore, combineReducers } from "redux";

const authReducer = function (state = {}, action) {

    switch (action.type) {
      case 'initialUser':
        state.currentUser = action.user
        break;
      default:
        break;
    }

    return state;

}

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers)

export default store;