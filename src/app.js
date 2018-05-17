import React from "react";
import TodoForm from "./containers/todo-form";
import Head from "./components/head";
import TodoList from "./containers/list-container";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { rootReducer } from "./reducers"
import { loadState, saveState } from "./localStorage";
import {toggleEditAction} from "./actions"

const initial = loadState()
const store = createStore(rootReducer, initial, composeWithDevTools(applyMiddleware()));

store.subscribe(() => {
    saveState({ todos: store.getState().todos});
    console.log(loadState())
});

console.log(store.getState())
console.log(store.getState())

const App = () => {
    return (
        <Provider store={store} >
            <div className="App" >
                <Head />
                <TodoForm />
                <TodoList />
            </div>
        </Provider>
    )
}
export default App;