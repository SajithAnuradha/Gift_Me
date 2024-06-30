import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SalesReport = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/order/chart');
        const data = response.data.result;

        const labels = data.map(item => `${item._id.year}-${item._id.month}`);
        const counts = data.map(item => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Monthly Order Count',
              data: counts,
              backgroundColor: 'rgb(154, 189, 241)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching the monthly count data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='chart'>
      <h2 >Sales Report</h2>
      {chartData && chartData.labels && chartData.labels.length > 0 ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SalesReport;
