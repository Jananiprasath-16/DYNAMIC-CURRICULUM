// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [curriculum, setCurriculum] = useState([]);

  const getCurriculum = () => {
    axios.get('http://localhost:5000/get_curriculum')
      .then(response => {
        setCurriculum(response.data.courses);
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching curriculum:', error);
      });
  };

  return (
    <div>
      <h1>Dynamic Curriculum Prototype</h1>
      <button onClick={getCurriculum}>Get Updated Curriculum</button>
      <h2>Current Curriculum:</h2>
      <ul>
        {curriculum.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
