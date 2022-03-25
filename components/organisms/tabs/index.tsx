import styled, {StyledComponent} from "styled-components";

const Ul = styled.ul`
display: flex;
flex-wrap: nowrap;
padding-left: 0;
margin-bottom: 0;
list-style: none;
gap:20px;
}

`;
export const Li:StyledComponent<"li", any, {}, never> = styled.li`
  display: list-item;
`;

const Link = styled.a<{border:boolean}>`
  color: #262222c2;
  // background-color: #2937f0;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-bottom:${(props)=>props.border ? '1px solid #2937f0':''};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
`;
type Props = {
  children:React.ReactNode;
}
type styledProps = {
  Li:StyledComponent<"li", any, {}, never>;
  Link:StyledComponent<"a", any, {border:boolean}, never>;
}

const Tab: React.FC<Props> &  styledProps = ({ children }:Props) => {
  return (
    <Ul>{children}</Ul>
  )
};


Tab.Li = Li
Tab.Link = Link

export default Tab;
