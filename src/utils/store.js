import { createStore, combineReducers } from "redux";

const authReducer = function (state = {}, action) {

    switch (action.type) {

    }

    return state;

}

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers)

export default store;