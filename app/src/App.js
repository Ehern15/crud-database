import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './components/Login';
import Register from'./components/Register';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
          exact
          path="/"
          element = {<Home/>}
          />
          <Route
          path="/Login"
          element = {<Login/>}
          />
          <Route
          path="/Register"
          element = {<Register/>}
          />
          <Route
          path="*"
          element = {<Navigate to="/"/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;