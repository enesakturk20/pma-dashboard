'use client';

import styles from './UserDetail.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import {
  FaUser, FaIdBadge, FaHospitalAlt, FaUserMd,
  FaConciergeBell, FaUsers, FaWallet, FaImage,
  FaMoneyBillAlt, FaCogs
} from 'react-icons/fa';

interface TabsProps {
  activeTabIndex?: number;
}

const tabItems = [
  { label: 'Kullanıcı', icon: <FaUser />, path: 'user' },
  { label: 'Profil', icon: <FaIdBadge />, path: 'profile' },
  { label: 'Şube', icon: <FaHospitalAlt />, path: 'branch' },
  { label: 'Doktorlar', icon: <FaUserMd />, path: 'doctors' },
  { label: 'Hizmetler', icon: <FaConciergeBell />, path: 'services' },
  { label: 'Temsilciler', icon: <FaUsers />, path: 'representatives' },
  { label: 'Hesaplar', icon: <FaWallet />, path: 'accounts' },
  { label: 'Görseller', icon: <FaImage />, path: 'images' },
  { label: 'Ücret', icon: <FaMoneyBillAlt />, path: 'prices' },
  { label: 'Teklif Ayar', icon: <FaCogs />, path: 'settings' },
];

export default function UserDetailTabs({ activeTabIndex = 0 }: TabsProps) {
  const { id } = useParams();

  return (
    <div className={styles.tabs}>
      {tabItems.map((tab, i) => (
        <Link
          key={i}
          href={`/users/userList/userDetail/${id}/${tab.path}`}
          passHref
        >
          <button className={`${styles.tab} ${i === activeTabIndex ? styles.activeTab : ''}`}>
            <span className={styles.tabIcon}>{tab.icon}</span>
            {tab.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
