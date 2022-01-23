import { useState } from "react";

function CommentForm({
  submitLabel,
  handleSubmit,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
  currentUserEmail,
}) {
  const [text, setText] = useState(initialText);

  const isPostButtonDisabled = text.length === 0;
  const isTextareaDisabled = Boolean(!currentUserEmail);

  // onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <textarea
          className="global-input"
          style={{ width: "100%" }}
          rows={4}
          value={text}
          placeholder="Write comment here..."
          onChange={(e) => setText(e.target.value)}
          disabled={isTextareaDisabled}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="commentForm-button"
            style={{
              margin: "10px 0px",
            }}
            disabled={isPostButtonDisabled}
          >
            {submitLabel}
          </button>
          {hasCancelButton && (
            <button
              type="button"
              className="commentForm-button cancelButton"
              onClick={handleCancel}
              style={{
                margin: "10px 0px",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
