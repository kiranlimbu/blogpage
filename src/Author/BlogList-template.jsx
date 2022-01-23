import { Edit, Delete } from "@material-ui/icons";
import "./dashboard-style.css";

export default function BlogListTemplate({ blog }) {
  const postedAt = new Date(blog.postedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="dashboard-blog-list"
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        display: "flex",
        marginBottom: "10px",
      }}
    >
      <div className="blogInfo" style={{ flex: "5" }}>
        <h3>{blog.title}</h3>
        <h4 style={{ color: "#9fc131", fontWeight: "normal" }}>
          {blog.category}
        </h4>
        <span>{postedAt}</span>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          gap: "15px",
          textAlign: "right",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <i>
          <Edit
            style={{
              fontSize: "30px",
              border: "1px solid #9fc131",
              borderRadius: "5px",
              backgroundColor: "#9fc131",
              color: "white",
            }}
          />
        </i>
        <i>
          <Delete
            style={{
              fontSize: "30px",
              border: "1px solid #9fc131",
              borderRadius: "5px",
              backgroundColor: "#9fc131",
              color: "white",
            }}
          />
        </i>
      </div>
    </div>
  );
}
