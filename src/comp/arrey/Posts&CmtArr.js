import React, {Component} from 'react';
import PostsInfo from "./posts/postsInfo";
import CommentsInfo from "./comments/commentsInfo";
import {PostsService} from "../../service/postsService";
import {CmtService} from "../../service/cmtService";

class PostsCmtArr extends Component {

    getCmtService = new CmtService()
    getPostsService = new PostsService()
    state = {posts: [], comments: []};

    componentDidMount() {
        this.getPostsService.getPosts().then(postsAPI =>
            this.setState({posts: postsAPI}));
        this.getCmtService.getCmt().then(commentsAPI =>
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