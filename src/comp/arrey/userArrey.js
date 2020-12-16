import React, {Component} from 'react';
import {UserService} from "../service/userService";

class UserArrey extends Component {

    getUser = new UserService();
    state = {user:[]};

    async componentDidMount() {
        let {userId} = this.props
        let user = await this.getUser.getUsers(userId)
        this.setState({user})
        console.log(userId)
    };

    render() {
        let {user} = this.state
        console.log(user)
        return (
            <div>

                {user && <div>{user.id} - {user.name} - {user.username} - {user.email}</div>}

            </div>
        );
    }
}

export default UserArrey;