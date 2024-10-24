import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";

interface ProductFormData {
  productName: string;
  productType: string;
  dateCreated: string;
  amountOfProduct: string;
  priceForPiece: string;
  available: string;
  aboutProduct: string;
  image: File | null;
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    productName: "",
    productType: "",
    dateCreated: "",
    amountOfProduct: "",
    priceForPiece: "",
    available: "",
    aboutProduct: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container fluid className="px-4 py-4">
        <h3 className="text-start mb-4">New Product</h3>
      <Card className="shadow-sm p-4" style={{ borderRadius: "12px" }}>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Image Upload Section */}
            <Col md={3} className="mb-3">
              <Card
                className="h-100 d-flex align-items-center p-1 rounded-2 justify-content-center"
                style={{
                  cursor: "pointer",
                  border: "1px dashed #ced4da",
                  height: "300px", // Adjusted height
                  borderRadius: "8px",
                }}
                onClick={() => document.getElementById("imageUpload")?.click()}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Product preview "
                    className="img-fluid rounded-2"
                    style={{ maxHeight: "250px", objectFit: "contain" }} // Adjusted max height
                  />
                ) : (
                  <div className="text-center text-muted">
                    <svg
                      width="40"
                      height="40"
                      fill="#dee2e6"
                      viewBox="0 0 16 16"
                      className="mb-2"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <p>Upload Image</p>
                  </div>
                )}
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="d-none"
                  id="imageUpload"
                />
              </Card>
            </Col>

            {/* Form Fields Section */}
            <Col md={9}>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Product Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Date Created</Form.Label>
                    <Form.Control
                      type="date"
                      name="dateCreated"
                      value={formData.dateCreated}
                      onChange={handleInputChange}
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                      Amount of Product
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="amountOfProduct"
                      value={formData.amountOfProduct}
                      onChange={handleInputChange}
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                      Price for 1 Piece
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="priceForPiece"
                      value={formData.priceForPiece}
                      onChange={handleInputChange}
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Available</Form.Label>
                    <Form.Select
                      name="available"
                      value={formData.available}
                      onChange={handleInputChange}
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                        border: "1px solid #ced4da",
                      }}
                    >
                      <option value="">Select availability</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

            

            
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">About Product</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="aboutProduct"
                  value={formData.aboutProduct}
                  onChange={handleInputChange}
                  style={{
                    height: "200px",
                    borderRadius: "8px",
                    border: "1px solid #ced4da",
                  }}
                />
              </Form.Group>
              <div className="d-flex justify-content-start gap-3">
                <Button
                  variant="light"
                  type="button"
                  style={{
                    width:"150px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: "#369FFF80",
                    border: "transparent",
                    color: "#FFFFFF",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: "#369FFF",
                  }}
                >
                  Add
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default ProductForm;
