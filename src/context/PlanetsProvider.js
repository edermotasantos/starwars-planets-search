import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columnOptions, setColumnOptions] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const SearchPlanets = planetList.filter(({ name }) => name
      .includes(filters.filterByName.name));
    setFilteredPlanets(SearchPlanets);
  }, [planetList, filters]);

  useEffect(() => {
    const requestApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(url)
        .then((response) => response.json())
        .then((result) => result.results)
        .catch((error) => error);
      planets.forEach((planet) => delete planet.residents);
      setPlanetList(planets);
    };
    requestApi();
  }, []);

  const data = {
    filteredPlanets,
    planetList,
    filters,
    setFilters,
    setFilteredPlanets,
    columnOptions,
    setColumnOptions,
  };

  return (
    <PlanetsContext.Provider value={ data }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = ({
  children: PropTypes.element.isRequired,
});

export default PlanetsProvider;
