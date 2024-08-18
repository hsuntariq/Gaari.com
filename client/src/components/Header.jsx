import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LuSearch } from "react-icons/lu";
import SignUpModal from "./authentication/SignUpModal";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar expand="lg" className="bg-white container rounded-pill p-2 my-3">
      <Container>
        <Navbar.Brand href="#home">Gaari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-medium" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-medium" href="#link">
              About
            </Nav.Link>
            <Nav.Link className="fw-medium" href="#link">
              Cars
            </Nav.Link>
            <Nav.Link className="fw-medium" href="#link">
              Bikes
            </Nav.Link>
            <form
              style={{ background: "#E6E6E6" }}
              className="d-flex  border rounded-pill align-items-center px-3"
            >
              <span>
                <LuSearch size={24} />
              </span>
              <input
                style={{ width: "600px" }}
                type="text"
                placeholder="Try LC300"
                className="form-control bg-transparent border-0 rounded-pill"
              />
            </form>
          </Nav>
          {user ? (
            <>
              <Button
                style={{ background: "#d1ff97" }}
                className="rounded-pill  login-btn px-4 border-0 text-dark fw-medium"
              >
                <img
                  src={user?.image}
                  width={20}
                  height={20}
                  className="rounded-circle"
                  alt=""
                />{" "}
                {user?.name}
              </Button>
            </>
          ) : (
            <SignUpModal />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
