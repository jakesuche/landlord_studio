import styled from "styled-components";
//import image from '../../assets/images/png/blue_wave.png'
const image = require("../../assets/images/png/blue_wave.png");
type StyleProps = {
  border?: string | boolean | null;
  backgroundImg?: string | boolean;
};

export const Card = styled.div<StyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  width: 100%;
  background-image: ${(props) =>
    props.backgroundImg ? `url(/images/blue_wave.png)` : `none`};
  background-size: cover;
  background-position: center;
  border-bottom: ${(props) => (props.border ? `3px solid blue` : `none`)};
`;

// ${(props) => (props.open ? `20rem/` : `0`)};
export const Title = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  height: 500;
`;

export const Text = styled.div`
  margin-bottom: 0;
`;

type Iprops = {
  children: React.ReactNode;
  border?: string | boolean | null;
  backgroundImg?: string | boolean;
};

const CardWidget = ({ children, border, backgroundImg, ...props }: Iprops) => {
  console.log(image);
  return (
    <Card backgroundImg={backgroundImg} border={border} className="shadow-sm">
      <CardBody>{children}</CardBody>
    </Card>
  );
};

CardWidget.Title = Title;
CardWidget.Text = Text;

export default CardWidget;
