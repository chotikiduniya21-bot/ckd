'use client';

import { useState } from 'react';
import { useUser } from './auth';

type DownloadKind = 'free' | 'paid';

interface DownloadState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

/**
 * Hook for downloading sheets end-to-end.
 *
 * Usage:
 *   const { download, state } = useDownload();
 *   <button onClick={() => download('101', 'free')} disabled={state.status === 'loading'}>
 *     {state.status === 'loading' ? 'Getting file...' : 'Download'}
 *   </button>
 */
export function useDownload() {
  const { user, recordDownload: recordDownloadInAuth } = useUser();
  const [state, setState] = useState<DownloadState>({ status: 'idle' });

  const download = async (sheetId: string, kind: DownloadKind) => {
    setState({ status: 'loading' });

    try {
      // Call our API route
      const res = await fetch(`/api/download/${kind}/${sheetId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id ?? null,
          purchases: user?.purchases ?? [],
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
        recordDownloadInAuth(sheetId);
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

  return { download, state };
}
