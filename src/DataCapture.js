import React, { useState, useEffect } from 'react';

const DataCapture = () => {
  const [dataElements, setDataElements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('training.dhis2.udsm.ac.tz/api/dataElements.json?fields=id,name,formName,valueType,domainType');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDataElements(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleValueChange = (index, newValue) => {
    const updatedData = [...dataElements];
    updatedData[index].value = Number(newValue);
    setDataElements(updatedData);
  };

  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="data-capture-table">
      <h1>Data Capture Form with Percentage Calculation</h1>
      <table>
        <thead>
          <tr>
            <th>Data Element Name</th>
            <th>Value</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          {dataElements.map((element, index) => (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>
                <input
                  type="number"
                  value={element.value || 0}
                  onChange={(e) => handleValueChange(index, e.target.value)}
                />
              </td>
              <td>{((element.value || 0) / 40 * 100).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataCapture;
