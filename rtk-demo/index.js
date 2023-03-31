const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/IceCream/iceCreamSlice").iceCreamActions;

console.log("InitialState", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered(4));
store.dispatch(iceCreamActions.restocked(6));
unsubscribe();
