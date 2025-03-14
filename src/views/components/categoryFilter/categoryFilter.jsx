import React from 'react';
import '../../../assets/css/components/categoryFilter/categoryFilter.scss';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'Electronics', name: 'Electronics' },
  { id: 'Clothing', name: 'Clothing' },
  { id: 'Gadget', name: 'Gadget' },
  { id: 'Education', name: 'Education' },
  { id: 'Home Decor', name: 'Home Decor' },
  { id: 'Personal Care', name: 'Personal Care' },
  { id: 'Travel', name: 'Travel' }
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter mt-4 mb-4">
      <div className="categories-list">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 