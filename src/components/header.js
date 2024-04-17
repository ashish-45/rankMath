import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Modal from './Modal'

const Header = () => {
  const [opnModal, setOpenModal] = useState(false);

  const displayModal = () => {
    setOpenModal(!opnModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="main-heading">
        <div>
          <IoIosArrowBack />
        </div>
        <div>
          <p>Bitcoin Wallet</p>
        </div>
        <div>
          <PiDotsThreeVerticalBold onClick={displayModal} style={{cursor:'pointer'}}/>
        </div>
      </div>
      {opnModal && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Header;
