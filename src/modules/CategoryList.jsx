import { useState } from "react";
import { Link } from "react-router-dom";

import "./categoryList-style.css";

export default function CategoryList({ categories }) {
  return (
    <div className="category-container">
      {categories.map(({ name, count, index }) => (
        <Link
          to={`/category/${name}`}
          key={name + index}
          className="category-container-links"
        >
          <div>{name}</div>
          <div>{count}</div>
        </Link>
      ))}
    </div>
  );
}
