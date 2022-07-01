import { Navbar, NavbarBrand, Container, Form, FormControl} from "react-bootstrap";
import { useState } from "react";
import { useFetchAnime } from "../service/Service";

/**
 * Show the title and an input Search
 * @returns create cards from filtered results
 */
const NavbarSearch = () => {

    const [searchText, setSearch] = useState("");
    useFetchAnime(searchText);

    return ( 
        <Navbar className="static-top bg-special mb-5">
            <Container fluid>
                <NavbarBrand className="text-danger fw-bold">My Anime List</NavbarBrand>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={searchText}
                    /> 
                </Form>
            </Container>
        </Navbar>
    );
}
 
export default NavbarSearch;