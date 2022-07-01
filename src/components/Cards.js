import { Row, Card, Button, CardImg } from "react-bootstrap";

/**
 * 
 * @param {Array<object>} param0 
 * @returns jsx cards from the animes fetching
 */
const Cards = ({data}) => {
    return (
        <Row xs={2} md={4} lg={5} className="gap-4 justify-content-center">
            {data.map((item) => (
                <Card className="border-dark col p-0 text-white" key={ item.mal_id }>
                    <CardImg variant="top" src={ item.images.jpg.large_image_url }/>
                    <Card.Body>
                        <Card.Title className="text-center text-decoration-underline fw-bold">{ item.title }</Card.Title>
                        <Card.Text className="fw-bold text-center">
                            Score: { item.score }
                        </Card.Text>
                        <Card.Footer className="d-flex justify-content-center">
                            <a href={ item.url }><Button variant="dark" className="text-danger fw-bold">Go to My anime list</Button></a>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    );
}

/**
 * 
 * @param {Array<object>} param0 
 * @returns jsx cards from the animes fetching
 */
const CardsRecomendations = ({dataRecomendation}) => {
    return (
        <Row xs={2} md={4} lg={5} className="gap-4 justify-content-center">
            {dataRecomendation.map((item) => (
                <Card className="border-dark col p-0 text-white" key={ item.mal_id }>
                    <CardImg variant="top" src={ item.entry[0]?.images.jpg.large_image_url }/>
                    <Card.Body>
                        <Card.Title className="text-center text-decoration-underline fw-bold">{ item.title }</Card.Title>
                        <Card.Text className="fw-bold text-center">
                            UserName: { item.user.username }
                        </Card.Text>
                        <Card.Footer className="d-flex justify-content-center">
                            <a href={ item.url }><Button variant="dark" className="text-danger fw-bold">Go to My anime list</Button></a>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    );
}
 
export { Cards, CardsRecomendations };