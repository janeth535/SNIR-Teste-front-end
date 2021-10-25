import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';

import Janeth from './pages/Janeth'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                
                <Route paht="/janeth" component={Janeth}/>            
            </Switch>
        </BrowserRouter>
    );
}