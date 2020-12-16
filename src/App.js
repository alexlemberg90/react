import React, {Component} from 'react';
import UserArrey from "./comp/arrey/userArrey";

class App extends Component {

    state = {id:''};

    userId = React.createRef();
    form = React.createRef();

    render() {
        let {user,id} = this.state
        return (
            <div>
                <form onSubmit={this.send} ref={this.form}>
                    <input type={'number'} onInput={this.getId} value={id}/>
                    <button>finde</button>
                    {id && <UserArrey userId={id}/>}
                </form>
                <hr/>

            </div>

        );
    }


    send = (e) => {
        e.preventDefault()
    }
    getId = (e) =>{
        this.setState({id: e.target.value});
    }


}

export default App;