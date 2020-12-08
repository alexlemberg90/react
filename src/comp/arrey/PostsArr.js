import React, {Component} from 'react';
import PostsInfo from "./posts/postsInfo";
import {PostsService} from "../../service/postsService";

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
                <h1>Posts List</h1>

                {
                    posts.map(value => (<PostsInfo info={value} key={value.id}/>))
                }
            </div>
        );
    };
};

export default PostsArr;