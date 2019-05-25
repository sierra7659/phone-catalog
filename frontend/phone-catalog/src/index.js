import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Phones from './components/phones';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/phones" component={Phones} />
            <Redirect from="/" to="/phones" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root,document.getElementById('root'),)


