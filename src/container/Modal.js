import React from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';

const ModalSucces = (props) => {
  console.log('PROPS MODAL', props);
  return (
    <Modal isOpen={props.isOpen} toggle={props.onToggle}>
      <ModalHeader toggle={props.onToggle}>Thank You!</ModalHeader>
      <ModalBody>
        Your ticket has sent to email {props.email}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.onClearToggle}>OK</Button>
      </ModalFooter>
    </Modal>
  )
}
export default ModalSucces;
