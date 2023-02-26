// dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// create reducer
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

// UI Render
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update state initially
render();

store.subscribe(render);

// eventListener
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(10));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(5));
});
