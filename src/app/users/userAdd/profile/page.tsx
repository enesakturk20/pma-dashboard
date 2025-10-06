'use client';

import FileUploader from '@/app/components/form/FileUploader/UploaderUserLogo';
import AboutTextarea from '@/app/components/form/TextArea/AboutTextarea';
import ServicesToggleGroup from '@/app/components/ui/Switch/ServicesToggleGroup';
import { FaChevronRight } from 'react-icons/fa';
import UserAddTabs from '@/app/components/layout/tabs/userAddTabs/UserAddTabs';
import Button from '@/app/components/ui/Button/Button';

export default function UserProfilePage() {
  return (
    <div className='container'>
      {/* Başlık */}
      <h2 className='labelTitle'>Kullanıcı Ekle</h2>

      {/* Tab Menüsü */}
      <UserAddTabs activeTabIndex={1} />

      {/* Kullanıcı Logosu */}
      <FileUploader />

      {/* Hakkımızda */}
      <AboutTextarea />

      {/* Hizmetler */}
      <ServicesToggleGroup />

      {/* Devam Et Butonu */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button type="submit">
          Devam Et <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}
