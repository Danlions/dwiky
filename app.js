/* =====================================================================
   APP.JS  -  logika halaman. Tidak perlu diubah.
   Isi (proyek, skill, sertifikat, kontak) ada di data.js
   ===================================================================== */

var $ = function(id){ return document.getElementById(id); };
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function two(n){ return (n < 10 ? '0' : '') + n; }

/* Ikon skill: SVG bawaan (tanpa internet), semua dalam kotak 24x24 agar seragam */
var ICONS = {
  python: '<svg viewBox="0 0 24 24"><path fill="#3776AB" d="M11.9 2C7.6 2 7.8 3.9 7.8 3.9v2h4.2v.6H6S3 6.2 3 11s2.6 4.6 2.6 4.6H7v-2s-.1-2.7 2.6-2.7h4.6s2.5 0 2.5-2.4V4.5S17.2 2 11.9 2Z"/><circle cx="9.5" cy="4.3" r=".9" fill="#fff"/><path fill="#FFD43B" transform="rotate(180 12 12)" d="M11.9 2C7.6 2 7.8 3.9 7.8 3.9v2h4.2v.6H6S3 6.2 3 11s2.6 4.6 2.6 4.6H7v-2s-.1-2.7 2.6-2.7h4.6s2.5 0 2.5-2.4V4.5S17.2 2 11.9 2Z"/><circle cx="14.5" cy="19.7" r=".9" fill="#fff"/></svg>',
  cplusplus: '<svg viewBox="0 0 24 24"><path fill="#00599C" d="M12 1.6 21.1 6.8v10.4L12 22.4 2.9 17.2V6.8Z"/><path d="M11.8 9.5A3.4 3.4 0 1 0 11.8 14.5" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/><path d="M13.5 12h2.4M14.7 10.8v2.4M16.9 12h2.4M18.1 10.8v2.4" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/></svg>',
  arduino: '<svg viewBox="0 0 24 24" fill="none" stroke="#00979D" stroke-width="2.1" stroke-linecap="round"><circle cx="7.9" cy="12" r="4.3"/><circle cx="16.1" cy="12" r="4.3"/><path d="M5.8 12h4.2M14 12h4.2M16.1 9.9v4.2"/></svg>',
  wokwi: '<svg viewBox="0 0 24 24"><g stroke="#3D5AFE" stroke-width="1.5" stroke-linecap="round"><path d="M2.6 9H5M2.6 12H5M2.6 15H5M19 9h2.4M19 12h2.4M19 15h2.4M9 2.6V5M12 2.6V5M15 2.6V5M9 19v2.4M12 19v2.4M15 19v2.4"/></g><rect x="5" y="5" width="14" height="14" rx="2.6" fill="#3D5AFE"/><path d="M7.8 9.4l2.1 5.4 2.1-4.2 2.1 4.2 2.1-5.4" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  firebase: '<svg viewBox="0 0 24 24"><path fill="#FFA000" d="M5 18 7.2 3.5 10.2 9 12.6 4.6 19 18 12 21.8Z"/><path fill="#FFCA28" d="M5 18 7.2 3.5 10.2 9Z"/><path fill="#F4511E" d="M5 18 12 15.4 19 18 12 21.8Z"/></svg>',
  figma: '<svg viewBox="0 0 24 24"><path fill="#F24E1E" d="M12 3H9a3 3 0 0 0 0 6h3Z"/><path fill="#FF7262" d="M12 3h3a3 3 0 0 1 0 6h-3Z"/><path fill="#A259FF" d="M12 9H9a3 3 0 0 0 0 6h3Z"/><circle cx="15" cy="12" r="3" fill="#1ABCFE"/><path fill="#0ACF83" d="M9 15h3v3a3 3 0 1 1-3-3Z"/></svg>',
  git: '<svg viewBox="0 0 24 24"><rect x="4.4" y="4.4" width="15.2" height="15.2" rx="2.2" transform="rotate(45 12 12)" fill="#F05032"/><path d="M12.2 8.2v7.6M12.2 10.6l3.4 2.6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="12.2" cy="8" r="1.6" fill="#fff"/><circle cx="12.2" cy="16" r="1.6" fill="#fff"/><circle cx="15.8" cy="13.4" r="1.6" fill="#fff"/></svg>',
  vscode: '<svg viewBox="0 0 24 24"><path fill="#0A7CCF" fill-rule="evenodd" d="M17.5 2.5 21.5 4.4V19.6L17.5 21.5 9.3 13.8 5.2 16.9 3.5 16V8L5.2 7.1 9.3 10.2ZM17.5 7.2 11.8 12 17.5 16.8Z"/></svg>',
  canva: '<svg viewBox="0 0 24 24"><defs><linearGradient id="cvg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00C4CC"/><stop offset="1" stop-color="#7D2AE8"/></linearGradient></defs><circle cx="12" cy="12" r="10" fill="url(#cvg)"/><path d="M15.6 9.2A4.6 4.6 0 1 0 15.6 14.8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
  autocad: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#E51050"/><path d="M7 17 12 6.5 17 17M9 13.6h6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sketchup: '<svg viewBox="0 0 24 24"><path fill="#F05A4A" d="M12 3 20 7.5 12 12 4 7.5Z"/><path fill="#2C7BE5" d="M4 7.5 12 12v9l-8-4.5Z"/><path fill="#1C4E9D" d="M20 7.5 12 12v9l8-4.5Z"/></svg>',
  premiere: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#00005B"/><text x="12" y="16" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10.5" fill="#9999FF">Pr</text></svg>',
  capcut: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#111"/><circle cx="6.8" cy="7.2" r="2" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="6.8" cy="16.8" r="2" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M8.4 8.4 18 16.2M8.4 15.6 18 7.8" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
  obs: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#302E31"/><g fill="none" stroke="#fff" stroke-width="1.5"><ellipse cx="12" cy="12" rx="6.2" ry="2.6"/><ellipse cx="12" cy="12" rx="6.2" ry="2.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="6.2" ry="2.6" transform="rotate(120 12 12)"/></g></svg>',
  excel: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#107C41"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>',
  word: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#185ABD"/><path d="M6.5 8 9 16l3-6.5 3 6.5 2.5-8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  powerpoint: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#C43E1C"/><path d="M9 17V7.5h3.4a2.9 2.9 0 0 1 0 5.8H9" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

/* ============ PEMERIKSA DATA ============
   Kalau data.js rusak (ada bagian yang terhapus / salah tulis), pesan merah muncul di bawah layar
   dan bagian lain halaman tetap jalan. */
function showProblem(msg){
  var b = document.getElementById('problem');
  if (!b){
    b = document.createElement('div'); b.id = 'problem';
    b.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:999;max-height:40vh;overflow:auto;padding:12px 16px;border-radius:10px;background:#3A1218;border:1px solid #FF6B7A;color:#FFD9DD;font:13px/1.5 ui-monospace,Consolas,monospace;white-space:pre-wrap';
    b.innerHTML = '<b>Ada masalah di file situs ini:</b>\n'; document.body.appendChild(b);
  }
  b.appendChild(document.createTextNode('• ' + msg + '\n'));
}
window.addEventListener('error', function(e){
  var f = (e.filename || '').split('/').pop();
  showProblem(e.message + (f ? '  (' + f + ' baris ' + e.lineno + ')' : ''));
});
['SITE','P','SKILLS','CERTS','INFO'].forEach(function(n){
  if (typeof window[n] === 'undefined'){
    showProblem('Variabel "' + n + '" tidak ditemukan di data.js. Kemungkinan terhapus saat menyalin.');
    window[n] = (n === 'SITE') ? {name:'[Nama]', email:'', soc:[], certDir:'Sertifikat/'} : [];
  }
});

/* Menyiapkan alamat file: spasi dan karakter khusus diubah otomatis */
function urlFix(s){ s = String(s || ''); return (/%[0-9A-Fa-f]{2}/.test(s) ? s : encodeURI(s)).replace(/'/g, '%27'); }

/* ============ KERANGKA HALAMAN (navigasi, kontak, footer) ============ */
try { (function(){
  var page = document.body.getAttribute('data-page') || '', title = document.body.getAttribute('data-title');
  var clean = SITE.name.replace(/[\[\]]/g, '').trim(), words = clean.split(/\s+/);
  if (title) document.title = title + ' | ' + SITE.name;
  var links = [['index.html','Beranda','home'],['proyek.html','Proyek','proyek'],['skill.html','Skill','skill'],['sertifikat.html','Sertifikat','sertifikat'],['#kontak','Kontak','']];
  var nav = $('nav');
  if (nav) nav.innerHTML = '<div class="wrap"><a class="logo" href="index.html">' + esc(SITE.logo !== undefined ? SITE.logo : words[0][0].toUpperCase()) + '</a><div class="l">' +
    links.map(function(l){ return '<a href="' + l[0] + '"' + (l[0] === '#kontak' ? ' class="go"' : (l[2] && l[2] === page ? ' class="on" aria-current="page"' : '')) + '>' + l[1] + '</a>'; }).join('') +
    '</div></div>';
  var band = $('kontak');
  if (band) band.innerHTML = '<div class="in"><h2>' + esc(SITE.kontakJudul || 'Mari mengerjakan sesuatu bersama.') + '</h2><p>' + esc(SITE.kontakTeks || 'Terbuka untuk kolaborasi, proyek, dan kesempatan baru. Kirim pesan, saya biasanya membalas dalam 1–2 hari.') + '</p>' +
    '<a class="mail" href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + '</a><div class="soc">' +
    SITE.soc.map(function(s){ return '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + '</a>'; }).join('') + '</div></div>';
  var foot = $('foot');
  if (foot) foot.innerHTML = '© ' + new Date().getFullYear() + ' ' + esc(SITE.name);
  var h = $('hName'); if (h) h.textContent = SITE.name;
  /* Tombol Unduh CV: muncul hanya bila SITE.cv diisi di data.js */
  var cvb = $('cvBtn');
  if (cvb && SITE.cv){
    cvb.href = urlFix(SITE.cv); cvb.hidden = false;
    cvb.setAttribute('download', SITE.cvNama || ('CV ' + clean + (/\.[a-z0-9]+$/i.test(SITE.cv) ? SITE.cv.slice(SITE.cv.lastIndexOf('.')) : '')));
  }
  var pic = document.querySelector('.pic');
  if (pic){
    pic.textContent = (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();   /* cadangan: inisial bila foto belum ada */
    var foto = SITE.foto || 'foto.jpg', im = new Image();
    im.onload = function(){ pic.style.setProperty('--img', "url('" + urlFix(foto) + "')"); pic.textContent = ''; pic.setAttribute('role', 'img'); pic.setAttribute('aria-label', 'Foto ' + clean); };
    im.src = urlFix(foto);
  }
  var tz = $('tz');
  if (tz) tz.innerHTML = [
    ['proyek.html', P.length, 'Proyek', 'Robotika, IoT, pemrograman, dan desain interaksi.'],
    ['skill.html', SKILLS.length, 'Skill', 'Bahasa, perangkat, dan software yang saya pakai.'],
    ['sertifikat.html', CERTS.length, 'Sertifikat', 'Kursus, workshop, dan kepanitiaan.']
  ].map(function(t){ return '<a class="tz" href="' + t[0] + '"><span class="n">' + two(t[1]) + '</span><b>' + t[2] + '</b><span>' + t[3] + '</span><em>Buka halaman →</em></a>'; }).join('');
})(); } catch (e) { showProblem('kerangka halaman: ' + e.message); }

/* ============ PROYEK ============ */
if ($('grid')) { try {
  $('cnt').textContent = two(P.length) + ' proyek';
  $('grid').innerHTML = P.map(function(p, i){
    var th = p.img ? '<div class="th" style="--img:url(\'' + esc(p.img) + '\')"></div>' : '<div class="th no" data-n="' + two(i + 1) + '"></div>';
    return '<button class="card" data-i="' + i + '" aria-label="Buka detail ' + esc(p.t) + '">' + th +
      '<span class="cb"><span class="c">' + esc(p.c) + '</span><span class="h">' + esc(p.t) + '</span><span class="sb">' + esc(p.s) + '</span><span class="k">' + esc(p.k) + '</span></span></button>';
  }).join('');

  /* Detail proyek */
  var dlg = $('dlg');
  $('grid').addEventListener('click', function(e){
    var b = e.target.closest('.card'); if (!b) return;
    var p = P[b.dataset.i];
    $('dBan').style.setProperty('--img', p.img ? 'url(\'' + p.img + '\')' : 'none');
    $('dT').textContent = p.t;
    $('dM').textContent = p.c + '  |  ' + p.s;
    $('dD').textContent = p.d;
    $('dL').innerHTML = p.l.map(function(l, i){
      return '<a class="b ' + (i ? 'o' : 'w') + '" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + '</a>';
    }).join('');
    dlg.showModal(); document.body.classList.add('lock');
  });
  $('dX').addEventListener('click', function(){ dlg.close(); });
  dlg.addEventListener('click', function(e){ if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function(){ document.body.classList.remove('lock'); });

} catch (e) { showProblem('proyek: ' + e.message); } }

/* ============ SKILL ============ */
if ($('skills')) { try {
  /* Skill dikelompokkan per kategori (k), urutan mengikuti urutan di data.js */
  var groups = [], gmap = {};
  SKILLS.forEach(function(s){
    var k = s.k || 'Lainnya';
    if (!gmap[k]) { gmap[k] = []; groups.push(k); }
    gmap[k].push(s);
  });
  $('skills').innerHTML = groups.map(function(k){
    return '<h3 class="sg">' + esc(k) + '<i>' + gmap[k].length + '</i></h3><div class="skills">' + gmap[k].map(function(s){
      var inner = ICONS[s.i] || esc(s.m || s.n.slice(0, 2));
      return '<div class="skill"><span class="ic">' + inner + '</span><div><b>' + esc(s.n) + '</b><span>' + esc(s.d) + '</span></div></div>';
    }).join('') + '</div>';
  }).join('');

} catch (e) { showProblem('skill: ' + e.message); } }

/* ============ SERTIFIKAT ============ */
if ($('certs')) { try {
  var IMG_RE = /\.(jpe?g|png|webp|gif)$/i, PDF_RE = /\.pdf$/i;
  /* f = nama file di folder SITE.certDir (PDF atau gambar). u = link lain (opsional, mis. verifikasi online). */
  /* Nama kelompok (k) -> nama folder di GitHub, hanya untuk yang namanya berbeda. Bisa ditimpa lewat SITE.folders di data.js */
  var FOLDERS = {'Cognitive Class AI':'Cognitive Class Ai', 'IBM SkillsBuild':'IBM Skills Build'};
  function certFile(c){
    if (!c.f) return c.g || '';
    var dir = (SITE.certDir === undefined) ? 'Sertifikat/' : SITE.certDir;   /* otomatis 'Sertifikat/' bila tidak ditulis di data.js */
    var f = c.f.replace(/^\/+/, '');
    if (f.indexOf('/') < 0 && c.k) f = ((SITE.folders && SITE.folders[c.k]) || FOLDERS[c.k] || c.k) + '/' + f;   /* nama file saja -> folder diisi otomatis */
    if (dir && f.toLowerCase().indexOf(dir.toLowerCase()) !== 0) f = dir + f;
    return encodeURI(f);
  }
  var certGroup = 'Semua';
  function drawCerts(){
    var names = ['Semua'];
    CERTS.forEach(function(c){ if (c.k && names.indexOf(c.k) < 0) names.push(c.k); });
    $('filt').innerHTML = names.map(function(n){
      var cnt = n === 'Semua' ? CERTS.length : CERTS.filter(function(c){ return c.k === n; }).length;
      return '<button type="button" role="tab" aria-selected="' + (n === certGroup) + '" class="' + (n === certGroup ? 'on' : '') + '" data-k="' + esc(n) + '">' + esc(n) + '<i>' + cnt + '</i></button>';
    }).join('');
    $('certs').innerHTML = CERTS.map(function(c, i){
      if (certGroup !== 'Semua' && c.k !== certGroup) return '';
      var f = certFile(c), isImg = IMG_RE.test(f), isPdf = PDF_RE.test(f);
      var th = isImg ? '<span class="th"><img src="' + esc(f) + '" alt="Sertifikat ' + esc(c.t) + '" loading="lazy"></span>'
             : (isPdf ? '<span class="th pdf"><b>PDF</b></span>' : '');
      var link = f || c.u, tag = link ? 'a' : 'div';
      var note = f ? ' | Lihat sertifikat' : (c.u ? ' | Lihat kredensial' : '');
      return '<' + tag + ' class="cert" data-i="' + i + '"' + (link ? ' href="' + esc(link) + '" target="_blank" rel="noopener"' : '') + '>' + th + '<b>' + esc(c.t) + '</b><span>' + esc(c.s) + '</span><em>' + esc(c.y) + note + '</em></' + tag + '>';
    }).join('');
  }
  $('filt').addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    certGroup = b.getAttribute('data-k'); drawCerts();
  });
  drawCerts();

  /* Pembesaran: gambar atau PDF tampil di atas halaman. Klik latar / tombol X / Esc untuk menutup.
     Di layar kecil PDF dibuka di tab baru karena browser HP tidak menampilkan PDF di dalam halaman. */
  (function(){
    var lb = document.createElement('div'); lb.className = 'lb';
    lb.innerHTML = '<button type="button" class="lx" aria-label="Tutup">×</button><img alt=""><iframe title="Sertifikat" hidden></iframe><a target="_blank" rel="noopener">Buka di tab baru</a>';
    document.body.appendChild(lb);
    var im = lb.querySelector('img'), fr = lb.querySelector('iframe'), ln = lb.querySelector('a');
    function close(){ lb.classList.remove('on'); fr.removeAttribute('src'); }
    $('certs').addEventListener('click', function(e){
      var a = e.target.closest('.cert'); if (!a) return;
      var c = CERTS[+a.getAttribute('data-i')]; if (!c) return;
      var f = certFile(c); if (!f) return;
      var isImg = IMG_RE.test(f), isPdf = PDF_RE.test(f);
      if (isPdf && window.innerWidth < 800) return;          /* HP: biarkan terbuka di tab baru */
      if (!isImg && !isPdf) return;
      e.preventDefault();
      im.hidden = !isImg; fr.hidden = !isPdf;
      if (isImg) im.src = f; else fr.src = f + '#toolbar=0&navpanes=0';
      ln.href = f; lb.classList.add('on');
    });
    lb.addEventListener('click', function(e){ if (e.target === lb || e.target.className === 'lx') close(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  })();
} catch (e) { showProblem('sertifikat: ' + e.message); } }

/* ============ KOORDINAT KURSOR ============ */
if ($('xy')) { try {
  var xy = $('xy');
  window.addEventListener('pointermove', function(e){
    xy.textContent = 'X ' + String(Math.round(e.clientX)).padStart(4, '0') + '  Y ' + String(Math.round(e.clientY)).padStart(4, '0');
  }, {passive:true});

} catch (e) { showProblem('koordinat: ' + e.message); } }

/* ============ DEMO ROBOT DOBOT (beranda) ============ */
if ($('sc')) { try {
  (function(){
    var NS = 'http://www.w3.org/2000/svg', sc = $('sc');
    var TOOL = 26, HOME = [320, 92];
    var BX = 24, BY = 124, CW = 592 / 3, CH = 88;
    var K = function(t){ return '<span class="k">' + t + '</span>'; }, S = function(t){ return '<span class="s">"' + t + '"</span>'; }, C = function(t){ return '<span class="c">' + t + '</span>'; };
    var CODE = [
      C('# Dobot: tulis ringkasan profil di papan'),
      'papan = [NAMA, PRODI, KAMPUS, SEMESTER, FOKUS, KOTA]', '',
      K('for') + ' kotak ' + K('in') + ' papan:',
      '    robot.angkat_pena()', '    robot.ke(kotak.posisi)', '    robot.turunkan_pena()',
      '    robot.tulis(kotak.label)', '    robot.tulis(kotak.isi)', '',
      K('print') + '(' + S('Profil selesai ditulis') + ')'
    ];
    var lines;
    function setCode(){
      $('src').innerHTML = CODE.map(function(l){ return '<span class="ln">' + l + '</span>'; }).join('');
      lines = $('src').children;
      $('fn').textContent = 'dobot_tulis.py';
    }
    function hl(n){ for (var i = 0; i < lines.length; i++) lines[i].classList.toggle('on', i === n); }

    function el(n, a, p){ var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); (p || sc).appendChild(e); return e; }

    /* Daftar tersembunyi untuk pembaca layar */
    $('info').innerHTML = INFO.map(function(r){ return '<dt>' + esc(r.l) + '</dt><dd>' + esc(r.v.join(' ')) + '</dd>'; }).join('');

    /* Papan tulis: label dan isi dibuat sebagai teks yang "terbuka" oleh klip.
       Teks yang terlalu panjang otomatis dipecah jadi maksimal 2 baris, lalu dikecilkan bila masih tidak muat. */
    var board = $('board'), pieces = [];
    var MAXW = CW - 22;
    var probe = el('text', {x:0, y:-60, visibility:'hidden'}, sc); probe.setAttribute('class', 'val');
    function textW(s, size){
      probe.style.fontSize = size + 'px'; probe.textContent = s;
      try { return probe.getComputedTextLength(); } catch (e) { return s.length * size * .45; }
    }
    function fitValue(lines){
      var joined = lines.join(' ');
      for (var size = 24; size >= 11; size--){
        if (lines.length <= 2 && lines.every(function(l){ return textW(l, size) <= MAXW; })) return {size:size, lines:lines};
        var words = joined.split(/\s+/), out = [], cur = '', ok = true;
        for (var k = 0; k < words.length; k++){
          var t = cur ? cur + ' ' + words[k] : words[k];
          if (textW(t, size) <= MAXW) cur = t;
          else { if (!cur) { ok = false; break; } out.push(cur); cur = words[k]; if (textW(cur, size) > MAXW) { ok = false; break; } }
        }
        if (!ok) continue;
        out.push(cur);
        if (out.length <= 2) return {size:size, lines:out};
      }
      return {size:10, lines:[joined]};
    }
    function build(){
      [].slice.call($('df').querySelectorAll('clipPath')).forEach(function(n){ n.parentNode.removeChild(n); });
      board.innerHTML = ''; pieces.length = 0;
      INFO.forEach(function(r, c){
        var cx = BX + (c % 3) * CW + 12, cy = BY + Math.floor(c / 3) * CH;
        var fv = fitValue(r.v);
        var items = [[r.l, 'lab', cy + 23, 7, 11]].concat(fv.lines.map(function(v, i){ return [v, 'val', cy + 26 + fv.size + i * (fv.size + 2), 8, fv.size]; }));
        items.forEach(function(it, j){
          var id = 'cp' + pieces.length;
          var cp = el('clipPath', {id:id}, $('df'));
          var rc = el('rect', {x:cx - 3, y:it[2] - it[4] - 3, width:0, height:it[4] + 12}, cp);
          var t = el('text', {x:cx, y:it[2], 'clip-path':'url(#' + id + ')'}, board);
          t.setAttribute('class', it[1]); if (it[1] === 'val') t.style.fontSize = it[4] + 'px'; t.textContent = it[0];
          pieces.push({cell:c, first:j === 0, txt:it[0], t:t, rc:rc, x:cx, y:it[2], line:it[3], w:60});
        });
      });
    }
    build();
    function measure(){ pieces.forEach(function(p){ try { p.w = Math.ceil(p.t.getComputedTextLength()) + 4; } catch (e) {} }); }

    var cur = HOME.slice();
    /* cur = titik pasang pena. Alas Dobot di rel atas ikut bergeser, lengan dua ruas (elbow) turun ke pena. */
    var SY = 66, L1 = 120, L2 = 135;
    function elbow(sx, wx, wy){
      var dx = wx - sx, dy = wy - SY, d = Math.min(Math.hypot(dx, dy), L1 + L2 - 2);
      var a = Math.atan2(dy, dx), c = (L1*L1 + d*d - L2*L2) / (2 * L1 * d);
      var b = Math.acos(Math.max(-1, Math.min(1, c)));
      return [sx + L1*Math.cos(a - b), SY + L1*Math.sin(a - b)];
    }
    function seg(id, x1, y1, x2, y2){
      var e = $(id); e.setAttribute('x1', x1); e.setAttribute('y1', y1); e.setAttribute('x2', x2); e.setAttribute('y2', y2);
    }
    function link(k, x1, y1, x2, y2){
      seg('a' + k + 'o', x1, y1, x2, y2); seg('a' + k + 'w', x1, y1, x2, y2);
      seg('a' + k + 'k', x1 + (x2 - x1) * .22, y1 + (y2 - y1) * .22, x1 + (x2 - x1) * .78, y1 + (y2 - y1) * .78);
    }
    function render(){
      var sx = Math.max(66, Math.min(574, cur[0] - 155));
      $('bd').setAttribute('transform', 'translate(' + sx + ',0)');
      var e = elbow(sx, cur[0], cur[1]);
      link(1, sx, SY, e[0], e[1]); link(2, e[0], e[1], cur[0], cur[1]);
      $('h0').setAttribute('transform', 'translate(' + sx + ',' + SY + ')');
      $('h1').setAttribute('transform', 'translate(' + e[0] + ',' + e[1] + ')');
      $('tl').setAttribute('transform', 'translate(' + cur[0] + ',' + cur[1] + ')');
    }

    var run = 0, visible = true;
    function ease(p){ return p < .5 ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2; }
    function tw(ms, fn, my){
      return new Promise(function(res, rej){
        var last = null, acc = 0;
        function f(t){
          if (my !== run) return rej('x');
          if (last === null) last = t;
          if (visible) acc += t - last;
          last = t;
          var p = Math.min(acc / ms, 1); fn(p);
          if (p < 1) requestAnimationFrame(f); else res();
        }
        requestAnimationFrame(f);
      });
    }
    function mv(x, y, ms, my){
      var a = cur[0], b = cur[1];
      return tw(ms, function(p){ var e = ease(p); cur = [a + (x - a) * e, b + (y - b) * e]; render(); }, my);
    }
    function wait(ms, my){ return tw(ms, function(){}, my); }
    function fade(g, from, to, ms, my){ return tw(ms, function(p){ g.setAttribute('opacity', from + (to - from) * p); }, my); }

    var lg = $('lg');
    function log(t){
      var d = document.createElement('div'); d.textContent = '$ ' + t; lg.appendChild(d);
      while (lg.children.length > 5) lg.removeChild(lg.firstChild);
    }
    function reset(){
      cur = HOME.slice(); render(); hl(-1); lg.innerHTML = '';
      pieces.forEach(function(p){ p.rc.setAttribute('width', 0); });
      board.setAttribute('opacity', 1);
    }

    async function actWrite(my){
      reset(); setCode();
      if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) {} }
      build(); measure();
      await wait(500, my);
      for (var i = 0; i < pieces.length; i++){
        var p = pieces[i], cy = p.y - 5;
        if (p.first){ hl(3); log('kotak ' + (p.cell + 1) + ': ' + INFO[p.cell].l); await wait(120, my); }
        hl(5); await mv(p.x, cy - 14 - TOOL, 380, my);
        hl(6); await mv(p.x, cy - TOOL, 140, my);
        hl(p.line); log('tulis "' + p.txt + '"');
        var ms = p.line === 7 ? 340 : Math.max(560, p.w * 9);
        await tw(ms, function(q){
          p.rc.setAttribute('width', (p.w + 6) * q);
          cur = [p.x + p.w * q, cy - TOOL + 1.6 * Math.sin(q * p.w / 5)]; render();
        }, my);
        hl(4); await mv(cur[0], cur[1] - 14, 140, my);
      }
      hl(10); log('Profil selesai ditulis');
      await mv(HOME[0], HOME[1], 800, my);
      await wait(2800, my);
      await fade(board, 1, 0, 450, my);
    }

    function start(){
      run++; var my = run;
      (async function(){
        try { while (my === run) await actWrite(my); } catch (e) {}
      })();
    }
    function showFinal(){
      run++; reset(); setCode();
      function fill(){ build(); measure(); pieces.forEach(function(p){ p.rc.setAttribute('width', p.w + 6); }); }
      fill();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fill);
      hl(10);
      log('Profil selesai ditulis. Tekan tombol di atas untuk melihat animasinya.');
    }

    if ('IntersectionObserver' in window) new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }).observe($('demo'));
    document.querySelectorAll('.acts button').forEach(function(b){ b.addEventListener('click', start); });
    setCode();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) showFinal(); else start();
  })();

} catch (e) { showProblem('demo Dobot: ' + e.message); } }

/* ============ EFEK CAHAYA KURSOR ============ */
(function(){
  var g = document.getElementById('glow'), gl = document.getElementById('gridlit');
  if (!g || !window.matchMedia('(hover:hover)').matches) return;
  var tx = 0, ty = 0, x = 0, y = 0, raf = 0;
  function loop(){
    x += (tx - x) * .6; y += (ty - y) * .6;   /* 0.6 = hampir langsung; naikkan ke 1 untuk persis */
    g.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
    gl.style.setProperty('--gx', x.toFixed(1) + 'px'); gl.style.setProperty('--gy', y.toFixed(1) + 'px');
    raf = (Math.abs(tx - x) + Math.abs(ty - y) > .3) ? requestAnimationFrame(loop) : 0;
  }
  window.addEventListener('mousemove', function(e){
    tx = e.clientX; ty = e.clientY; g.classList.add('on'); gl.classList.add('on');
    if (!raf) raf = requestAnimationFrame(loop);
    var t = e.target.closest && e.target.closest('.card,.skill,.scene,.win');
    if (t){ var r = t.getBoundingClientRect(); t.style.setProperty('--mx', (e.clientX - r.left) + 'px'); t.style.setProperty('--my', (e.clientY - r.top) + 'px'); }
  }, {passive:true});
  document.addEventListener('mouseleave', function(){ g.classList.remove('on'); gl.classList.remove('on'); });
})();
