import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import UserDetail from "./userDetail";
import {UsersService} from "../../../service/usersService";

class UsersInfo extends Component {

    getUserService = new UsersService();
    state = {users:[]};

    async componentDidMount() {
        let users = await this.getUserService.getUsers();
        this.setState({users})

    };

    render() {
    let {user,match: {url}} = this.props;
        return (
            <div>
                {user.id} - {user.name}

              <button><Link to={url + '/' + user.id}>More Info</Link></button>
            </div>
        );
    }
}

export default withRouter(UsersInfo);