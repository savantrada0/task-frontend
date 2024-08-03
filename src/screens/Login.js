import React, { useState } from "react";
import axios from "axios";
import { Input, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://task-backend-atjw.onrender.com/api/users/login",
        formData
      );
      navigate("/login-success");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form_page">
      <div className="content">
        <h1 className="heading">Admin Login Form</h1>

        <div>
          <Form
            autoComplete="off"
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={formData}
            hideRequiredMark
          >
            <div className="form_container">
              <div className="contactinfo_container">
                <Form.Item
                  name={"email"}
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter email",
                    },
                  ]}
                  value={formData.email}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name={"password"}
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                    { whitespace: true },
                    { min: 3 },
                  ]}
                  value={formData.password}
                >
                  <Input
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Button type="primary" htmlType="sumbit">
                  Login
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
