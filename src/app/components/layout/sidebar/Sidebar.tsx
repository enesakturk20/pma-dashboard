"use client";

import { useState } from "react";
import styles from "./Sidebar.module.css"
import Link from "next/link";
import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaFileAlt,
  FaClock,
  FaCheckCircle,
  FaUserFriends,
  FaChartBar,
  FaBell,
  FaFileInvoiceDollar,
  FaTruck,
  FaEnvelopeOpenText,
  FaPaperPlane,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";

const menuItems = [
  { title: "Ana Sayfa", path: "/", icon: <FaHome /> },
  {
    title: "Kullanıcılar",
    icon: <FaUsers />,
    children: [
      { title: "Kullanıcı Ekle", path: "/users/userAdd/user", icon: <FaUserPlus /> },
      { title: "Kullanıcı Listesi", path: "/users/userList", icon: <FaUsers /> },
    ],
  },
  {
    title: "Teklifler",
    icon: <FaFileAlt />,
    children: [
      { title: "Onay Bekleyen", path: "/offers/pending", icon: <FaClock /> },
      { title: "Onaylanan", path: "/offers/approved", icon: <FaCheckCircle /> },
    ],
  },
  {
    title: "Bildirimler",
    icon: <FaBell />,
    children: [
      { title: "Hazır Bildirimler", path: "/notifications/templates", icon: <FaEnvelopeOpenText /> },
      { title: "Bildirim Gönder", path: "/notifications/send", icon: <FaPaperPlane /> },
    ],
  },
  { title: "Bireysel Üyeler", path: "/members/individual", icon: <FaUserFriends /> },
  { title: "Raporlar", path: "/reports", icon: <FaChartBar /> },
  { title: "Faturalar", path: "/invoices", icon: <FaFileInvoiceDollar /> },
  { title: "Transfer Firmaları", path: "/transfers", icon: <FaTruck /> },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="PMA Logo" className={styles.logoImage} />
      </div>
      <div className={styles.panelTitle}>Kullanıcı Paneli</div>
      <nav className={styles.menu}>
        {menuItems.map((item, index) =>
          item.children ? (
            <div key={index} className={styles.menuGroup}>
              <div
                className={styles.menuItem}
                onClick={() => toggleMenu(item.title)}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.chevron}>
                  {openMenus.includes(item.title) ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              </div>
              {openMenus.includes(item.title) && (
                <div className={styles.subMenu}>
                  {item.children.map((sub, subIndex) => (
                    <Link
                      href={sub.path}
                      key={subIndex}
                      className={styles.subMenuItem}
                    >
                      <span className={styles.icon}>{sub.icon}</span>
                      <span>{sub.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.path} key={index} className={styles.menuItem}>
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          )
        )}
      </nav>
    </aside>
  );
}
