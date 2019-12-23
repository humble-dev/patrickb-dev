import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import img_arch_a_1 from "../img/latest/arch-a-1.jpg";
import img_arch_a_2 from "../img/latest/arch-a-2.jpg";
import img_arch_a_3 from "../img/latest/arch-a-3.jpg";
import img_arch_b_1 from "../img/latest/arch-b-1.jpg";
import img_arch_b_2 from "../img/latest/arch-b-2.jpg";
import img_arch_b_3 from "../img/latest/arch-b-3.jpg";

const images = [
  { src: img_arch_a_1 },
  { src: img_arch_a_2 },
  { src: img_arch_a_3 },
  { src: img_arch_b_1 },
  { src: img_arch_b_2 },
  { src: img_arch_b_3 }
];

class ArchLightbox extends React.Component {
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
                />
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

export default ArchLightbox;
