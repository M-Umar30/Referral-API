import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <div className="form-container">
      <h1 className="home-heading">Register</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3 floating-label"
      >
        <Form.Control
          type="text"
          placeholder="Username"
          style={{ width: "350px" }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingEmail"
        label="Email"
        className="mb-3 floating-label"
      >
        <Form.Control
          type="text"
          placeholder="Email"
          style={{ width: "350px" }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="floating-label"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          style={{ width: "350px" }}
        />
      </FloatingLabel>
      <button className="submit-button">Register</button>
    </div>
  );
};

export default Register;
