'use client';

import styles from './DownloadToast.module.css';

interface DownloadToastProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function DownloadToast({ status, message }: DownloadToastProps) {
  if (status === 'idle') return null;

  const icon = {
    loading: '⏳',
    success: '✓',
    error: '⚠️',
  }[status];

  return (
    <div className={`${styles.toast} ${styles[status]}`}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.message}>
        {message ?? (status === 'loading' ? 'Preparing your download...' : status)}
      </span>
    </div>
  );
}
