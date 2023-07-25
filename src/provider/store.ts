import { createStore } from "redux";
import { mainReducer } from "./reducer/main.reducer";

const initState = {};

export const store = createStore(mainReducer, initState);
