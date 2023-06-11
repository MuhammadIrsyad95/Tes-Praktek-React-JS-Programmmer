import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    const payload = {
      id: data.id,
      title,
      description,
    };
    handleSubmit(payload);
  };
  useEffect(() => {
    setDescription(data.description);
    setTitle(data.title);
  }, [data]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Course</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
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
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              placeholder="Description"
              defaultValue={description}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              placeholder="Description"
              defaultValue={description}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stok</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              placeholder="Description"
              defaultValue={description}
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
