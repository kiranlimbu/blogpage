import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import "./home-style.css";
import Card from "./Card";
import { cardData } from "../cardData";
import CategoryList from "../modules/CategoryList";
import { Search } from "@material-ui/icons";

export default function Home() {
  const [loadLimit, setLoadLimit] = useState(cardData.slice(0, 50));
  const [currentPage, setCurrentPage] = useState(0);
  const [querry, setQuerry] = useState("");
  const [categories, setCategories] = useState([]);

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

  const displayLimit = 10;
  const totalDisplayed = currentPage * displayLimit;

  // Pagination helper functions
  // data that will be displayed next
  const nextDisplay = loadLimit.slice(
    totalDisplayed,
    totalDisplayed + displayLimit
  );

  const totalPages = Math.ceil(loadLimit.length / displayLimit);

  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

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
            {search(nextDisplay).map((card) => {
              return (
                <div key={card.id}>
                  <Card props={card} totalCards={search(nextDisplay).length} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {totalPages > 1 && (
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={totalPages}
          onPageChange={onPageChange}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"nextButtons"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
    </div>
  );
}
