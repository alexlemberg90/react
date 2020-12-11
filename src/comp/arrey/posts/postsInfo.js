import React, {Component} from 'react';
import './postStyle.css'
import {Link, withRouter} from "react-router-dom";

class PostsInfo extends Component {
    state = {postOn:false}


    hidenPost =()=>{
        const {postOn} = this.state;
        if (postOn){
            this.setState({postOn: false})
        }else {
            this.setState({postOn: true})
        }

    }

    render() {
        let {info,match:{url}} = this.props
        let {postOn} = this.state
        return (
            <div className={'postBord'}>
                {info.userId}
                <br/>
                {info.title}
                <button onClick={this.hidenPost}>More</button>
                <br/>
                {postOn && <div>{info.body} </div>}
                <Link to={`${url}/${info.id}`}>More</Link>


            </div>
        );
    }
}

export default withRouter(PostsInfo);