/* =====================================================================
   DATA.JS  -  semua isi yang perlu kamu ubah ada di file ini.
   Simpan, upload ulang ke GitHub, selesai. (Tampilan ada di style.css,
   logika ada di app.js: tidak perlu disentuh.)
   ===================================================================== */

/* ============ IDENTITAS & KONTAK ============ */
var SITE = {
  name:  'Dwiky Jerryan Koryanto Muhammad',
  email: 'dwikyjerryan311@gmail.com',
  soc: [
    ['GitHub',    'https://github.com/Danlions'],
    ['LinkedIn',  'www.linkedin.com/in/dwiky-jerryan-koryanto-muhammad'],
    ['Instagram', 'https://instagram.com/kazikvy']
  ]
};

var GH = 'https://github.com/Danlions';
var P = [
  {t:'Alpro', s:'Terminal App', c:'Pemrograman', k:'GitHub', img:'',
    d:'Aplikasi berbasis terminal untuk mata kuliah Alpro.',
    l:[['Lihat di GitHub', GH]]},
  {t:'Kinematika', s:'Arm Manipulator', c:'Robotika', k:'Drive', img:'',
    d:'Proyek arm manipulator pada mata kuliah Kinematika.',
    l:[['Buka dokumen','https://drive.google.com/file/d/1MEtLrvR1LaxXN938QOIou0OQD-8u5Hrh/view?usp=drivesdk']]},
  {t:'Sisdig', s:'Dokumentasi Praktikum', c:'Dokumentasi', k:'Drive', img:'',
    d:'Kumpulan dokumentasi praktikum Sistem Digital.',
    l:[['Buka folder Drive','https://drive.google.com/drive/folders/1e7geEjVoufC7uqvQzOLAEBt7qHkQfktK?usp=drive_link']]},
  {t:'Steam Kendaraan', s:'Promlan + MIBD', c:'Pemrograman', k:'GitHub', img:'',
    d:'Proyek Steam Kendaraan yang dikerjakan untuk mata kuliah Promlan dan MIBD.',
    l:[['Lihat di GitHub', GH]]},
  {t:'Sampah Pintar', s:'Sensor dan Sistem Tertanam', c:'Sistem Tertanam', k:'Drive', img:'',
    d:'Proyek tempat sampah pintar untuk mata kuliah Sensor dan Sistem Tertanam.',
    l:[['Buka folder Drive','https://drive.google.com/drive/folders/1YKI4mJZ0up3s3vZdyULtHhqchN5yO9KA']]},
  {t:'Starpoin System', s:'Desain Interaksi', c:'Desain', k:'Figma + Drive', img:'',
    d:'Perancangan antarmuka Starpoin System pada mata kuliah Desain Interaksi, dengan desain di Figma dan dokumentasi di Drive.',
    l:[['Lihat desain Figma','https://www.figma.com/design/ksEbT7dhCwe58sz4lYnQcZ/Untitled?node-id=0-1&p=f'],['Buka folder Drive','https://drive.google.com/drive/folders/10xT1rNW3KkGhcnhw82qRS4fmC0-fWH_c']]},
  {t:'IoT Simulasi', s:'Wokwi + Firebase', c:'IoT', k:'GitHub', img:'',
    d:'Simulasi IoT di Wokwi yang terintegrasi dengan Firebase.',
    l:[['Lihat di GitHub', GH]]},
  {t:'Robotika Dobot', s:'Program dan Logika', c:'Robotika', k:'GitHub', img:'',
    d:'Program dan logika untuk menggerakkan robot Dobot.',
    l:[['Lihat di GitHub', GH]]}
];

/* ============ SKILL SOFTWARE ============
   n = nama, d = keterangan singkat, i = nama ikon dari daftar ICONS di atas
   (python, cplusplus, arduino, wokwi, firebase, figma, git, vscode).
   Kosongkan i untuk memakai singkatan dari m. Hapus yang tidak kamu kuasai, tambahkan yang kamu pakai. */
var SKILLS = [
  {n:'Python', d:'Bahasa pemrograman', i:'python', m:'Py'},
  {n:'C / C++', d:'Bahasa pemrograman', i:'cplusplus', m:'C+'},
  {n:'Arduino', d:'Mikrokontroler', i:'arduino', m:'Ar'},
  {n:'Wokwi', d:'Simulasi IoT', i:'wokwi', m:'Wk'},
  {n:'Firebase', d:'Backend dan database', i:'firebase', m:'Fb'},
  {n:'Figma', d:'Desain antarmuka', i:'figma', m:'Fg'},
  {n:'Git & GitHub', d:'Version control', i:'git', m:'Git'},
  {n:'VS Code', d:'Editor kode', i:'vscode', m:'VS'}
];

/* Sertifikat: ganti isi, tambah atau hapus sesuai kebutuhan */
/* k = kelompok, t = judul, s = penerbit, y = tahun
   f = NAMA FILE di folder Sertifikat (PDF atau JPG/PNG), mis. f:'python-101.pdf'
   u = link lain (opsional), mis. link verifikasi online
   Tanpa f dan u, kartu tampil sebagai teks saja. */
var CERTS = [
  {k:'Cognitive Class AI', t:'A Quick Introduction to Machine Learning', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Classification Methods: Problems and Solutions', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Customer Clustering with KMeans', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Data Analysis with Python', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Learning with Python', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Machine Learning Basics', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Precise Predictions: Classification for Flowers', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Predictions: Regression for Car Mileage', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'Python 101 for Data Science', s:'Cognitive Class (IBM)', y:'2026'},
  {k:'Cognitive Class AI', t:'SQL and Relational Databases 101', s:'Cognitive Class (IBM)', y:'2025'},
  {k:'IBM SkillsBuild', t:'AI Introduction', s:'IBM SkillsBuild', y:'2025'},
  {k:'IBM SkillsBuild', t:'IBM SkillsBuild Completion Certificate', s:'IBM SkillsBuild', y:'2025'},
  {k:'IBM SkillsBuild', t:'Getting Started with AI', s:'IBM SkillsBuild', y:'2025'},
  {k:'IBM SkillsBuild', t:'IBM Granite Models', s:'IBM SkillsBuild', y:'2025'},
  {k:'IBM SkillsBuild', t:'IBM Granite', s:'IBM SkillsBuild', y:'2025'},
  {k:'IBM SkillsBuild', t:'IBM Design', s:'IBM SkillsBuild / Credly', y:'2025'},
  {k:'IBM SkillsBuild', t:'Code Generation and Optimization', s:'IBM SkillsBuild', y:'2025'},
  {k:'IBM SkillsBuild', t:'Use Generative AI', s:'IBM SkillsBuild', y:'2025'},
  {k:'Panitia', t:'Isola Sport Fest', s:'Panitia', y:'[Tahun]'},
  {k:'Panitia', t:'Metastro 2025', s:'Panitia', y:'2025'},
  {k:'Panitia', t:'Trisula Suaka', s:'Panitia', y:'2025'},
  {k:'Workshop', t:'AI Class ASEAN', s:'[Penerbit]', y:'2026'},
  {k:'Workshop', t:'Alibaba', s:'Alibaba', y:'[Tahun]'},
  {k:'Workshop', t:'[Judul sertifikat Dwiky...sshj]', s:'[Penerbit]', y:'2026'},
  {k:'Workshop', t:'PPSDM', s:'PPSDM', y:'2025'},
  {k:'Workshop', t:'SIC6 Stage 1', s:'[Penerbit]', y:'2025'},
  {k:'Workshop', t:'TOEFL ITP Workshop', s:'Arfiyan Ridwan', y:'2025'},
    {k:'Workshop', t:'Workshop Matematika', s:'[Penerbit]', y:'[Tahun]'}
];

/* ============ ISI PAPAN TULIS DOBOT ============ */
/* Satu kotak per baris. v = baris teks yang ditulis (maksimal 2 baris pendek). */
var INFO = [
  {l:'NAMA', v:[SITE.name]},
  {l:'PROGRAM STUDI', v:['Mekatronika &','Kecerdasan Buatan']},
  {l:'KAMPUS', v:['Universitas Pendidikan Indonesia']},
  {l:'SEMESTER', v:['5']},
  {l:'FOKUS', v:['Robotika, IoT,','Desain interaksi, Editting']},
  {l:'KOTA', v:['Bogor']}
];

