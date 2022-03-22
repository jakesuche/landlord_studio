import React, { useRef, useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import { sidebarData } from '../../../utils/data.js'
import { useRouter, NextRouter} from 'next/router'



const Sidebar = () => {
  const btnRef: React.MutableRefObject<null> = useRef(null);
  const sidebarRef: React.MutableRefObject<null> = useRef(null);
  const searchButton: React.MutableRefObject<null> = useRef(null);
  const router:NextRouter = useRouter()


  const navigate = (link:string) => {
        router.push(link)
  }

  const toggleSidebar = () => {
    //@ts-ignore
    sidebarRef.current.classList.toggle("close");
  };
  return (
    <div ref={sidebarRef} className="sidebar close bg-primary">
      <div className="logo-details">
        <Icon
          onClick={toggleSidebar}
          name="bi-menu-button-wide"
          id="btn"
        ></Icon>
        <span  className="logo_name">Title here</span>
      </div>

      <ul className="nav-links">
        {sidebarData?.map((bar: any) => {
          return (
            <li>
              <a onClick={()=>navigate(bar.link)} href="#">
                <Icon name={bar.icon}></Icon>
                <span className="link_name">{bar.link_name}</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    {bar.link_name}
                  </a>
                </li>
              </ul>
            </li>
          );
        })}
       
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img className="img" src="/profilepix.png" />
            </div>
            <div className="name-job">
              <div className="profile_name">Uche jake</div>
              <div className="job">Soft ware engineering</div>
            </div>
            <i className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
