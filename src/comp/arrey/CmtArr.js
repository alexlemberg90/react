import React, {Component} from 'react';
import CommentsInfo from "./comments/commentsInfo";
import {CmtService} from "../../service/cmtService";

class CmtArr extends Component {

    getCmtService = new CmtService();
    state = {comments: []};

    async componentDidMount() {
        let comments = await this.getCmtService.getCmts();
        this.setState({comments});
    };

    render() {
        let {comments} = this.state;
        return (
            <div>
                <h1>Comments List</h1>
                {
                   comments && comments.map(value => (<CommentsInfo info={value} key={value.id}/>))
                }
            </div>
        );
    };
}

export default CmtArr;