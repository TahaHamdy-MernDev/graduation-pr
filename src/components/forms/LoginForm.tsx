import React, { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { CustomCheckbox } from "../CustomCheckbox";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

interface IFormInputs {
  emailOrUsername: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [checked, setChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    data.rememberMe = checked;
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="vh-100">
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center p-0"
        >
          <img
            src="/images/container.png"
            alt="Placeholder"
            className="img-fluid w-100 vh-100"
            style={{ objectFit: "cover" }}
          />
        </Col>

        <Col
          xs={12}
          md={6}
          className="vh-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Col xs={8}>
            <div className="text-center mb-5">
              <h2 className="fw-bold text-dark">Logo</h2>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2 mb-5">
              <Button className=" w-100 d-flex align-items-center justify-content-center p-3 border rounded social-button">
                <img
                  src="/images/google.png"
                  className="me-2"
                  alt="google"
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Log In with Google</span>
              </Button>

              <Button className=" w-100 d-flex align-items-center justify-content-center p-3 border rounded social-button">
                <img
                  src="/images/git.png"
                  className="me-2"
                  alt="git"
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Log In with Github</span>
              </Button>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-2">
                <Form.Label className="custom-label">
                  Email or Username
                </Form.Label>
                <Form.Control
                  type="text"
                  className="rounded border custom-input"
                  {...register("emailOrUsername", { required: true })}
                />
                {errors.emailOrUsername && (
                  <p className="text-danger">This field is required</p>
                )}
              </Form.Group>

              <Form.Group className="mb-2 position-relative">
                <Form.Label className="custom-label">Password</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    className="rounded border custom-input"
                    {...register("password", { required: true })}
                  />
                  <Button
                    variant="link"
                    className="position-absolute end-0 mb-2 text-muted"
                    onClick={togglePasswordVisibility}
                    style={{ top: "25px" }}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff width={20} /> : <Eye width={20} />}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-danger">This field is required</p>
                )}
              </Form.Group>

              <Form.Group className="mb-2 d-flex justify-content-between align-items-center">
                <CustomCheckbox
                  id="remember-me"
                  label="Remember me"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="py-3 px-5 text-white button-submit"
                >
                  LOG IN
                </Button>
              </Form.Group>
            </Form>

            <div className="text-center mt-4">
              <p className="text-muted">
                No Account yet?{" "}
                <Link
                  to="/sign-up"
                  className="text-primary text-decoration-none fw-medium"
                >
                  SIGN UP
                </Link>
              </p>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
