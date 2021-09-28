import React from "react";
import Modal from "./Modal";

const ModalMedium = (props) => {
  return (
    <Modal
      modalName={props.modalName}
      modalTitle={props.modalTitle}
      toggleModal={props.toggleModal}
      modalOpen={props.modalOpen}
    >
      This is the medium modal!
    </Modal>
  );
};

export default ModalMedium;
