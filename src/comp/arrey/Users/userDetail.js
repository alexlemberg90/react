import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {UsersService} from "../../../service/usersService";
import UserPosts from "../posts/userPosts";

class UserDetail extends Component {

    userServise = new UsersService();
    state = {user: null};

    async componentDidMount(){
        let {userId} = this.props
       let user = await this.userServise.getUser(userId)
        this.setState({user})
    };

    render() {
        let {user} = this.state;
        const {match: {url},userId} = this.props;
        return (
            <div>
                {user && <div>
                    {user.name}<br/>{user.username}<br/>{user.email}
                    <button><Link to={url + '/posts'}>Posts</Link></button>
                </div>}

                <Switch>
                    <Route path={url + '/posts'} render={() => {
                        return <UserPosts userId={userId} key={userId}/>
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(UserDetail);