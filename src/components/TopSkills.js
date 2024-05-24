import React from "react";
import Navbar from "../components/Navbar";
import { useData } from "../context";
import TopSkillsChart from "./TopSkillsChart";
import { CaretRightOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function TopSkills() {
  const { data } = useData();

  if (!data || data.length === 0) {
    return <Spin size="large" style={{ padding: "20% 49%" }} />;
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 290,
          width: "120vh",
          padding: "1.5rem",
        }}
      >
        <div className="five shadow">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 7px",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                letterSpacing: -0.05,
                color: "#333",
              }}
            >
              Top Skills
            </div>
          </div>
          <TopSkillsChart />
          <div className="dashboard-chart-bottom-rectangle rectangle-default"></div>
          <div
            style={{
              textAlign: "right",
              padding: "2px 0",
              fontWeight: 500,
              fontSize: 14,
              color: "#1070CA",
              margin: "0.75rem 0.5rem",
            }}
          >
            Top Skills <CaretRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSkills;
