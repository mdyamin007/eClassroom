import React, { useCallback, useContext, useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import app from "../utils/Firebase";
import "../styles/Signup.css";
import { AuthContext } from "../contexts/AuthProvider";
import image from "../images/eclassroom.png";
import { signedIn } from "../store/auth";
import { useCookies } from "react-cookie";

const Signup = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["class"]);
  const { currentUser, store } = useContext(AuthContext);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, name, school, password, userType } = event.target.elements;
      try {
        setLoading(true);
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        await app.database().ref("Users/").push().set({
          email: email.value,
          name: name.value,
          passForUser: "",
          school: school.value,
          userType: userType.value,
        });
        await store.dispatch(signedIn(email.value, userType.value));
        setCookie("userType", userType.value, {
          path: "/",
          expires: new Date(Date.now() + 1e11),
          secure: true,
          sameSite: "None",
        });
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    },
    [store]
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <section className="signup">
      <div className="form-signup text-center">
        <img className="my-2" src={image} alt="logo" width="60px" />
        <h1 className="title h3 m -5 fw-bold">eClassroom</h1>
        <form onSubmit={handleSignUp}>
          <div className="form-floating mb-2">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              name="school"
              className="form-control"
              id="school"
              placeholder="School/College/University"
            />
            <label htmlFor="school">School/College/University</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <select
            className="form-select mb-3 fw-bold select"
            aria-label="User Type"
            name="userType"
          >
            <option value="user">User</option>
          </select>
          <button
            className="w-100 btn btn-lg btn-danger button-signup"
            type="submit"
            disabled={loading}
          >
            Sign up
          </button>
          <br /> <br />
          <Link className="link" to="/login">
            Already have account? Login Here.
          </Link>
          <p className="mt-5 mb-3 text-muted">&copy; DUET</p>
        </form>
      </div>
    </section>
  );
};

export default withRouter(Signup);
