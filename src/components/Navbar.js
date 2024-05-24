import React from "react";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  UserOutlined,
  BarChartOutlined,
  StarOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Row, Col, Badge } from "antd";
function Navbar() {
  return (
    <div>
      <Row
        className="bg-blue"
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "1280px",
        }}
      >
        <Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={5}>
          <Link to="/">
            <div className="top-left-box">
              <div className="oval-box"></div>
              <div className="top-left-text">Train IQ</div>
              <Badge count={"TASK"} style={{ background: "#26A69A" }}></Badge>
            </div>
          </Link>
        </Col>

        <Col xs={2} sm={2} md={2} lg={2} xl={4} xxl={5}>
          <div className="top-right-icons">
            <NotificationOutlined style={{ marginRight: "10px" }} />
            <LogoutOutlined />
          </div>
        </Col>
      </Row>
      <div className="left-bar">
        <div className="menu-group">
          <Link to="/dashboard" className="link-no-underline">
            <div className="menu-item ">
              <UserOutlined className="icon-style" />
              <p className="mt1">Dashboard</p>
            </div>
          </Link>
          <Link to="/employees" className="link-no-underline">
            <div className="menu-item ">
              <UserOutlined className="icon-style" />
              <p className="mt1">Employees</p>
            </div>
          </Link>
          <Link to="/top-skills" className="link-no-underline">
            <div className="menu-item">
              <StarOutlined className="icon-style" />
              <p className="mt1">Top Skills</p>
            </div>
          </Link>
          <Link to="/activity-hours" className="link-no-underline">
            <div className="menu-item">
              <BarChartOutlined className="icon-style" />
              <p className="mt1">Activity Hours</p>
            </div>
          </Link>
          <Link to="/upcoming-courses" className="link-no-underline">
            <div className="menu-item">
              <CalendarOutlined className="icon-style" />
              <p className="mt1">Upcoming Courses</p>
            </div>
          </Link>
          <Link to="/teams" className="link-no-underline">
            <div className="menu-item">
              <TeamOutlined className="icon-style" />
              <p className="mt1">Teams</p>
            </div>
          </Link>
        </div>
        <div className="rectangle mt-3 rectangle-default"></div>
        <div className="bottom-menu-group">
          <div className="menu-item">
            <QuestionCircleOutlined className="icon-style" />
            <p className="mt1">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
