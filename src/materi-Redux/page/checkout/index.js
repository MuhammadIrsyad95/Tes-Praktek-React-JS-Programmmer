import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { entities } = useSelector((state) => state.cart);
  const countTotalPrice = (product) => {
    const result = product.reduce((prevValue, currValue) => {
      return prevValue + parseInt(currValue.sell, 10);
    }, 0);

    return result;
  };
  const countTotalBuy = (product) => {
    const result = product.reduce((prevValue, currValue) => {
      return prevValue + parseInt(currValue.buy, 10);
    }, 0);

    return result;
  };
  const countTotalStock = (product) => {
    const result = product.reduce((prevValue, currValue) => {
      return prevValue + parseInt(currValue.stock, 10);
    }, 0);

    return result;
  };
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {entities.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>Rp. {item.buy},-</td>
                <td>Rp. {item.sell},-</td>
                <td>Rp. {item.stock},-</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>Rp. {countTotalPrice(entities)}.00,-</td>
            <td>Rp. {countTotalBuy(entities)}.00,-</td>
            <td> {countTotalStock(entities)}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default CheckoutPage;
