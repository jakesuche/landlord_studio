import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../organisms/Header/Header";
import styles from "../../styles/Home.module.css";
import React, { useRef, useState } from "react";


import Sidebar from "../organisms/Sidebar/Sidebar";


type Iprops = {
  children: React.ReactNode;
  style:{[key:string]:string | number}
};

const Authlayout = ({ children ,style}: Iprops) => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <section style={style} className="home-section">
        <Header style={{position: "absolute"}}/>
          <div className="home-content">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default Authlayout;
