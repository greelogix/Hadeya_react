import { combineReducers } from "redux";

import modalReducer from "./modal.reducers/modal.reducer";

const rootReducer = combineReducers({
  modalReducer: modalReducer,
});

export default rootReducer;
