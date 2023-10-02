'use client';

import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext<{
  selectedCategory: string;
  handleCategoryChange: (newCategory: string) => void;
}>({
  selectedCategory: 'posters',
  handleCategoryChange: () => {
    // Default implementation, can be left empty
  },
});

export function useCategory() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }: any) {
  const [selectedCategory, setSelectedCategory] = useState('posters');

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  const contextValue = {
    selectedCategory,
    handleCategoryChange,
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
}
