import { useParams } from "react-router-dom";

import "./post-style.css";
import postData from "./data.json";
import PostDetail from "./PostDetail";

// remove number and space on the tile when display url
export function sluggify(str) {
  let newStr = str.replace(/[0-9]/g, "");
  return newStr.replace(/ /g, "-").toLowerCase();
}

export default function Post() {
  const { title } = useParams();

  const postProps = postData.find((p) => sluggify(p.title) === sluggify(title));

  return (
    <div className="singlePost-container">{<PostDetail {...postProps} />}</div>
  );
}
