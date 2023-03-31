const redux = require("redux");

const createStore = redux.legacy_createStore;
const axios = require("axios");
const thunk_Middleware = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

function fetchUsersRequested() {
  return {
    type: FETCH_USERS_REQUESTED,
  };
}

function fetchUsersSucceeded(users) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
}

function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
}
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map(user => 
          user.id)
          dispatch(fetchUsersSucceeded(users));
      })
      .catch(error => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      console.log('req');
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      console.log('suc');
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILED:
      console.log('fail');
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default :
    return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk_Middleware));
console.log("Initial State", initialState);
store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(fetchUsers());
