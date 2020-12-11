import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {UsersService} from "../../service/usersService";
import UsersInfo from "./Users/usersInfo";


class UsersArr extends Component {

    getUserService = new UsersService();
    state = {users:[]};

    async componentDidMount() {
        let users = await this.getUserService.getUsers();
        this.setState({users})

    };

    render() {
        let {users} = this.state
        return (
            <div>
                <h1>All Users</h1>
                {
                    users.map(value => (<UsersInfo user={value} key={value.id}/>))
                }

            </div>
        );
    };
}

export default UsersArr;