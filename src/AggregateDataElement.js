import React, { useState, useEffect } from 'react';

const API_URL = 'https://training.dhis2.udsm.ac.tz/api/dataElements.json?fields=id,name,formName,valueType,domainType&filter=domainType:eq:AGGREGATE';

const AggregateDataElements = () => {
  const [dataElements, setDataElements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setDataElements(result.dataElements || []); 
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h1>Aggregate Data Elements</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Form Name</th>
            <th>Value Type</th>
            <th>Domain Type</th>
          </tr>
        </thead>
        <tbody>
          {dataElements.map(element => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.formName}</td>
              <td>{element.valueType}</td>
              <td>{element.domainType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AggregateDataElements;
