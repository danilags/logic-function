import React from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter, Alert } from 'reactstrap';
import { generateInvoices } from '../utils';

const ModalSucces = (props) => (
  <Modal isOpen={props.isOpen} toggle={props.onClearToggle}>
    <ModalHeader toggle={props.onClearToggle}>Thank You!</ModalHeader>
    <ModalBody>
      Your ticket has sent to email <strong>{props.email}</strong>
      <Alert>Invoices :  { generateInvoices(6) }</Alert>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={props.onClearToggle}>OK</Button>
    </ModalFooter>
  </Modal>
);

export default ModalSucces;
