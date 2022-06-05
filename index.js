const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialValue = {
  numOfCakes: 10,
};
// (previousState, action)=> newState

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default: {
      return state;
    }
  }
};
