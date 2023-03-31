const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const createStore = redux.legacy_createStore; //store creation
const BindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED"; //type
const CAKE_RESTOCKED = "CAKE_RESTOCKED"; //type

const ICECREAM_ORDERED = "ICECREAM_ORDERED"; //type
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"; //type

function orderCake(qt = 1) {
  //action creater function
  return {
    type: CAKE_ORDERED, //action
    payload: qt,
  };
}

function restockCake(qt = 1) {
  //action creater function
  return {
    type: CAKE_RESTOCKED,
    payload: qt,
  };
}

function orderIceCream(qt = 1) {
  //action creater function
  return {
    type: ICECREAM_ORDERED, //action
    payload: qt,
  };
}

function restockIceCream(qt = 1) {
  //action creater function
  return {
    type: ICECREAM_RESTOCKED,
    payload: qt,
  };
}

const initialCakeState = {
  numOfCakes: 10, //state
};

const initialIceCreamState = {
  numOfIceCreams: 15,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(
  () => {}
  // () =>
  // console.log("Update state", store.getState())
);

//Alternative way
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(2));

// store.dispatch(restockCake(2));
// store.dispatch(restockCake(3));
// store.dispatch(restockCake(4));

const actions = BindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake(2);
actions.restockCake(3);
actions.orderIceCream(4);
actions.restockIceCream(7);

unsubscribe();
