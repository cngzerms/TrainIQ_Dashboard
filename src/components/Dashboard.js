import React from "react";
import Navbar from "../components/Navbar";
import { useData } from "../context";
import DashboardChart from "./DashboardChart";
import { Progress, Card, Spin } from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CaretRightOutlined,
  UndoOutlined,
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data2 = {
  datasets: [
    {
      label: "My First Dataset",
      data: [66, 22, 15],
      backgroundColor: ["#1070CA", "#EC4C47", "#F7D154"],
    },
  ],
};

function Employees() {
  const { data } = useData();

  if (!data || data.length === 0) {
    return <Spin size="large" style={{ padding: "20% 49%" }} />;
  }
  return (
    <div>
      <Navbar />
      <div className="dashboard-grid-container">
        <Card className="one shadow">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1,
                color: "#66788A",
                marginBottom: 0,
              }}
            >
              TEAMS <br />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 24,
                  letterSpacing: -0.06,
                  color: "#212529",
                }}
              >
                {data[4][1].length}
              </span>
            </div>
            <div className="red oval"></div>
          </div>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: -0.04,
              color: "#BF0E08",
              paddingTop: "20%",
            }}
          >
            <CaretDownOutlined />
            %12
            <span
              style={{
                marginLeft: 5,
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: -0.04,
                color: "#66788A",
              }}
            >
              Since last month
            </span>
          </p>
        </Card>
        <Card className="two shadow">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1,
                color: "#66788A",
                marginBottom: 0,
              }}
            >
              TOTAL EMPLOYEES <br />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 24,
                  letterSpacing: -0.06,
                  color: "#212529",
                }}
              >
                {data[8][1]}
              </span>
            </div>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#47B881",
                padding: "18px 18px",
              }}
            >
              <div className="green oval"></div>
            </div>
          </div>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: -0.04,
              color: "#47B881",
              paddingTop: "20%",
            }}
          >
            <CaretUpOutlined />
            %16
            <span
              style={{
                marginLeft: 5,
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: -0.04,
                color: "#66788A",
              }}
            >
              Since last month
            </span>
          </p>
        </Card>
        <Card className="three shadow">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1,
                color: "#66788A",
                marginBottom: 0,
              }}
            >
              TOTAL COMPLETED COURSES <br />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 24,
                  letterSpacing: -0.06,
                  color: "#212529",
                }}
              >
                {data[7][1]}
              </span>
            </div>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#1070CA",
                padding: "18px 18px",
              }}
            >
              <div className="blue oval"></div>
            </div>
          </div>
          <Progress
            percent={40}
            style={{ padding: "20% 1%" }}
            size="small"
            showInfo={false}
          />
        </Card>
        <Card className="four shadow">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1,
                marginBottom: 0,
              }}
            >
              IN PROGRESS COURSES <br />
              <span
                style={{ fontWeight: 500, fontSize: 24, letterSpacing: -0.06 }}
              >
                {data[2][1].length}
              </span>
            </div>
            <div className="total-profit oval"></div>
          </div>
          <div
            style={{ fontSize: 12, letterSpacing: -0.04, paddingTop: "22%" }}
          >
            <p style={{ fontWeight: 500 }}>
              <CaretUpOutlined />
              %16
              <span style={{ marginLeft: 5, fontWeight: 400 }}>
                Since last month
              </span>
            </p>
          </div>
        </Card>
        <div className="five shadow">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2px 7px",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                letterSpacing: -0.05,
                color: "#3A3B3F",
              }}
            >
              Employees x Courses
            </div>
          </div>
          <DashboardChart />
          <div className="dashboard-chart-bottom-rectangle rectangle-default"></div>
          <div
            style={{
              textAlign: "right",
              padding: "1rem 0",
              fontWeight: 500,
              fontSize: 14,
              color: "#1070CA",
            }}
          >
            Audience Overview <CaretRightOutlined />
          </div>
        </div>
        <Card className="six shadow">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "3% 1%",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: -0.05,
                color: "#3A3B3F",
              }}
            >
              Employees by device
            </div>
            <UndoOutlined
              onClick={() => window.location.reload()}
              style={{ cursor: "pointer", width: 22, height: 16 }}
            />
          </div>
          <div className="dashboard-chart-bottom-rectangle rectangle-default"></div>
          <Doughnut className="doughnut" data={data2} />
          <Card style={{ paddingBottom: "10%" }} bordered={false}>
            <div className="six-grid-inner-div">
              <div style={{ textAlign: "center" }}>
                <DesktopOutlined style={{ color: "#a6b1bb" }} />
                <div style={{ fontSize: 12, color: "#9EA0A5" }}>
                  Desktop <br />{" "}
                  <span
                    style={{
                      fontWeight: 500,
                      letterSpacing: -0.24,
                      color: "#1070CA",
                      fontSize: 29,
                    }}
                  >
                    63%
                  </span>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <TabletOutlined style={{ color: "#a6b1bb" }} />
                <div style={{ fontSize: 12, color: "#9EA0A5" }}>
                  Tablet <br />{" "}
                  <span
                    style={{
                      fontWeight: 500,
                      letterSpacing: -0.24,
                      color: "#F7D154",
                      fontSize: 29,
                    }}
                  >
                    15%
                  </span>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <MobileOutlined style={{ color: "#a6b1bb" }} />
                <div style={{ fontSize: 12, color: "#9EA0A5" }}>
                  Mobile <br />{" "}
                  <span
                    style={{
                      fontWeight: 500,
                      letterSpacing: -0.24,
                      color: "#EC4C47",
                      fontSize: 29,
                    }}
                  >
                    22%
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <div className="dashboard-chart-bottom-rectangle rectangle-default"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 2px",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: -0.05,
                color: "#3A3B3F",
                cursor: "pointer",
              }}
            >
              Last 7 days
              <CaretRightOutlined style={{ color: "#9EA0A5", marginLeft: 2 }} />
            </div>
            <div
              style={{
                color: "#1070CA",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: -0.05,
                cursor: "pointer",
              }}
            >
              Audience Devices
              <CaretRightOutlined style={{ color: "#1665D8", marginLeft: 2 }} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Employees;
