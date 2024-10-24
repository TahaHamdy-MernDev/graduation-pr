import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const SidebarMenu: React.FC = () => {
  const [openSections, setOpenSections] = useState({
    userProfile: false,
    account: false,
    corporate: false,
    blog: false,
    social: false,
  });

  const menuItems = {
    userProfile: [
      { path: "profile", name: "Overview" },
      { path: "products", name: "Products" },
      { path: "", name: "Campaigns" },
      { path: "", name: "Documents" },
      { path: "", name: "Followers" },
    ],
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const MenuButton = ({
    section,
    label,
    iconSrc,
  }: {
    section: keyof typeof openSections;
    label: string;
    iconSrc: string;
  }) => (
    <button
      onClick={() => toggleSection(section)}
      className="nav-link w-100 p-2 border-0 bg-transparent mb-2"
    >
      <span className={`chevron-icon ${openSections[section] ? "rotate" : ""}`}>
        <ChevronRight size={18} />
      </span>
      <img src={iconSrc} width={22} height={22} alt={label} />
      <span className="flex-grow-1 text-start">{label}</span>
    </button>
  );

  const Submenu = ({
    section,
    items,
  }: {
    section: keyof typeof openSections;
    items: Array<{ name: string; path: string }>;
  }) => (
    <div className={`submenu ${openSections[section] ? "show" : ""}`}>
      {items.map((item, index) => (
        <button key={index} className="nav-link w-100 border-0 bg-transparent">
          <NavLink to={item.path} className=' text-black text-decoration-none'>{item.name}</NavLink>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <div className="text-secondary mb-3">Pages</div>

      <div className="mb-2">
        <MenuButton
          section="userProfile"
          label="User Profile"
          iconSrc="/images/user-profile.png"
        />
        <Submenu section="userProfile" items={menuItems.userProfile} />
      </div>

      <MenuButton
        section="account"
        label="Account"
        iconSrc="/images/account.png"
      />
      <MenuButton
        section="corporate"
        label="Corporate"
        iconSrc="/images/users.svg"
      />
      <MenuButton section="blog" label="Blog" iconSrc="/images/book.png" />
      <MenuButton section="social" label="Social" iconSrc="/images/chats.png" />
    </>
  );
};

export default SidebarMenu;
