import { useState, useEffect } from "react";

import "./comments-style.css";
import { commentData } from "./data";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Modal from "./Modal";
import CommentLogin from "../Auth/CommentLogin";

function Comments() {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // filter root comment from child comment
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  // getUsername
  const getUsername = (userName) => {
    setUserName(userName);
  };

  // getUserEmail
  const getUserEmail = (userEmail) => {
    setUserEmail(userEmail);
  };

  // show modal
  const show = () => setIsOpen(true);

  // hide modal
  const hide = () => setIsOpen(false);

  // grab child comment (replies)
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  // create Comment (fetch action)
  const createCommentAPI = (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userEmail: userEmail,
      username: userName,
      createdAt: new Date().toISOString(),
    };
  };

  // adding comment (fetch action)
  const addComment = (text, parentId) => {
    const newComment = createCommentAPI(text, parentId);
    setBackendComments([newComment, ...backendComments]);
    setActiveComment(null);
  };

  // delet comment (fetch action)
  const deleteCommentAPI = (commentId) => {
    const filteredBackendComments = backendComments.filter(
      (backendComment) => backendComment.id !== commentId
    );
    setBackendComments(filteredBackendComments);
  };

  // update Comment (fetch action)
  const updateComment = (text, commentId) => {
    const updatedBackendComments = backendComments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, body: text };
      }
      return comment;
    });
    setBackendComments(updatedBackendComments);
    setActiveComment(null);
  };

  // fetch comments
  useEffect(() => {
    setBackendComments(commentData);
  }, []);

  return (
    <div className="comments">
      <div
        className="comments-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 10px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h3 className="comments-title">Comments</h3>
        <div className="comments-login">
          <h4 style={{ color: "tomato" }} onClick={show}>
            Login
          </h4>
          {isOpen && (
            <Modal CloseAction={hide}>
              <CommentLogin
                getUsername={getUsername}
                getUserEmail={getUserEmail}
                successful={hide}
              />
            </Modal>
          )}
        </div>
      </div>
      <div className="commentForm-field" style={{ marginTop: "20px" }}>
        <CommentForm
          submitLabel="Post"
          handleSubmit={addComment}
          currentUserEmail={userEmail}
        />
      </div>
      <div className="comments-content" style={{ marginTop: "20px" }}>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserEmail={userEmail}
            deleteComment={deleteCommentAPI}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
