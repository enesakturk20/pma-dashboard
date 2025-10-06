'use client';

import Tabs from '@/app/components/layout/tabs/userDetailTabs/UserDetailTabs';
import { useParams } from 'next/navigation';
import styles from '../../../../../styles/UserDetail.module.css';
import UploaderUserLogo from '@/app/components/form/FileUploader/UploaderUserLogo';
import AboutTextarea from '@/app/components/form/TextArea/AboutTextarea';

export default function UserProfilePage() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <Tabs activeTabIndex={1} />
      <UploaderUserLogo />
      <AboutTextarea />
    </div>
  );
}
