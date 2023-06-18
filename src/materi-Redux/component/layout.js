import { Button, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            gap: "10px",
            margin: "10px 0",
          }}
        >
          <h1> My Store</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            margin: "10px 0",
          }}
        >
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
