import React, {Component} from 'react';
import UserArrey from "./comp/arrey/userArrey";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {

    state = {id:''};

    userId = React.createRef();
    form = React.createRef();


    render() {
        let {id} = this.state
        return (
            <div>
                <form onSubmit={this.send} ref={this.form}>
                    <input type={'number'}/>
                    <button>finde</button>
                </form>
                <hr/>
                   <UserArrey userId={id} key={id}/>

            </div>
        );
    }

    send = (e) => {
        e.preventDefault()
            this.setState({id: e.target.children[0].value});
    }


}

export default App;