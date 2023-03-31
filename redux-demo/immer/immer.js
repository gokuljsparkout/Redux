const redux = require("redux");
const createStore = redux.legacy_createStore;
const produce = require('immer').produce;

const STREETUPDATED = "STREETUPDATED";

const initialState = {
  name: "Gokul",
  address: {
    street: " 123 Main St",
    city: "Boston",
    state: "MA",
  },
};

function updateStreet(street) {
  return {
    type: STREETUPDATED,
    payload: street,
  };
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREETUPDATED:
      // return {
      //   ...state,
      //   address: { ...state.address, street: action.payload },
      // };
      return produce(
        state,
        (draft) => {draft.address.street = action.payload}
      );
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(updateStreet("coimbatore"));
unsubscribe();
console.log(initialState);
