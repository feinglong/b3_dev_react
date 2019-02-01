import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import About from './components/About/About';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={App} />
            <Route exact path={"/about"} component={About} />
        </Switch>
    )
};

const Home = () => {
    return (
        <div>
            <Main />
        </div>
    )
};



ReactDOM.render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>,
    document.getElementById('root')
);


serviceWorker.unregister();
