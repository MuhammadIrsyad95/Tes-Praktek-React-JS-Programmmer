import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [hargaBeli, sethargaBeli] = useState("");
  const [hargaJual, sethargaJual] = useState("");
  const [stok, setstok] = useState("");

  const onSubmit = () => {
    const payload = {
      id: data.id,
      title,
      hargaBeli,
      hargaJual,
      stok,
    };
    handleSubmit(payload);
  };
  useEffect(() => {
    sethargaBeli(data.hargaBeli);
    sethargaJual(data.hargaJual);
    setstok(data.stok);
    setTitle(data.title);
  }, [data]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ubah Barang</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
              defaultValue={title}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Harga Beli</Form.Label>
            <Form.Control
              onChange={(e) => sethargaBeli(e.target.value)}
              type="number"
              placeholder="Ubah Harga Beli"
              defaultValue={hargaBeli}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              onChange={(e) => sethargaJual(e.target.value)}
              type="number"
              placeholder="Ubah Harga Jual"
              defaultValue={hargaJual}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stok</Form.Label>
            <Form.Control
              onChange={(e) => setstok(e.target.value)}
              type="number"
              placeholder="Ubah Stok"
              defaultValue={stok}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
        <Button onClick={onSubmit} variant="primary">
          Edit Course
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseEditModal;
