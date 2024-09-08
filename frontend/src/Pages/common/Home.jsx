import React from "react";

import Hero from "../../components/ui/Hero";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Navigate to="/student/me" />;
  }
  return <Hero />;
};

export default Home;
