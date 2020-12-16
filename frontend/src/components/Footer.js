import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col className='text-center py-3'>
          <a href='https://github.com/lawandothman/shopcart'>
            <b>&copy; SHOPCART </b>
          </a>
          built by <a href='https://github.com/lawandothman'>Lawand Othman</a>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
