import React from "react";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { IoIosRemoveCircle } from "react-icons/io";

const Modal = () => {
  return (
    <div>
      <div className="main-card">
        <div className="togglecard">
          <div>
            <p>Edit</p>
          </div>
          <div>
            <FaEdit />
          </div>
        </div>
        <div className="togglecard">
          <div>
            <p>Courier Info</p>
          </div>
          <div>
            <FaInfoCircle />
          </div>
        </div>

        <div className="togglecard">
          <div>
            <p>Share</p>
          </div>
          <div>
            <CiShare1 />
          </div>
        </div>
        <div className="togglecard">
          <div className="remove-icon">
            <p>Remove</p>
          </div>
          <div className="remove-icon">
            <IoIosRemoveCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
