import React from "react";

export default class Modal extends React.PureComponent {
  componentDidUpdate() {
    if (this.props.modalOpen) {
      console.log("Open!", this.props.modalOpen);
      document.body.classList.add("drawer-open");
    } else {
      console.log("Closed!", this.props.modalOpen);
      document.body.classList.remove("drawer-open");
    }
  }

  render() {
    return (
      <div className="mymodal" id={this.props.modalName}>
        <div
          onClick={this.props.toggleModal}
          className={`mymodal-overlay ${this.props.modalOpen && "active"}`}
        ></div>
        <div
          className={`mymodal-content d-flex flex-column ${
            this.props.modalOpen && "active"
          }`}
        >
          <header className="p-2 border-bottom d-flex">
            <span
              className="material-icons clickable"
              onClick={this.props.toggleModal}
            >
              close
            </span>
            <div className="flex-grow-1 ml-2">{this.props.modalTitle}</div>
          </header>
          <div className="p-2 flex-grow-1">{this.props.children}</div>
          <footer className="p-2 border-top">&copy; ChidoPrime 2021</footer>
        </div>
      </div>
    );
  }
}
