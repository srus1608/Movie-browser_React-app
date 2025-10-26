import React from "react";

const Filter = ({ onGenreChange, onRatingChange }) => {
  return (
    <div className="filter">
      <select onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
      </select>

      <select onChange={(e) => onRatingChange(e.target.value)}>
        <option value="">All Ratings</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
      </select>
    </div>
  );
};

export default Filter;
