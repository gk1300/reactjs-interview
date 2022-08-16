import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import AddEmployee from './component/AddEmployee';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/home" component={Home} />
                      <Route path="/addEmployee" component={AddEmployee} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

// const style = {
//     color: 'red',
//     margin: '10px'
// }

export default App;
