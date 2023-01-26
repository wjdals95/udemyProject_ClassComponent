import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "정민" },
  { id: "u2", name: "소정" },
  { id: "u3", name: "창현" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
