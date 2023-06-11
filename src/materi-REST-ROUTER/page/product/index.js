import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import httpService from "../../utils/service";

const ProductPage = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    const response = await httpService.get("/product");

    setList(response.data);

    //     console.log("response", response);
  };

  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {list.map((product) => {
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
              <Card.Text> Beli = Rp.{product.sell},-</Card.Text>
              <Card.Text> Jual = Rp.{product.buy},-</Card.Text>

              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default ProductPage;
