import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import "antd/dist/antd.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";

function Register() {
  const onFinish = async (values) => {
    console.log("Success:", values);
    // const API_URL = "http://localhost:59042/api";
    const response = await fetch(`${API_URL}/User/AddNewUser`, {
      method: "POST",
      body: JSON.stringify({ values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    // var mobileNo = values.mobileNo.replace(/[ ]+/g, "");
    // console.log(mobileNo);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch(`${API_URL}/Miscellaneous/GetCountries`);
      const { data } = await res.json();
      setCountries(data);
    };
    getCountries();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="first_Name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your first Name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Firstname" />
          </Form.Item>

          <Form.Item
            name="last_Name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your Last name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Last name" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="country_ID"
            label="Country"
            rules={[
              {
                required: true,
                message: "Please select counrty",
              },
            ]}
          >
            <Select placeholder="Select Country">
              {countries.map((country) => (
                <Select.Option key={country.id} value={country.id}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="mobileNo"
            label="Mobile No"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please enter a valid Mobile No",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Add your Mobile No" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default Register;
