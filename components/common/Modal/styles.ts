import styled, { StyledComponent } from "styled-components";

type Iprops = {
    show:boolean,
}



export const ModalWrapper = styled.div<Iprops>`
  position: fixed;
  display: block;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow-x: hidden;
  background-color: rgba(31, 32, 41, 0.75);
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms 700ms ease;
  opacity: ${(props) => (props.show && `1`)};;
  transition:  ${(props) => (props.show && `all 300ms ease-in-out`)};
  pointer-events: ${(props) => (props.show && `auto`)};;
 
`;

export const ModalContent = styled.div<Iprops>`
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  display: block;
  width: 45vw;
  /* height: 60%; */
  /* min-height: 400px;
    min-width: 400px; */
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  padding-bottom: 20px;
  background-color: #fff;
  align-self: center;
  box-shadow: 0 12px 25px 0 rgba(199, 175, 189, 0.25);
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
  transform: scale(0);

  opacity: ${(props) => (props.show && `1`)};
  transform: ${(props) => (props.show && `scale(1)`)};
  transition: ${(props) => (props.show && `opacity 250ms 500ms ease, transform 350ms 500ms ease`)}; 
`;

export const ModalBody = styled.div`
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
`;

export const ModalHeader = styled.div`
display: flex;
-ms-flex-align: start;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: 1rem 1rem;
border-bottom: 1px solid #dee2e6;
border-top-left-radius: calc(0.3rem - 1px);
border-top-right-radius: calc(0.3rem - 1px);
}



`;
