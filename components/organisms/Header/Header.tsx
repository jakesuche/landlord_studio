import React, { useState, useRef, Dispatch } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./header.module.css";
import { useRouter } from 'next/router'

type ref = {
  buttonRef?: React.LegacyRef<HTMLButtonElement> | undefined
  openClose:boolean;
  style:{[key:string]:string | number}
}

type Iprops = {
  style:{[key:string]:string | number}
}


const Header = ({style}:Iprops) => {

  const buttonRef:ref["buttonRef"] = useRef(null)
  const [openClose, setOpenClose] = useState<ref["openClose"]>(false)
  const router = useRouter()


  

  const toggle = () => {

    setOpenClose(!openClose)

  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="Header.css" />
        <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      </Head>
      <nav
      style={style}
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container px-5">
          <a className="navbar-brand fw-bold" href="#page-top">
            Logo
          </a>
          <button
            ref={buttonRef}
            onClick={toggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <i className="bi-list"></i>
          </button>
          <div className={` collapse navbar-collapse ${openClose ? 'show': ''}`} id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#features">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#download">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#download">
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#download">
                  Login
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
             onClick={()=>router.push('/dashboard')}

            >
              <span className="d-flex align-items-center gap-1">
                <i className="bi bi-box-arrow-right"></i>
                <span className="small">Start free trial</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
