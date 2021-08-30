import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import AuthProvider from "../contexts/AuthProvider";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import Routine from "./Routine";
import Notice from "./Notice";
import Video from "./Video";
import Slide from "./Slide";
import Student from "./Student";
import Teacher from "./Teacher";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/routine" component={Routine} />
            <PrivateRoute path="/notice" component={Notice} />
            <PrivateRoute path="/video" component={Video} />
            <PrivateRoute path="/slide" component={Slide} />
            <PrivateRoute path="/student" component={Student} />
            <PrivateRoute path="/teacher" component={Teacher} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
