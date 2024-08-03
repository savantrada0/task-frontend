import React from "react";
import { Button, Result } from "antd";
import { Link, useNavigate } from "react-router-dom";

const LoginSuccess = () => (
  <Result
    status="success"
    title="Successfully login"
    extra={[
      <Link to={"/"}>
        <Button style={{ margin: "0 auto" }} type="primary">
          Go To HomePage
        </Button>
      </Link>,
    ]}
  />
);
export default LoginSuccess;
