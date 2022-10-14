import { useEffect, useState } from 'react';

const Songs = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/moodfilter')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="page">
      <h1>Create Mood</h1>

      {backendData.map((data, i) => (
        <div key={i}>
          <div className="genres">
            <div className="select">
              <input type="checkbox" id="genrename" name={data.GenreName} value={data.GenreName} />
              <label htmlFor={data.GenreName}>{data.GenreName}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Songs;
