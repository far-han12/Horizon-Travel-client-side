import React from 'react';

const Filter = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    const [minPrice, maxPrice] = e.target.value.split('-');
    onFilter(minPrice, maxPrice);
  };

  return (
    <div className='flex justify-center '>
      <select 
        className="border-2 p-2 rounded-lg" 
        onChange={handleFilterChange}
      >
        <option className='text-sm lg:text-base' value="">Filter By Price</option>
        <option className= 'text-sm lg:text-base' value="1000-4000">
          $ 1000-4000
        </option>
        <option className='text-sm lg:text-base' value="5000-10000">
        $ 5000-10000
        </option>
      </select>
    </div>
  );
};

export default Filter;