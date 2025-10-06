// app/users/add/page.tsx
'use client';

import styles from './BranchTable.module.css';
import { users } from '../../../../data/users';

import { useParams } from 'next/navigation';

export default function BranchTable() {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  console.log(user);

  return (
    <div className={styles.branchTableContainer}>
      {/* Form */}
      <form className={styles.form}>
        {/* Yetkili Kişi Bilgileri */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Yetkili Kişi Bilgileri</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <span className={styles.label}>Yetkili Kişi Adı</span>
              <input className={styles.input} placeholder="Yetkili Kişi Adı" />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Yetkili Kişi Soyadı</span>
              <input placeholder="Yetkili Kişi Soyadı" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Yetkili Kişi E-posta</span>
              <input placeholder="Yetkili Kişi E-posta" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Yetkili Kişi Telefon</span>
              <input placeholder="Yetkili Kişi Telefon" className={styles.input} />
            </div>
          </div>
        </div>

        {/* Şube Bilgileri */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Şube Bilgileri</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Unvanı</span>
              <input placeholder="Şube Unvanı" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube E-Posta</span>
              <input placeholder="Şube E-Posta" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Vergi No</span>
              <input placeholder="Şube Vergi No" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube İletişim Telefonu</span>
              <input placeholder="Şube İletişim Telefonu" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Ülke</span>
              <select className={styles.input}>
                <option>Ülke</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Şehir</span>
              <select className={styles.input}>
                <option>Şehir</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube İlçe</span>
              <select className={styles.input}>
                <option>İlçe</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Mahalle</span>
              <select className={styles.input}>
                <option>Mahalle</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Açık Adres</span>
              <input placeholder="Açık Adres" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şube Lokasyon</span>
              <input placeholder="Lokasyon" className={styles.input} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
