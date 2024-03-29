import { useState } from "react";
import styled from "styled-components";

const CustomeRow = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    // margin-top: var(--bs-gutter-y);
  }
`;

type Iprops = {
  children?: React.ReactNode;
};
const Row = ({ children }: Iprops) => {
  return <CustomeRow>{children}</CustomeRow>;
};

export default Row;
