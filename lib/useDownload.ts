'use client';

import { useState } from 'react';
import { useUser } from './auth';
import {
  incrementDownloadCount,
  shouldShowPopup,
  getDownloadCount,
} from './downloadTracking';

type DownloadKind = 'free' | 'paid';

interface DownloadState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

interface SignupPromptState {
  open: boolean;
  downloadCount: number;
}

export function useDownload() {
  const { user, recordFreeDownload } = useUser();
  const [state, setState] = useState<DownloadState>({ status: 'idle' });
  const [signupPrompt, setSignupPrompt] = useState<SignupPromptState>({
    open: false,
    downloadCount: 0,
  });

  const download = async (sheetId: string, kind: DownloadKind) => {
    setState({ status: 'loading' });

    try {
      const res = await fetch(`/api/download/${kind}/${sheetId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.profile.id ?? null,
          purchases: user?.purchases.map((p) => p.sheet_id) ?? [],
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setState({
          status: 'error',
          message: data.error ?? 'Download failed. Please try again.',
        });
        return;
      }

      // Record in client-side auth store (updates UI instantly)
      if (kind === 'free') {
        if (user) {
          // Signed-in user: record in auth profile
          await recordFreeDownload(sheetId);
        } else {
          // Anonymous user: track count in localStorage for popup trigger
          const newCount = incrementDownloadCount();

          // Check if we should show the signup prompt
          if (shouldShowPopup()) {
            // Slight delay so user sees the download succeed first
            setTimeout(() => {
              setSignupPrompt({
                open: true,
                downloadCount: newCount,
              });
            }, 1200);
          }
        }
      }

      // Trigger the browser download
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = `${data.sheetTitle.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setState({
        status: 'success',
        message: data.isMock
          ? 'Demo PDF downloaded! (Real PDFs arrive once R2 is wired.)'
          : 'Download started!',
      });

      // Reset after 3s
      setTimeout(() => setState({ status: 'idle' }), 3000);
    } catch (err) {
      setState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
      setTimeout(() => setState({ status: 'idle' }), 4000);
    }
  };

  const closeSignupPrompt = () => {
    setSignupPrompt({ open: false, downloadCount: 0 });
  };

  return {
    download,
    state,
    signupPrompt,
    closeSignupPrompt,
    // Helpers exposed for testing/display
    anonDownloadCount: getDownloadCount(),
  };
}
