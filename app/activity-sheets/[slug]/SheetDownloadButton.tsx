'use client';

import { useDownload } from '@/lib/useDownload';
import DownloadToast from '@/components/DownloadToast';
import SignupPrompt from '@/components/SignupPrompt';
import styles from './sheet.module.css';

export default function SheetDownloadButton({ sheetId }: { sheetId: string }) {
  const { download, state, signupPrompt, closeSignupPrompt } = useDownload();
  const busy = state.status === 'loading';

  return (
    <>
      <DownloadToast status={state.status} message={state.message} />
      <SignupPrompt
        open={signupPrompt.open}
        downloadCount={signupPrompt.downloadCount}
        onClose={closeSignupPrompt}
      />
      <button onClick={() => download(sheetId, 'free')} disabled={busy} className={styles.downloadBtn}>
        {busy ? '⏳ Preparing…' : '⬇ Download PDF — free'}
      </button>
      <p className={styles.downloadNote}>No sign-up, no email. Print on plain A4 paper.</p>
    </>
  );
}
