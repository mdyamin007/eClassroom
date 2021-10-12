import React, { createContext, useState, useEffect } from "react";
import app from "../utils/Firebase";
import store from "../store/configureStore";
import ScaleLoader from "react-spinners/ScaleLoader";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return unsubscribe;
  }, []);

  if (pending) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ScaleLoader
          color="#00FFFF"
          loading={pending}
          height={50}
          width={6}
          radius={4}
          margin={4}
        />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        store,
      }}
    >
      {!pending && children}
    </AuthContext.Provider>
  );
}
