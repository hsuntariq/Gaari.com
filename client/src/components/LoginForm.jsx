import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../features/auth/authSlice";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // get the values from the global state using useSelector Hook
  const { userLoading } = useSelector((state) => state.auth);

  // call useDispatch hook to run the slice functions
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // make your data, that is going to nbe sent to the backend
    const frontendData = {
      myEmail: email,
      myPassword: password,
    };

    // call the slice function

    dispatch(signIn(frontendData));
  };

  return (
    <>
      <form className="bg-white w-75 p-5 text-start rounded-3 text-dark">
        <h5 className="text-center fw-bold">Login to your account</h5>
        <div className="form-group">
          <label htmlFor="" className="text-secondary fw-medium">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Please enter registered Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-secondary fw-medium">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Please enter valid password"
            className="form-control"
          />
        </div>
        <div className="d-flex my-2 justify-content-between align-items-center">
          <div className="form-group gap-2 d-flex align-items-center">
            <input type="checkbox" className="form-check" />
            <label className="text-secondary fw-medium" htmlFor="">
              Remember me
            </label>
          </div>
          <p className=" p-0 m-0 text-secondary fw-medium">
            Forgot your password?
          </p>
        </div>
        <button
          onClick={handleLogin}
          className="btn btn-dark rounded-5 w-75 d-block mx-auto my-2"
        >
          {userLoading ? (
            <>
              <RotatingLines
                visible={true}
                height="20"
                width="20"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </>
          ) : (
            "login"
          )}
        </button>
        <div className="p-5 rounded-5 bg-transparent khali"></div>
        <h6 className="text-primary mt-3 text-end">New to the app? Sign Up</h6>
      </form>
    </>
  );
};

export default LoginForm;
