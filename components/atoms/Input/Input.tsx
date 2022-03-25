import Container from "components/templates/container";
import styled from "styled-components";
import Icon from "components/atoms/Icon/Icon";

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem !important;
`;

const InputText = styled.div`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const Input = styled.input`
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
`;

type Iprops = {
  placeholder?: string;
  icon?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  style?: { [key: string]: number | string };
  groupStyle?:{ [key: string]: number | string };
};

const Login: React.FC<Iprops> = ({
  placeholder,
  icon,
  type,
  onChange,
  groupStyle,
  style,
}) => {
  return (
    <>
      <InputGroup style={groupStyle}>
        {
          icon && (
            <InputText>
            <Icon name={icon ? icon : "bi-person-bounding-box"} />
          </InputText>
          )
        }
       
        <Input
          style={style}
          onChange={onChange}
          type={type}
          placeholder={placeholder ? placeholder : "Placeholder here"}
        />
      </InputGroup>
    </>
  );
};

export default Login;
