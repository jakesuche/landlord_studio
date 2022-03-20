import styled from "styled-components";

type Iprops = {
  backgroundColor?:string
}

export const CustomButton = styled.button<Iprops>`
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  // box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  width: 100%;
  position: relative;
  min-height: 4pc;
  overflow:hidden;
  background:${({backgroundColor})=>backgroundColor ? backgroundColor  :'linear-gradient(90deg, #0162c8, #55e7fc);'};
  span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    animation: animate 1s linear infinite;
    border-radius:100%;
  }

  @keyframes animate {
    0% {
      width: 0px;
      height: 0px;
      opacity:0.2
    }
    100% {
      width: 500px;
      height: 500px;
      opacity:0;
    }
  }
`;

