# Guru Parambara Gallery — Setup Guide

## Step 1 — Add your API key to the HTML file

1. Open `guru-parambara.html` in Notepad
2. Find this line (near the bottom, inside the script):
   ```
   var API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key
4. Save the file

---

## Step 2 — Make your Google Drive folder public

1. Go to Google Drive → right-click the **Guru Parambara** folder
2. Share → **Change to anyone with the link** → Viewer
3. Click Done

---

## Step 3 — Restrict your API key (important)

In Google Cloud Console → APIs & Services → Credentials → edit your key:
- **API restrictions** → Google Drive API only
- **HTTP referrers** → `https://YOUR-USERNAME.github.io/*`
- Save

---

## Step 4 — Deploy to GitHub Pages

1. Go to github.com → **New repository**
2. Name it: `guru-parambara` (or any name)
3. Set it to **Public**
4. Click **Create repository**
5. Upload `guru-parambara.html` — rename it to `index.html` when uploading
6. Go to **Settings** → **Pages**
7. Source → **Deploy from a branch** → select `main` → `/ (root)`
8. Click Save
9. Your URL will be: `https://YOUR-USERNAME.github.io/guru-parambara`

---

## Step 5 — Generate QR Code

1. Go to qr.io or qrcode-monkey.com
2. Paste your GitHub Pages URL
3. Optional: set foreground color to `#2B2EA8` (SVRS royal blue)
4. Download PNG — ready to print!

---

## Adding photos later

Just upload new photos to your **Guru Parambara** Google Drive folder.
The gallery automatically shows them — no code changes, no new QR code needed.

---

## For additional galleries in future

Use the same API key. Just change `FOLDER_ID` in the HTML to point to a different Drive folder.
Each gallery gets its own `index.html` → its own GitHub repo → its own URL → its own QR code.
