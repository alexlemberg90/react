import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import {PostsService} from "../../../service/postsService";
import {CmtService} from "../../../service/cmtService";

class UserCmt extends Component {

    getCmtsService = new CmtService();
    state = {comment:[]};

    async componentDidMount() {
        let {postId} = this.props
        let comment = await this.getCmtsService.getCmt(postId)
        this.setState({comment})
    }

    render() {
        let {comment} = this.state
        console.log(this.props)
        return (
            <div>
                {
                    comment.map(value => <div><hr/>{value.body}<hr/></div>)

                }
            </div>
        );
    }
}

export default withRouter(UserCmt);