import Container from "components/templates/container";
import styled from "styled-components";
import LoginLayout from "components/organisms/auth/Login";
const Wrapper = styled.div`
  background: #1a1a1a;
  display: flex;
  flex: 1 1 auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <Wrapper>
      <Container
        height={`100%`}
        className="d-flex justify-content-center align-items-center  "
      >
        <LoginLayout />
      </Container>
    </Wrapper>
  );
};

export default Login;
