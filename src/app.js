import React from "react";
import TodoForm from "./containers/todo-form";
import Head from "./components/head";
import TodoList from "./containers/list-container";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { rootReducer } from "./reducers"

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));
// store.dispatch(
//     {
//         type:"ADD_TODO",id:1,text:"ppp",done:true
//     }
// )
console.log(store.getState());

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