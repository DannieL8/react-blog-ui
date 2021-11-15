import React, { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { hideHeader, showHeader } from "../../store/actions/UiActions";
import { loginUser } from "../../store/actions/AuthActions";

const Authentication = ({ history }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // hide header only when component is mounted.
  useEffect(() => {
    dispatch(hideHeader());
  }, [dispatch]);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const loginHandler = () => {
    // Login the user
    dispatch(loginUser(user));
    if (isLoggedIn) {
      dispatch(showHeader());
      history.push("/posts");
    }
  };

  return <AuthForm login={loginHandler} changeHandler={changeHandler} />;
};

export default Authentication;
