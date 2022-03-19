<div  ref={sidebarRef} className="sidebar bg-primary ">
<div className="logo_content">
  <div className="logo">
    {/* <i  className="bi bi-wrench-adjustable-circle-fill"></i> */}
    <div className="logo_name">CodingLab</div>
  </div>
  <i onClick={toggleSidebar} ref={btnRef} className="bi bi-menu-button-wide" id="btn"></i>
</div>
<ul className="nav_list">
  <li>
    <i ref={searchButton} className="bi bi-search"></i>
    <input type="text" className="" placeholder="Search...." />

    <span className="custom_tooltip">Dashboard</span>
  </li>
  <li>
    <a href="">
      <i className="bi bi-grid"></i>
      <span className="links_name">Dashboard</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>
 
  <li>
    <a href="">
      <i className="bi bi-person-fill"></i>
      <span className="links_name">User</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>
  <li>
    <a href="">
      <i className="bi bi-chat-left"></i>
      <span className="links_name">Messages</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>{" "}
  <li>
    <a href="">
      <i className="bi bi-pie-chart"></i>
      <span className="links_name">Analytics</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>{" "}
  <li>
    <a href="">
      <i className="bi bi-file-earmark"></i>
      <span className="links_name">File Manager</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>{" "}
  <li>
    <a href="">
      <i className="bi bi-grid"></i>
      <span className="links_name">Dashboard</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>{" "}
  <li>
    <a href="">
      <i className="bi bi-grid"></i>
      <span className="links_name">Dashboard</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>{" "}
  <li>
    <a href="">
      <i className="bi bi-gear"></i>
      <span className="links_name">Settings</span>
    </a>
    <span className="custom_tooltip">Dashboard</span>
  </li>
</ul>
<div className="profile_content">
  <div className="profile">
    <div className="profile_details">
     
     
      <img className="img"  
src="/profilepix.png" />
   
      <div className="name_job">
        <div className="name">Uche jakes</div>
        <div className="job">Web develope</div>
      </div>
    </div>
    <i className="bi bi-box-arrow-in-left" id="log_out"></i>
  </div>
</div>
</div>