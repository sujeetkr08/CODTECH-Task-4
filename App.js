import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PRODUCTIVE = ['stackoverflow.com', 'github.com', 'leetcode.com'];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/summary').then((res) => {
      setData(res.data);
    });
  }, []);

  const pieData = {
    labels: ['Productive', 'Unproductive'],
    datasets: [{
      data: [
        data.filter(d => PRODUCTIVE.includes(d._id)).reduce((a, b) => a + b.totalTime, 0),
        data.filter(d => !PRODUCTIVE.includes(d._id)).reduce((a, b) => a + b.totalTime, 0),
      ],
      backgroundColor: ['#4CAF50', '#F44336'],
    }]
  };

  return (
    <div>
      <h2>🧠 Productivity Dashboard</h2>
      <Pie data={pieData} />
      <h3>Top Websites</h3>
      <ul>
        {data.map(d => (
          <li key={d._id}>{d._id}: {(d.totalTime / 60).toFixed(1)} min</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
