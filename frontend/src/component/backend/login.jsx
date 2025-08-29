import Header from "../common/Header";
import Footer from "../common/Footer";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
        <Header />

        {/* Main */}
        <main className="my-5">
            <div className="container d-flex justify-content-center">
                <div className="card border-0 shadow" style={{ width: "350px" }}>
                <div className="card-header text-center">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                    </Form>
                </div>
                </div>
            </div>
        </main>

      {/* Footer */}
      <Footer />
      </>
  );
};

export default Login;
