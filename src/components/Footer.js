import { Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link style={styles} to="/Characters">Characters</Link>
            <Link style={styles} to="/Recomendations">Recomendations</Link>
            </Container>
        </Navbar>
    );
}
 
export default FooterBar;