//The bank is created here

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"

export const store = createStore(
    reducers,
    {},                            //Default state which is just empty
    applyMiddleware(thunk)                      
)

