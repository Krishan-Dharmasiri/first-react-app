import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { history } from './helpers/history';
import { authenticationService } from './services/authentication.service';
import { PrivateRoute } from './components/PrivateRoute'
import { LoginPage } from './LoginPage/LoginPage';
import { HomePage } from './HomePage/HomePage';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null
    };
  }

   componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  } 

  render(){
    const { currentUser } = this.state;
    
    return (
      <Router>
          <div>
              {currentUser &&
                  <Route path="/" component={HomePage} />
              }              
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 offset-md-3"> 
                          <Route path="/login" component={LoginPage} />
                      </div>
                  </div>
              </div>
              
          </div>
      </Router>    
    );
  }  
}

export default App;
 