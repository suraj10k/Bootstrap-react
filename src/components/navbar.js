import 'bootstrap/dist/css/bootstrap.css'
import { Nav,Navbar } from 'react-bootstrap'

const navbar = () => {
    return(
    <div>
        <Navbar bg="myPurple" variant="dark">
            <Navbar.Brand>
                bre.ad/jane
            </Navbar.Brand>
            <Nav.Link href='offerings'>offerings</Nav.Link>
            <Nav.Link href='otherLinks'>Other Links</Nav.Link>
            <Nav.Link href='Testimonials'>Testimonials</Nav.Link>
            <Nav.Link href='Portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='ContactMe'>Contact me</Nav.Link>
            <Nav.Link href='bookTrial'><button type="button" class="btn btn-default navbar-btn">Sign in</button></Nav.Link>
        </Navbar>
    </div>
    )
}

export default navbar;