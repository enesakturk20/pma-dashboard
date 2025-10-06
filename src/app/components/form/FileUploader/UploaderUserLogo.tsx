'use client';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './UploaderUserLogo.module.css';

export default function UploaderUserLogo() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setFileName(null);
    setPreviewUrl(null);
  };

  return (
    <div className={styles.fileUploaderWrapper}>
      <label className={styles.sectionTitle}>Kullanıcı Logosu</label>
      <div className={styles.uploadWrapper}>
        {/* Sol taraf: Görsel önizleme */}
        <div className={styles.previewBox}>
          {previewUrl ? <img src={previewUrl} alt="Logo" className={styles.previewImage} /> : <div className={styles.emptyPreview}>Logo</div>}
        </div>

        {/* Sağ taraf: Bilgiler + input */}
        <div className={styles.uploadContent}>
          <small style={{ color: '#B9B9C3' }}>Required image resolution 800x800, image size 10mb.</small>
          <p className={styles.link}>https://pixinvent.com/images/banner.jpg</p>

          <div className={styles.uploadRow}>
            <input type="file" accept="image/*" id="logoUpload" style={{ display: 'none' }} onChange={handleFileChange} />
            <label htmlFor="logoUpload" className={styles.uploadInput}>
              {fileName || 'Choose File'}
            </label>
            <label htmlFor="logoUpload" className={styles.uploadButton}>
              Browse
            </label>

            {fileName && (
              <button type="button" className={styles.deleteButton} onClick={handleRemove}>
                <FaTrash />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
