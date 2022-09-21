import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getCarById,
  getLoading,
  saveNewCar,
  updateCar,
} from "../features/cars/carslice";
import { useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
  const { id } = useParams();
  const itemToEdit = useSelector(getCarById(Number(id)));
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: itemToEdit.name,
      year: itemToEdit.year,
      imageUrl: itemToEdit.imageUrl,
    },
  });

  const disptach = useDispatch();
  const navigate = useNavigate();
  const apiStatus = useSelector(getLoading);

  const updateCarForm = (data) => {
    let payload = {
      id: Number(id),
      name: data.name,
      year: Number(data.year),
      imageUrl: data.imageUrl,
    };
    disptach(updateCar(payload))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Update A New Car</legend>
            <Form onSubmit={handleSubmit(updateCarForm)}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formModelYear">
                <Form.Label>Model Year</Form.Label>
                <Controller
                  control={control}
                  name="year"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImgUr">
                <Form.Label>Image URL</Form.Label>
                <Controller
                  control={control}
                  name="imageUrl"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                disabled={apiStatus === "pending"}
              >
                {apiStatus === "pending" ? "Updating........." : "Update"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditCar;
