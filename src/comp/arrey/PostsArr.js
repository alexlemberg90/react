import React, {Component} from 'react';
import PostsInfo from "./posts/postsInfo";
import CommentsArr from "./comments/commentsArr";

class PostsArr extends Component {
    state = {posts:[],comments:[]};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsAPI =>{
                this.setState({posts:postsAPI});
            });
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsAPI =>{
                this.setState({comments:commentsAPI});
            });
    };


    render() {
        let {posts,comments} = this.state;
        return (
            <div>
                <h1>Posts List</h1>

                {
                    posts.map(value => (<PostsInfo info={value} key={value.id}/>))
                }
                {
                    comments.map(value => (<CommentsArr info={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default PostsArr;