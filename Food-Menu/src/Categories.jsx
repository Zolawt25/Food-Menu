import React, { useState } from 'react';











const Categories = ({ categories, filterItems }) => {
  const [active, setActive] = useState(0)
  
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={active === index ? `filter-btn filter-btnActive` : "filter-btn"}
            key={index}
            onClick={() => {filterItems(category), setActive(index)}}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
