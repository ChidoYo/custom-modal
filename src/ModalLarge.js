import React from "react";
import Modal from "./Modal";

const ModalLarge = (props) => {
  return (
    <Modal
      modalName={props.modalName}
      modalTitle={props.modalTitle}
      toggleModal={props.toggleModal}
      modalOpen={props.modalOpen}
    >
      This is the LARGE modal!
    </Modal>
  );
};

export default ModalLarge;
