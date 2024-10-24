import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

// Define the structure of the form data
interface FormData {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  factoryName: string;
  taxNumber: string;
  businessType: string;
  location: string;
  dateCreated: string;
  branchesNumber: string;
  aboutFactory: string;
}

const ProfileForm: React.FC = () => {
  // State for form data with type FormData
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    factoryName: "",
    taxNumber: "",
    businessType: "",
    location: "",
    dateCreated: "",
    branchesNumber: "",
    aboutFactory: "",
  });

  // State for image file URL
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Handle form data change with type safety
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image change with file input
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data to the console
    console.log("Form Data:", formData);
  };

  return (
    <Container className="my-4">
      <Card className="p-4">
        <div className="text-center mb-4">
          {/* Image Upload */}
          <label htmlFor="upload-image" style={{ cursor: "pointer" }}>
            <img
              src={profileImage || "https://via.placeholder.com/80"}
              alt="User"
              className="rounded-circle"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
          </label>
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <h5 className="mt-2">{formData.userName || "ahmedomar"}</h5>
          <p>{formData.email || "ahmedomar24@gmail.com"}</p>
        </div>

        <Form onSubmit={handleSubmit}>
          {/* Personal Info Section */}
          <h4 className="mb-3 text-primary">Personal Info</h4>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter username"
                  value={formData.userName}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  placeholder="Enter current password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Factory Info Section */}
          <h4 className="mb-3 text-primary">Factory Info</h4>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Factory Name</Form.Label>
                <Form.Control
                  type="text"
                  name="factoryName"
                  placeholder="Enter factory name"
                  value={formData.factoryName}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Tax Number</Form.Label>
                <Form.Control
                  type="text"
                  name="taxNumber"
                  placeholder="Enter tax number"
                  value={formData.taxNumber}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Business Type</Form.Label>
                <Form.Control
                  type="text"
                  name="businessType"
                  placeholder="Enter business type"
                  value={formData.businessType}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Date Created</Form.Label>
                <Form.Control
                  type="date"
                  name="dateCreated"
                  value={formData.dateCreated}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Branches Number</Form.Label>
                <Form.Control
                  type="text"
                  name="branchesNumber"
                  placeholder="Enter number of branches"
                  value={formData.branchesNumber}
                  onChange={handleChange}
                  style={{ height: "45px" }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Form.Group>
                <Form.Label>About Your Factory</Form.Label>
                <Form.Control
                  as="textarea"
                  name="aboutFactory"
                  rows={5}
                  placeholder="Describe your factory"
                  value={formData.aboutFactory}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            type="submit"
            variant="primary"
            className="px-5"
            style={{ height: "45px" }}
          >
            Save Changes
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ProfileForm;
