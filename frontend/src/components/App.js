import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Signin from './auth/Signin';
import List from './users/List';
import Detail from './users/Detail';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={List} />
                <Route path='/users' component={List} />
                <Route path='/users/:id' component={Detail} />
            </Switch>
        );
    }
}

export default App;