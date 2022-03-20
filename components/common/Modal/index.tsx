import styled from "styled-components";
import { ModalWrapper, ModalContent, ModalBody,ModalHeader } from "./styles";
import React from 'react';
import Icon from 'components/atoms/Icon/Icon'

type Iprops = {
    show:boolean;
    onClose:React.MouseEventHandler<HTMLButtonElement>
    title:JSX.Element | string

}

const Modal:React.FC<Iprops> = ({ children,show, onClose, title}) => {
   
    const bodyContent = children ? children : <div> No body content</div>

  return (
    <ModalWrapper show={show}>
      <ModalContent show={show}>
          <ModalHeader>
            {title}
            <Icon  size={25} onClick={onClose}  name="bi-x-octagon" />
          </ModalHeader>
        <ModalBody>
           {bodyContent}
        </ModalBody>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
