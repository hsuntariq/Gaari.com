import React, { useEffect } from "react";
import Header from "../components/Header";
import Front from "../components/Front";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userReset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userError, userMessage, userSuccess, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      navigate("/home");
    }

    dispatch(userReset());
  }, [userError, dispatch, userSuccess]);
  return (
    <>
      <Header />
      <Front />
    </>
  );
};

export default Login;
