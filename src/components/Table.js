import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { filteredPlanets } = useContext(PlanetsContext);
  const results = [
    'Name',
    'Rotation_period',
    'Orbital_period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];
  return (
    <table>
      <thead>
        <tr>
          {results.map((result) => <th key={ result }>{ result }</th>)}
        </tr>
      </thead>
      <tbody>
        {
          filteredPlanets.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
