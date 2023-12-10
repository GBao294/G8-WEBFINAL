import React, { useEffect, useState } from 'react';

function  Money() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5555/get-value');
        const data = await response.json();
        setValue(data.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{value !== null ? value : 'Loading...'} VNĐ</p>
    </div>
  );
}

export { Money };

