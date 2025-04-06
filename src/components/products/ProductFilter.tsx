
import React, { useState } from 'react';
import { Filter, Check } from 'lucide-react';

type Category = 'Personal Care' | 'Baby Wipes' | 'Pet Care' | 'Disinfecting' | 'Eco-Friendly';

interface ProductFilterProps {
  onFilterChange: (categories: Category[]) => void;
  className?: string;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  
  const categories: Category[] = [
    'Personal Care',
    'Baby Wipes',
    'Pet Care',
    'Disinfecting',
    'Eco-Friendly'
  ];
  
  const toggleCategory = (category: Category) => {
    let newCategories: Category[];
    
    if (selectedCategories.includes(category)) {
      newCategories = selectedCategories.filter(c => c !== category);
    } else {
      newCategories = [...selectedCategories, category];
    }
    
    setSelectedCategories(newCategories);
    onFilterChange(newCategories);
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    onFilterChange([]);
  };
  
  return (
    <div className={`relative ${className}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow transition-all"
      >
        <Filter size={16} />
        <span>Filter</span>
        {selectedCategories.length > 0 && (
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-brand-600 rounded-full">
            {selectedCategories.length}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-30 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Categories</h3>
            {selectedCategories.length > 0 && (
              <button 
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-brand-600"
              >
                Clear all
              </button>
            )}
          </div>
          
          <div className="space-y-2">
            {categories.map(category => (
              <div 
                key={category}
                className="flex items-center"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className={`w-full py-1.5 px-2 rounded flex items-center text-left hover:bg-gray-50 transition-colors ${
                    selectedCategories.includes(category) ? 'text-brand-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center mr-3 ${
                    selectedCategories.includes(category) 
                      ? 'bg-brand-600 border-brand-600' 
                      : 'border-gray-300'
                  }`}>
                    {selectedCategories.includes(category) && (
                      <Check size={14} className="text-white" />
                    )}
                  </div>
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
