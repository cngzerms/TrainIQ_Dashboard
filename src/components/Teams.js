import React from "react";
import Navbar from "../components/Navbar";
import { useData } from "../context";
import { Table, Spin } from "antd";

function Teams() {
  const { data } = useData();

  if (!data || data.length === 0) {
    return <Spin size="large" style={{ padding: "20% 49%" }} />;
  }

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
      render: (text) => (
        <p style={{ color: "blue", cursor: "pointer" }}>{text}</p>
      ),
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "30%",
    },
    {
      title: "Total Employee",
      dataIndex: "total_employee_count",
      key: "total_employee_count",
      sorter: (a, b) => a.total_employee_count - b.total_employee_count,
      width: "15%",
    },

    {
      title: "Overall Score",
      dataIndex: "overall_score",
      key: "overall_score",
      sorter: (a, b) => a.overall_score - b.overall_score,
      width: "10%",
    },
  ];
  return (
    <div>
      <Navbar />
      <div style={{ position: "absolute", top: 140, left: 290, width: "80%" }}>
        <p style={{ fontWeight: 500 }}>TEAMS </p>
        <Table
          columns={columns}
          dataSource={data[4][1].map((rowData, index) => ({
            ...rowData,
            key: index,
          }))}
          size="large"
        />
      </div>
    </div>
  );
}

export default Teams;
