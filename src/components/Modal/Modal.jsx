import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { Overlay, Box } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {};

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target)
      this.props.onClose();
  };

  render() {
    const { image } = this.props;

    return createPortal(
      <Overlay onClick={this.closeModal}>
        <Box>
          <img src={image} alt="piska" />
        </Box>
      </Overlay>,
      modalRoot
    );
  }
}
