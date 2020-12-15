import React, {Component} from 'react';
import {PostsService} from "../../../service/postsService";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import UserCmt from "../comments/userCmt";

class UserPosts extends Component {

    getPostsService = new PostsService();
    state = {post: []};

    async componentDidMount() {
        let {userId} = this.props
        let post = await this.getPostsService.getPost(userId)
        this.setState({post})
    }

render() {
        let {post} = this.state
    return (
            <div>
                {
                    post.map(value =>
                            <div><hr/>{value.title} <br/> {value.body}<hr/>
                    </div>
                    )
                }
                <hr/>

            </div>
        );
    }
}

export default withRouter(UserPosts);