import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import CourseDeleteModal from "./components/courseDeleteModal";
import CourseEditModal from "./components/courseEditModal";
import courseService from "./utils/service";

const MateriCURD = () => {
  const [showCreateModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [course, setCourses] = useState([]);

  const toggleCreateModal = () => {
    setShowModal(!showCreateModal);
  };

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  };

  const fetchCourses = () => {
    const response = courseService.getCourses();
    setCourses(response.data);
  };

  const openEditModal = (course) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedCourse({});
    setShowEditModal(false);
  };

  const handleEditCourse = (course) => {
    // todo handle edit
    const { id, ...others } = course;
    courseService.updateCourse(id, others);
    closeEditModal();
    fetchCourses();
  };

  const openDeleteModal = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false);
  };

  const handleDeleteCourse = () => {
    const { id } = selectedCourse;
    courseService.deleteCourse(id);
    fetchCourses();
    closeDeleteModal();
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h3>React js Programmer - CRUD</h3>
          <Button
            style={{ marginBottom: "24px", marginTop: "24px" }}
            variant={"primary"}
            onClick={toggleCreateModal}
          >
            Buat List Barang
          </Button>
          <Table>
            <thead>
              <tr>
                <td>No</td>
                <td>Nama Barang</td>
                <td>Harga Beli</td>
                <td>Harga jual</td>
                <td>Stok</td>
                <td>Foto Barang</td>

                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {course.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.hargaBeli}</td>
                    <td>{item.hargaJual}</td>
                    <td>{item.stok}</td>
                    <td>
                      {item.foto && (
                        <img src={item.foto.url} alt={item.foto.filename} />
                      )}
                    </td>
                    {/* <td>{item.foto}</td> */}
                    <td>
                      <Button
                        variant={"warning"}
                        onClick={() => openEditModal(item)}
                      >
                        Edit
                      </Button>{" "}
                      {""}
                      <Button
                        variant={"danger"}
                        onClick={() => openDeleteModal(item)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>2</td>
                <td>Course 2</td>
                <td>Desc 2</td>
                <td>
                  <Button variant={"warning"}>Edit</Button> {""}
                  <Button variant={"danger"}>Delete</Button>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModal
        show={showCreateModal}
        handleClose={toggleCreateModal}
        handleSubmit={handleAddCourse}
      />
      <CourseEditModal
        data={selectedCourse}
        show={showEditModal}
        handleClose={closeEditModal}
        handleSubmit={handleEditCourse}
      />
      <CourseDeleteModal
        show={showDeleteModal}
        handleClose={closeDeleteModal}
        onConfirm={handleDeleteCourse}
      />
    </Container>
  );
};

export default MateriCURD;
