import React from "react";
import Form from "./form";
import Head from "./head";
import List from "./list";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { rootReducer } from "../reducers"

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));
console.log(store.getState());

const App = () => {
    return (
        <Provider store={store} >
            <div className="App" >
                <Head/>
                <Form/>
                <List/>
            </div>
        </Provider>
    )
}
export default App;