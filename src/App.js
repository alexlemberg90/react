import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PostsArr from "./comp/arrey/PostsArr";
import CmtArr from "./comp/arrey/CmtArr";
import UsersArr from "./comp/arrey/usersArr";

class App extends Component {


    render() {
    return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}><i>Users</i></Link>
                    </div>

                    <Switch>
                        <Route path={'/users'} render={(props) => {
                            return <UsersArr/>;
                        }}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
