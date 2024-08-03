import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd/es/radio";

const NotFound = () => {
  return (
    <div>
      NotFound
      <Link to={"/"}>
        <Button style={{ margin: "0 auto" }} type="primary">
          Go To HomePage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
