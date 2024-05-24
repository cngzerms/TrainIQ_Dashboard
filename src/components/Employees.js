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
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p style={{color: "blue", cursor:"pointer"}}>{text}</p>,
    },
    {
      title: "Current Score",
      dataIndex: "current_score",
      key: "current_score",
      sorter: (a, b) => a.score - b.score,
    },

    {
      title: "Title",
      key: "title",
      dataIndex: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Contact",
      key: "email",
      dataIndex: "email",
      render: (text) => (
        <span style={{ textDecoration: "underline" }}>{text}</span>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ position: "absolute", top: 140, left: 290, width: "80%" }}>
        <p style={{ fontWeight: 500 }}>EMPLOYEES </p>
        <Table
          columns={columns}
          dataSource={data[5][1].map((rowData, index) => ({
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
