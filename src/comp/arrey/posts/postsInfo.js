import React, {Component} from 'react';
import './postStyle.css'
import {Link, withRouter} from "react-router-dom";

class PostsInfo extends Component {
    state = {postOn:"off"}
    no = true;

    hidenPost =()=>{
        if (this.no){
            this.setState({postOn:'on'})
        }else {
            this.setState({postOn:'off'})
        }
        this.no = !this.no
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
                <div className={postOn}>{info.body} </div>
                <Link to={`${url}/${info.id}`}>More</Link>


            </div>
        );
    }
}

export default withRouter(PostsInfo);