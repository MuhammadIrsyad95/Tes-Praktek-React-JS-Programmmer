import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [hargaBeli, sethargaBeli] = useState("");
  const [hargaJual, sethargaJual] = useState("");
  const [stok, setstok] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoURL, setFotoURL] = useState("");
  // const [foto, setFoto] = useState(null);

  // const handleFotoChange = (e) => {
  //   setFoto(e.target.files[0]);
  // };
  const handleFotoChange = (e) => {
    const selectedFile = e.target.files[0];

    // Mengecek format file
    const allowedTypes = ["image/jpeg", "image/png"];
    if (allowedTypes.includes(selectedFile.type)) {
      // Mengecek ukuran file
      if (selectedFile.size <= 100 * 1024) {
        setFoto(selectedFile);

        // Membuat URL untuk foto yang akan ditampilkan
        const fotoObjectURL = URL.createObjectURL(selectedFile);
        setFotoURL(fotoObjectURL);
      } else {
        alert("Ukuran file foto terlalu besar. Maksimal 100KB.");
      }
    } else {
      alert(
        "Format file foto tidak valid. Hanya format JPG dan PNG yang diizinkan."
      );
    }
  };

  const onSubmit = () => {
    const timeStamp = Math.floor(Date.now() / 1000);
    const payload = {
      id: timeStamp,
      title,
      hargaBeli,
      hargaJual,
      stok,
      foto: "fotoURL",

      // foto: null,
    };
    handleSubmit(payload);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buat List Barang</Modal.Title>
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

          <Form.Group className="mb-3">
            <Form.Label>Foto Barang</Form.Label>
            <Form.Control
              onChange={handleFotoChange}
              type="file"
              accept="image/*"
            />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              onChange={handleFotoChange}
              type="file"
              accept="image/*"
            />
          </Form.Group> */}
        </Form>
        {fotoURL && (
          <div>
            <Form.Label>Foto Barang</Form.Label>
            <img src={fotoURL} alt="Foto Barang" />
          </div>
        )}
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
