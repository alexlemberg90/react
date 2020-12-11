import React, {Component} from 'react';
import PostsInfo from "./posts/postsInfo";
import {PostsService} from "../../service/postsService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
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
        let {match:{url}} = this.props;
        console.log(this.props)
        return (
            <div>
                <h1>Posts List</h1>

                {
                   posts && posts.map(value => (<PostsInfo info={value} key={value.id}/>))
                }
                <div className={'infoBlock'}>
                    <Switch>
                        <Route path={url + `/:id`} render={() => {
                            return }} />
                    </Switch>
                </div>
            </div>
        );
    };
};

export default withRouter (PostsArr);