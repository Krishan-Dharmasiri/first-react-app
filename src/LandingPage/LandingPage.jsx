import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="landing-page-wrapper">
                <h1 className="landing-page-title">Welcome to SATURN</h1>
                <p>Please <Link to="/signup">Sign up</Link> or <Link to="/register">Register</Link>.</p>
            </div>
         );
    }
}
 
export {LandingPage};