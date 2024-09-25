import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Table from './components/Table';



function App() {
  const [responseData, setResponseData] = useState(null);
  
  const handleSubmit = async () => {
    const postData = {
      steamid: '76561198041677591',
    };

    try {
      const response = await fetch('http://localhost:8000/api/v1/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      setResponseData(responseData);
    } catch (error) {
      console.error('There was an error making the POST request:', error);
    }
  }
  return (
    <div>
      <Navbar/>
      <Table />
      <button onClick={handleSubmit}>Send POST Request</button>
      {responseData && <pre>{JSON.stringify(responseData['wishlist'], null, 2)}</pre>}
    </div>
  );
}


export default App;
