import React, { useState } from 'react';
import '../Estilos/SearchBar.css';

const SearchBar = ({ placeholder, filters, onSearch, showFilters = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({});

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, activeFilters);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...activeFilters,
      [name]: value
    };
    setActiveFilters(updatedFilters);
    onSearch(searchTerm, updatedFilters);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      {showFilters && filters && filters.length > 0 && (
        <div className="filters-container">
          {filters.map((filter) => (
            <select
              key={filter.name}
              name={filter.name}
              onChange={handleFilterChange}
              className="filter-select"
              value={activeFilters[filter.name] || ''}
            >
              <option value="">Todos</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
