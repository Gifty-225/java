import React, { useContext } from "react";
import useResponsiveness from "../Hooks/UseResponsiveness";
import {CategoriesContext}  from "./ContextApi/ContextProvider";

const Categories = () => {
 
  const { categories, loadingCategories, error, truncateText } = useContext(CategoriesContext)

  const { isMobile, isTablet, isDesktop } = useResponsiveness();

  if (loadingCategories) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error loading categories.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.idCategory}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                {isMobile || isTablet ? (
                  <h2 className="text-2xl text-red-500 font-bold mb-2">
                    {category.strCategory}
                  </h2>
                ) : (
                  <h2 className="text-2xl font-bold mb-2">
                    {category.strCategory}
                  </h2>
                )}
                <p className="text-gray-700">
                  {truncateText(category.strCategoryDescription, 20)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
