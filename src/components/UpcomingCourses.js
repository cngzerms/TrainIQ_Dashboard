import React from "react";
import Navbar from "../components/Navbar";
import { useData } from "../context";
import { Table, Spin } from "antd";

function UpcomingCourses() {
  const { data } = useData();

  if (!data || data.length === 0) {
    return <Spin size="large" style={{ padding: "20% 49%" }} />;
  }

  const columns = [
    {
      title: "Assigned to",
      dataIndex: "assigned_to",
      key: "assigned_to",
      render: (text) => <p style={{color: "blue", cursor:"pointer"}}>{text}</p>,
    },
    {
      title: "Date",
      dataIndex: "due_date",
      key: "due_date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
      render: (text) => <span>{text}</span>,
    },
  ];
  return (
    <div>
      <Navbar />
      <div style={{ position: "absolute", top: 140, left: 290, width: "80%" }}>
        <p style={{ fontWeight: 500 }}>UPCOMING COURSES </p>
        <Table
          columns={columns}
          dataSource={data[9][1].map((rowData, index) => ({
            ...rowData,
            key: index,
          }))}
          size="large"
        />
      </div>
    </div>
  );
}

export default UpcomingCourses;
