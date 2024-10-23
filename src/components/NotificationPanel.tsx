// NotificationPanel.tsx
import React from "react";

interface Notification {
  id: number;
  avatar: string;
  message: string;
  time: string;
}

interface User {
  id: number;
  name: string;
  avatar: string;
}

const NotificationPanel: React.FC = () => {
  const mainNotification = [
    {
      id: 1,
      avatar: "/images/avatar-notification.png",
      message: "New user registered.",
      time: "59 minutes ago",
    },
  ];
  const notifications: Notification[] = [
    {
      id: 2,
      avatar: "/images/avatar-notification.png",
      message: "Changed the style.",
      time: "Just now",
    },
    {
      id: 3,
      avatar: "/images/avatar-notification.png",
      message: "Released a new version.",
      time: "59 minutes ago",
    },
    {
      id: 4,
      avatar: "/images/avatar-notification.png",
      message: "Submitted a bug.",
      time: "12 hours ago",
    },
    {
      id: 5,
      avatar: "/images/avatar-notification.png",
      message: "Modified A data in Page",
      time: "Today, 11:59 AM",
    },
    {
      id: 6,
      avatar: "/images/avatar-notification.png",
      message: "Deleted a page in Project",
      time: "Feb 2, 2024",
    },
  ];

  const users: User[] = [
    { id: 1, name: "Natali Craig", avatar: "/images/avatar-notification.png" },
    { id: 2, name: "Drew Cano", avatar: "/images/avatar-notification.png" },
    { id: 3, name: "Andi Lane", avatar: "/images/avatar-notification.png" },
    { id: 4, name: "Koray Okumus", avatar: "/images/avatar-notification.png" },
    { id: 5, name: "Kate Morrison", avatar: "/images/avatar-notification.png" },
    { id: 6, name: "Melody Macy", avatar: "/images/avatar-notification.png" },
  ];

  return (
    <>
      <div className="notification-panel">
        {/* Notifications Section */}
        <h6 className="section-title">Notifications</h6>
        <div className="notification-list">
          {mainNotification.map((notification) => (
            <div
              key={notification.id}
              className="notification-item d-flex align-items-center p-3 px-2 "
            >
              <img
                src={notification.avatar}
                alt=""
                className="rounded-circle me-3"
                width="32"
                height="32"
              />
              <div>
                <div className="text-dark">{notification.message}</div>
                <small className="time-text">{notification.time}</small>
              </div>
            </div>
          ))}
          <p className="section-title">Clients</p>
          {notifications.map((notification ,idx) => (
            <div
              key={notification.id}
              className="notification-item d-flex align-items-center p-3  position-relative"
            >
                {/* vertical line */}
                {idx < notifications.length - 1 && <div className="vertical-line"></div>}

              <img
                src={notification.avatar}
                alt=""
                className="rounded-circle me-3  bg-white"
                width="32"
                height="32"
              />
              <div>
                <div className="text-dark" style={{fontSize:'14px'}}>{notification.message}</div>
                <small className="time-text">{notification.time}</small>
              </div>

            </div>
          ))}
        </div>

        {/* Factory Section */}
        <h6 className="section-title">Factory</h6>
        <div className="user-list">
          {users.map((user) => (
            <div
              key={user.id}
              className="notification-item d-flex align-items-center p-3 "
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="rounded-circle me-3"
                width="32"
                height="32"
              />
              <div className="text-dark">{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
