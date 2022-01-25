import React from "react";
import { Link } from "react-router-dom";

import "./home-style.css";
import { sluggify } from "../postDetail/Index";

export default function Card({
  img,
  title,
  category,
  description,
  postedAt,
  totalCards,
}) {
  const formattedPostedAt = new Date(postedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const seletClass =
    totalCards >= 3 ? "card stacked" : "card stacked lessThanThree";

  return (
    <div className={seletClass}>
      <div className="thumbnail">
        <img src={img} style={{ width: "100%" }} alt={title} />
      </div>
      <div className="card-content">
        <span className="post-meta">{formattedPostedAt}</span>
        <Link to={`/postDetail/${sluggify(title)}`} className="links">
          <h3 className="title">{title}</h3>
        </Link>
        <Link to={`/category/${category}`} className="links">
          <span className="category">{category}</span>
        </Link>

        <p className="description">{description}</p>
      </div>
    </div>
  );
}
