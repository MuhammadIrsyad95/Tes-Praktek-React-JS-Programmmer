import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [hargaBeli, sethargaBeli] = useState("");
  const [hargaJual, sethargaJual] = useState("");
  const [stok, setstok] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoURL, setFotoURL] = useState("");

  const onSubmit = () => {
    const payload = {
      id: data.id,
      title,
      hargaBeli,
      hargaJual,
      stok,
      foto: fotoURL,
    };
    handleSubmit(payload);
  };
  useEffect(() => {
    sethargaBeli(data.hargaBeli);
    sethargaJual(data.hargaJual);
    setstok(data.stok);
    setFoto(data.foto);
    setFotoURL(data.foto);
    setTitle(data.title);
  }, [data]);
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
          <Form.Group className="mb-3">
            <Form.Label>Foto Barang</Form.Label>
            <Form.Control
              onChange={handleFotoChange}
              type="file"
              accept="image/*"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
        <Button onClick={onSubmit} variant="primary">
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseEditModal;
