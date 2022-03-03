import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NameSearch() {
  const { setFilters, filters } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  return (
    <form>
      <input
        name="name-filter"
        data-testid="name-filter"
        placeholder="search a planet by name"
        type="text"
        onChange={ handleChange }
      />
    </form>
  );
}

export default NameSearch;
