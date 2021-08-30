import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import app from "../Firebase";
import { signedOut } from "../store/auth";
import { Link, withRouter } from "react-router-dom";
import { classConnected, classDisconnected } from "../store/class";
import cookies from "../utils/cookies";
import logo from "../images/eclassroom.png"
import "../styles/Navbar2.css"

const Navbar2 = (props) => {
  const { store } = useContext(AuthContext);
  const [classID, setClassID] = useState();

  useEffect(() => {
    async function getClassID() {
      const ID = await cookies.get("class");
      setClassID(ID);
      return ID;
    }
    getClassID();
  }, []);

  const handleConnect = async (e) => {
    e.preventDefault();
    const { adminEmail, classPassword } = e.target.elements;
    const email = adminEmail.value;
    const password = classPassword.value;
    let classID = email.replace(/\./g, "_").replace("@", "__") + password;
    app
      .database()
      .ref("Data/" + classID)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val() === null) {
          alert("Class not found!");
        } else {
          //Redux Operation
          store.dispatch(classConnected(classID));
          cookies.set("class", classID, {
            path: "/",
            secure: true,
            sameSite: "None",
          });
          window.location.reload();
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleLogout = () => {
    app.auth().signOut();
    store.dispatch(signedOut());
    store.dispatch(classDisconnected());
    cookies.remove("userType");
    cookies.remove("class");
  };

  return (
    <>
    <header className="p-2 bg-primary">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div
            className="modal fade"
            id="connectClassModal"
            tabIndex="-1"
            aria-labelledby="connectClassModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="connectClassModalLabel">
                    Connect Class
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleConnect}>
                    <div className="mb-3">
                      <label htmlFor="adminEmail" className="form-label">
                        Admin email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="adminEmail"
                        name="adminEmail"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="classPassword" className="form-label">
                        Class password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="classPassword"
                        name="classPassword"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Connect
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Link to="/" class="d-flex align-items-center fw-bold mb-2 me-2 mb-lg-0 text-white text-decoration-none">
            <img src={logo} className="navbar-logo mx-2" alt="logo"/>eClassroom
          </Link>

          <ul className="nav col-12 col-lg-auto mx-auto justify-content-center align-items-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/routine" className="nav-link px-2 text-white">
                Routine
              </Link>
            </li>
            <li>
              <Link to="/notice" className="nav-link px-2 text-white">
                Notice
              </Link>
            </li>
            <li>
              <Link to="/video" className="nav-link px-2 text-white">
                Video
              </Link>
            </li>
            <li>
              <Link to="/slide" className="nav-link px-2 text-white">
                Slide
              </Link>
            </li>
            <li>
              <Link to="/student" className="nav-link px-2 text-white">
                Student info
              </Link>
            </li>
            <li>
              <Link to="/teacher" className="nav-link px-2 text-white">
                Teacher info
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <button
              className="btn btn-info mx-2"
              data-bs-toggle="modal"
              data-bs-target="#connectClassModal"
              hidden={classID ? true : false}
            >
              Connect Class
            </button>
            <button className="btn btn-danger mx-2" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default withRouter(Navbar2);
