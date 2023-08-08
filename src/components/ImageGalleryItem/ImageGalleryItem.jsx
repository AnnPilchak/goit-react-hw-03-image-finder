import { Component } from "react";
import Modal from "../Modal/Modal";

import { Item, Image } from "./ImageGalleryItem.styled"

import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false
  };
  
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  };
    
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image, tags, largeImage } = this.props;

    return (
      <Item>
        <Image
          onClick={this.toggleModal}
          src={image}
          alt={tags}
        />
        {isModalOpen && <Modal onClose={this.toggleModal} image={largeImage} />}
      </Item>
    );
  }
}
export default ImageGalleryItem;