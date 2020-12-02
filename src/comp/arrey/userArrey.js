import React, {Component} from 'react';
import './arreyStyle.css'
class UserArrey extends Component {
    render() {
        let {user,someClass} = this.props;
        return (
            <div className={someClass}>
                <i>
                    {user.id} - {user.name} - {user.username} - {user.email};
                    <hr/>
                </i>

            </div>
        );
    }
}

export default UserArrey;