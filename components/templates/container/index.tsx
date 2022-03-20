import styled from "styled-components";


type StyleProps = {
  height:string
}
export const Container = styled.div<StyleProps>`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  height:${(props) => (props.height && props.height )};
  
  @media (min-width: 576px) {
    max-width: 540px;
    
  }
  @media (min-width: 768px) {
    max-width: 720px;
    
  }
  @media (min-width: 992px) {
    max-width: 960px;
    
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
    
  } ;
`;

type Iprops = {
    children:React.ReactNode;
    className:string;
    height:string;
}

const HomeContainer = ({children, className, height}:Iprops) => {
  return<Container height={height} className={className}>

    {children}
  </Container>;
};

export default HomeContainer;
