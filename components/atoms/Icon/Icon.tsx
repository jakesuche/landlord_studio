import React from "react";

type Props = {
  name?: string;
  size?:number;
  id?:string;
  color?:string
  onClick?:React.MouseEventHandler<HTMLElement> | undefined
};

const Icon: React.FC<Props> = ({ name,color, ...props }) => {
  const {size, onClick}  = props
  return <i onClick={onClick} style={{fontSize:size, color:color}} {...props} className={`bi ${name}`}></i>;
};

export default Icon;
