import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap/';
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { validateUser } from "../Redux/Store"

const Login = (props) => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(validateUser(data))

    }

    return (
        <div>
            <Container>
                <Row>
                    <Col/>
                    <Col xs={6}>
                        <Card>
                            <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...register("user")} />
                                <Form.Text className="text-muted">
                                    No compartiremos su correo con nadie.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register("password")} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </div>

    )

}

export default Login