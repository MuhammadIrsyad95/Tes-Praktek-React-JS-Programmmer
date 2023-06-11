import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HALO AKU LAYOUT</div>
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <Button onClick={() => navigate("/")}>Product</Button>
        <Button onClick={() => navigate("/detail/123")}>Detail</Button>
        <Button onClick={() => navigate("/checkout")}>Checkout</Button>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
