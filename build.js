const fs = require('fs');

// ── Gallery configurations ─────────────────────────────────────────────────
// Add one entry per gallery. Each produces a standalone self-contained HTML.
// captions.txt, readmore.txt, and music (.mp3/.m4a) are all fetched at runtime
// from the Drive folder — just upload them into the same folder as the photos.
const API_KEY  = 'AIzaSyBPdEozyk7iwDI50e-ZLBpHr9jg0pQV-fY';
const LOGO     = 'logo/WhatsApp Image 2026-07-20 at 16.39.47.jpeg';
const ORG_NAME = 'Sri Vittal Rukmini Samsthan';
const ORG_SUB  = 'Govindapuram · Thanjavur';

const galleries = [
  {
    title:      'Guru Parambara',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Guru Parambara',
    folderId:   '16uTUjIQkf0C1cm3mJlvQcd_J97gLklaH',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'guru-parambara.html',
  },
  {
    title:      'Family Legacy Met Divine Destiny',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Family Legacy',
    folderId:   '1eyECHbSQg-VLPnOlz_653gR79ivfAIP_',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'family-legacy-met-divine-destiny.html',
  },
  {
    title:      'Gokulum Goshala',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Gokulum Goshala',
    folderId:   '1oemXNUhqbH8bxC7PhHGYtRsf0CP4s1ug',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'gokulum-goshala.html',
  },
  {
    title:      'Grand Events',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Grand Events',
    folderId:   '1Vi_wwmZC8nSUkxubVLImCqZnDsPwWxic',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'grand-events.html',
  },
  {
    title:      'Kumbhabhishegam',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Kumbhabhishegam',
    folderId:   '12pfSfWTXcuLGSZc8ujmazvw2xQ7Zw82s',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'kumbhabhishegam.html',
  },
  {
    title:      'Major Utsav',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Major Utsav',
    folderId:   '1jBh_-hlZt9Z8yz_eo8HucdezD4LEkvOx',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'major-utsav.html',
  },
  {
    title:      'Nama Prachaar',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Nama Prachaar',
    folderId:   '1EksFTHMbu7-uyQpR-9mhfYTFNJBHqkE9',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'nama-prachaar.html',
  },
  {
    title:      'Transformation Story',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'Transformation',
    folderId:   '11Zg0WLlJiMgjD-SUC0iAfzMETALqgGod',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'transformation-story.html',
  },
  {
    title:      'With Mahaans',
    orgName:    ORG_NAME,
    orgSub:     ORG_SUB,
    tag:        'With Mahaans',
    folderId:   '1826TF9eNAD7Ns6ogJyl097rZcM2nyaai',
    apiKey:     API_KEY,
    logoFile:   LOGO,
    outputFile: 'with-mahaans.html',
  },
  // ── Add more galleries below ───────────────────────────────────────────
  // {
  //   title:      'New Gallery',
  //   orgName:    ORG_NAME,
  //   orgSub:     ORG_SUB,
  //   tag:        'New Gallery',
  //   folderId:   'YOUR_DRIVE_FOLDER_ID',
  //   apiKey:     API_KEY,
  //   logoFile:   LOGO,
  //   outputFile:   'annual-event-2025.html',
  // },
];
// ──────────────────────────────────────────────────────────────────────────

// Cache logo reads so same logo file is only read once
const logoCache = {};

function readLogo(path) {
  if (!logoCache[path]) {
    logoCache[path] = fs.readFileSync(path).toString('base64');
  }
  return logoCache[path];
}

function buildGallery(g) {
  const logoB64 = readLogo(g.logoFile);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${g.title} — ${g.orgName}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream:        #F5EDE0;
      --cream-deep:   #EEE0CC;
      --navy:         #1A1A4E;
      --maroon:       #7B1B2E;
      --saffron:      #E8832A;
      --saffron-dark: #B5601A;
      --gold-accent:  #F4B04A;
      --white:        #FFFFFF;
      --border:       rgba(92,58,30,0.15);
    }

    html, body {
      height: 100%;
      background: var(--cream);
      font-family: 'Inter', sans-serif;
      color: var(--navy);
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Loader ── */
    #loader {
      position: fixed; inset: 0;
      background: var(--cream);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 18px; z-index: 100;
    }
    #loader .logo-wrap {
      width: 88px; height: 88px; border-radius: 50%;
      border: 2.5px solid var(--saffron);
      background: var(--white);
      overflow: hidden; display: flex; align-items: center; justify-content: center;
      animation: pulse 1.8s ease-in-out infinite;
      box-shadow: 0 4px 20px rgba(232,131,42,.2);
    }
    #loader .logo-wrap img { width: 100%; height: 100%; object-fit: contain; }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.75;transform:scale(.93)} }
    .loader-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 24px; font-weight: 600; color: var(--navy);
    }
    .loader-sub {
      font-size: 11px; color: var(--maroon);
      letter-spacing: 2.5px; text-transform: uppercase;
    }
    .spinner {
      width: 30px; height: 30px;
      border: 2.5px solid rgba(232,131,42,.25);
      border-top-color: var(--saffron);
      border-radius: 50%; animation: spin .9s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── Header ── */
    #header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 50;
      background: var(--white);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 1px 8px rgba(92,58,30,.08);
      padding: 10px 16px;
      display: flex; align-items: center; gap: 12px;
      height: 68px;
    }
    #header .logo-wrap {
      width: 44px; height: 44px; border-radius: 50%;
      border: 2px solid var(--saffron);
      background: #FDF3E7;
      overflow: hidden; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    #header .logo-wrap img { width: 100%; height: 100%; object-fit: contain; }
    .header-text .org {
      font-family: 'Cormorant Garamond', serif;
      font-size: 17px; font-weight: 600; color: var(--navy); line-height: 1.2;
    }
    .header-text .sub {
      font-size: 10px; color: var(--maroon);
      letter-spacing: .08em; margin-top: 2px;
    }
    .header-tag {
      margin-left: auto;
      display: inline-flex; align-items: center;
      background: var(--maroon); color: var(--white);
      font-size: 11px; font-weight: 600;
      padding: 5px 14px; border-radius: 20px;
      letter-spacing: .04em; white-space: nowrap;
      flex-shrink: 0;
    }

    /* ── Carousel ── */
    #carousel {
      position: fixed;
      top: 68px; left: 0; right: 0; bottom: 0;
      background: #1A0A0E;
      display: flex; align-items: center; justify-content: center;
    }
    .slide {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity .65s ease; pointer-events: none;
    }
    .slide.active { opacity: 1; pointer-events: auto; }
    .slide img {
      max-width: 100%; max-height: calc(100vh - 68px);
      object-fit: contain;
      filter: drop-shadow(0 0 32px rgba(232,131,42,.1));
      transition: transform .35s ease;
      user-select: none; -webkit-user-drag: none; cursor: zoom-in;
    }
    .slide img.zoomed { transform: scale(1.85); cursor: zoom-out; }

    /* ── Nav arrows ── */
    .nav-btn {
      position: fixed; top: calc(68px + 50%); z-index: 60;
      transform: translateY(-50%);
      background: var(--maroon);
      border: none;
      color: var(--white); font-size: 18px;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: background .2s, transform .2s;
      box-shadow: 0 2px 12px rgba(123,27,46,.4);
    }
    .nav-btn:hover  { background: var(--saffron-dark); }
    .nav-btn:active { transform: translateY(-50%) scale(.92); }
    #prevBtn { left: 12px; }
    #nextBtn { right: 12px; }

    /* ── Counter ── */
    #counter {
      position: fixed; bottom: 52px; left: 50%; transform: translateX(-50%);
      z-index: 60;
      background: rgba(26,10,14,.85); border: 1px solid rgba(232,131,42,.4);
      color: var(--gold-accent);
      font-family: 'Cormorant Garamond', serif;
      font-size: 16px; font-weight: 600; letter-spacing: 1px;
      padding: 4px 18px; border-radius: 20px;
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      white-space: nowrap;
    }

    /* ── Dots ── */
    #dots {
      position: fixed; bottom: 14px; left: 50%; transform: translateX(-50%);
      z-index: 60; display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
      max-width: 80vw;
    }
    .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: rgba(255,255,255,.25); border: 1.5px solid rgba(232,131,42,.5);
      cursor: pointer; transition: all .3s; flex-shrink: 0;
    }
    .dot.active { background: var(--saffron); border-color: var(--saffron); transform: scale(1.3); }

    /* ── Swipe hint ── */
    #swipeHint {
      position: fixed; bottom: 78px; left: 50%; transform: translateX(-50%);
      z-index: 60; font-size: 11px; color: rgba(255,255,255,.3);
      letter-spacing: 1px; pointer-events: none; white-space: nowrap;
      animation: fadeHint 3s ease 2s forwards; opacity: 0;
    }
    @keyframes fadeHint { 0%{opacity:.48} 100%{opacity:0} }

    /* ── Error ── */
    #errorMsg {
      display: none; position: fixed; inset: 0; top: 68px;
      flex-direction: column; align-items: center; justify-content: center;
      gap: 16px; padding: 32px; text-align: center;
      background: var(--cream);
    }
    #errorMsg p {
      font-family: 'Cormorant Garamond', serif;
      color: var(--maroon); line-height: 1.7; font-size: 20px;
    }

    /* ── Subtitle ── */
    #subtitle {
      position: fixed; bottom: 110px; left: 50%; transform: translateX(-50%);
      z-index: 60; max-width: 80vw; text-align: center;
      background: rgba(245,237,224,.88);
      border: 1px solid rgba(232,131,42,.3);
      color: var(--navy);
      font-family: 'Cormorant Garamond', serif;
      font-size: 16px; font-style: italic;
      padding: 6px 20px; border-radius: 14px;
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      max-height: 80px; overflow-y: auto;
      line-height: 1.5;
      transition: opacity .4s ease;
    }

    /* ── Read More button ── */
    #readMoreBtn {
      position: fixed; bottom: 22px; left: 16px; z-index: 70;
      background: var(--maroon); color: #fff;
      border: none; border-radius: 20px;
      font-family: 'Inter', sans-serif;
      font-size: 12px; font-weight: 600; letter-spacing: .04em;
      padding: 8px 16px; cursor: pointer;
      box-shadow: 0 2px 10px rgba(123,27,46,.35);
      transition: background .2s;
    }
    #readMoreBtn:hover { background: var(--saffron-dark); }

    /* ── Read More panel ── */
    #readMorePanel {
      position: fixed; left: 0; right: 0; bottom: 0; z-index: 150;
      background: var(--cream);
      border-top: 3px solid var(--saffron);
      border-radius: 20px 20px 0 0;
      padding: 0 24px 40px;
      max-height: 75vh; overflow-y: auto;
      transform: translateY(100%);
      transition: transform .4s ease;
      box-shadow: 0 -8px 40px rgba(92,58,30,.15);
    }
    #readMorePanel.open { transform: translateY(0); }
    .panel-handle {
      width: 40px; height: 4px; border-radius: 4px;
      background: var(--saffron); opacity: .5;
      margin: 14px auto 20px;
    }
    .panel-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 24px; font-weight: 600; color: var(--navy);
      margin-bottom: 16px; line-height: 1.2;
    }
    .panel-body p {
      font-size: 15px; color: var(--navy);
      line-height: 1.8; margin-bottom: 14px;
    }
    #panelClose {
      position: absolute; top: 14px; right: 18px;
      background: none; border: none; font-size: 22px;
      color: var(--maroon); cursor: pointer; line-height: 1;
    }
    #panelOverlay {
      display: none; position: fixed; inset: 0; z-index: 140;
      background: rgba(26,10,14,.4);
    }

    /* ── Music button ── */
    #musicBtn {
      position: fixed; bottom: 22px; right: 16px; z-index: 70;
      width: 40px; height: 40px; border-radius: 50%;
      background: var(--maroon); border: 1.5px solid var(--saffron);
      color: #fff; font-size: 17px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 2px 10px rgba(123,27,46,.35);
      transition: background .2s, transform .2s;
    }
    #musicBtn:hover { background: var(--saffron-dark); transform: scale(1.08); }

    /* ── Tap overlay ── */
    #tapOverlay {
      position: fixed; inset: 0; z-index: 200;
      background: rgba(245,237,224,.92);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 16px;
      cursor: pointer;
    }
    #tapOverlay .tap-logo {
      width: 80px; height: 80px; border-radius: 50%;
      border: 2px solid var(--saffron); overflow: hidden;
    }
    #tapOverlay .tap-logo img { width: 100%; height: 100%; object-fit: contain; }
    #tapOverlay .tap-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 26px; font-weight: 600; color: var(--navy);
    }
    #tapOverlay .tap-sub {
      font-size: 12px; color: var(--maroon);
      letter-spacing: 2px; text-transform: uppercase;
    }
    #tapOverlay .tap-hint {
      margin-top: 8px;
      background: var(--maroon); color: #fff;
      font-size: 13px; font-weight: 600;
      padding: 10px 28px; border-radius: 24px;
      letter-spacing: .04em;
    }
  </style>
</head>
<body>

<!-- Tap to begin overlay -->
<div id="tapOverlay">
  <div class="tap-logo"><img src="data:image/jpeg;base64,${logoB64}" alt="${g.orgName} Logo"></div>
  <div class="tap-title">${g.title}</div>
  <div class="tap-sub">${g.orgName}</div>
  <div class="tap-hint">&#127925; Tap anywhere to begin</div>
</div>

<audio id="bgMusic"></audio>

<div id="subtitle"></div>
<button id="readMoreBtn">&#9432; Read More</button>

<!-- Read More panel -->
<div id="panelOverlay"></div>
<div id="readMorePanel">
  <button id="panelClose" aria-label="Close">&times;</button>
  <div class="panel-handle"></div>
  <div class="panel-title" id="panelTitle">${g.title}</div>
  <div class="panel-body" id="panelBody"></div>
</div>

<!-- Music toggle button -->
<button id="musicBtn" title="Music on/off">&#9834;</button>

<!-- Loader -->
<div id="loader">
  <div class="logo-wrap"><img src="data:image/jpeg;base64,${logoB64}" alt="${g.orgName} Logo"></div>
  <div class="loader-title">${g.title}</div>
  <div class="loader-sub">${g.orgName}</div>
  <div class="spinner"></div>
</div>

<!-- Header -->
<div id="header">
  <div class="logo-wrap"><img src="data:image/jpeg;base64,${logoB64}" alt="${g.orgName} Logo"></div>
  <div class="header-text">
    <div class="org">${g.orgName}</div>
    <div class="sub">${g.orgSub}</div>
  </div>
  <div class="header-tag">${g.tag}</div>
</div>

<!-- Carousel -->
<div id="carousel"></div>
<button class="nav-btn" id="prevBtn" aria-label="Previous">&#8592;</button>
<button class="nav-btn" id="nextBtn" aria-label="Next">&#8594;</button>
<div id="counter"></div>
<div id="dots"></div>
<div id="swipeHint">&#8592;&nbsp; Swipe to navigate &nbsp;&#8594;</div>

<div id="errorMsg">
  <p>Unable to load photos.<br>Please ensure the Google Drive folder is shared publicly and try again.</p>
</div>

<script>
  var API_KEY   = '${g.apiKey}';
  var FOLDER_ID = '${g.folderId}';

  var current = 0;
  var total   = 0;
  var startX  = 0;

  // ── Captions + Read More fetched from Drive at runtime ──
  var captions = {};

  function fetchTextFile(fileId, callback) {
    var url = 'https://www.googleapis.com/drive/v3/files/'
      + fileId + '?alt=media&key=' + API_KEY;
    fetch(url)
      .then(function(r) { return r.ok ? r.text() : Promise.reject(); })
      .then(callback)
      .catch(function() {});
  }

  function applyCaptions(text) {
    text.trim().split('\\n').forEach(function(line) {
      var parts = line.split('|');
      if (parts.length >= 2) {
        captions[parts[0].trim()] = parts.slice(1).join('|').trim();
      }
    });
    // Refresh subtitle for the currently visible slide
    var slides = document.querySelectorAll('.slide');
    if (slides[current]) {
      var img = slides[current].querySelector('img');
      updateSubtitle(img ? img.alt : '');
    }
  }

  function applyReadmore(text) {
    var lines = text.trim().split('\\n');
    var title = lines[0];
    if (title) document.getElementById('panelTitle').textContent = title;
    var body = document.getElementById('panelBody');
    body.innerHTML = '';
    var para = '';
    for (var i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') {
        if (para.trim()) {
          var p = document.createElement('p');
          p.textContent = para.trim();
          body.appendChild(p);
          para = '';
        }
      } else {
        para += (para ? ' ' : '') + lines[i];
      }
    }
    if (para.trim()) {
      var p = document.createElement('p');
      p.textContent = para.trim();
      body.appendChild(p);
    }
  }

  function loadDriveFiles(files) {
    files.forEach(function(file) {
      if (file.name === 'captions.txt') fetchTextFile(file.id, applyCaptions);
      if (file.name === 'readmore.txt') fetchTextFile(file.id, applyReadmore);
      if (file.mimeType && file.mimeType.indexOf('audio/') === 0) applyMusic(file.id);
    });
  }

  function showSlide(n) {
    var slides = document.querySelectorAll('.slide');
    var dots   = document.querySelectorAll('.dot');
    if (!slides.length) return;
    slides.forEach(function(s) { s.classList.remove('active'); });
    dots.forEach(function(d)   { d.classList.remove('active'); });
    document.querySelectorAll('.slide img').forEach(function(img) { img.classList.remove('zoomed'); });
    current = ((n % total) + total) % total;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    document.getElementById('counter').textContent = (current + 1) + ' / ' + total;
    var img = slides[current].querySelector('img');
    updateSubtitle(img ? img.alt : '');
  }

  function updateSubtitle(fileName) {
    var sub  = document.getElementById('subtitle');
    var key  = fileName ? fileName.replace(/\\.[^.]+$/, '') : '';
    var text = captions[key] || '';
    sub.textContent = text;
    sub.style.opacity = text ? '1' : '0';
  }

  function buildGallery(files) {
    total = files.length;
    var carousel = document.getElementById('carousel');
    var dotsEl   = document.getElementById('dots');
    carousel.innerHTML = '';
    dotsEl.innerHTML   = '';

    files.forEach(function(file, i) {
      var imgUrl = 'https://drive.google.com/thumbnail?id=' + file.id + '&sz=w1600';
      var slide  = document.createElement('div');
      slide.className = 'slide';
      var img = document.createElement('img');
      img.src = imgUrl;
      img.alt = file.name || ('Photo ' + (i + 1));
      img.addEventListener('click', function() { img.classList.toggle('zoomed'); });
      slide.appendChild(img);
      carousel.appendChild(slide);

      var dot = document.createElement('div');
      dot.className = 'dot';
      (function(idx) { dot.addEventListener('click', function() { showSlide(idx); }); })(i);
      dotsEl.appendChild(dot);
    });

    document.getElementById('loader').style.display = 'none';
    showSlide(0);
  }

  function loadPhotos() {
    var url = 'https://www.googleapis.com/drive/v3/files'
      + '?q=' + encodeURIComponent("'" + FOLDER_ID + "' in parents and trashed=false")
      + '&fields=files(id,name,mimeType)'
      + '&orderBy=name'
      + '&pageSize=200'
      + '&key=' + API_KEY;

    fetch(url)
      .then(function(r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function(data) {
        if (!data.files || !data.files.length) throw new Error('No files found');
        var images = data.files.filter(function(f) { return f.mimeType.indexOf('image/') === 0; });
        var others = data.files.filter(function(f) { return f.mimeType.indexOf('image/') !== 0; });
        if (!images.length) throw new Error('No photos found');
        loadDriveFiles(others);
        buildGallery(images);
      })
      .catch(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('errorMsg').style.display = 'flex';
      });
  }

  document.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, {passive:true});
  document.addEventListener('touchend',   function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) showSlide(diff > 0 ? current + 1 : current - 1);
  }, {passive:true});
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') showSlide(current + 1);
    if (e.key === 'ArrowLeft')  showSlide(current - 1);
  });

  document.getElementById('nextBtn').addEventListener('click', function() { showSlide(current + 1); });
  document.getElementById('prevBtn').addEventListener('click', function() { showSlide(current - 1); });

  loadPhotos();

  // ── Read More panel ──
  function openPanel()  {
    document.getElementById('readMorePanel').classList.add('open');
    document.getElementById('panelOverlay').style.display = 'block';
  }
  function closePanel() {
    document.getElementById('readMorePanel').classList.remove('open');
    document.getElementById('panelOverlay').style.display = 'none';
  }
  document.getElementById('readMoreBtn').addEventListener('click', openPanel);
  document.getElementById('panelClose').addEventListener('click', closePanel);
  document.getElementById('panelOverlay').addEventListener('click', closePanel);

  // ── Music (fetched from Drive as blob at runtime) ──
  var music   = document.getElementById('bgMusic');
  var playing = false;

  function applyMusic(fileId) {
    var url = 'https://www.googleapis.com/drive/v3/files/'
      + fileId + '?alt=media&key=' + API_KEY;
    music.src = url;
    music.load();
    document.getElementById('musicBtn').style.display = 'flex';
  }

  function startMusic() {
    if (!music.src) return;
    music.volume = 0.5;
    music.play().then(function() {
      playing = true;
      document.getElementById('musicBtn').textContent = '\\u266a';
    }).catch(function() {});
  }

  document.getElementById('tapOverlay').addEventListener('click', function() {
    document.getElementById('tapOverlay').style.display = 'none';
    startMusic();
  });

  document.getElementById('musicBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    if (playing) {
      music.pause();
      playing = false;
      this.textContent = '\\u2669';
      this.style.opacity = '0.5';
    } else {
      music.play();
      playing = true;
      this.textContent = '\\u266a';
      this.style.opacity = '1';
    }
  });

  document.getElementById('musicBtn').style.display = 'none';
</script>
</body>
</html>`;

  fs.writeFileSync(g.outputFile, html);
  const sizeMB = (Buffer.byteLength(html) / 1024 / 1024).toFixed(2);
  console.log('Built: ' + g.outputFile + ' — ' + sizeMB + ' MB');
}

galleries.forEach(buildGallery);
