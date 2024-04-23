import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import fantasy from "../Data/fantasy.json"
const AllTheBooksFunction = () => {
  return (
    <Container className="my-3" as={"main"}>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
        {fantasy.map((books) => {
          return (
            <Col key={books.asin}>
              <Card className="style">
                <Card.Img variant="top" src={books.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{books.title}</Card.Title>
                  <Card.Text className="mb-auto">{books.title}</Card.Text>
                  <Badge bg="info">{books.price}</Badge>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default AllTheBooksFunction
