import "./post-style.css";
import Comments from "../comment/Index";
import { AccountCircle } from "@material-ui/icons";

export default function PostDetail({ props }) {
  const postedAt = new Date(props.postedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="singlePost-container">
      <div className="singlePost-header">
        <h1 className="singlePost-title">{props.title}</h1>
        <p className="singlePost-description">{props.description}</p>
        <div className="singlePost-metaData">
          <i className="singlePost-metaData-icon">
            <AccountCircle />
          </i>
          <span className="singlePost-metaData-author">{props.aurthor}</span>
          <span className="singlePost-date">{postedAt}</span>
        </div>
      </div>
      <div
        style={{
          aspectRatio: "1/0.35",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img src={props.img} style={{ width: "100%" }} />
      </div>
      <div className="singlePost-container-wrapper">
        <div className="singlePost-body">
          <div
            className="singlePost-body-content"
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></div>
          <div className="singlePost-body-comment">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}
