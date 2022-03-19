import styled from "styled-components";
import { useState } from "react";
const AccordionContainer = styled.div`
  width: 100%;
  //   max-width: 80rem;
  margin: 0 auto;
  //   padding: 0 1.5rem;
`;

const AccordionItem = styled.div`
  background-color: #fff;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0.5rem 2px 0.5rem rgba(0, 0, 0, 0.1);
`;
const AccordionLink = styled.a`
  font-size: 1.6rem;
  color: #000;
  text-decoration: none;
  background-color: #fff;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0;
  span {
    color: #283042;
    padding: 0.5rem;
  }
`;

const AccordionBody = styled.div<StyleProps>`
  max-height: ${(props) => (props.open ? `20rem` : `0`)};
  overflow: hidden;
  position: relative;
  background-color: #cbceef29;
  transition: max-height 650ms;
  p {
    font-size: 1.4rem;
    color: #0000009e;
    padding: 2rem;
  }
`;

type Iprops = {
  children: React.ReactNode;
  header: string;
};
type StyleProps = {
  open: boolean;
};

const Accordion = ({ children, header }: Iprops) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AccordionContainer>
      <AccordionItem>
        <AccordionLink onClick={() => setOpen(!open)}>
          {header ? header : "Your header will appear here"}
          {open ? (
            <span className="remove">&#8722;</span>
          ) : (
            <span className="add">&#43;</span>
          )}
        </AccordionLink>
        <AccordionBody open={open}>
          {children ? children : <p>Your element will appear hear</p>}
        </AccordionBody>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
