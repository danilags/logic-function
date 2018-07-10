import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';

import { isEmailFormat } from '../utils';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phoneCode: '',
      phoneNumber: '',
      address: '',
      isSubscribe: true,
      _error: null,
      listCode: ['62', '46', '65', '86']
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.onSubmitData = this.onSubmitData.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  formValidation() {
    let errors = {};
    if (this.state.name.length <= 5) 
      errors['name'] = ['Name must be min 5 character'];
    if (this.state.email === '')
      errors['email'] = errors['email'] !== undefined ? [ ...errors.email, 'Please type your email'] : ['Please type your email'];
    if (!isEmailFormat(this.state.email)) 
      errors['email'] = errors['email'] !== undefined ? [ ...errors.email, 'Your email format is wrong'] : ['Your email format is wrong'];
    if (Object.keys(errors).length) {
      this.setState({
        _error: {
          errors: { ...errors }
        }
      })
    }
    return errors;
  }

  handleChangeText(e){
    const lastState={...this.state};
    lastState[e.target.name]=e.target.value;
    this.setState({...lastState});
  }

  handleChecked() {
    this.setState({
      isSubscribe: !this.state.isSubscribe
    })
  }

  handleChangeOption = (e) => {
    const lastOption = this.state.listCode;
    const indexItem =  e.target.options.selectedIndex;
    const selected = lastOption.filter((item, index) => index === indexItem);
    this.setState({
      phoneCode: selected[0]
    })
  }

  onSubmitData(e) {
    e.preventDefault();
    const valid = this.formValidation();
    console.log('VALIDateee ', valid);
  }

  render() {
    console.log('THIS STATE ', this.state);
    return (
      <Container style={styles.container}>
        <h3>JS Function</h3>
        <Form onSubmit={this.onSubmitData}>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Name</Label>
            </Col>
            <Col md={10}>
              <Input 
                onChange={this.handleChangeText} 
                type="text" 
                name="name" 
                value={this.state.name}
              />
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Email</Label>
            </Col>
            <Col md={10}>
              <Input 
                onChange={this.handleChangeText} 
                type="email" name="email" 
                value={this.state.email}
              />
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Phone Number</Label>
            </Col>
            <Col md={10}>
              <Row>
                <Col md={2}>
                  <Input 
                    onChange={this.handleChangeOption} 
                    type="select" 
                    name="phoneCode"
                    value={this.state.phoneCode}
                  >
                    {
                      this.state.listCode.map((item, index) => <option key={index}>{item}</option>)
                    }
                  </Input>
                </Col>
                <Col md={10}>
                  <Input 
                    type="number" 
                    name="phoneNumber" 
                    value={this.state.phoneNumber}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Address</Label>
            </Col>
            <Col md={10}>
              <Input 
                type="textarea" 
                size="130" 
                maxLength={130} 
                name="address" 
                value={this.state.address}
              />
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Subcribe Newsletter</Label>
            </Col>
            <Col md={10}>
              <Row>
                <Col md={2}>
                  <Input onChange={this.handleChecked} checked={this.state.isSubscribe ? true : false} type="checkbox" />{' '}
                    Yes
                </Col>
                <Col md={2}>
                  <Input onChange={this.handleChecked} checked={!this.state.isSubscribe ? true : false} type="checkbox" />{' '}
                    No
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Button 
                color="primary"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
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
