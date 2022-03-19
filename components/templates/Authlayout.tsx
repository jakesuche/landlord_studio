import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/organisms/Header/Header";

import styles from "../../styles/Home.module.css";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { shimmer, toBase64 } from "../../helpers/component_helpers";
import Section from "../templates/Section";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";


type Iprops = {
  children: React.ReactNode;
};

const Authlayout = ({ children }: Iprops) => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        
        <section className="home-section">
          <div className="home-content">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default Authlayout;
{
  /* <Header /> */
}
