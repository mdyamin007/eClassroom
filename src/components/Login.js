import React, { useCallback, useContext } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import app from "../Firebase";
import "../styles/Login.css";
import image from "../images/eclassroom.png";
import { signedIn } from "../store/auth";
import cookies from "../utils/cookies";

const Login = () => {
  const { currentUser, store } = useContext(AuthContext);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        await app
          .database()
          .ref("Users")
          .orderByChild("email")
          .equalTo(email.value)
          .once("value")
          .then((snapshot) => {
            let obj = snapshot.val();
            let data = obj[Object.keys(obj)[0]];
            store.dispatch(signedIn(data.email, data.userType));
            cookies.set("userType", data.userType, {
              path: "/",
              secure: true,
              sameSite: "None",
            });
          })
          .catch((e) => {
            alert(e);
          });
      } catch (error) {
        alert(error);
      }
    }, []
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center text-white">
        <form onSubmit={handleLogin}>
          <div className="row">
            <div className="col-3 mt-5 pt-5">
              <img src={image} alt="logo" style={{ width: "60px" }} />
            </div>
            <div className="col-9 mt-5 pt-5">
              <h1 className="display-4"> eClassroom </h1>
            </div>
          </div>
          <div className="mt-5 mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="yamin123@gmail.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="******"
            />
          </div>
          <button type="submit" className="btn btn-primary login-button">
            Login
          </button>
          <br />
          <br />
          <Link className="text-danger" to="/signup">
            If you're new, Register Here
          </Link>
        </form>
      </div>
    </>
  );
};

export default withRouter(Login);
