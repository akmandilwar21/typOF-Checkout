import { useRef, useState } from "react";
import ReactModal from "react-modal";

import { useMediaQuery } from "react-responsive";
import CheckOutModal from "./CheckOutModal";

export default function CartModal({
  isCartOpen,
  closeModal,
  openCheckOutModal,
  showCheckOutModal,
  setShowCheckOutModal,
  setIsCartOpen,
  openLoginModal,
}: any) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const modalContent = (
    <div>
      <h2>Modal Title</h2>
      <p>Modal Content</p>
      <button onClick={closeModal}>Close Modal</button>
      <button onClick={openCheckOutModal}>Proceed to CheckOut</button>
    </div>
  );
  return (
    <>
      <ReactModal
        isOpen={isCartOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: isMobile ? "100%" : "30%",
            height: "100%",
            right: 0,
            top: 0,
            bottom: 0,
            marginLeft: "auto",
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            borderRadius: 0,
            border: "none",
            padding: 0,
          },
        }}
      >
        {modalContent}
      </ReactModal>
      <CheckOutModal
        showCheckOutModal={showCheckOutModal}
        setShowCheckOutModal={setShowCheckOutModal}
        setIsCartOpen={setIsCartOpen}
        openLoginModal={openLoginModal}
      />
    </>
  );
}
