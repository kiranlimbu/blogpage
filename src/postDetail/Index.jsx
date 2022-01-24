import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./post-style.css";
import { postData } from "./data";
import PostDetail from "./PostDetail";

export default function Post() {
  const { title } = useParams();
  const [val, setVal] = useState();

  useEffect(() => {
    const post = postData.find((p) => p.title === title);

    if (post) {
      setVal(post);
    }
  }, [title]);

  return (
    <div className="singlePost-container">
      {val && <PostDetail key={val.id} props={val} />}
    </div>
  );
}
