import React, {Component} from 'react';
import './postStyle.css'

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

        let {info} = this.props
        let {postOn} = this.state
        return (
            <div className={'display'}>
                {info.userId}
                <br/>
                {info.title}
                <button onClick={this.hidenPost}>More</button>

                <br/>
                <div className={postOn}>{info.body} </div>

            </div>
        );
    }
}

export default PostsInfo;