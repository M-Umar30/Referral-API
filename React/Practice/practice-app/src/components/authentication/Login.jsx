import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";



const Login = () => {
  const history = useHistory();

  const handleLogin = async (e) => {
       
    // TODO: Call API to login
    //If successful, redirect to home page
    history.push("/home");
  }

  return (
    <div className="form-container">
        <h1 className="home-heading">Login</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3 floating-label"
      >
        <Form.Control type="text" placeholder="Username" style={{width: '350px'}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="floating-label">
        <Form.Control type="password" placeholder="Password" style={{width: '350px'}}/>
      </FloatingLabel>
      <button className="submit-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
