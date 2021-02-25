import { createStore, combineReducers } from "redux";
import { authReducer } from "src/reducers/authReducer";
import { uiReducer } from "src/reducers/uiReducer";

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
