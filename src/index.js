import React from 'react';
import ReactDOM from 'react-dom/client';
import {Root} from "./components/Root";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store1 = setupStore()
root.render(
<Provider store={store1}>
    <Root />
</Provider>

);
