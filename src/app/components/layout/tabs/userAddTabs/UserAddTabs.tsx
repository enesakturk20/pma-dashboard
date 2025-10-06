'use client';

import styles from './UserAdd.module.css';
import Link from 'next/link';

import { FaUser, FaIdBadge, FaHospitalAlt } from 'react-icons/fa';

interface TabsProps {
  activeTabIndex?: number;
}

const tabItems = [
  { label: 'Kullanıcı', icon: <FaUser />, path: 'user' },
  { label: 'Profil', icon: <FaIdBadge />, path: 'profile' },
  { label: 'Şube', icon: <FaHospitalAlt />, path: 'branch' }
];

export default function UserAddTabs({ activeTabIndex = 0 }: TabsProps) {
  return (
    <div className={styles.tabs}>
      {tabItems.map((tab, i) => (
        <Link key={i} href={`/users/userAdd/${tab.path}`} passHref>
          <button className={`${styles.tab} ${i === activeTabIndex ? styles.activeTab : ''}`}>
            <span className={styles.tabIcon}>{tab.icon}</span>
            {tab.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
