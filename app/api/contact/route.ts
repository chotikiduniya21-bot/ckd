import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Receives contact form submissions and sends them as email via Resend.
 * The email arrives at hello@chotikiduniya.com (which forwards to Gmail).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 },
      );
    }

    // Email length sanity checks (prevent spam abuse)
    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message too long.' },
        { status: 400 },
      );
    }

    // Email format check (basic)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format.' },
        { status: 400 },
      );
    }

    // Send via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('[Contact] RESEND_API_KEY not configured');
      return NextResponse.json(
        { success: false, error: 'Server misconfiguration. Please email us directly.' },
        { status: 500 },
      );
    }

    const emailHtml = `
      <h2>New contact form submission</h2>
      <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">
        Sent via the contact form at chotikiduniya.com
      </p>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Choti Ki Duniya <noreply@chotikiduniya.com>',
        to: ['hello@chotikiduniya.com'],
        reply_to: email,
        subject: `[Contact form] ${subject}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('[Contact] Resend API error:', resendRes.status, errBody);
      return NextResponse.json(
        { success: false, error: 'Could not send message. Please try email instead.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Route crashed:', err);
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 },
    );
  }
}

/** Prevent HTML/script injection in the email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}