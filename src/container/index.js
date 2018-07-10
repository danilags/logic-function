import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { isEmailFormat } from '../utils';
import ModalSuccess from './Modal';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phoneCode: '62',
      phoneNumber: '',
      address: '',
      isSubscribe: true,
      _error: null,
      listCode: ['62', '46', '65', '86'],
      isDone: false
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.onSubmitData = this.onSubmitData.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onClearToggle = this.onClearToggle.bind(this);
  }

  // dynamic checker on property state
  formValidation() {
    let errors = {};
    if (this.state.name === '')
      errors['name'] = errors['name'] !== undefined ? [ ...errors.name, 'Please type your name'] : ['Please type your name'];
    if (this.state.name.length < 5) 
      errors['name'] = errors['name'] !== undefined ? [ ...errors.name, 'Name must be min 5 character'] : ['Name must be min 5 character'];
    if (this.state.email === '')
      errors['email'] = errors['email'] !== undefined ? [ ...errors.email, 'Please type your email'] : ['Please type your email'];
    if (!isEmailFormat(this.state.email)) 
      errors['email'] = errors['email'] !== undefined ? [ ...errors.email, 'Your email format is wrong'] : ['Your email format is wrong'];
    if (this.state.phoneNumber === '')
      errors['phoneNumber'] = ['Please type your phone number']
    if (this.state.address.length > 130)
      errors['address'] = ['Maximum number of characters 130']
    if (Object.keys(errors).length) {
      this.setState({
        _error: {
          errors: { ...errors }
        }
      })
    }
    return errors;
  }

  // func to dynamic handle onChangetext
  handleChangeText(e){
    const lastState={...this.state};
    lastState[e.target.name]=e.target.value;
    this.setState({...lastState});
  }

  // func to onChanges selected value on isSubscribe
  handleChecked() {
    this.setState({
      isSubscribe: !this.state.isSubscribe
    })
  }

  // func to open/close modal
  onToggleModal() {
    this.setState({
      isDone: !this.state.isDone
    })
  }

  // clearing state to default
  onClearToggle() {
    this.setState({
      name: '',
      email: '',
      phoneCode: '62',
      phoneNumber: '',
      address: '',
      isSubscribe: true,
      _error: null,
      listCode: ['62', '46', '65', '86'],
      isDone: false
    })
  }
  
  // func to changes the phoneCode
  handleChangeOption = (e) => {
    const lastOption = this.state.listCode;
    const indexItem =  e.target.options.selectedIndex;
    const selected = lastOption.filter((item, index) => index === indexItem);
    this.setState({
      phoneCode: selected[0]
    })
  }

  // func submit data
  onSubmitData(e) {
    e.preventDefault();
    const isComplete = this.formValidation();
    if (Object.keys(isComplete).length===0) {
      this.onToggleModal();
    }
  }

  // func to validate from component
  errorChecker(name) {
    if(this.state._error!==null){
      const hasil = Object.keys(this.state._error.errors).filter(err => err === name).length > 0;
      return Object.keys(this.state._error.errors).filter(err => err === name).length > 0;
    }
    return false;
  }

  // render error message
  renderFeedBack(message, index) {
    return <p key={index} style={styles.feedBack}>{message}</p>
  }

  render() {
    return (
      <Container style={styles.container}>
        <ModalSuccess 
          isOpen={this.state.isDone}
          onToggle={this.onToggleModal}
          onClearToggle={this.onClearToggle}
          email={this.state.email}
        />
        <h3>JS Function</h3>
        <Form onSubmit={this.onSubmitData}>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Name</Label>
            </Col>
            <Col md={10}>
              <Input 
                invalid={this.errorChecker('name')}
                onChange={this.handleChangeText} 
                type="text" 
                name="name" 
                value={this.state.name}
              />
                {
                  !this.errorChecker('name') ? null :
                  this.state._error.errors.name.map((item, index) => this.renderFeedBack(item, index))
                }
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col md={2} style={styles.titleItem}>
              <Label>Email</Label>
            </Col>
            <Col md={10}>
              <Input 
                invalid={this.errorChecker('email')}
                onChange={this.handleChangeText} 
                type="text" 
                name="email" 
                value={this.state.email}
              />
                {
                  !this.errorChecker('email') ? null :
                  this.state._error.errors.email.map((item, index) => this.renderFeedBack(item, index))
                }
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
                    onChange={this.handleChangeText}
                    type="number" 
                    name="phoneNumber" 
                    value={this.state.phoneNumber}
                  />
                    {
                      !this.errorChecker('phoneNumber') ? null :
                      this.state._error.errors.phoneNumber.map((item, index) => this.renderFeedBack(item, index))
                    }
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
                onChange={this.handleChangeText}
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
  },
  feedBack: {
    margin: '2px 0px',
    textAlign: 'left',
    color: '#fff',
    background: '#e5616b',
    display: 'table',
    padding: '0px 11px',
    borderRadius: '3px',
  }
}

export default HomePage;
