import React from 'react';
import { Route } from 'react-router-dom';
// Components
import Loading from './Loading';
import Home from './Home';
import About from './About';
import Works from './Works';

const App = () => {
    return (
        <div className="app">
                <Route exact path="/" component={Loading}/>    
                <Route path="/home" component={Home}/>    
                <Route path="/about" component={About}/>    
                <Route path="/works" component={Works}/>
        </div>
    )
}

export default App;