import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import Slider from './sections/Slider';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'animate.css';

function App() {

  const appStyle = {
    backgroundImage: '/assets/images/slide-1.jpg',
    backgroundSize: 'cover', // Adjust this to control how the image is displayed
    minHeight: '100vh', // Ensures the background covers the entire viewport height
  };

  return (
    <Router basename="/shubh-wedding">
      <div className="App" style={appStyle}>
        <main className="App-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Slider} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
