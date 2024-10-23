import React, { useState } from "react";

import SidebarMenu from "../SidebarMenu";
import NotificationPanel from "../NotificationPanel";
import { Link, Outlet, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation(); // Get current location
  const pathnames = location.pathname.split("/").filter((x) => x); // Remove any empty strings

  return (
    <div className="breadcrumb mb-0 d-flex align-items-center">
    
      <Link
        to="/dashboard"
        className="breadcrumb mb-0 text-decoration-none cursor-pointer me-2"
      >
        Dashboard
      </Link>
      {pathnames.length > 1 && <span>/</span>}

      {pathnames.slice(1).map((name, index) => {
        const routeTo = `/dashboard/${pathnames.slice(1, index + 2).join("/")}`;
        const isLast = index === pathnames.length - 2;

        return isLast ? (
          <span key={name} className="ms-2 text-black">
            {name === "dashboard" ? "Default" : name}
          </span>
        ) : (
          <Link key={name} to={routeTo} className="ms-2 text-decoration-none">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationBarOpen, setIsNotificationBarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleNotificationBar = () => setIsNotificationBarOpen((prev) => !prev);

  return (
    <div className="d-flex vh-100 overflow-hidden">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="d-flex flex-column justify-content-between flex-shrink-0 border-end main-border"
          style={{ width: "212px" }}
        >
          <div className="px-2">
            <div className="d-flex align-items-center mb-4 pt-3 px-2">
              <img
                src="/images/avatar.png"
                alt="Logo"
                className="img-fluid me-2 object-fit-contain"
                style={{ height: "30px", width: "30px" }}
              />
              <span>ByeWind</span>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center gap-2 px-3">
              <span className="text-black-40">Favorites</span>
              <span className="text-black-20">Recently</span>
            </div>
            <div className="mt-4">
              <p className="mb-1 text-black-40">Dashboards</p>
              <div className="mt-2 d-flex flex-column gap-2 align-items-start justify-content-start">
                <div className="dashboard-link w-100 rounded-4 py-3 px-3 active d-flex justify-content-start align-items-center gap-1">
                  <img
                    src="/images/overview.png"
                    width={22}
                    height={22}
                    alt="project"
                  />
                  <span className="inter-regular" style={{ fontSize: "16px" }}>
                    Overview
                  </span>
                </div>
                <div className="dashboard-link w-100 rounded-4 py-3 px-3 active d-flex justify-content-start align-items-center gap-1">
                  <img
                    src="/images/ShoppingBagOpen.png"
                    width={22}
                    height={22}
                    alt="project"
                  />
                  <span className="inter-regular" style={{ fontSize: "16px" }}>
                    Factories
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <SidebarMenu />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="sidebar-logout">
              <span style={{ color: "rgba(229, 32, 1, 1)" }}></span>
              Sign out
              <img src="/images/logout.png" alt="logout" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom main-border">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button
              onClick={toggleSidebar}
              className=" border-0 bg-transparent"
            >
              <img src="/images/sidebar.png" alt="toggle sidebar" />
            </button>
            <img src="/images/star.png" alt="star" />
            <Breadcrumb />
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div
              style={{ maxWidth: "225px" }}
              className="search-bar d-flex justify-content-center align-items-center rounded-2 px-2"
            >
              <img
                src="/images/search.png"
                width={20}
                height={20}
                alt="search"
              />
              <input
                type="text"
                className="form-control px-1"
                placeholder="Search..."
              />
              <img src="/images/hot.png" alt="search" width={30} height={30} />
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img src="/images/clock.png" alt="clock" />
              <img src="/images/ring.png" alt="ring" />
              <button
                onClick={toggleNotificationBar}
                className=" border-0 bg-transparent"
              >
                <img src="/images/sidebar.png" alt="toggle notification bar" />
              </button>
            </div>
          </div>
        </header>

        {/* start pages content */}
        <div className="flex-grow-1 overflow-auto px-2">
          <Outlet />
        </div>
        {/* end pages content */}
      </div>

      {/* Right Sidebar */}
      {isNotificationBarOpen && (
        <div
          className="d-flex flex-column flex-shrink-0 bg-light border-start"
          style={{ width: "280px" }}
        >
          <NotificationPanel />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
