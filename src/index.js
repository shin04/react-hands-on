import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./card";

import "./styles.css";

function App() {
  const [isSwiped, setIsSwiped] = React.useState(false);
  const [userList, setUserList] = React.useState([
    {
      name: "ゆみ",
      age: 23,
      rate: 95,
      community: "まじめに探しています",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    },
    {
      name: "OT",
      age: 24,
      rate: 90,
      community: "よく笑う人が好き",
      image:
        "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80"
    },
    {
      name: "OP",
      age: 25,
      rate: 40,
      community: "旅行大好き！",
      image:
        "https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    },
    {
      name: "ゆみ",
      age: 23,
      rate: 95,
      community: "まじめに探しています",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    },
    {
      name: "OT",
      age: 24,
      rate: 90,
      community: "よく笑う人が好き",
      image:
        "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80"
    },
    {
      name: "OP",
      age: 25,
      rate: 40,
      community: "旅行大好き！",
      image:
        "https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    }
  ]);
  const [currentUser, setCurrentUser] = React.useState(userList[0]);
  const [nextUser, setNextUser] = React.useState(userList[1]);

  const clickLike = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
      setCurrentUser(nextUser);
      setNextUser(userList[2]);
      setUserList(userList.slice(1));
    }, 1000);
  };

  return (
    <div className="App">
      <h1 className="title">お相手からのいいね！</h1>
      <div className="card-container">
        {nextUser !== undefined ? (
          <Card
            name={nextUser.name}
            age={nextUser.age}
            rate={nextUser.rate}
            community={nextUser.community}
            image={nextUser.image}
            isSwiped={false}
          />
        ) : null}
        {currentUser !== undefined ? (
          <Card
            name={currentUser.name}
            age={currentUser.age}
            rate={currentUser.rate}
            community={currentUser.community}
            image={currentUser.image}
            isSwiped={isSwiped}
          />
        ) : null}
      </div>
      <div className="buttons">
        <button className="button-nope">
          <svg style={{ width: "40px", height: "40px" }} viewBox="0 0 24 24">
            <path
              fill="#cbced0"
              d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"
            />
          </svg>
        </button>
        <button onClick={clickLike} className="button-like">
          <svg style={{ width: "28px", height: "28px" }} viewBox="0 0 24 24">
            <path
              fill="#f67272"
              d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
