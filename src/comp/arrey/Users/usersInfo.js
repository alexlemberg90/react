import React, {Component} from 'react';
// import '/comments/c'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import PostsArr from "../PostsArr";
import CmtArr from "../CmtArr";
import CommentsArr from "../comments/commentsInfo";

class UsersInfo extends Component {

state = {cmtId:null};

    render() {
    let {user,match: {url}} = this.props;
    let {cmtId} = this.state;
        return (
            <div>
                {user.id} - {user.name}
                {/*<div>*/}
                {/*    <Link to={url+`/`+ user.id}><i>Posts</i></Link>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Link to={'/more'}>More Info</Link>*/}
                {/*</div>*/}
                <div>
                    <Link to={url+`/`+ user.id}><i>Comments</i></Link>
                </div>


                <Switch>
                    {/*<Route path={url + '/:id'} render={() => {*/}

                    {/*    return <PostsArr/>;*/}
                    {/*}}/>*/}
                     <Route path={url + '/:id'} render={(props) => {
                        let {match:{params:{id}}} = props
                         cmtId = id
                        return (user.id == cmtId && <CommentsArr {...props} key={cmtId}/>)
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter (UsersInfo);