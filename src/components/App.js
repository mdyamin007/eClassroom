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
import PageNotFound from "./PageNotFound";
import "../styles/index.css";

function App() {
  return (
    <>
      {/* <div className="mt-4 d-flex justify-content-center align-items-center">
        <div className="glass__container">
          <div className="p-4 text-center">
            <h1>Please donate money!</h1>
            <p>
              To keep up and running the website again please donate some money.
            </p>
            <p>
              We need money to renew the domain and for some additional cost.
            </p>
            <h5 className="fw-bold">Bkash: 01915395544</h5>
            <h5 className="fw-bold">Nagad: 01915395544</h5>
            <h5 className="fw-bold">Rocket: 019153955448</h5>
          </div>
        </div>
      </div> */}
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
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
