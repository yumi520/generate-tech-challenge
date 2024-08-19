import "/Users/yumikochow/generate-tech-challenge/src/App.css"
import React from 'react';

function Dropdown({ category, setCategory }) {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
      <div className="flex flex-row my-10">
        <h2 className="font-bold text-xl mr-5">{category}</h2>
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Recommendations">Recommendations</option>
          <option value="Continue Watching">Continue Watching</option>
        </select>
      </div>
  );
}

export default Dropdown;