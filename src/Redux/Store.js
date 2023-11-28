import { comreducer } from "./parentreducer";
import { createStore } from "redux";

export const store = createStore(comreducer);