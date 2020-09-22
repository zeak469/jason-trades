import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Servers from './Servers.js'
import Home from './Home.js'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="servers">Servers</Nav.Link>
              <Nav.Link href="features">Jason</Nav.Link>
            </Nav>
      </Navbar>
      <Switch>
      <Route path="/servers">
            <Servers />
      </Route>
      <Route path="/Home">
            <Home />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
