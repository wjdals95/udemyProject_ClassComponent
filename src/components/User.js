import { Component } from "react";

import classes from "./User.module.css";
// porps같은 여러 속성을 추가하기위해 리액트에서 Component를 가져와서 아래처럼 extends Component를 추가해줘서 확장시킨다.

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }
  render() {
    // props를 사용할때 예약어 this와 함께 써야한다.
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
