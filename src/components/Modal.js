import React from "react";

import { StyledModal } from "./Modal.styled";

import { useGlobalContext } from "../contexts/AppContext";

const Modal = ({ data, closeModal }) => {
  const { handleTheme } = useGlobalContext();
  return (
    <StyledModal>
      <ul className="modal__list" onMouseLeave={() => closeModal()}>
        {data.map((el) => (
          <li
            key={el.id}
            className="modal__item"
            onClick={() => {
              closeModal();
              handleTheme(el.id);
            }}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </StyledModal>
  );
};

export default Modal;
