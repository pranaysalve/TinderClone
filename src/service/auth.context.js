import React, { useState, useEffect, createContext } from "react";
import { loginUser, otpCheck } from "./auth.service";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const LoginUser = (User) => {
    loginUser(User)
      .then((res) => console.log(res))
      .catch((err) => setError(err));
  };

  const OtpCheck = (Details) => {
    otpCheck(Details)
      .then((res) => console.log(res))
      .catch((err) => setError(err));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: !user,
        user,
        isLoading,
        error,
        LoginUser,
        OtpCheck,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
