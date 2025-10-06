"use client"

import Tabs from "@/app/components/layout/tabs/userDetailTabs/UserDetailTabs";
import { useParams } from "next/navigation";
import styles from "../../../../../styles/UserDetail.module.css";

export default function UserRepresentativesPage() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <Tabs activeTabIndex={5} />
      <h2 style={{ marginTop: "24px" }}>Temsilciler Sayfası - Kullanıcı ID: {id}</h2>
    </div>
  );
}
