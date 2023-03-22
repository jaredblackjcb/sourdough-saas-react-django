import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form, FormControl, Card } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

import { register } from "../actions/userActions";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.userLogin) || {};
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(email, password));
  };

  return (
    <Container fluid>
      {/* TODO: Add custom error and loader components */}
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      <Row>
        <Col xs={0} md={6} className="p-0">
          <Container
            className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url('https://github.com/creativetimofficial/material-dashboard/blob/master/assets/img/illustrations/illustration-signup.jpg?raw=true')`,
              backgroundSize: "cover",
            }}
          ></Container>
        </Col>
        <Col xs={12} md={7} lg={5} xl={4} className="d-flex align-items-center justify-content-center">
          <Card className="card-plain mt-6">
            <Card.Header>
              <h4 className="font-weight-bolder">Sign up</h4>
              <p className="mb-0">Enter your email and password to register</p>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 input-group-static" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 input-group-static" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Check className="form-check-info text-start ps-0">
                  <Form.Check.Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label" htmlFor="flexCheckDefault">
                    I agree to the{" "}
                    <a href="/terms/" target="_blank" className="text-dark font-weight-bolder">
                      Terms and Conditions
                    </a>
                  </Form.Check.Label>
                </Form.Check>
                <Button className="btn btn-primary w-100" type="submit" color="primary" onClick={handleSubmit}>
                  Sign up
                </Button>
                <a className="btn btn-outline-secondary w-100" href="/accounts/google/login/">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="pg-icon">
                      <FcGoogle size={"2em"} />
                    </span>
                    <p> </p>
                    Continue with Google
                  </div>
                </a>
              </Form>
            </Card.Body>
            <hr />
            <Card.Footer className="text-center pt-0 px-lg-2 px-1">
              <p className="mb-2 text-sm mx-auto">
                Already have account?{" "}
                <Link className="text-primary text-gradient font-weight-bold" to="/login">
                  Login
                </Link>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
