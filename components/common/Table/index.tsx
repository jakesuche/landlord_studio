//@flow

import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
// import * as Styles from './style.ts'
import * as Style from "./style";

import Input from "components/atoms/Input/Input";

type Iprops = {
  RenderHeader?: React.FC;
  children?: React.ReactNode;
  onSearch?:React.ChangeEventHandler<HTMLInputElement>
  showInput?:boolean;
  placeholder?:string;
};

const Tr: React.FC = ({ children, ...props }) => {
  return <Style.Tr {...props}>{children}</Style.Tr>;
};

const Th: React.FC = ({ children, ...props }) => {
  return <Style.Th {...props}>{children}</Style.Th>;
};
const Td: React.FC = ({ children, ...props }) => {
  return <Style.Td {...props}>{children}</Style.Td>;
};

const Table = ({ children, RenderHeader ,onSearch, showInput=true,placeholder}: Iprops) => {
  return (
    <Style.TableWrapper className="table-responsive border-0 shadow-sm rounded">
      {
        showInput && (
          <div className="d-flex justify-content-start mt-4">
          <Input placeholder={placeholder} onChange={onSearch} groupStyle={{ width: "40%", marginLeft: 20 }} />
        </div>
        )
      }
      <Style.TableHeader>
        {/* @ts-ignore */}
        <Style.T cellpadding="0" cellspacing="0" border="0">
          <thead>
            <Style.Tr>{RenderHeader && <RenderHeader />}</Style.Tr>
          </thead>
        </Style.T>
      </Style.TableHeader>
      <Style.TableContent>
        {/* @ts-ignore */}
        <Style.T cellpadding="0" cellspacing="0" border="0">
          <tbody>{children}</tbody>
        </Style.T>
      </Style.TableContent>
    </Style.TableWrapper>
  );
};

Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
