import { useEffect } from "react";
import { Container, Image, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../store/cart/slice";
import { getDetail } from "../../store/product/action";
import httpService from "../../utils/service";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity, loading } = useSelector((state) => state.product);

  const fetchProductDetail = async (prodId) => {
    //const response = await httpService.get(`/product/${prodId}`);
    //console.log("response", response);//
    await dispatch(getDetail(prodId));
  };

  useEffect(() => {
    fetchProductDetail(id);
  }, []);
  return (
    <Container style={{ marginTop: "100px" }}>
      {loading ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Image
              style={{ width: "100%", objectFit: "contain" }}
              src={entity.image}
              thumbnail
              rounded
            />
          </Col>

          <Col md={4}>
            <h3>{entity.title}</h3>
            <p>{entity.description}</p>
            <h5>Harga Beli = Rp.{entity.price},-</h5>

            <Button
              onClick={() => dispatch(addItem(entity))}
              variant={"success"}
            >
              + Tambahkan Ke Keranjang
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DetailPage;
