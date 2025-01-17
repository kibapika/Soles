import React from "react";
import "./filter.css";

const Filter = ({ sortingFilter, categoryFilter }) => {
  return (
    <div id="filterDiv">
      <h1 id="title">Filter</h1>
      <section id="filterSecA">
        <h3 className="filterTitle">Sort by: </h3>
        <select
          id="select"
          onChange={(e) => {
            sortingFilter(e.target.value);
          }}
        >
          <option value="">Default</option>
          <option value="0">Price: Low to High</option>
          <option value="1">Price: High to Low</option>
          <option value="2">A to Z</option>
          <option value="3">Z to A</option>
          <option value="4">Rating</option>
        </select>
      </section>
      <section id="filterSecB">
        <h3 className="filterTitle">Categories: </h3>
        <input
          onChange={(e) => {
            categoryFilter(e.target.name, e.target.checked);
          }}
          className="checkbox"
          name="Athletic"
          type="checkbox"
        />
        <label htmlFor="Athletic" className="checkTitle">
          Athletic
        </label>
        <input
          onChange={(e) => {
            categoryFilter(e.target.name, e.target.checked);
          }}
          className="checkbox"
          name="Casual"
          type="checkbox"
        />
        <label htmlFor="Casual" className="checkTitle">
          Casual
        </label>
      </section>
    </div>
  );
};

export default Filter;
