import React, {Component} from 'react';
import './postStyle.css'
import {withRouter} from "react-router-dom";


class PostsInfo extends Component {


    render() {
        let {info} = this.props
        return (
            <div>
                <hr/>{info.title} <br/> {info.body}<hr/>
            </div>
        );
    }
}

export default withRouter(PostsInfo);