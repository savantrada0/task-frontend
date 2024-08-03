import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  return (
    <div className="form_page">
      <div className="content">
        <div className="home_container">
          <Link to="/customer">
            <Button className="ant-btn-home" type="primary">
              Customer SignUP
            </Button>
          </Link>
          <Link to="/admin">
            <Button className="ant-btn-home" type="primary">
              Admin SignUP
            </Button>
          </Link>
          <Link to="/login">
            <Button className="ant-btn-home" type="primary">
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
