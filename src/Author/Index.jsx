import { useState } from "react";

import AddPost from "../newPost/Index";
import BlogListTemplate from "./BlogList-template";
import DashboardLayout from "./Dashboard-Layout";
import cardData from "../cardData.json";

function Dashboard() {
  const [write, setWrite] = useState(false);
  const [show, setShow] = useState(true);

  const writeBlog = () => {
    setShow(false);
    setWrite(true);
  };

  const showBlogs = () => {
    setWrite(false);
    setShow(true);
    console.log("show");
  };

  return (
    <div>
      <DashboardLayout writeBlog={writeBlog} showBlogs={showBlogs}>
        {show &&
          cardData.map((blog) => (
            <BlogListTemplate key={blog.id} blog={blog} />
          ))}
        {write && <AddPost />}
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
