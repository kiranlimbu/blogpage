import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./home-style.css";
import Card from "./Card";
import { cardData } from "../cardData";
import { Search } from "@material-ui/icons";
import CategoryList from "../modules/CategoryList";

export default function Category() {
  const { category } = useParams();
  const [querry, setQuerry] = useState("");
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const names = cardData.map(({ category }) => category);
    const unique = names.filter(
      (val, index, self) => self.indexOf(val) === index
    );
    setCategories(
      unique.map((name) => ({
        name,
        count: names.filter((_name) => _name === name).length,
      }))
    );
  }, []);

  useEffect(() => {
    setPosts(cardData.filter((card) => card.category === category));
  }, [category]);

  // search function
  function search(cards) {
    return cards.filter(
      (card) =>
        card.title.toLocaleLowerCase().indexOf(querry.toLocaleLowerCase()) > -1
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-container-wrapper">
        <div className="features-wrapper">
          <CategoryList categories={categories} />

          <div className="searchBar-container">
            <Search style={{ color: "#888" }} />
            <input
              style={{
                padding: "10px",
                border: "0px solid transparent",
                borderRadius: "50px",
                backgroundColor: "white",
                alignItems: "center",
                margin: "3px 0px",
              }}
              type="text"
              placeholder="Title search..."
              value={querry}
              onChange={(e) => setQuerry(e.target.value)}
            />
          </div>
        </div>

        <div className="card-container">
          <div className="card-grid">
            {search(posts).map((card) => {
              return (
                <div key={card.id}>
                  <Card props={card} totalCards={search(posts).length} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
