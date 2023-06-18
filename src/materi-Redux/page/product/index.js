import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../store/product/action";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const { entities } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProducts = async () => {
    dispatch(getAll());
  };

  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {entities.map((product) => {
        return (
          <Card
            key={product.id}
            onClick={() => goToDetail(product.id)}
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title> {product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text> Price = $ {product.price},-</Card.Text>

              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default ProductPage;
