import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import Updated from "./pages/updated/Updated.jsx";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/users">
          <UserList />
          </Route>
          <Route path="/user/:userId">
          <User/>
          </Route>
          <Route path="/newUser">
          <NewUser/>
          </Route>
          <Route path="/updated">
          <Updated />
          </Route>
         
        </Switch>
      </div>
      </Router>
    
  );
}

export default App;
