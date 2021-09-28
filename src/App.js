import React from "react";
import ModalSmall from "./ModalSmall";
import ModalMedium from "./ModalMedium";
import ModalLarge from "./ModalLarge";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalSmallOpen: false,
      isModalMediumOpen: false,
      isModalLargeOpen: false
    };
  }

  toggleModalSmall = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      isModalSmallOpen: !prev.isModalSmallOpen
    }));
  };

  toggleModalMedium = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      isModalMediumOpen: !prev.isModalMediumOpen
    }));
  };

  toggleModalLarge = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      isModalLargeOpen: !prev.isModalLargeOpen
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Hello Y'all!</h1>
            <p className="yo-green">My Modal Samples</p>

            <div className="row mt-5">
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={this.toggleModalSmall}
                >
                  Modal Small
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={this.toggleModalMedium}
                >
                  Modal Medium
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={this.toggleModalLarge}
                >
                  Modal Large
                </button>
              </div>
            </div>
          </div>
        </div>
        <ModalSmall
          modalName="smallModal"
          modalTitle="Small Modal"
          toggleModal={this.toggleModalSmall}
          modalOpen={this.state.isModalSmallOpen}
        />
        <ModalMedium
          modalName="mediumModal"
          modalTitle="Medium Modal"
          toggleModal={this.toggleModalMedium}
          modalOpen={this.state.isModalMediumOpen}
        />
        <ModalLarge
          modalName="largeModal"
          modalTitle="Large Modal"
          toggleModal={this.toggleModalLarge}
          modalOpen={this.state.isModalLargeOpen}
        />
      </div>
    );
  }
}
