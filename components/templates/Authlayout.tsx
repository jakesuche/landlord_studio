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
import Button from "../atoms/Button/Button";
import Container from '../templates/container'
import Card from '../templates/card'
import Accordion from '../templates/layouts/accordion'

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
            <Container>
              <Accordion header="Filters">
              </Accordion>
              <div className="row">
                {
                  [1,2,3,4].map((card,i)=>(
                    <div key={i} className="col-lg-3 col-md-6 mb-4">
                      <Card>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                       
                     
                    </Card>
                  </div>
                  ))
                }
              </div>
              <div className="row">
                <div className="col-4">
                  <Card>
                     <h5>Property portfolio</h5>
                  </Card>
                </div>
                <div className="col-4">
                  <Card>
                    <h5>Occupation</h5>
                  </Card>
                </div>
                <div className="col-4">
                  <Card>
                      <h5>Rental collection</h5>
                  </Card>
                </div>
              </div>
            
          </Container>
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
