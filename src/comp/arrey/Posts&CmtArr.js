import React, {Component} from 'react';
import PostsInfo from "./posts/postsInfo";
import CommentsInfo from "./comments/commentsInfo";
import {Service} from "../../service/Service";

class PostsCmtArr extends Component {

    getService = new Service()
    state = {posts: [], comments: []};

    componentDidMount() {
        this.getService.getPosts().then(postsAPI =>
            this.setState({posts: postsAPI}));
        this.getService.getCmt().then(commentsAPI =>
            this.setState({comments: commentsAPI}));
    };


    render() {
        let {posts, comments} = this.state;
        return (
            <div>
                <h1>Posts List</h1>

                {
                    posts.map(value => (<PostsInfo info={value} key={value.id}/>))
                }

                {
                    comments.map(value => (<CommentsInfo info={value} key={value.id}/>))
                }
            </div>
        );
    };
};

export default PostsCmtArr;