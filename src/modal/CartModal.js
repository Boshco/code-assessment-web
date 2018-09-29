import React from "react";
import Modal from "react-responsive-modal";
import CartContainer from '../containers/CartContainer';
import styles from './modal-styles.css';


export default class Centered extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    console.log('onOpenModal called');
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="cart-status">
        <span className="cart-link" onClick={this.onOpenModal}>Your cart is empty</span>

        <Modal open={open} onClose={this.onCloseModal} center
          classNames={{
            overlay: styles.customOverlay,
            modal: styles.customModal,
          }}
        >

          <CartContainer />

        </Modal>
      </div>
    );
  }
}

