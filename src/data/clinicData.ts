/**
 * Data Master Klinik Kecantikan
 * Semua data klinik, kontak, layanan, harga, dokter, dan testimoni
 * disimpan di sini agar mudah disesuaikan (customized).
 */

export interface ClinicConfig {
  name: string;
  tagline: string;
  city: string;
  area: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string; // international format without + (e.g. 6281289001234)
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  tiktokHandle: string;
  tiktokUrl: string;
  mapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  stats: {
    patientsServed: string;
    yearsExperience: string;
    satisfactionRate: string;
    certifiedDoctors: string;
  };
}

export const CLINIC_CONFIG: ClinicConfig = {
  name: "Lumina Aesthetic Clinic",
  tagline: "Kecantikan Alami & Kulit Bercahaya dengan Perawatan Medis Terpercaya",
  city: "Jakarta Selatan",
  area: "Senopati - Kebayoran Baru",
  fullAddress: "Jl. Senopati No. 48, RT.01/RW.02, Selong, Kebayoran Baru, Jakarta Selatan 12190",
  phoneDisplay: "(021) 7289-4500",
  phoneRaw: "+622172894500",
  whatsappNumber: "6281289001234",
  email: "halo@luminaaesthetic.co.id",
  instagramHandle: "@lumina.aesthetic",
  instagramUrl: "https://instagram.com",
  tiktokHandle: "@lumina.clinic",
  tiktokUrl: "https://tiktok.com",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2736413284074!2d106.8058223747506!3d-6.227606693760565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505c879d0f%3A0xb697c1d7634f5df6!2sJl.%20Senopati%2C%20Kebayoran%20Baru%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Senopati+Jakarta+Selatan",
  openingHours: {
    weekdays: "Senin – Sabtu: 09.00 – 20.00 WIB",
    sunday: "Minggu: 10.00 – 18.00 WIB",
  },
  stats: {
    patientsServed: "18.500+",
    yearsExperience: "9+ Tahun",
    satisfactionRate: "99.4%",
    certifiedDoctors: "100% Berlisensi",
  },
};

export interface Advantage {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    id: "dokter",
    title: "Dokter Spesialis Berlisensi",
    description: "Semua tindakan dilakukan dan diawasi langsung oleh dokter Sp.KK, Sp.D.V.E, dan dokter estetika bersertifikat resmi IDI & PERDOSKI.",
    badge: "100% Dokter Medis",
    iconName: "ShieldCheck",
  },
  {
    id: "bpom",
    title: "Produk & Serum Aman BPOM",
    description: "Formulasi skincare medis berstandar internasional dengan sertifikasi resmi BPOM RI dan dermatologically tested untuk segala jenis kulit.",
    badge: "Tersertifikasi BPOM",
    iconName: "CheckCircle2",
  },
  {
    id: "teknologi",
    title: "Peralatan Modern FDA-Cleared",
    description: "Menggunakan teknologi laser, RF, dan ultrasound generasi terkini berstandar medis internasional (US FDA & CE mark) untuk hasil optimal tanpa rasa sakit berlebih.",
    badge: "Teknologi Terdepan",
    iconName: "Sparkles",
  },
  {
    id: "konsultasi",
    title: "Konsultasi & Skin Check Gratis",
    description: "Analisis kondisi kulit mendalam menggunakan 3D Skin Analyzer digital untuk menentukan protokol perawatan yang tepat bagi kulit unik Anda.",
    badge: "Bebas Biaya Analisis",
    iconName: "MessageCircleHeart",
  },
];

export interface ServiceItem {
  id: string;
  name: string;
  category: "wajah" | "laser" | "antiaging" | "tubuh";
  shortDesc: string;
  fullDesc: string;
  duration: string;
  priceStart: string;
  popular?: boolean;
  downtime: string;
  benefits: string[];
  steps: string[];
  recommendedFor: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "facial-glow-hydra",
    name: "Hydra Deep Glow Facial",
    category: "wajah",
    shortDesc: "Pembersihan pori mendalam dengan vacuum hydro-peel, infus serum hyaluronic acid & oksigen murni untuk kulit kenyal seketika.",
    fullDesc: "Perawatan multi-tahap non-invasif yang menggabungkan eksfoliasi mikroskopis, ekstraksi komedo tanpa rasa sakit, serta infus serum vitamin C dan hyaluronic acid konsentrat tinggi. Membuat kulit terasa segar, terhidrasi, dan glowing sehat seketika tanpa iritasi.",
    duration: "60 - 75 Menit",
    priceStart: "Rp 350.000",
    popular: true,
    downtime: "Tidak ada (Bisa langsung make-up)",
    benefits: [
      "Mengangkat sel kulit mati dan kotoran penyumbat pori",
      "Menghidrasi kulit kering dan kusam hingga lapisan dermis",
      "Meratakan tekstur wajah dan menyamarkan pori-pori besar",
      "Memberikan efek radiant glow seketika tanpa kemerahan",
    ],
    steps: [
      "Double cleansing & deep steaming",
      "Hydro-dermabrasion suction",
      "Ultrasonic painless blackhead extraction",
      "Cold hammer infusion ampoule",
      "LED Phototherapy mask (Blue & Red light)",
    ],
    recommendedFor: ["Kulit kusam", "Pori-pori tersumbat & komedo", "Kulit dehidrasi", "Persiapan acara penting"],
  },
  {
    id: "pico-laser",
    name: "Pico Gold Rejuvenation Laser",
    category: "laser",
    shortDesc: "Teknologi picosecond tercanggih untuk menghilangkan flek hitam, bekas jerawat gelap (PIH), dan merangsang kolagen baru.",
    fullDesc: "Pico Laser menggunakan gelombang ultra-pendek (sepertriliun detik) untuk memecah pigmen melanin berlebih menjadi partikel debu halus yang diserap alami oleh tubuh. Sangat efektif untuk mengatasi melasma, bekas jerawat kemerahan/kehitaman, serta peremajaan tekstur kulit.",
    duration: "45 Menit",
    priceStart: "Rp 850.000",
    popular: true,
    downtime: "Ringan (1-2 jam kemerahan lembut)",
    benefits: [
      "Memudarkan flek hitam, melasma, dan hiperpigmentasi membandel",
      "Mencerahkan warna kulit tidak merata secara terarah",
      "Mengecilkan pori-pori wajah dan memperbaiki tekstur",
      "Menstimulasi pembentukan kolagen dan elastin baru",
    ],
    steps: [
      "Pembersihan wajah medis & foto analisis kulit",
      "Aplikasi krim anestesi topikal (nyaman tanpa nyeri)",
      "Proses penembakan Pico Laser oleh dokter spesialis",
      "Cooling sheet mask & calamine soothing gel",
      "Aplikasi tabir surya medis SPF 50+",
    ],
    recommendedFor: ["Flek hitam & bintik usia", "Bekas jerawat PIE & PIH", "Warna kulit belang", "Pori-pori besar"],
  },
  {
    id: "botanical-peeling",
    name: "Medical Botanical Peeling",
    category: "wajah",
    shortDesc: "Eksfoliasi kimia lembut dengan ekstrak botanical AHA/BHA untuk regenerasi sel kulit baru dan mengatasi jerawat aktif.",
    fullDesc: "Pengelupasan sel kulit mati terkontrol menggunakan kombinasi asam buah alami (Mandelic, Glycolic, dan Salicylic Acid) dengan kadar medis aman. Menembus lapisan epidermis untuk membersihkan sebum berlebih, menenangkan jerawat meradang, dan mempercepat pergantian sel baru.",
    duration: "40 Menit",
    priceStart: "Rp 320.000",
    downtime: "Flaking halus selama 2-3 hari",
    benefits: [
      "Meredakan peradangan jerawat dan bakteri P. acnes",
      "Mengangkat sumbatan minyak di kelenjar sebasea",
      "Menghaluskan tekstur kulit gradakan",
      "Mempercepat peremajaan sel kulit baru yang lebih cerah",
    ],
    steps: [
      "Cleansing lembut pH balance",
      "Degreasing toner persiapan",
      "Pengolesan larutan peeling botanical secara presisi",
      "Netralisasi dengan saline solution dingin",
      "Soothing compress & barrier repair cream",
    ],
    recommendedFor: ["Kulit berjerawat aktif", "Bruntusan di dahi dan pipi", "Kulit berminyak berlebih", "Kusam"],
  },
  {
    id: "microneedling-rf",
    name: "Microneedling RF Scar Eraser",
    category: "antiaging",
    shortDesc: "Kombinasi jarum mikro presisi dan energi Radio Frequency untuk meratakan bopeng bekas jerawat & mengencangkan kontur wajah.",
    fullDesc: "Teknologi gold-plated microneedle yang mengalirkan energi panas RF terkontrol ke lapisan dermis bagian dalam. Memicu luka mikroskopis terencana yang memaksa tubuh memproduksi kolagen masif untuk mengisi cekungan bopeng (rolling/boxcar scars) dan mengencangkan kulit kendur.",
    duration: "75 Menit",
    priceStart: "Rp 950.000",
    popular: true,
    downtime: "2-3 hari kemerahan (disertai recovery kit)",
    benefits: [
      "Meratakan bopeng dan bekas luka jerawat menahun",
      "Meningkatkan elastisitas dan kekencangan kulit wajah",
      "Menyamarkan garis halus di sekitar mata dan senyum",
      "Memperbaiki tekstur kulit yang kasar menjadi halus",
    ],
    steps: [
      "Deep cleansing & antiseptik kulit",
      "Anestesi lokal premium 30 menit",
      "Prosedur RF Microneedling dokter",
      "Pengolesan Growth Factor / Salmon DNA serum",
      "Cryotherapy calming mask",
    ],
    recommendedFor: ["Bopeng jerawat (acne scars)", "Kulit kendur & pori membesar", "Garis halus penuaan", "Stretch marks"],
  },
  {
    id: "acne-clear-solution",
    name: "Acne Clear Total Cure",
    category: "wajah",
    shortDesc: "Perawatan holistik untuk jerawat meradang, komedo, dan minyak berlebih dengan injeksi anti-radang & IPL Blue Light.",
    fullDesc: "Solusi medis komprehensif bagi Anda yang bermasalah dengan jerawat bernanah, kistik, atau jerawat hormon. Melibatkan ekstraksi medis steril, injeksi jerawat anti-inflamasi untuk mengempeskan benjolan dalam 24 jam, serta penyinaran terapi cahaya biru antibakteri.",
    duration: "60 Menit",
    priceStart: "Rp 380.000",
    downtime: "1 hari kemerahan ringan pada titik bekas jerawat",
    benefits: [
      "Mengempeskan jerawat batu dan meradang dalam hitungan jam",
      "Membasmi bakteri penyebab jerawat di pori-pori",
      "Mencegah timbulnya jerawat baru di area sekitarnya",
      "Mengontrol produksi kelenjar minyak berlebih",
    ],
    steps: [
      "Cleansing acne steril",
      "Ekstraksi komedo oleh perawat medis terlatih",
      "Injeksi intralesi triamcinolone pada jerawat besar",
      "Terapi IPL Blue Light antibakteri",
      "Masker Tea Tree & Zinc soothing",
    ],
    recommendedFor: ["Jerawat meradang & bernanah", "Jerawat hormonal", "Bruntusan parah", "Kulit sensitif acne-prone"],
  },
  {
    id: "anti-aging-hifu",
    name: "HIFU Ultra V-Lift Anti-Aging",
    category: "antiaging",
    shortDesc: "High-Intensity Focused Ultrasound untuk lifting pipi kendur, double chin, dan garis senyum tanpa operasi plastik.",
    fullDesc: "Perawatan non-bedah nomor satu untuk mengencangkan lapisan SMAS (lapisan otot yang biasa ditarik saat operasi face-lift). Energi ultrasound terfokus merangsang neokolagenesis untuk mengencangkan jawline, meniruskan pipi chubby, dan mengangkat alis yang turun.",
    duration: "60 Menit",
    priceStart: "Rp 1.200.000",
    downtime: "Nol downtime (Hasil maksimal terlihat 2-4 minggu)",
    benefits: [
      "Mengencangkan kontur wajah dan memberi efek V-shape",
      "Mengurangi lemak berlebih pada area double chin",
      "Menyamarkan kerutan dahi dan garis senyum (nasolabial fold)",
      "Meningkatkan kekenyalan kulit secara signifikan",
    ],
    steps: [
      "Pemetaan kontur wajah dan marking target",
      "Aplikasi ultrasound gel konduktif",
      "Penyampaian energi HIFU pada kedalaman 1.5mm, 3.0mm, dan 4.5mm",
      "Pembersihan gel & aplikasi peptide firming serum",
      "Pijat relaksasi leher dan bahu",
    ],
    recommendedFor: ["Kulit kendur usia 28+", "Pipi kendur & double chin", "Garis tawa dalam", "Pencegahan penuaan dini"],
  },
  {
    id: "radiance-whitening",
    name: "Lumina Gluta-Radiance Infusion",
    category: "tubuh",
    shortDesc: "Infus multivitamin antioksidan dosis tinggi dengan Glutathione murni dan Vitamin C untuk mencerahkan seluruh tubuh.",
    fullDesc: "Terapi nutrisi intravena yang diracik khusus oleh dokter spesialis untuk detoksifikasi radikal bebas, memperkuat sistem imun, dan mencerahkan tone kulit tubuh secara merata dari dalam. Hasilnya kulit tampak lebih bersih, segar, dan bersinar sehat.",
    duration: "45 Menit",
    priceStart: "Rp 450.000",
    downtime: "Tidak ada sama sekali",
    benefits: [
      "Mencerahkan warna kulit tubuh secara merata",
      "Menangkal radikal bebas dan polusi perkotaan",
      "Meningkatkan vitalitas tubuh dan daya tahan fisik",
      "Membantu menyamarkan belang akibat paparan matahari",
    ],
    steps: [
      "Pemeriksaan tekanan darah dan skrining riwayat medis",
      "Pemasangan infus steril oleh perawat berizin",
      "Pemberian cairan saline dengan Glutathione murni & Multi-Vit",
      "Monitoring selama proses infus berlangsung",
      "Edukasi hidrasi cairan harian oleh perawat",
    ],
    recommendedFor: ["Kulit kusam seluruh tubuh", "Kulit belang tangan & kaki", "Kelelahan kronis", "Antioksidan booster"],
  },
  {
    id: "laser-hair-removal",
    name: "Painless Diode Hair Removal",
    category: "tubuh",
    shortDesc: "Penghilangan bulu permanen dengan teknologi Diode Triple Wave yang dingin, nyaman, dan mencerahkan area ketiak/kaki.",
    fullDesc: "Laser Diode modern dengan kepala pendingin safir -5°C yang membuat proses penghilangan folikel rambut hampir tanpa rasa sakit. Menghancurkan akar bulu hingga tidak tumbuh lagi sekaligus mencerahkan kulit di area lipatan seperti underarm dan bikini line.",
    duration: "30 Menit",
    priceStart: "Rp 275.000",
    downtime: "Tidak ada (Hindari air panas 24 jam)",
    benefits: [
      "Menghilangkan bulu secara permanen setelah paket rutin",
      "Dilengkapi teknologi pendingin ice-contact nyaman",
      "Mencegah timbulnya ingrown hair dan iritasi cukur",
      "Membantu mencerahkan area ketiak yang gelap akibat shaving",
    ],
    steps: [
      "Pembersihan dan pencukuran halus area target",
      "Aplikasi cooling gel dingin",
      "Penyinaran Diode laser berkelanjutan",
      "Pembersihan gel dan aplikasi aloe soothing cream",
    ],
    recommendedFor: ["Underarm (ketiak)", "Bikini line / Brazilian", "Kaki & tangan", "Upper lip & jenggot"],
  },
];

export interface Doctor {
  id: string;
  name: string;
  role: string;
  title: string;
  specialization: string;
  experience: string;
  education: string;
  strNumber: string;
  schedule: string;
  image: string;
  bio: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-clara",
    name: "dr. Clara Paramitha, Sp.KK, FINSDV",
    role: "Head Dermatologist & Founder",
    title: "Spesialis Kulit & Kelamin",
    specialization: "Dermatologi Estetika, Melasma & Acne Scar Complex",
    experience: "12 Tahun Pengalaman",
    education: "Spesialis Dermatologi & Venereologi Universitas Indonesia",
    strNumber: "STR: 31.2.1.100.2.18.124580",
    schedule: "Senin, Rabu, Jumat (10.00 – 17.00 WIB)",
    image: "/src/assets/images/doctor_clara_spkk_1793149421878.jpg",
    bio: "Berpengalaman menangani ribuan kasus hiperpigmentasi dan acne scar membandel dengan pendekatan medis presisi berstandar internasional.",
  },
  {
    id: "dr-aditya",
    name: "dr. Aditya Pratama, Dip.AAAM",
    role: "Senior Aesthetic Physician",
    title: "Dokter Estetika Medis",
    specialization: "Anti-Aging, Facial Contouring, HIFU & Filler Medis",
    experience: "9 Tahun Pengalaman",
    education: "American Academy of Aesthetic Medicine (AAAM) Certified",
    strNumber: "STR: 31.1.1.200.3.15.093412",
    schedule: "Selasa, Kamis, Sabtu (11.00 – 19.00 WIB)",
    image: "/src/assets/images/doctor_aditya_md_1793149422644.jpg",
    bio: "Pakar dalam peremajaan wajah non-bedah, berfokus menciptakan proporsi wajah proporsional dan natural tanpa kesan kaku atau berlebihan.",
  },
  {
    id: "dr-maya",
    name: "dr. Maya Widjaja, Sp.D.V.E",
    role: "Laser & Skin Rejuvenation Specialist",
    title: "Spesialis Dermatologi & Venereologi",
    specialization: "Laser Picosecond, Vascular Laser & Skin Barrier Recovery",
    experience: "8 Tahun Pengalaman",
    education: "Universitas Airlangga & Fellowship Laser Dermatology Korea",
    strNumber: "STR: 35.2.1.100.1.19.145890",
    schedule: "Rabu, Sabtu, Minggu (12.00 – 18.00 WIB)",
    image: "/src/assets/images/doctor_maya_spdv_1793149422180.jpg",
    bio: "Mendalami protokol mutakhir laser dermatologi dan penanganan kulit sensitif rentan alergi untuk hasil glowing sehat yang tahan lama.",
  },
];

export interface BeforeAfterCase {
  id: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  duration: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  // Visual representation color gradient & notes for comparison
  badge: string;
  doctorNote: string;
}

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    category: "Acne Scar & Bopeng",
    title: "Perbaikan Tekstur Kulit Bopeng & Pori Besar",
    problem: "Bopeng jenis rolling scar mendalam akibat jerawat meradang menahun di kedua pipi.",
    solution: "3 Sesi Microneedling RF + Subsisisi Dokter + Infus DNA Salmon",
    duration: "Hasil setelah 8 Minggu",
    beforeLabel: "Sebelum (Bulan 0)",
    afterLabel: "Sesudah (Bulan 2)",
    beforeDesc: "Tekstur kulit kasar dan cekung hingga kedalaman 1.2mm, pori-pori tampak membesar dan berminyak.",
    afterDesc: "Cekungan bopeng naik 80%, tekstur kulit rata, kenyal, dan pori-pori tersamar rapi.",
    badge: "Efektivitas 85%",
    doctorNote: "Kombinasi energi RF dan DNA Salmon mempercepat pembentukan kolagen tipe III sehingga dasar scar terangkat merata.",
  },
  {
    id: "case-2",
    category: "Melasma & Flek Hitam",
    title: "Pemudaran Hiperpigmentasi & Melasma Bandel",
    problem: "Bercak kecokelatan melasma simetris di tulang pipi akibat paparan sinar UV dan hormonal.",
    solution: "4 Sesi Pico Gold Laser Rejuvenation + Serum Niacinamide Medis",
    duration: "Hasil setelah 6 Minggu",
    beforeLabel: "Sebelum (Bulan 0)",
    afterLabel: "Sesudah (Bulan 1.5)",
    beforeDesc: "Pigmen melasma gelap terkonsentrasi di area pipi kanan dan kiri, kulit tampak kusam.",
    afterDesc: "Pigmen pudar signifikan, warna kulit tampak cerah seragam, glowing natural tanpa efek putih pucat.",
    badge: "Efektivitas 90%",
    doctorNote: "Pico laser memecah deposit melanin tanpa merusak jaringan kulit sekitar, mencegah risiko rebound hyperpigmentation.",
  },
  {
    id: "case-3",
    category: "Jerawat Meradang Aktif",
    title: "Peredaan Jerawat Kistik & Kemerahan Parah",
    problem: "Jerawat papulopustular meradang di seluruh dagu dan rahang bawah disertai rasa nyeri.",
    solution: "Paket Acne Clear Solution (Injeksi + IPL Blue Light + Krim Barrier)",
    duration: "Hasil setelah 3 Minggu",
    beforeLabel: "Sebelum (Hari 1)",
    afterLabel: "Sesudah (Hari 21)",
    beforeDesc: "Banyak benjolan merah meradang aktif dan bekas merah kemerahan (PIE).",
    afterDesc: "Semua jerawat kempes total, peradangan mereda, kulit tenang dan tidak timbul jerawat baru.",
    badge: "Efektivitas 95%",
    doctorNote: "Eksisi steril dan injeksi lokal langsung mematikan infeksi bakteri dari akar folikel rambut.",
  },
  {
    id: "case-4",
    category: "Anti-Aging & Double Chin",
    title: "Lifting Kontur Wajah & Penirusan Rahang",
    problem: "Pipi mulai turun (sagging), garis senyum tampak dalam, dan ada double chin saat menunduk.",
    solution: "1 Sesi HIFU Ultra V-Lift (600 Shots) + RF Tightening",
    duration: "Hasil setelah 4 Minggu",
    beforeLabel: "Sebelum Perawatan",
    afterLabel: "Sesudah Perawatan",
    beforeDesc: "Garis rahang samar, pipi bagian bawah tampak kendor dan lipatan nasolabial tegas.",
    afterDesc: "Garis rahang (jawline) tegas terdefinisi, double chin tersamarkan, pipi terangkat kencang alami.",
    badge: "Efektivitas 88%",
    doctorNote: "Ultrasound terfokus pada lapisan SMAS menghasilkan kontraksi termal langsung dan stimulasi kolagen hingga 6 bulan ke depan.",
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  savePercent: string;
  isPopular?: boolean;
  idealFor: string;
  includedItems: string[];
  duration: string;
  waBookingMessage: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Paket Basic Fresh Glow",
    tagline: "Perawatan esensial untuk kulit bersih, bebas komedo & glowing seketika",
    price: "Rp 499.000",
    originalPrice: "Rp 750.000",
    savePercent: "Hemat 33%",
    idealFor: "Pemula yang baru pertama kali perawatan atau ingin maintenance bulanan",
    duration: "90 Menit / Sesi",
    waBookingMessage: "Halo Lumina Aesthetic, saya ingin booking Paket Basic Fresh Glow (Rp 499.000). Mohon info jadwal yang tersedia.",
    includedItems: [
      "Konsultasi Medis & Digital Skin Analyzer",
      "Hydra Deep Glow Facial Lengkap",
      "Ekstraksi Komedo Bebas Rasa Sakit",
      "Infus Serum Hyaluronic Acid Murni",
      "LED Light Therapy Penenang Kulit",
      "Free Sunscreen Mini Pack BPOM",
    ],
  },
  {
    id: "glow",
    name: "Paket Intensive Radiance Laser",
    tagline: "Kombinasi laser & facial pencerah untuk kulit mulus bebas flek",
    price: "Rp 1.190.000",
    originalPrice: "Rp 1.700.000",
    savePercent: "Hemat 30%",
    isPopular: true,
    idealFor: "Anda yang memiliki masalah flek, bekas jerawat kehitaman, & kulit kusam",
    duration: "120 Menit / Sesi",
    waBookingMessage: "Halo Lumina Aesthetic, saya ingin booking Paket Intensive Radiance Laser (Rp 1.190.000) yang paling populer. Kapan ada slot dokter?",
    includedItems: [
      "Semua benefit di Paket Basic Fresh Glow",
      "Pico Gold Laser Rejuvenation Full Face",
      "Aplikasi Anestesi Topikal Bebas Nyeri",
      "Infus Ampoule Vitamin C Ester Medis",
      "Cooling Alginate Peel-Off Mask",
      "Gratis 1 Paket Post-Laser Recovery Cream",
      "Prioritas Konsultasi Dokter Spesialis",
    ],
  },
  {
    id: "premium",
    name: "Paket Royal Youth Prestige",
    tagline: "Solusi menyeluruh pengencangan, peremajaan kolagen & glass skin",
    price: "Rp 2.450.000",
    originalPrice: "Rp 3.500.000",
    savePercent: "Hemat 30%",
    idealFor: "Perawatan eksklusif anti-aging, lifting kontur wajah & booster DNA Salmon",
    duration: "150 Menit / Sesi",
    waBookingMessage: "Halo Lumina Aesthetic, saya tertarik dengan Paket Royal Youth Prestige (Rp 2.450.000). Boleh tahu jadwal dokter spesialis yang tersedia?",
    includedItems: [
      "Semua benefit di Paket Intensive Radiance",
      "HIFU Ultra V-Lift 400 Shots (Pipi & Jawline)",
      "Microneedling RF / Infus DNA Salmon PDRN",
      "Gluta-Radiance Antioksidan Infusion Tubuh",
      "VVIP Private Treatment Suite",
      "Lengkap 3 Produk Skincare Medis Lumina",
      "Garansi Follow-up Checkup Gratis 14 Hari",
    ],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  profession: string;
  location: string;
  treatment: string;
  rating: number;
  review: string;
  resultMetric: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Nadine Safira",
    age: 28,
    profession: "Brand Manager",
    location: "Jakarta Selatan",
    treatment: "Pico Laser & Hydra Facial",
    rating: 5,
    review: "Sudah coba berbagai klinik di Jakarta, tapi cuma di Lumina flek bekas jerawat saya pudar dalam 3 sesi tanpa rasa sakit berlebih. Dokternya sangat detail ngejelasin kondisi kulit dan nggak maksa beli produk macem-macem. Ruangannya juga super wangi dan tenang!",
    resultMetric: "Flek pudar 90% dalam 2 bulan",
    verified: true,
  },
  {
    id: "testi-2",
    name: "Kezia Amanda",
    age: 34,
    profession: "Entrepreneur",
    location: "Kebayoran Baru",
    treatment: "Paket Royal Youth Prestige",
    rating: 5,
    review: "Sebelumnya pipi saya mulai kendur dan kelihatan lelah. Setelah ambil paket Royal Youth yang ada HIFU dan DNA Salmon, rahang langsung kelihatan lebih tajam dan kulit jadi kenyal glowing. Rekan kantor pada nanya rahasia perawatannya apa!",
    resultMetric: "Garis senyum tersamarkan & kulit lebih kencang",
    verified: true,
  },
  {
    id: "testi-3",
    name: "Rizky Dwi Anggoro",
    age: 26,
    profession: "Software Engineer",
    location: "Tangerang Selatan",
    treatment: "Acne Clear Total Cure",
    rating: 5,
    review: "Sebagai cowok awalnya rada ragu ke klinik kecantikan. Tapi jerawat batu di rahang bener-bener ganggu kepercayaan diri. Ternyata dokter Aditya ramah banget dan tindakannya steril. Jerawat langsung kempes dalam 2 hari dan bekas merahnya cepat hilang.",
    resultMetric: "Bebas jerawat aktif dalam 3 minggu",
    verified: true,
  },
  {
    id: "testi-4",
    name: "Devi Anggraini",
    age: 31,
    profession: "Financial Analyst",
    location: "Jakarta Pusat",
    treatment: "Microneedling RF Scar Eraser",
    rating: 5,
    review: "Bopeng akibat jerawat masa puber yang sudah 7 tahun akhirnya tersolusikan di sini. Anestesinya tebal jadi nggak sakit, pasca tindakan juga dikasih krim pemulihan yang bikin merah-merah cepat reda. Sangat puas dengan hasilnya!",
    resultMetric: "Bopeng naik signifikan & tekstur kulit halus",
    verified: true,
  },
  {
    id: "testi-5",
    name: "drg. Vania Melissa",
    age: 29,
    profession: "Dokter Gigi",
    location: "Jakarta Barat",
    treatment: "Hydra Deep Glow Facial",
    rating: 5,
    review: "Sebagai sesama tenaga medis, higienitas dan sterilisasi alat adalah poin utama buat saya. Lumina klinik benar-benar menerapkan standar aseptik rumah sakit. Komedo bersih total tanpa iritasi. Recommended!",
    resultMetric: "Kulit bersih bebas komedo & pori rapat",
    verified: true,
  },
  {
    id: "testi-6",
    name: "Tiara Wulandari",
    age: 25,
    profession: "Content Creator",
    location: "Jakarta Selatan",
    treatment: "Lumina Gluta-Radiance Infusion",
    rating: 5,
    review: "Kulit kusam karena sering syuting outdoor langsung berangsur cerah merata setelah rutin infus di Lumina. Petugas medisnya sangat terampil saat pasang infus tanpa lebam sama sekali. Booking via WhatsApp-nya juga fast response!",
    resultMetric: "Tone kulit lebih cerah alami & fresh",
    verified: true,
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "umum" | "perawatan" | "keamanan" | "biaya";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "umum",
    question: "Apakah konsultasi dokter pertama kali dikenakan biaya?",
    answer: "Tidak! Di Lumina Aesthetic Clinic, konsultasi dokter awal dan pemeriksaan 3D Digital Skin Analyzer 100% GRATIS tanpa kewajiban mengambil tindakan. Kami ingin Anda memahami kondisi kulit dengan transparan terlebih dahulu.",
  },
  {
    id: "faq-2",
    category: "keamanan",
    question: "Apakah semua produk dan peralatan di Lumina sudah bersertifikasi BPOM & aman?",
    answer: "Tentu saja. Semua serum, krim medis, dan produk skincare yang kami gunakan telah terdaftar resmi di BPOM RI. Seluruh mesin perawatan kami (Pico Laser, HIFU, RF Microneedling) bersertifikasi internasional (US FDA dan CE Eropa) serta dirawat secara berkala.",
  },
  {
    id: "faq-3",
    category: "perawatan",
    question: "Berapa lama waktu pemulihan (downtime) setelah tindakan laser atau peeling?",
    answer: "Sebagian besar perawatan kami memiliki downtime minimal. Untuk Hydra Facial tidak ada downtime sama sekali (bisa langsung pakai riasan). Untuk Pico Laser dan Peeling, kemerahan ringan hanya berlangsung 1 hingga 2 jam. Dokter kami akan selalu memberikan petunjuk perawatan pasca-tindakan serta krim penenang kulit.",
  },
  {
    id: "faq-4",
    category: "perawatan",
    question: "Apakah perawatannya terasa sakit?",
    answer: "Kenyamanan pasien adalah prioritas utama kami. Untuk tindakan seperti Laser dan Microneedling RF, kami menerapkan krim anestesi topikal premium selama 30 menit sebelum tindakan, sehingga prosedur terasa sangat nyaman dan minim rasa sakit.",
  },
  {
    id: "faq-5",
    category: "umum",
    question: "Bagaimana cara melakukan booking jadwal konsultasi?",
    answer: "Sangat mudah! Anda dapat mengisi formulir booking pada halaman ini atau langsung klik tombol WhatsApp. Customer Service kami akan membalas dalam waktu kurang dari 5 menit untuk mengonfirmasi jadwal dokter yang Anda inginkan.",
  },
  {
    id: "faq-6",
    category: "biaya",
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima pembayaran tunai, Debit, Kartu Kredit (tersedia cicilan 0% hingga 12 bulan untuk bank tertentu), QRIS (GoPay, OVO, Dana, ShopeePay), dan transfer antar bank resmi klinik.",
  },
];

/**
 * Format string pesan WhatsApp otomatis dari form booking
 */
export function buildWhatsAppBookingUrl(params: {
  nama: string;
  telepon: string;
  layanan: string;
  tanggal: string;
  sesiWaktu: string;
  catatan?: string;
}): string {
  const phone = CLINIC_CONFIG.whatsappNumber;
  const lines = [
    `Halo *${CLINIC_CONFIG.name}*, saya ingin reservasi konsultasi perawatan kulit:`,
    ``,
    `👤 *Nama Lengkap:* ${params.nama}`,
    `📱 *No. WhatsApp:* ${params.telepon}`,
    `✨ *Layanan / Paket:* ${params.layanan || "Konsultasi Dokter & Skin Check"}`,
    `📅 *Pilihan Tanggal:* ${params.tanggal || "Segera / Hari Ini"}`,
    `⏰ *Preferensi Jam:* ${params.sesiWaktu || "Fleksibel"}`,
  ];

  if (params.catatan && params.catatan.trim()) {
    lines.push(`📝 *Keluhan Kulit:* ${params.catatan.trim()}`);
  }

  lines.push(``);
  lines.push(`Mohon konfirmasi ketersediaan jadwal dokter. Terima kasih!`);

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phone}?text=${message}`;
}

export interface ClinicValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const CLINIC_VALUES: ClinicValue[] = [
  {
    id: "medical-integrity",
    title: "Integritas Medis & Ilmiah",
    description: "Semua diagnosa dan rekomendasi tindakan berdasar bukti klinis (evidence-based dermatology), bukan sekadar tren sesaat.",
    iconName: "ShieldCheck",
  },
  {
    id: "natural-results",
    title: "Hasil Cantik Alami",
    description: "Kami percaya kecantikan terbaik adalah versi optimal dari diri Anda sendiri yang segar, proporsional, dan tidak terlihat kaku.",
    iconName: "Sparkles",
  },
  {
    id: "patient-first",
    title: "Kenyamanan & Transparansi",
    description: "Komitmen tanpa hard-selling. Pasien berhak mengetahui tahapan, manfaat, risiko, dan biaya tanpa ada yang disembunyikan.",
    iconName: "HeartHandshake",
  },
  {
    id: "hospital-grade-hygiene",
    title: "Higienitas Tingkat Rumah Sakit",
    description: "Protokol sterilisasi instrumen autoklaf medis dan penggunaan disposable kit sekali pakai demi keamanan mutlak.",
    iconName: "Award",
  },
];

export interface ClinicGalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
}

export const CLINIC_GALLERY: ClinicGalleryItem[] = [
  {
    id: "gal-1",
    title: "Private Treatment Suite",
    category: "Ruang Perawatan",
    image: "/src/assets/images/clinic_interior_room_1793149420920.jpg",
    desc: "Kenyamanan maksimal dengan tempat tidur ergonomis, pencahayaan lembut, dan privasi penuh.",
  },
  {
    id: "gal-2",
    title: "Reception & Relaxation Lounge",
    category: "Area Resepsionis",
    image: "/src/assets/images/clinic_lounge_reception_1793150495935.jpg",
    desc: "Suasana ruang tunggu elegan bergaya travertine modern dengan welcome herbal drink menenangkan.",
  },
  {
    id: "gal-3",
    title: "3D Skin Diagnostic Suite",
    category: "Ruang Konsultasi Dokter",
    image: "/src/assets/images/clinic_skincare_apothecary_1793150495989.jpg",
    desc: "Ruang konsultasi privat dilengkapi alat 3D Digital Skin Analyzer beresolusi medis tinggi.",
  },
];

