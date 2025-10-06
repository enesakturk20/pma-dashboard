"use client"

import Tabs from "@/app/components/layout/tabs/userDetailTabs/UserDetailTabs";
import { useParams } from "next/navigation";
import styles from "../../../../../styles/UserDetail.module.css";

export default function UserBidSettingPage() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <Tabs activeTabIndex={9} />
      <h2 style={{ marginTop: "24px" }}>Teklif Ayar Sayfası - Kullanıcı ID: {id}</h2>
    </div>
  );
}
