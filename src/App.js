import React from 'react';
import logo from './logo.svg';
import './App.css';
import { } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import createStore from './redux'
import HomePage from './pages/HomePage';



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/users/">Users</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={HomePage} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
            </div>
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
