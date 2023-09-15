// CategoryContext.js
import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export function useCategory() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('posters');

  const handleCategoryChange = (newCategory: React.SetStateAction<string>) => {
    setSelectedCategory(newCategory);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, handleCategoryChange }}>
      {children}
    </CategoryContext.Provider>
  );
}
