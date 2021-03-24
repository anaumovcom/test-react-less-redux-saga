import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import {Provider, useDispatch} from "react-redux";
import {store} from "./redux/store";
import {update, clear} from './redux/reducers/textSlice';
// import {useAppDispatch} from "./hooks/hooks";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Button title={'Hello world'}/>
                <TextBlock/>
            </div>
        </Provider>
    );
}

export default App;
