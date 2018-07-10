import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <h3>JS Function</h3>
        <Row style={styles.row}>
          <Col md={2} style={styles.titleItem}>
            <Label>Name</Label>
          </Col>
          <Col md={10}>
            <Input type="text" name="name" />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.titleItem}>
            <Label>Email</Label>
          </Col>
          <Col md={10}>
            <Input type="email" name="email" />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.titleItem}>
            <Label>Phone Number</Label>
          </Col>
          <Col md={10}>
            <Input type="email" name="email" id="exampleEmail" />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.titleItem}>
            <Label>Address</Label>
          </Col>
          <Col md={10}>
            <Input type="email" name="email" id="exampleEmail" />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.titleItem}>
            <Label>Address</Label>
          </Col>
          <Col md={10}>
            <Input type="email" name="email" id="exampleEmail" />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <Button 
              onClick={() => alert('Thank You!')}
              color="primary"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const styles = {
  container: {
    minHeight: '500px',
    flex: 1,
    marginTop: '40px',
    padding: '40px',
    border: '1px solid #4a4a4a'
  },
  row: {
    margin: '10px 0px'
  },
  titleItem: {
    textAlign: 'right'
  }
}

export default HomePage;
