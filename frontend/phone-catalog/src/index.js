import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import store from './redux/store'
import Phones from './components/phones';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/phones" component={Phones} />
                <Redirect from="/" to="/phones" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root,document.getElementById('root'),)


