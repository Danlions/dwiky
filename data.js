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
  {k:'Cognitive Class AI', t:'A Quick Introduction to Machine Learning', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/A Quick Introduction to Machine Learning.pdf'},
  {k:'Cognitive Class AI', t:'Classification Methods: Problems and Solutions', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Classification Methods Problems and Solutions.pdf'}, 
  {k:'Cognitive Class AI', t:'Customer Clustering with KMeans', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Customer Clustering with KMeans to Boost Business Strategy.pdf'},
  {k:'Cognitive Class AI', t:'Data Analysis with Python', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Data Analysis with Python.pdf'},
  {k:'Cognitive Class AI', t:'Learning with Python', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Learning with Python.pdf'},
  {k:'Cognitive Class AI', t:'Machine Learning Basics', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Machine Learning Basics.pdf'},
  {k:'Cognitive Class AI', t:'Precise Predictions: Classification for Flowers', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Precise Predictions Classification for Flower and Tumors.pdf'}, 
  {k:'Cognitive Class AI', t:'Predictions: Regression for Car Mileage', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Predictions Regression for Car Mileage and Diamond Price.pdf'}, 
  {k:'Cognitive Class AI', t:'Python 101 for Data Science', s:'Cognitive Class (IBM)', y:'2026', f:'Cognitive Class Ai/Python 101 for Data Science.pdf'},
  {k:'Cognitive Class AI', t:'SQL and Relational Databases 101', s:'Cognitive Class (IBM)', y:'2025', f:'Cognitive Class Ai/SQL and Relational Databases 101.pdf'},

  /* ---------- IBM SkillsBuild ---------- */
  {k:'IBM SkillsBuild', t:'AI Introduction', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/AI Introduction_Completion Certificate_SkillsBuild.pdf'}, 
  {k:'IBM SkillsBuild', t:'IBM SkillsBuild Completion Certificate', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/Completion Certificate _ SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'Getting Started with AI', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/Getting Started Ai_Completion Certificate_SkillsBuild.pdf'}, 
  {k:'IBM SkillsBuild', t:'IBM Granite Models', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/IBM Granite Models_SkillsBuild.pdf'},
  {k:'IBM SkillsBuild', t:'IBM Granite', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/IBM Granite_Completion Certificate _ SkillsBuild.pdf'}, 
  {k:'IBM SkillsBuild', t:'IBM Design', s:'IBM SkillsBuild / Credly', y:'2025', f:'IBM Skills Build/IBMDesign_Credly.pdf'},
  {k:'IBM SkillsBuild', t:'Code Generation and Optimization', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/Sertifikat Code Generation and Optimization - Wave 3.pdf'}, 
  {k:'IBM SkillsBuild', t:'Use Generative AI', s:'IBM SkillsBuild', y:'2025', f:'IBM Skills Build/Use Generative AI_SkillsBuild.pdf'},

  /* ---------- Panitia ---------- */
  {k:'Panitia', t:'Isola Sport Fest', s:'Panitia', y:'2025', f:'Panitia/Isola Sport Fest.pdf'},
  {k:'Panitia', t:'Metastro 2025', s:'Panitia', y:'2025', f:'Panitia/Metastro 2025.pdf'},
  {k:'Panitia', t:'Trisula Suaka', s:'Panitia', y:'2025', f:'Panitia/Trisula Suaka.pdf'},

  /* ---------- Workshop ---------- */
  {k:'Workshop', t:'AI Class ASEAN', s:'Asean Foundation', y:'2026', f:'Workshop/Ai_Class_Assean.pdf'},
  {k:'Workshop', t:'Alibaba', s:'Alibaba', y:'2025', f:'Workshop/Alibaba.pdf'},
  {k:'Workshop', t:'TOEFL Prediction Test', s:'Central Course', y:'2026', f:'Dwiky Jerryan Koryanto Muhammad-sshj.pdf'},
  {k:'Workshop', t:'PPSDM', s:'PPSDM', y:'2025', f:'Workshop/Sert - PPSDM - Dwiky Jerryan Koryanto Muhammad.pdf'},
  {k:'Workshop', t:'SIC6 Stage 1', s:'Samsung Inovation Campus', y:'2024-2025', f:'Workshop/Sertifikat SIC6 Stage 1.pdf'},
  {k:'Workshop', t:'TOEFL ITP Workshop', s:'Arfiyan Ridwan', y:'2025', f:'Workshop/TOEFL ITP Workshop by Arfiyan Ridwan.pdf'},
  {k:'Workshop', t:'Workshop Matematika', s:'Fakultas Sains dan Matematika Universitas Dipenogoro', y:'2025', f:'Workshop/Workshop Matematika.pdf'}
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

