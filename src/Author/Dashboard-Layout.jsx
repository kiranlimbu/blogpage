import { useState } from "react";
import "./dashboard-style.css";

function DashboardLayout({ children, writeBlog, showBlogs }) {
  const [userInfo, setUserInfo] = useState({
    name: "Kiran Limbu",
    email: "mrlimbu@gmail.com",
  });

  return (
    <div>
      <div className="dashboard-header">
        <h6>Dashboard</h6>
        <h2 style={{ color: "#9fc131", fontWeight: "600" }}>
          {userInfo.name}'s blogs
        </h2>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-sideNav">
          <button onClick={writeBlog}>Write Blog</button>
          <h3 className="sideNave-bloglist" onClick={showBlogs}>
            Your blogs
          </h3>
        </div>
        <div className="dashboard-content">
          <>{children}</>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
