const redux = require("redux");

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}
function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

const initialValue = {
  numOfCakes: 10,
  numOfIcecream: 30,
};
// (previousState, action)=> newState

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(4));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(3);

unsubscribe();
