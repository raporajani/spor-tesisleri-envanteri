import { put, list } from '@vercel/blob';
import crypto from 'crypto';

const BLOB_PATHNAME = 'modul-envanteri-data.json';
// index.html'deki EDIT_PASSWORD_HASH ile aynı — düzenleme parolasını bilen herkes kaydedebilir
const EDIT_PASSWORD_HASH = 'd1e2d10fd46744cd19aa32707b8697e1bf5f72241a5e06bf466e443029b02a3b';

function sha256Hex(str) {
  return crypto.createHash('sha256').update(String(str), 'utf8').digest('hex');
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: BLOB_PATHNAME, limit: 10 });
      const found = blobs.find((b) => b.pathname === BLOB_PATHNAME);
      if (!found) {
        res.status(200).json({ data: null });
        return;
      }
      const upstream = await fetch(found.url, { cache: 'no-store' });
      const data = await upstream.json();
      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json({ error: 'load_failed' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { password, data } = req.body || {};
      if (!password || sha256Hex(password) !== EDIT_PASSWORD_HASH) {
        res.status(401).json({ error: 'unauthorized' });
        return;
      }
      if (!Array.isArray(data)) {
        res.status(400).json({ error: 'invalid_body' });
        return;
      }
      await put(BLOB_PATHNAME, JSON.stringify(data), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      res.status(200).json({ status: 'ok' });
    } catch (err) {
      res.status(500).json({ error: 'save_failed' });
    }
    return;
  }

  res.status(405).json({ error: 'method_not_allowed' });
}
