import React, {Component} from 'react';
import PostsInfo from "./posts/postsInfo";
import {PostsService} from "../../service/postsService";
import {withRouter} from "react-router-dom";
import './arreyStyle.css'

class PostsArr extends Component {

    getPostsService = new PostsService()
    state = {posts: []};

    async componentDidMount() {
        let posts = await this.getPostsService.getPosts();
        this.setState({posts});
    };


    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                   posts && posts.map(value => (<PostsInfo info={value} key={value.id}/>))
                }
            </div>
        );
    };
};

export default withRouter (PostsArr);