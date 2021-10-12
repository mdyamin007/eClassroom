import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import app from "../utils/Firebase";
import { signedOut } from "../store/auth";
import { withRouter } from "react-router-dom";
import { classConnected, classDisconnected } from "../store/class";
import { useCookies } from "react-cookie";

const Navbar = (props) => {
  const { store } = useContext(AuthContext);
  const [classID, setClassID] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["class"]);

  useEffect(() => {
    async function getClassID() {
      const ID = await cookies.class;
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
          setCookie("class", classID, {
            path: "/",
            expires: new Date(Date.now() + 1e11),
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
    removeCookie("class");
    removeCookie("userType");
  };

  return (
    <>
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

      <div className="container-fluid my-2 d-flex justify-content-end">
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
    </>
  );
};

export default withRouter(Navbar);
