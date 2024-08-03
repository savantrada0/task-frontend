import React from "react";
import { Button, Result } from "antd";
import { Link, useNavigate } from "react-router-dom";

const RegisterSuccess = () => (
  <Result
    status="success"
    title="Successfully Signup"
    subTitle="Verification Email has been sent to your email address"
    extra={[
      <Link to={"/"}>
        <Button style={{ margin: "0 auto" }} type="primary">
          Go To HomePage
        </Button>
      </Link>,
    ]}
  />
);
export default RegisterSuccess;
