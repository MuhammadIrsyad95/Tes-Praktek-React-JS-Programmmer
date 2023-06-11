import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [hargaBeli, sethargaBeli] = useState("");
  const [hargaJual, sethargaJual] = useState("");
  const [stok, setstok] = useState("");

  const onSubmit = () => {
    const timeStamp = Math.floor(Date.now() / 1000);
    const payload = {
      id: timeStamp,
      title,
      hargaBeli,
      hargaJual,
      stok,
    };
    handleSubmit(payload);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Course</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Masukkan Nama Barang"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Harga Beli</Form.Label>
            <Form.Control
              onChange={(e) => sethargaBeli(e.target.value)}
              type="number"
              placeholder="Masukkan Harga Beli"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              onChange={(e) => sethargaJual(e.target.value)}
              type="number"
              placeholder="Masukkan Harga Jual"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stok</Form.Label>
            <Form.Control
              onChange={(e) => setstok(e.target.value)}
              type="number"
              placeholder="Masukkan Jumlah stok"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
        <Button onClick={onSubmit} variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseCreateModal;
