import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PostsArr from "./comp/arrey/PostsArr";
import CmtArr from "./comp/arrey/CmtArr";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/posts'}><i>posts</i></Link>
                    </div>
                    <div>
                    <Link to={'/comments'}><i>comments</i></Link>
                    </div>



                    <Switch>
                        <Route path={'/posts'} render={() => {
                            return <PostsArr/>;
                        }}/>
                        <Route path={'/comments'} render={() => {
                            return <CmtArr/>
                        }}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
