import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import img from "../../assets/images/profile1.png";
import login from "../../assets/images/login.png";
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import "./Login.css";

const Login = () => {
  const [showspin, setShowSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, []);
  return (
    <>
      {showspin ? (
        <Spiner />
      ) : (
        <div className="container">
          <Card className="shadow mt-3 p-3">
            <div className="profile_div">
              <Form>
                <Row>
                  <div className="col-lg-7 image">
                    <img src={login} alt="img" className="login" />
                  </div>
                  <div className="col-lg-5 login">
                    <h4>Login</h4>
                    <hr />
                    <Row>
                      <Form.Group
                        className="mb-3 col-lg-12"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                        />
                      </Form.Group>
                    </Row>  
                    <Row>
                      <Form.Group
                        className="mb-3 col-lg-12"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="col-lg-12">  
                      <Form.Group className="col-lg-6">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Form.Group className="col-lg-6">
                        <a href="#!">Forgot password?</a>
                      </Form.Group>
                      </Row>  
                      <FormGroup>
                        <Button
                          className="col-lg-12"
                          variant="primary"
                          type="submit"
                          size="sm"
                          style={{
                            borderRadius: "0",
                            backgroundColor: "#002b80",
                            marginTop: "20" + "px"
                          }}
                        >
                          SIGN IN
                        </Button>
                      </FormGroup>
                  </div>
                </Row>
              </Form>
            </div>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
};

export default Login;
