import React, {Component} from 'react';
import {UserService} from "../service/userService";

class UserArrey extends Component {

    getUser = new UserService();
    state = {user:[],id: this.props.userId};


    async componentDidMount() {
        let user = await this.getUser.getUsers(this.state.id)
        this.setState({user})

    };


    render() {
        let {user} = this.state
        return (
            <div>

                {user && <div>{user.id} - {user.name} - {user.username} - {user.email}</div>}

            </div>
        );
    }
}

export default UserArrey;