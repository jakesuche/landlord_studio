import Input from "components/atoms/Input/Input";
import Image from "next/image";
import Logo from "assets/images/png/Landlord.png";
import Button from "components/atoms/Button/Button";
import styled from "styled-components";
import { useState } from "react";
import Icon from "components/atoms/Icon/Icon";

type Iprops = {
  show?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  animation: zoom-in-zoom-out 1s ease;
  position: relative;
  .iconWrapper {
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
  }
  a {
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    color: var(--bs-primary) !important;
  }
  .forgot-password {
    transform: translateX(-100%);
    opacity: 0;
    padding: 0;
    height: 0;
  }
  .loginInputs {
  }
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const LoginLayout: React.FC<Iprops> = ({ show, onChange, onClick }) => {
  const [showForgot, setShowForgot] = useState<boolean>(false);

  return (
    <Wrapper className="bg-white shadow rounded">
      {showForgot && (
        <div className="iconWrapper shadow ">
          <Icon
            onClick={() => setShowForgot(false)}
            name="bi-arrow-left-square"
          />
        </div>
      )}
      <div className="d-flex align-items-center justify-content-center flex-column bg-light py-4">
        <Image width="50" height="50" src={Logo} />
        <span>Landord studio</span>
      </div>

      <div className="p-4 loginInputs">
        {show && (
          <>
            <Input onChange={onChange} placeholder="First Name" />
            <Input placeholder="Last Name" />
          </>
        )}
        <Input placeholder="Email" />
        <Input
          groupStyle={{ display: showForgot ? "none" : "" }}
          placeholder="Password"
          type="password"
        />
        {!show && <a onClick={() => setShowForgot(true)}>Forgot password ?</a>}
      </div>

      <div className="d-flex  btn-primary ">
        <Button onClick={onClick}>
          {show ? "Sign up" : showForgot ? "Send Mail" : "Login"}
        </Button>
      </div>
    </Wrapper>
  );
};

export default LoginLayout;
