import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  width:100%;
`;

export const Title = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
`

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

export const Text = styled.div`
margin-bottom: 0;
`

type Iprops = {
  children: React.ReactNode;
};


const CardWidget= ({ children }: Iprops) => {
  return (
    <Card className="shadow-sm">
      <CardBody>{children}</CardBody>
    </Card>
  );
};

CardWidget.Title = Title
CardWidget.Text = Text



export default CardWidget;
