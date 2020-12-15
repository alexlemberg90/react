import React, {Component} from 'react';
import './cmtStyle.css'
import {CmtService} from "../../../service/cmtService";

class CommentsInfo extends Component {
    state = {cmtOn:false,cmt: null}
    cmtServise = new CmtService()

    hidenCmt =()=>{
        const {cmtOn} = this.state
        if (cmtOn){
            this.setState({cmtOn: false})
        }else {
            this.setState({cmtOn: true})
        }
    }
    async componentDidMount(){
        let {match:{params:{id}}} = this.props
        let cmt = await this.cmtServise.getCmt(id)
        this.setState({cmt})
    }
    l
    render() {

        let {info} = this.props;
        let {cmtOn} = this.state;
        return (
            <div className={'cmtBord'}>
                <div>{info.name}
                    <br/>
                {info.email}
                    <button onClick={this.hideninfo}>Read</button>
                    <br/>
                {cmtOn &&<div>{info.body}</div>}
                    </div>

            </div>
        );
    }
}

export default CommentsInfo;