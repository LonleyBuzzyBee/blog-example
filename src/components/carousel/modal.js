import React from 'react';

const Modal_button = ({item}) => {
  return (
    <div>
      <Button
        color="danger"
        onClick={function noRefCheck(){}}
      >
        Expand
      </Button>
      <Modal
        toggle={function noRefCheck(){}}
      >
        <ModalHeader toggle={function noRefCheck(){}}>
          {item.header}
        </ModalHeader>
        <ModalBody>
          {item.caption}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={function noRefCheck(){}}
          >
            Do Something
          </Button>
          {' '}
          <Button onClick={function noRefCheck(){}}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Modal_button;
