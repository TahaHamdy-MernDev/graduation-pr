// types.ts
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
  
  // ProductForm.tsx
  import React, { useState, ChangeEvent, FormEvent } from 'react';
  import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
  
  const ProductForm: React.FC = () => {
    const [formData, setFormData] = useState<ProductFormData>({
      productName: '',
      productType: '',
      dateCreated: '',
      amountOfProduct: '',
      priceForPiece: '',
      available: '',
      aboutProduct: '',
      image: null
    });
  
    const [imagePreview, setImagePreview] = useState<string | null>(null);
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          image: file
        }));
        setImagePreview(URL.createObjectURL(file));
      }
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        console.log('Form submitted:', formData);
        // Add your form submission logic here
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <Container className="py-4">
        <Card className="shadow-sm">
          <Card.Body className="p-4">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={4} className="mb-4">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Product preview"
                          className="img-fluid mb-3"
                          style={{ maxHeight: '200px', objectFit: 'contain' }}
                        />
                      ) : (
                        <div className="text-center text-muted">
                          <i className="bi bi-image fs-1"></i>
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
                      <Button
                        variant="outline-secondary"
                        onClick={() => document.getElementById('imageUpload')?.click()}
                      >
                        Choose Image
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
  
                <Col md={8}>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Product Type</Form.Label>
                        <Form.Control
                          type="text"
                          name="productType"
                          value={formData.productType}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date Created</Form.Label>
                        <Form.Control
                          type="date"
                          name="dateCreated"
                          value={formData.dateCreated}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
  
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Amount of Product</Form.Label>
                        <Form.Control
                          type="number"
                          name="amountOfProduct"
                          value={formData.amountOfProduct}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Price for 1 Piece</Form.Label>
                        <Form.Control
                          type="number"
                          name="priceForPiece"
                          value={formData.priceForPiece}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Available</Form.Label>
                        <Form.Select
                          name="available"
                          value={formData.available}
                          onChange={handleInputChange}
                        >
                          <option value="">Select availability</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
  
              <Row className="mt-3">
                <Col>
                  <Form.Group>
                    <Form.Label>About Product</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="aboutProduct"
                      value={formData.aboutProduct}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
  
              <Row className="mt-4">
                <Col className="d-flex gap-2 justify-content-start">
                  <Button variant="secondary" type="button">
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  };
  
  export default ProductForm;