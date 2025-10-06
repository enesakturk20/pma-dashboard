'use client';

import UserAddTabs from '@/app/components/layout/tabs/userAddTabs/UserAddTabs';
import { FaChevronRight } from 'react-icons/fa';
import Button from '@/app/components/ui/Button/Button';
import UserAddTable from '@/app/users/userAdd/user/components/UserAddTable';

export default function UserAddPage() {
  return (
    <div className='container'>
      {/* Başlık */}
      <h2 className='labelTitle'>Kullanıcı Ekle</h2>
      {/* Tab Menüsü */}
      <UserAddTabs />
      {/* Table */}
      <UserAddTable />
      {/* Devam Et Butonu */}
      <div className="centered">
        <Button type="submit">
          Devam Et <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}
