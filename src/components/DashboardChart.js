import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
    labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov' ],
    datasets: [
      {
        label: 'Completed Courses',
        data: [6, 5, 18, 26, 28, 18],
        backgroundColor: '#1665D8',
      },
      {
        label: 'Total Courses',
        data: [11, 19, 18, 28, 29, 24],
        backgroundColor: '#E4E7EB',
      }],
    };
  
  

const DashboardChart = () => {
    return (
        <Bar 
            data={data}
            height={190}
            width={500}
        />
    )
}

export default DashboardChart;