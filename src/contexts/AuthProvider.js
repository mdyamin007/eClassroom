import React, { createContext, useState, useEffect } from "react";
import app from "../Firebase";
import store from "../store/configureStore"

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
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        store
      }}
    >
      {!pending && children}
    </AuthContext.Provider>
  );
}
