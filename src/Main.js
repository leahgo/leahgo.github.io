import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/CovidDashboard">CovidDashboard</Link>
    </div>
  );
};

export default Main;
