import React, { useState } from "react";
import axios from "axios";
import { Input, Form, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading("true");
    const { pathname } = location;
    let data = formData;
    if (pathname == "/customer") {
      data.role = "customer";
    } else if (pathname == "/admin") {
      data.role = "admin";
    }
    try {
      const response = await axios.post(
        "https://task-backend-atjw.onrender.com/api/users/register",
        data
      );
      setLoading("false");
      navigate("/register-success");
    } catch (error) {
      setLoading("false");
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form_page">
      <div className="content">
        <h1 className="heading">SignUp Form</h1>

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
                  name={"first_name"}
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your first name",
                    },
                    { whitespace: true },
                    { min: 3 },
                  ]}
                >
                  <Input
                    placeholder="Enter your first name"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name={"last_name"}
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your last name",
                    },
                    { whitespace: true },
                    { min: 3 },
                  ]}
                >
                  <Input
                    placeholder="Enter your last name"
                    onChange={handleChange}
                  />
                </Form.Item>
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
                >
                  <Input
                    placeholder="Password"
                    type={"password"}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Button disabled={loading} type="primary" htmlType="sumbit">
                  Register
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
