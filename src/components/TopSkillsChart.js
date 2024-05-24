import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useData } from "../context";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopSkillsChart = () => {
  const { data } = useData();

  if (!data || data.length === 0) {
    return (
      <p
        style={{
          position: "absolute",
          top: 140,
          left: 290,
          width: "100vh",
          padding: "1.5rem",
          fontSize: "2rem",
        }}
      >
        Loading...
      </p>
    );
  }

  const employeesCountArray = [];
  data[6][1].forEach(function (obj) {
    employeesCountArray.push(obj.employees);
  });

  const skillArray = [];
  data[6][1].forEach(function (obj) {
    skillArray.push(obj.skill);
  });

  const data2 = {
    labels: skillArray.map(function (skill) {
      return skill;
    }),
    datasets: [
      {
        label: "Number of Employee",
        data: employeesCountArray.map(function (employeeCount) {
          return employeeCount;
        }),
        backgroundColor: "#1665D8",
      },
    ],
  };

  return <Bar data={data2} height={250} width={500} style={{paddingLeft: "1.5rem"}}/>;
};

export default TopSkillsChart;
