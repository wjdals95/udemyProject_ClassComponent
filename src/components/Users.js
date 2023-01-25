import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "정민" },
  { id: "u2", name: "소정" },
  { id: "u3", name: "창현" },
];

class Users extends Component {
  //useState훅 대신 classcomponent에서 state사용방법
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }
  //class컴포넌트에서는 메소드를 정의 하는 방법에는 아래의 방식이 보편적이다
  toggleUsersHandler() {
    // this.state.showUsers = false // 이렇게 쓰는 것 아님
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
