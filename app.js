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
  vscode: '<svg viewBox="0 0 24 24"><path fill="#0A7CCF" fill-rule="evenodd" d="M17.5 2.5 21.5 4.4V19.6L17.5 21.5 9.3 13.8 5.2 16.9 3.5 16V8L5.2 7.1 9.3 10.2ZM17.5 7.2 11.8 12 17.5 16.8Z"/></svg>'
};

/* ============ KERANGKA HALAMAN (navigasi, kontak, footer) ============ */
(function(){
  var page = document.body.getAttribute('data-page') || '', title = document.body.getAttribute('data-title');
  var clean = SITE.name.replace(/[\[\]]/g, '').trim(), words = clean.split(/\s+/);
  if (title) document.title = title + ' | ' + SITE.name;
  var links = [['index.html','Beranda','home'],['proyek.html','Proyek','proyek'],['skill.html','Skill','skill'],['sertifikat.html','Sertifikat','sertifikat'],['#kontak','Kontak','']];
  var nav = $('nav');
  if (nav) nav.innerHTML = '<div class="wrap"><a class="logo" href="index.html">' + esc(words[0]) + '.</a><div class="l">' +
    links.map(function(l){ return '<a href="' + l[0] + '"' + (l[2] && l[2] === page ? ' class="on" aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('') +
    '</div><a class="go" href="#kontak">Hubungi</a></div>';
  var band = $('kontak');
  if (band) band.innerHTML = '<div class="in"><h2>Mari mengerjakan sesuatu bersama.</h2><p>Terbuka untuk kolaborasi, proyek, dan kesempatan baru. Kirim pesan, saya biasanya membalas dalam 1–2 hari.</p>' +
    '<a class="mail" href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + '</a><div class="soc">' +
    SITE.soc.map(function(s){ return '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + '</a>'; }).join('') + '</div></div>';
  var foot = $('foot');
  if (foot) foot.innerHTML = '© ' + new Date().getFullYear() + ' ' + esc(SITE.name);
  var h = $('hName'); if (h) h.textContent = SITE.name;
  var pic = document.querySelector('.pic');
  if (pic) pic.textContent = (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
  var tz = $('tz');
  if (tz) tz.innerHTML = [
    ['proyek.html', P.length, 'Proyek', 'Robotika, IoT, pemrograman, dan desain interaksi.'],
    ['skill.html', SKILLS.length, 'Skill', 'Bahasa, perangkat, dan software yang saya pakai.'],
    ['sertifikat.html', CERTS.length, 'Sertifikat', 'Kursus, workshop, dan kepanitiaan.']
  ].map(function(t){ return '<a class="tz" href="' + t[0] + '"><span class="n">' + two(t[1]) + '</span><b>' + t[2] + '</b><span>' + t[3] + '</span><em>Buka halaman →</em></a>'; }).join('');
})();

/* ============ PROYEK ============ */
if ($('grid')) {
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

}

/* ============ SKILL ============ */
if ($('skills')) {
  $('skills').innerHTML = SKILLS.map(function(s){
    var inner = ICONS[s.i] || esc(s.m || s.n.slice(0, 2));
    return '<div class="skill"><span class="ic">' + inner + '</span><div><b>' + esc(s.n) + '</b><span>' + esc(s.d) + '</span></div></div>';
  }).join('');

}

/* ============ SERTIFIKAT ============ */
if ($('certs')) {
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
      var th = c.g ? '<span class="th"><img src="' + esc(c.g) + '" alt="Sertifikat ' + esc(c.t) + '" loading="lazy"></span>' : '';
      var link = c.u || c.g, tag = link ? 'a' : 'div';
      var note = c.g ? ' | Lihat sertifikat' : (c.u ? ' | Lihat kredensial' : '');
      return '<' + tag + ' class="cert" data-i="' + i + '"' + (link ? ' href="' + esc(link) + '"' : '') + '>' + th + '<b>' + esc(c.t) + '</b><span>' + esc(c.s) + '</span><em>' + esc(c.y) + note + '</em></' + tag + '>';
    }).join('');
  }
  $('filt').addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    certGroup = b.getAttribute('data-k'); drawCerts();
  });
  drawCerts();

  /* Klik kartu yang punya gambar: buka pembesaran (klik di mana saja / Esc untuk menutup) */
  (function(){
    var lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = '<img alt=""><a target="_blank" rel="noopener">Buka di tab baru</a>';
    document.body.appendChild(lb);
    var im = lb.querySelector('img'), ln = lb.querySelector('a');
    function close(){ lb.classList.remove('on'); }
    $('certs').addEventListener('click', function(e){
      var a = e.target.closest('.cert'); if (!a) return;
      var c = CERTS[+a.getAttribute('data-i')]; if (!c || !c.g) return;
      e.preventDefault(); im.src = c.g; ln.href = c.u || c.g; ln.style.display = c.u ? '' : 'none'; lb.classList.add('on');
    });
    lb.addEventListener('click', function(e){ if (e.target.tagName !== 'A') close(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  })();

}

/* ============ KOORDINAT KURSOR ============ */
if ($('xy')) {
  var xy = $('xy');
  window.addEventListener('pointermove', function(e){
    xy.textContent = 'X ' + String(Math.round(e.clientX)).padStart(4, '0') + '  Y ' + String(Math.round(e.clientY)).padStart(4, '0');
  }, {passive:true});

}

/* ============ DEMO ROBOT DOBOT (beranda) ============ */
if ($('sc')) {
  (function(){
    var NS = 'http://www.w3.org/2000/svg', sc = $('sc');
    var TOOL = 26, HOME = [320, 124];
    var BX = 90, BY = 154, CW = 460 / 3, CH = 73;
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

    /* Papan tulis: label dan isi dibuat sebagai teks yang "terbuka" oleh klip */
    var board = $('board'), pieces = [];
    INFO.forEach(function(r, c){
      var cx = BX + (c % 3) * CW + 12, cy = BY + Math.floor(c / 3) * CH;
      var items = [[r.l, 'lab', cy + 20, 7]].concat(r.v.map(function(v, i){ return [v, 'val', cy + 43 + i * 20, 8]; }));
      items.forEach(function(it, j){
        var id = 'cp' + pieces.length;
        var cp = el('clipPath', {id:id}, $('df'));
        var rc = el('rect', {x:cx - 3, y:it[2] - 22, width:0, height:30}, cp);
        var t = el('text', {x:cx, y:it[2], 'clip-path':'url(#' + id + ')'}, board);
        t.setAttribute('class', it[1]); t.textContent = it[0];
        pieces.push({cell:c, first:j === 0, txt:it[0], t:t, rc:rc, x:cx, y:it[2], line:it[3], w:60});
      });
    });
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
      var sx = Math.max(66, Math.min(574, cur[0] - 140));
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
      measure();
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
      measure(); pieces.forEach(function(p){ p.rc.setAttribute('width', p.w + 6); });
      hl(10);
      log('Profil selesai ditulis. Tekan tombol di atas untuk melihat animasinya.');
    }

    if ('IntersectionObserver' in window) new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }).observe($('demo'));
    document.querySelectorAll('.acts button').forEach(function(b){ b.addEventListener('click', start); });
    setCode();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) showFinal(); else start();
  })();

}

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
