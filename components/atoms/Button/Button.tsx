import React from "react";

import { CustomButton } from "./styles";
import Loader from '../Loader'


type Props = {
  name?: string;
  type?: "reset" | "button" | "submit";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: any;
  loading:boolean
};

const Button: React.FC<Props> = ({ name, onClick, children, type, loading }) => {
  const ButtonRef = React.useRef(null);

  React.useEffect(() => {
    //@ts-ignore
    ButtonRef.current.addEventListener("click", function (e: any) {
     
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      //@ts-ignore
      let ripple = document.createElement("span");
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      //@ts-ignore
      ButtonRef.current.appendChild(ripple);
      //@ts-ignore
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  }, []);
  return (
    <CustomButton ref={ButtonRef} type={type} onClick={onClick}>
      {loading  ?  <Loader/>: children}
    </CustomButton>
  );
};

export default Button;
