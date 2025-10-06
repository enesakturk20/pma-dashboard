// app/users/add/page.tsx
'use client';

import styles from './UserAddTable.module.css';
import { users } from '../../../../data/users';

import { useParams } from 'next/navigation';

export default function UserAddTable() {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  console.log(user);

  return (
    <div className={styles.userAddTableContainer}>
      {/* Form */}
      <form className={styles.form}>
        {/* Kullanıcı Tipi */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Kullanıcı Tipi</label>
          <select className={styles.input}>
            <option>Hastane</option>
          </select>
        </div>

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

        {/* Kullanıcı Bilgileri */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Kullanıcı Bilgileri</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <span className={styles.label}>Unvanı</span>
              <input placeholder="Unvanı" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>E-Posta</span>
              <input placeholder="E-Posta" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Vergi Dairesi</span>
              <input placeholder="Vergi Dairesi" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Vergi No</span>
              <input placeholder="Vergi No" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>İletişim Telefonu</span>
              <input placeholder="İletişim Telefonu" className={styles.input} />
            </div>
          </div>
        </div>

        {/* Adres Bilgileri */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Adres Bilgileri</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <span className={styles.label}>Ülke</span>
              <select className={styles.input}>
                <option>Ülke</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Şehir</span>
              <select className={styles.input}>
                <option>Şehir</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>İlçe</span>
              <select className={styles.input}>
                <option>İlçe</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Mahalle</span>
              <select className={styles.input}>
                <option>Mahalle</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Açık Adres</span>
              <input placeholder="Açık Adres" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <span className={styles.label}>Lokasyon</span>
              <input placeholder="Lokasyon" className={styles.input} />
            </div>
          </div>
        </div>

        {/* Kullanıcı Üyelik Bilgileri */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Kullanıcı Üyelik Bilgileri</h3>

          {/* Radio group - tek satırda */}
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="radio" name="membershipType" value="ozel" className={styles.checkbox} />
              Özel Üye
            </label>
            <label className={styles.checkboxLabel}>
              <input type="radio" name="membershipType" value="normal" className={styles.checkbox} />
              Normal Üye
            </label>
          </div>

          {/* Tutar ve Aylık - yan yana aynı satırda */}
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <span className={styles.label}>Kullanıcı Özel Üye Tutarı</span>
              <input placeholder="Kullanıcı Özel Üye Tutarı" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <span className={styles.label}>Üyelik Süresi</span>
              <select className={styles.input}>
                <option>Aylık</option>
                <option>Yıllık</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
