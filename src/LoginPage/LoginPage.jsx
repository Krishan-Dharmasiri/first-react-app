import React, { Component } from 'react';

import { authenticationService } from '../services/authentication.service';

class LoginPage  extends Component {
    constructor(props) {
        super(props);

        // redirect to home if already logged in
         /* if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }  */
    }

    render() { 
        return (  
            <div>
                <p>This is the log in page, Where is the Form to log ther user in , hmmm....</p>
                
            </div>

        );
    }
}
 
export {LoginPage};