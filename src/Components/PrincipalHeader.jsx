import {Navbar, Container, } from 'react-bootstrap/';


const PrincipalHeader = (props) => {
    const {useremail} = props

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Mascotitas BackOffice</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">{useremail}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default PrincipalHeader