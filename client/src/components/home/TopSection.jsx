import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TopSection = () => {
  return (
    <>
      <Container style={{ height: "60vh" }}>
        <Row className="align-items-center h-100">
          <Col lg={5}>
            <h1>Looking to save more on your rental car?</h1>
            <hr />
            <p className="text-secondary">
              Discover RentalX car rental aoptions in India with Rent a Car
              Select from a range of car options and local specials
            </p>
            <div className="d-flex gap-2">
              <Button
                variant="contained"
                className="d-flex gap-2 align-items-center rounded-pill"
              >
                <img
                  width={30}
                  height={30}
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2013/02/car-race1.png"
                  alt=""
                />
                Old School
              </Button>
              <Button
                style={{ background: "#CBF893" }}
                variant="contained"
                className="d-flex gap-2 text-dark align-items-center rounded-pill"
              >
                <img
                  width={30}
                  height={30}
                  src="https://preview.redd.it/4-9-0-ota2-new-cars-and-event-details-v0-kihrtvwvexjc1.png?width=256&format=png&auto=webp&s=6694139c5ef0c707f15beea34ed14d1a891e5613"
                  alt=""
                />
                New School
              </Button>
            </div>
          </Col>
          <Col lg={7} className="img-before">
            <img
              width={"100%"}
              src="https://webdesignmastery.github.io/RentalX_20-07-24/assets/header.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopSection;
