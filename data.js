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
    ['LinkedIn',  'https://www.linkedin.com/in/dwiky-jerryan-koryanto-muhammad/'],
    ['Instagram', 'https://instagram.com/kazikvy']
  ]
};

var GH = 'https://github.com/Danlions';
var P = [
   {
      t:'Aplikasi BMR BMI', 
      s:'Aplikasi Terminal', 
      c:'Pemrograman Bahasa C', 
      k:'GitHub', 
      img:'Proyek/Aplikasi BMR BMI.png',
      d:'Aplikasi Gizi yang menghitung BMR dan BMI berbasis terminal dengan bahasa C.',
      l:[['GitHub', 'https://github.com/Danlions/Aplikasi_BMR_BMI']]},
   {
      t:'Arm Manipulator', 
      s:'Prototipe Hardware', 
      c:'Hidrolik', 
      k:'Google Drive', 
      img:'Proyek/Arm Manipulator.png',
      d:'Proyek Arm Manipulator yang bergerak dengan tenaga kerja hidrolik.',
      l:[['Google Drive','https://drive.google.com/file/d/1UguEo3sYAD_Tot8RvDvcMIK8npNTgNe_/view?usp=drive_link']]},
   {
      t:'Gerbang Logika', 
      s:'Dokumentasi Praktikum', 
      c:'Sistem Digital', 
      k:'Google Drive', 
      img:'Proyek/Sistem Digital.png',
      d:'Mengimplementasikan cara kerja dari bermacam-macam gerbang logika dengan Decoder dan Encoder.',
      l:[['Google Drive','https://drive.google.com/file/d/1CeRb-HbjCBvEv0oFfq2O6peWsMQSXubM/view?usp=drive_link']]},
   {
      t:'Steam Kendaraan', 
      s:'Aplikasi Dekstop', 
      c:'Pemrograman Bahasa Java', 
      k:'GitHub', 
      img:'Proyek/Steam Kendaraan.png',
      d:'Proyek aplikasi Steam Kendaraan menggunakan netbeans dan pembuatan ui scene builder serta terintegrasi dengan database MySQL dengan bahasa Java.',
      l:[['GitHub', 'https://github.com/Danlions/SteamKendaraan']]},
   {
      t:'Sampah Pintar', 
      s:'Prototipe Hardware', 
      c:'Sensor dan Sistem Tertanam', 
      k:'Google Drive', 
      img:'Proyek/Smart Trash Bin.png',
      d:'Proyek prototipe tempat sampah pintar dengan sensor ultrasonik sebagai tanda sampah penuh dan sensor MQ-135 sebagai tanda kebusukan sampah.',
      l:[['Google Drive','https://drive.google.com/drive/folders/1gWlqXRRsQeG_LsKE_dB8E441iou95GrS?usp=drive_link']]},
   {
      t:'Stairpoint', 
      s:'Prototipe Hardware + Software', 
      c:'Desain Interaksi', 
      k:'Figma + Google Drive',
      img:'Proyek/Stairpoint.png',
      d:'Proyek prototipe Stairpoint yang terdiri dari sistem scan rfid dengan desain aplikasi android, alat ini memotivasi pengguna untuk lebih menggunakan tangga untuk tujuan kesehatan dengan sistem poin yang bisa ditukar dengan benefit di dalam aplikasi Stairpoint.',
      l:[['Lihat desain Figma','https://www.figma.com/design/ksEbT7dhCwe58sz4lYnQcZ/Untitled?node-id=0-1&p=f'],['Google Drive','https://drive.google.com/drive/folders/1mOqLdpstIWoZsfKHevWyLIrnGOa_aq86?usp=sharing']]},
   {
      t:'Simulasi Conveyor Sorting', 
      s:'Wokwii + Firebase', 
      c:'Internet Of Things', 
      k:'Google Drive', 
      img:'Proyek/Conveyor Sorting.png',
      d:'Proyek simulasi IoT di Wokwi yang terintegrasi dengan database Firebase, simulasi ini mendeteksi gangguan pada sensor, barang yang macet dan situasi darurat.',
      l:[['Google Drive', 'https://drive.google.com/drive/folders/1AkAfrnCVk52F6jVmTkJFe8bezaL5ry-T?usp=sharing']]},
   {
      t:'Robotika Dobot', 
      s:'Program dan Logika', 
      c:'Robotika', 
      k:'GitHub', 
      img:'',
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
  /* ---------- Cognitive Class AI ---------- */
  {k:'Cognitive Class AI', t:'A Quick Introduction to Machine Learning', s:'Cognitive Class (IBM)', y:'2026', f:'A Quick Introduction to Machine Learning.pdf'},
  {k:'Cognitive Class AI', t:'Classification Methods: Problems and Solutions', s:'Cognitive Class (IBM)', y:'2026', f:'Classification Methods Problems and Solutions.pdf'},
  {k:'Cognitive Class AI', t:'Customer Clustering with KMeans', s:'Cognitive Class (IBM)', y:'2026', f:'Customer Clustering with KMeans to Boost Business Strategy.pdf'},
  {k:'Cognitive Class AI', t:'Data Analysis with Python', s:'Cognitive Class (IBM)', y:'2026', f:'Data Analysis with Python.pdf'},
  {k:'Cognitive Class AI', t:'Learning with Python', s:'Cognitive Class (IBM)', y:'2026', f:'Learning with Python.pdf'},
  {k:'Cognitive Class AI', t:'Machine Learning Basics', s:'Cognitive Class (IBM)', y:'2026', f:'Machine Learning Basics.pdf'},
  {k:'Cognitive Class AI', t:'Precise Predictions: Classification for Flowers', s:'Cognitive Class (IBM)', y:'2026', f:'Precise Predictions Classification for Flower and Tumors.pdf'},
  {k:'Cognitive Class AI', t:'Predictions: Regression for Car Mileage', s:'Cognitive Class (IBM)', y:'2026', f:'Predictions Regression for Car Mileage and Diamond Price.pdf'},
  {k:'Cognitive Class AI', t:'Python 101 for Data Science', s:'Cognitive Class (IBM)', y:'2026', f:'Python 101 for Data Science.pdf'},
  {k:'Cognitive Class AI', t:'SQL and Relational Databases 101', s:'Cognitive Class (IBM)', y:'2025', f:'SQL and Relational Databases 101.pdf'},

  /* ---------- IBM SkillsBuild ---------- */
  {k:'IBM SkillsBuild', t:'AI Introduction', s:'IBM SkillsBuild', y:'2025', f:'AI Introduction_Completion Certificate_SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'IBM SkillsBuild Completion Certificate', s:'IBM SkillsBuild', y:'2025', f:'Completion Certificate _ SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'Getting Started with AI', s:'IBM SkillsBuild', y:'2025', f:'Getting Started Ai_Completion Certificate_SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'IBM Granite Models', s:'IBM SkillsBuild', y:'2025', f:'IBM Granite Models_SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'IBM Granite', s:'IBM SkillsBuild', y:'2025', f:'IBM Granite_Completion Certificate _ SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'IBM Design', s:'IBM SkillsBuild / Credly', y:'2025', f:'IBMDesign_Credly.pdf'},
  {k:'IBM SkillsBuild', t:'Code Generation and Optimization', s:'IBM SkillsBuild', y:'2025', f:'Sertifikat Code Generation and Optimization - Wave 3.pdf'},
  {k:'IBM SkillsBuild', t:'Use Generative AI', s:'IBM SkillsBuild', y:'2025', f:'Use Generative AI_SkillsBuild.pdf'},

  /* ---------- Panitia ---------- */
  {k:'Panitia', t:'Isola Sport Fest 2025', s:'Panitia ISF', y:'2025', f:'Isola Sport Fest.pdf'},
  {k:'Panitia', t:'Metastro 2025', s:'Panitia Mestastro', y:'2025', f:'Metastro 2025.pdf'},
  {k:'Panitia', t:'Trisula Suaka 2025', s:'Panitia Trisula Suaka', y:'2025', f:'Trisula Suaka.pdf'},

  /* ---------- Workshop ---------- */
  {k:'Workshop', t:'AI Class ASEAN', s:'Asean Foundation', y:'2026', f:'Ai_Class_Assean.pdf'},
  {k:'Workshop', t:'AI Foward', s:'Alibaba Cloud', y:'2025', f:'Alibaba.pdf'},
  {k:'Workshop', t:'TOEFL Prediction Test', s:'Central Course', y:'2026', f:'Dwiky Jerryan Koryanto Muhammad-sshj.pdf'},
  {k:'Workshop', t:'PPSDM', s:'PPSDM', y:'2025', f:'Sert - PPSDM - Dwiky Jerryan Koryanto Muhammad.pdf'},
  {k:'Workshop', t:'SIC6 Stage 1', s:'Samsung Innovation Campus', y:'2024-2025', f:'Sertifikat SIC6 Stage 1.pdf'},
  {k:'Workshop', t:'Workshop Matematika', s:'Fakultas Sains dan Matematika Universitas Diponegoro', y:'2025', f:'Workshop Matematika.pdf'}
];

/* ============ ISI PAPAN TULIS DOBOT ============ */
/* Satu kotak per baris. v = baris teks yang ditulis (maksimal 2 baris pendek). */
var INFO = [
  {l:'NAMA', v:[SITE.name]},
  {l:'PROGRAM STUDI', v:['Mekatronika & Kecerdasan Buatan']},
  {l:'KAMPUS', v:['Universitas Pendidikan Indonesia']},
  {l:'SEMESTER', v:['5 (Lima)']},
  {l:'FOKUS', v:['Robotika, IoT,','Desain interaksi, Editting']},
  {l:'KOTA', v:['Bogor']}
];

