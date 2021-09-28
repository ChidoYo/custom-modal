import React from "react";
import Modal from "./Modal";

const ModalSmall = (props) => {
  return (
    <Modal
      modalName={props.modalName}
      modalTitle={props.modalTitle}
      toggleModal={props.toggleModal}
      modalOpen={props.modalOpen}
    >
      This is the small modal!
    </Modal>
  );
};

export default ModalSmall;
