import React, {Component} from 'react';
import UserArrey from "./comp/arrey/userArrey";

class App extends Component {

users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
        email: "Shanna@melissa.tv",
      },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
  ];

  render() {
    return (
        <div>
            {
                this.users.map((value,index)=>{
                    let className = 'one'
                    if (index % 2){
                        className = 'two';
                    }
                    return(<UserArrey user={value} key={index} someClass={className}/>)
                })
            }

        </div>
    );
  }
}

export default App;
