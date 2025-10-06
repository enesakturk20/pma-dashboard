'use client';
import { useState } from 'react';
import Switch from 'react-switch';
import styles from './ServicesToggleGroup.module.css';

interface Service {
  group: string;
  services: string[];
}

const serviceGroups: Service[] = [
  {
    group: 'Burun Operasyonları',
    services: ['Burun Estetiği', 'Burun Ucu Kaldırma', 'Deviasyon Ameliyatı']
  },
  {
    group: 'Dudak Operasyonları',
    services: ['Dudak Büyütme', 'Dudak Küçültme', 'Dolgu']
  }
];

export default function ServicesToggleGroup() {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const toggleService = (label: string) => {
    setSelected((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Hizmetler</h3>

      {serviceGroups.map((group, idx) => (
        <div key={idx} className={styles.serviceGroup}>
          <h4 className={styles.serviceGroupTitle}>• {group.group}</h4>
          <div className={styles.serviceList}>
            {group.services.map((label, i) => (
              <div key={i} className={styles.serviceItem}>
                <Switch
                  onChange={() => toggleService(label)}
                  checked={!!selected[label]}
                  height={20}
                  width={40}
                  handleDiameter={18}
                  offColor="#ccc"
                  onColor="#1D3587"
                />
                <span className={styles.serviceLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
