import CommentForm from "./CommentForm";

function Comment({
  comment,
  replies,
  currentUserEmail,
  deleteComment,
  activeComment,
  setActiveComment,
  addComment,
  parentId = null,
  updateComment,
}) {
  const canReply = Boolean(currentUserEmail);
  const canEdit = currentUserEmail === comment.userEmail; // can edit and delete
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;

  return (
    <div>
      <div
        className="comment-header"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginBottom: "5px",
          marginTop: "20px",
        }}
      >
        <div className="comment-author" style={{ fontWeight: "bold" }}>
          {comment.username}
        </div>
        <div className="comment-date" style={{ color: "#888" }}>
          {createdAt}
        </div>
      </div>
      {!isEditing && <div className="comment-date">{comment.body}</div>}
      {isEditing && (
        <CommentForm
          submitLabel="Update"
          hasCancelButton
          initialText={comment.body}
          handleSubmit={(text) => updateComment(text, comment.id)}
          handleCancel={() => setActiveComment(null)}
          currentUserEmail={currentUserEmail}
        />
      )}
      <div
        className="comment-actions"
        style={{
          display: "inline-flex",
          padding: "0px 0px",
          gap: "20px",
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        {canReply && (
          <div
            className="comment-action"
            onClick={() =>
              setActiveComment({
                id: comment.id,
                type: "replying",
              })
            }
          >
            Reply
          </div>
        )}
        {canEdit && (
          <div
            className="comment-action"
            onClick={() =>
              setActiveComment({
                id: comment.id,
                type: "editing",
              })
            }
          >
            Edit
          </div>
        )}
        {canEdit && (
          <div
            className="comment-action"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </div>
        )}
      </div>
      {isReplying && (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={(text) => addComment(text, replyId)}
          currentUserEmail={currentUserEmail}
        />
      )}

      {replies.length > 0 && (
        <div
          className="comment-replies"
          style={{ margin: "10px 0px 10px 50px" }}
        >
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              replies={[]}
              currentUserEmail={currentUserEmail}
              deleteComment={deleteComment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              parentId={comment.id}
              updateComment={updateComment}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
