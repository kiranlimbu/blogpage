import React from "react";
import { Link } from "react-router-dom";

import "./home-style.css";

export default function Card({ props, totalCards }) {
  const postedAt = new Date(props.postedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const seletClass =
    totalCards >= 3 ? "card stacked" : "card stacked lessThanThree";

  return (
    <div className={seletClass}>
      <div className="thumbnail">{props.img}</div>
      <div className="card-content">
        <span className="post-meta">{postedAt}</span>
        <Link to={`/postDetail/${props.title}`} className="links">
          <h3 className="title">{props.title}</h3>
        </Link>
        <Link to={`/category/${props.category}`} className="links">
          <span className="category">{props.category}</span>
        </Link>

        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
