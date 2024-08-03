import React, { useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { Button, Result } from "antd";

const VerifySuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const verify = async (token) => {
    try {
      const response = await axios.get(
        `https://task-backend-atjw.onrender.com/api/users/verify-email?token=${token}`
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      verify(token);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Result
      status="success"
      title="Successfully verified email"
      extra={[
        <Link to={"/"}>
          <Button style={{ margin: "0 auto" }} type="primary">
            Go To HomePage
          </Button>
        </Link>,
      ]}
    />
  );
};

export default VerifySuccess;
