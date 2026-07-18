// Downloads sheets/101.pdf ... sheets/176.pdf from R2 into ~/Downloads/ckd-thumbs/pdfs
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

// --- read .env.local manually (plain node doesn't load it) ---
const envText = fs.readFileSync('.env.local', 'utf8');
const env = {};
for (const line of envText.split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}
for (const k of ['R2_ENDPOINT','R2_ACCESS_KEY_ID','R2_SECRET_ACCESS_KEY','R2_BUCKET_NAME']) {
  if (!env[k]) { console.error(`[FAIL] Missing ${k} in .env.local`); process.exit(1); }
}

const r2 = new S3Client({
  region: 'auto',
  endpoint: env.R2_ENDPOINT,
  credentials: { accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY },
});

const outDir = path.join(os.homedir(), 'Downloads', 'ckd-thumbs', 'pdfs');
fs.mkdirSync(outDir, { recursive: true });

let ok = 0, fail = [];
for (let id = 101; id <= 176; id++) {
  const dest = path.join(outDir, `${id}.pdf`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) { ok++; continue; } // resume-safe
  try {
    const res = await r2.send(new GetObjectCommand({ Bucket: env.R2_BUCKET_NAME, Key: `sheets/${id}.pdf` }));
    const bytes = Buffer.from(await res.Body.transformToByteArray());
    fs.writeFileSync(dest, bytes);
    ok++;
    process.stdout.write(`\r[${ok}/76] downloaded ${id}.pdf   `);
  } catch (e) {
    fail.push(id);
  }
}
console.log(`\n\n[DONE] ${ok} downloaded, ${fail.length} failed`);
if (fail.length) console.log('Failed IDs:', fail.join(', '));
