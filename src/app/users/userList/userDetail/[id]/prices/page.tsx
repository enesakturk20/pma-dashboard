"use client"

import Tabs from "@/app/components/layout/tabs/userDetailTabs/UserDetailTabs";
import { useParams } from "next/navigation";
import styles from "../../../../../styles/UserDetail.module.css";

export default function UserPricesPage() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <Tabs activeTabIndex={8} />
      <h2 style={{ marginTop: "24px" }}>Ücret Sayfası - Kullanıcı ID: {id}</h2>
    </div>
  );
}
