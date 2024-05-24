import React from "react";
import Navbar from "../components/Navbar";
import { useData } from "../context";
import { Table, Spin } from "antd";

function Employees() {
  const { data } = useData();

  if (!data || data.length === 0) {
    return <Spin size="large" style={{ padding: "20% 49%" }} />;
  }

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p style={{color: "blue", cursor:"pointer"}}>{text}</p>,
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      sorter: (a, b) => a.hours - b.hours,
    },
    {
      title: "Completed Exams",
      dataIndex: "exams_completed",
      key: "exams_completed",
    },
    {
      title: "Takes Lessons",
      key: "lessons_taken",
      dataIndex: "lessons_taken",
      render: (text) => <span>{text}</span>,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ position: "absolute", top: 140, left: 290, width: "80%" }}>
        <p style={{ fontWeight: 500 }}>ACTIVITY HOURS </p>
        <Table
          columns={columns}
          dataSource={data[0][1].map((rowData, index) => ({
            ...rowData,
            key: index,
          }))}
          size="large"
        />
      </div>
    </div>
  );
}

export default Employees;
