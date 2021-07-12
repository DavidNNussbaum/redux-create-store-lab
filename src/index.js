function createStore(reducer) {
  let state;
  function getState() {
    return state
  };

  function dispatch(action) {
    state = candyReducer(state, action);
    render()
  }

};

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

let store = createStore.state;
createStore.dispatch({type: 'ADD_CANDY'})


// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.