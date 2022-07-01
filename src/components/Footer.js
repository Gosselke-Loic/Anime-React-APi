import { Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * footer for links router
 * @returns jsx with the links for the router
 */
const FooterBar = () => {

    const styles = {
        textDecoration: "none",
        color: "crimson",
        fontWeight: "bold"
    };

    return ( 
        <Navbar className="fixed-bottom bg-special d-flex justify-content-between">
            <Container fluid>
            <Link style={styles} to="/">Home</Link>
            <Link style={styles} to="/Recomendations">Recomendations</Link>
            </Container>
        </Navbar>
    );
}
 
export default FooterBar;