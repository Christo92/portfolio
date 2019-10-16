import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Loading from './Loading';
import Home from './Home';
import About from './About';
import Works from './Works';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Loading} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
            </Switch>
        </div>
    )
}

export default App;