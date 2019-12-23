import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import img_table1 from "../img/latest/table-1.jpg";
import img_table2 from "../img/latest/table-2.jpg";
import img_table3 from "../img/latest/table-3.jpg";
import img_tablechairs1 from "../img/latest/table-chairs-1.jpg";
import img_tablechairs2 from "../img/latest/table-chairs-2.jpg";
import img_tablechairs3 from "../img/latest/table-chairs-3.jpg";

const images = [
  { src: img_table1 },
  { src: img_table2 },
  { src: img_table3 },
  { src: img_tablechairs1 },
  { src: img_tablechairs2 },
  { src: img_tablechairs3 }
];

class Lightbox extends React.Component {
  state = { modalIsOpen: false };

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  handleKeyPress = () => {};

  render() {
    const { modalIsOpen } = this.state;

    return (
      <>
        <div className="row">
          {images.map(image => (
            <div className="col-md-4 mb-md-4 pb-2" key={image.src}>
              <div
                onClick={this.toggleModal}
                onKeyPress={this.toggleModal}
                role="button"
                tabIndex={0}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <i
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10
                  }}
                  className="fas fa-search-plus"
                ></i>
                <img src={image.src} alt="" className="w-100 rounded shadow" />
              </div>
            </div>
          ))}
        </div>

        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={images} modalProps={{ isFullScreen: false }} />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

export default Lightbox;
