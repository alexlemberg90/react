import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {UsersService} from "../../service/usersService";
import UsersInfo from "./Users/usersInfo";
import UserDetail from "./Users/userDetail";


class UsersArr extends Component {

    getUserService = new UsersService();
    state = {users:[]};

    async componentDidMount() {
        let users = await this.getUserService.getUsers();
        this.setState({users})

    };

    render() {
        let {users} = this.state
        let {match: {url}} = this.props;
        return (
            <div>
                <h1>All Users</h1>
                {
                    users.map(value => (<UsersInfo user={value} key={value.id}/>))
                }
                <hr/>
                <Switch>
                <Route path={url + '/:id'} render={(props) => {
                    let {match: {params: {id}}} = props;
                    return <UserDetail userId={id} key={id}/>
                }}/>
            </Switch>
            </div>
        );
    };
}

export default withRouter(UsersArr);