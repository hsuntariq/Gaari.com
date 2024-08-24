import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { carReset, getCarData } from "../features/cars/carSlice";
import { Col, Container, Row } from "react-bootstrap";
const Collections = () => {
  const { carLoading, carSuccess, carError, cars, carMessage } = useSelector(
    (state) => state.cars
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (carError) {
      toast.error(carMessage);
    }

    dispatch(getCarData());

    dispatch(carReset());
  }, [carError, dispatch]);
  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-start">
          {cars?.map((item, index) => {
            return (
              <Col xl={4} lg={4} md={6} key={index}>
                <div className="cards my-2">
                  <img
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                    src={item?.image}
                    width={"100%"}
                    alt="image of car"
                  />
                  <div className="card__content">
                    <p className="card__title">
                      <h2 className="text-capitalize">{item?.brand}</h2>
                    </p>
                    <p className="card__description">
                      {item?.description.substring(0, 100)}...
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Available in:</p>
                      <div
                        className="rounded-circle"
                        style={{
                          width: "20px",
                          height: "20px",
                          background: `${item?.color}`,
                        }}
                      ></div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Model:</p>
                      <p className="m-0 fw-medium">{item?.model}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Registered in:</p>
                      <p className="m-0 fw-medium">{item?.registered}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Milage:</p>
                      <p className="m-0 fw-medium">{item?.mileage}km</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Fuel average:</p>
                      <p className="m-0 fw-medium">{item?.fuel_average}km/l</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Engine:</p>
                      <p className="m-0 fw-medium">{item?.cc}cc</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-secondary m-0">Price:</p>
                      <p className="m-0 fw-medium">Rs.{item?.price}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <a class="button" href="#">
                        <span class="button__icon-wrapper">
                          <svg
                            width="10"
                            class="button__icon-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 15"
                          >
                            <path
                              fill="currentColor"
                              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            ></path>
                          </svg>

                          <svg
                            class="button__icon-svg  button__icon-svg--copy"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            fill="none"
                            viewBox="0 0 14 15"
                          >
                            <path
                              fill="currentColor"
                              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            ></path>
                          </svg>
                        </span>
                        Explore All
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Collections;
