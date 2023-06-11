import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { entities } = useSelector((state) => state.cart);
  const countTotalPrice = (product) => {
    const result = product.reduce((prevValue, currValue) => {
      return prevValue + parseInt(currValue.price, 10);
    }, 0);
    return result;
  };
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {entities.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>$ {countTotalPrice(entities)},00</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default CheckoutPage;
