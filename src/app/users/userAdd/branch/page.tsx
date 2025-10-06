'use client';

import UserAddTabs from '@/app/components/layout/tabs/userAddTabs/UserAddTabs';
import Button from '@/app/components/ui/Button/Button';
import BranchTable from '@/app/users/userAdd/branch/components/BranchTable';

export default function UserProfilePage() {
  return (
    <div className='container'>
      {/* Başlık */}
      <h2 className='labelTitle'>Kullanıcı Ekle</h2>

      {/* Tab Menüsü */}
      <UserAddTabs activeTabIndex={2} />

      <BranchTable />

      {/* Devam Et Butonu */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button type="submit">
          Kaydet ve Tamamla
        </Button>
      </div>
    </div>
  );
}
