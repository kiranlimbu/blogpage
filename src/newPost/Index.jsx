import { useState } from "react";
import RichEditor from "./DraftjsEditor";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

import "./richEditor-style.css";

export default function AddPost() {
  const [blogContent, setBlogContent] = useState("");
  const [displayText, showText] = useState(false);
  const [blogInfo, setBlogInfo] = useState({
    id: "",
    title: "",
    category: "",
    author: "",
    description: "",
  });

  // Get user input
  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const blogData = { ...blogInfo };
    blogData[fieldName] = fieldValue;

    setBlogInfo(blogData);
  };

  // grab text from content box
  const getText = (contentState) => {
    setBlogContent(draftToHtml(convertToRaw(contentState)));
  };

  // onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();

    // get blog data using destructuring object
    const blogData = { ...blogInfo, blogContent };
    // send info to backend
    console.log(blogData);
    showText(true);
  };

  return (
    <div className="newPost-container">
      <div className="newPost-wrapper">
        <h2 style={{ marginTop: "-10px", color: "#aaa", fontWeight: "600" }}>
          Blog Detail
        </h2>

        <form className="newPost-itemList-form" onSubmit={onSubmit}>
          <div>
            <label name="title">Title</label>
            <input
              className="global-input"
              type="text"
              name="title"
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label name="category">Category</label>
            <input
              className="global-input"
              type="text"
              name="category"
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label name="author">Author</label>
            <input
              className="global-input"
              type="text"
              name="author"
              onChange={handleFormChange}
            />
          </div>

          <div>
            <label name="description">Thesis Statement</label>
            <textarea
              className="global-input"
              type="text"
              name="description"
              rows="3"
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label name="content" style={{ marginBottom: "5px" }}>
              Content
            </label>
            <RichEditor getText={getText} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {displayText && (
          <div
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid red",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Markup Demo
            </h2>
            <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
          </div>
        )}
      </div>
    </div>
  );
}
