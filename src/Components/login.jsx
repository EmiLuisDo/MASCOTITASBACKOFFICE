import {Form, Button, Container} from 'react-bootstrap/';
import {useForm} from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { validateUser} from "../Redux/Store"

const Login = (props) =>
{
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(validateUser(data))

    }

    return (
        <div>
            <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("user")}/>
                <Form.Text className="text-muted">
                No compartiremos su correo con nadie.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Entrar
            </Button>
            </Form>
            </Container>
        </div>

    )

}

export default Login