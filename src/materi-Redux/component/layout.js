import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React JS Programmer</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
          <Button onClick={() => navigate("/")}>Product</Button>
          <Button onClick={() => navigate("/detail/123")}>Detail</Button>
          <Button onClick={() => navigate("/checkout")}>Checkout</Button>
        </div>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
