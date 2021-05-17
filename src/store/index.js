import reducer from './reducers';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// const initialState = {};
// const middleware = [thunk];
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const ADD_TODO = "ADD_TODO";

// console.log("initialState===>", store.getState());
// store.subscribe(() => console.log("updatedState===>", store.getState()));
// store.dispatch(addTodo());

export default store;
