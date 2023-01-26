import { Fragment, useState, useEffect, Component } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    //http에 요청
    this.setState({ filteredUsers: this.context.users });
  }

  //class컴포넌트에는 useEffect가 없으므로 아래의 방법으로 사용한다.
  componentDidUpdate(prevProps, prevState) {
    //무한루프가 되는것을 막기위해 If문을 사용하여 이전의 상태와 비교하여 다르면 실행하도록 함.
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  //componentDidMount() = useEffect(...,[])와 같다.
  //componentDidUpdate() = useEffect(...,[some Value])와 같다.
  //componentWillUnMount() : 컴포넌트가 DOM에서 삭제되기 직전에 호출되며 useEffect의 cleanup 함수와 같다.
  //                      = useEffect(() => {return () => {...}},[])
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     event.target.value;
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
