import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoArrowForwardOutline } from "react-icons/io5";
import LoginForm from "./LoginForm";

const Front = () => {
  return (
    <>
      <Container className="text-center p-5">
        <Row>
          <Col xl={6} className="my-3">
            <div className="text-center">
              <h5>Largest Car Source</h5>
              <h2 className="text-uppercase display-4">
                powered by <span className="bg-line">creators around</span> the
                world
              </h2>
              <div className="d-flex justify-content-center">
                <div className="p-4 rounded-circle bg-danger"></div>
                <div className="p-4 rounded-circle bg-info"></div>
                <div className="p-4 rounded-circle bg-success"></div>
                <div className="p-4 rounded-circle bg-warning"></div>
              </div>
            </div>
            <div className="d-flex flex-column mt-5">
              <p className="text-secondary-fw-medium">
                Don't have an account?
                <p className="text-dark underline fw-bold my-2">
                  Create account <IoArrowForwardOutline />
                </p>
              </p>
            </div>
            <div className="d-flex bg-image-about p-5 rounded-5 text-md">
              <h6 style={{ width: "75%" }}>About us</h6>
              <p className="text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                aliquid corporis, illum, cum nesciunt dicta accusamus distinctio
                eaque in tempore dolor mollitia repellat. Eos expedita harum, in
                libero saepe asperiores.
              </p>
            </div>
          </Col>
          <Col
            xl={6}
            className="login-section rounded-3 d-flex justify-content-center align-items-center p-5"
          >
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Front;
