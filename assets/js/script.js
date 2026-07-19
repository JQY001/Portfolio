// ============================================================
// DATA PROYEK (14 Proyek + Sertifikasi) - FORMAT SUDAH BENER
// ============================================================
const projects = [
    {
        id: 1,
        judul: "Peta Sebaran Pusat Perdagangan dan Jasa Kecamatan Arcamanik",
        kategori: "analisis",
        kategoriLabel: "Analisis Spasial",
        lokasi: "Kecamatan Arcamanik, Kota Bandung",
        tahun: "2024",
        deskripsi: "Proyek ini menyajikan sebaran kawasan perdagangan dan jasa yang terintegrasi dengan jaringan jalan di Kecamatan Arcamanik. Pemetaan dilakukan melalui proses digitasi, pengelolaan data spasial, serta penyusunan layout peta yang informatif untuk mendukung analisis tata ruang.",
        tools: "ArcMap, ArcGIS Pro",
        hasil: "Menghasilkan peta sebaran perdagangan dan jasa yang dapat dimanfaatkan sebagai pendukung evaluasi pola ruang serta analisis kawasan komersial.",
        tanggung_jawab: [
            "Melakukan digitasi objek spasial",
            "Mengelola data atribut",
            "Menyusun simbolisasi peta",
            "Membuat layout peta"
        ],
        gambar: "assets/img/kategori/analisis-spasial.png",
        galeri: [
            "assets/img/proyek/1-arcamanik/peta-1.jpg"
        ]
    },
    {
        id: 2,
        judul: "Peta Rawan Longsor Kabupaten Garut",
        kategori: "analisis",
        kategoriLabel: "Analisis Spasial",
        lokasi: "Kabupaten Garut, Jawa Barat",
        tahun: "2024",
        deskripsi: "Proyek ini merupakan analisis spasial untuk mengidentifikasi tingkat kerawanan longsor di Kabupaten Garut menggunakan pendekatan Multi-Criteria Decision Analysis (MCDA). Analisis dilakukan dengan menggabungkan beberapa parameter lingkungan melalui proses pembobotan dan overlay spasial.",
        tools: "ArcGIS Pro",
        hasil: "Menghasilkan peta kerawanan longsor yang mengelompokkan wilayah ke dalam lima tingkat risiko sebagai pendukung mitigasi bencana dan perencanaan wilayah.",
        tanggung_jawab: [
            "Mengolah data spasial dari berbagai parameter",
            "Melakukan pembobotan dan analisis overlay",
            "Mengklasifikasikan rawan longsor",
            "Menyusun layout peta"
        ],
        gambar: "assets/img/kategori/analisis-spasial.png",
        galeri: [
            "assets/img/proyek/2-garut/peta-1.jpg"
        ]
    },
    {
        id: 3,
        judul: "Peta Tutupan Lahan Kecamatan Cisarua, Kabupaten Bandung Barat",
        kategori: "penginderaan",
        kategoriLabel: "Penginderaan Jauh",
        lokasi: "Kecamatan Cisarua, Kabupaten Bandung Barat",
        tahun: "2024",
        deskripsi: "Proyek ini menghasilkan peta tutupan lahan yang menggambarkan kondisi penggunaan lahan di Kecamatan Cisarua pada skala 1:25.000. Proses pemetaan dilakukan melalui interpretasi citra satelit, digitasi visual, serta pengolahan data spasial untuk memperoleh representasi yang akurat sesuai batas administrasi wilayah.",
        tools: "ArcMap, Landsat 8, ENVI",
        hasil: "Menghasilkan peta tutupan lahan yang menampilkan klasifikasi penggunaan lahan seperti kawasan hutan, lahan terbangun, perkebunan, dan lahan basah.",
        tanggung_jawab: [
            "Geoprocessing data spasial",
            "Penyusunan layout peta"
        ],
        gambar: "assets/img/kategori/penginderaan-jauh.png",
        galeri: [
            "assets/img/proyek/3-cisarua/peta-1.jpg"
        ]
    },
    {
        id: 4,
        judul: "Peta Service Area Sarana Kesehatan Berdasarkan Jalan Cilegon",
        kategori: "analisis",
        kategoriLabel: "Analisis Spasial",
        lokasi: "Cilegon, Banten",
        tahun: "2024",
        deskripsi: "Proyek ini bertujuan untuk menganalisis jangkauan pelayanan fasilitas kesehatan di Kota Cilegon berdasarkan jaringan jalan yang sebenarnya. Analisis dilakukan menggunakan metode Network Analysis sehingga menghasilkan cakupan layanan berdasarkan jarak dan waktu tempuh aktual, bukan sekadar radius garis lurus.",
        tools: "ArcMap, Network Analyst",
        hasil: "Menghasilkan peta jangkauan pelayanan fasilitas kesehatan yang dapat dimanfaatkan sebagai pendukung evaluasi aksesibilitas dan perencanaan penyediaan layanan publik.",
        tanggung_jawab: [
            "Menyusun dan memperbaiki topologi jaringan jalan",
            "Melakukan analisis Service Area",
            "Mengolah data spasial fasilitas kesehatan",
            "Menyusun layout peta sesuai standar kartografi"
        ],
        gambar: "assets/img/kategori/analisis-spasial.png",
        galeri: [
            "assets/img/proyek/4-cilegon/peta-1.jpg"
        ]
    },
    {
        id: 5,
        judul: "WebGIS SI Panen - Sistem Informasi Pertanian",
        kategori: "webgis",
        kategoriLabel: "WebGIS",
        lokasi: "Kabupaten Cirebon, Jawa Barat",
        tahun: "2024",
        deskripsi: "SI Panen merupakan aplikasi Web GIS yang dikembangkan untuk menyajikan informasi spasial secara interaktif terkait data pertanian dan lokasi lahan. Aplikasi ini memudahkan pengguna dalam mengakses, menampilkan, dan mengeksplorasi informasi geografis melalui antarmuka berbasis web yang responsif dan mudah digunakan.",
        tools: "Leaflet, JavaScript, Python, GeoJSON",
        hasil: "Menghasilkan aplikasi Web GIS SI Panen yang mampu menyajikan informasi spasial secara interaktif sehingga mempermudah pengguna dalam mengakses dan memahami data geografis melalui platform berbasis web.",
        tanggung_jawab: [
            "Merancang dan membangun antarmuka Web GIS",
            "Mengintegrasikan data spasial ke dalam aplikasi",
            "Menampilkan layer peta beserta informasi atribut",
            "Mengembangkan fitur navigasi dan interaksi peta",
            "Melakukan pengujian serta penyempurnaan tampilan aplikasi"
        ],
        gambar: "assets/img/kategori/webgis.png",
        galeri: [
            "assets/img/proyek/5-sipanen/cover.png",
            "assets/img/proyek/5-sipanen/dashboard-1.jpg"
        ]
    },
    {
        id: 6,
        judul: "WebGIS Aset Tanah Pemerintah Daerah",
        kategori: "webgis",
        kategoriLabel: "WebGIS",
        lokasi: "Kecamatan Sumber, Kabupaten Cirebon",
        tahun: "2024",
        deskripsi: "WebGIS Aset Tanah Pemerintah Daerah merupakan aplikasi berbasis web yang dikembangkan untuk mendukung pengelolaan dan visualisasi data aset tanah milik pemerintah daerah secara digital. Aplikasi ini memudahkan pengguna dalam mengakses informasi lokasi aset, menampilkan data spasial secara interaktif, serta membantu proses inventarisasi dan monitoring aset melalui platform berbasis Web GIS.",
        tools: "QGIS, Leaflet.js, GeoJSON, JavaScript",
        hasil: "Menghasilkan aplikasi WebGIS Aset Tanah Pemerintah Daerah yang mampu menyajikan informasi spasial aset tanah secara interaktif, sehingga mempermudah proses inventarisasi, monitoring, serta pengelolaan aset pemerintah daerah secara lebih efektif dan efisien.",
        tanggung_jawab: [
            "Mengintegrasikan data spasial aset tanah ke dalam aplikasi",
            "Menampilkan informasi lokasi aset beserta atributnya",
            "Mengimplementasikan fitur interaksi peta dan pengelolaan layer"
        ],
        gambar: "assets/img/kategori/webgis.png",
        galeri: [
            "assets/img/proyek/6-aset-tanah/cover.png",
            "assets/img/proyek/6-aset-tanah/dashboard-1.jpg"
        ]
    },
    {
        id: 7,
        judul: "Pemodelan 3D Cadaster Menggunakan Foto Udara Drone",
        kategori: "3d",
        kategoriLabel: "3D Modeling",
        lokasi: "Kelurahan Sukapura, Kota Cirebon",
        tahun: "2025",
        deskripsi: "Pemodelan 3D menggunakan foto udara drone berbasis point cloud dan nDSM untuk pembuatan peta kadaster 3D yang akurat dan presisi. Proyek ini merupakan skripsi yang bertujuan untuk meningkatkan kualitas data pertanahan.",
        tools: "Drone, Point Cloud, nDSM, CloudCompare, Agisoft Metashape",
        hasil: "Model 3D bangunan dan lahan dengan tingkat akurasi tinggi untuk administrasi pertanahan.",
        isSkripsi: true,
        tanggung_jawab: [
            "Akuisisi data udara menggunakan drone",
            "Pengolahan point cloud dan nDSM",
            "Pemodelan 3D bangunan dan lahan"
        ],
        gambar: "assets/img/kategori/3d-modeling.png",
        galeri: [
            "assets/img/proyek/7-3d-cadaster/Lokasi Penelitian.png",
            "assets/img/proyek/7-3d-cadaster/alighn.png",
            "assets/img/proyek/7-3d-cadaster/kalsifikasipointcloud.png",
            "assets/img/proyek/7-3d-cadaster/DSMDTM.png",
            "assets/img/proyek/7-3d-cadaster/orto.png",
            "assets/img/proyek/7-3d-cadaster/digitasi.png",
            "assets/img/proyek/7-3d-cadaster/hasil.png"
        ],
        video: "assets/video/skripsi-3d-cadaster.mkv"
    },
    {
        id: 10,
        judul: "Survei Topografi Sempadan Sungai",
        kategori: "survey",
        kategoriLabel: "Survey",
        lokasi: "Indramayu, Jawa Barat",
        tahun: "2024",
        deskripsi: "Survei topografi sempadan sungai menggunakan GPS GNSS RTK untuk mendukung proyek normalisasi sungai. Data yang diambil meliputi titik koordinat sepanjang bibir sungai dan area sekitarnya.",
        tools: "GPS GNSS RTK, Total Station",
        hasil: "Data titik koordinat sepanjang bibir sungai untuk perencanaan normalisasi.",
        tanggung_jawab: [
            "Pengambilan data GNSS RTK",
            "Pengukuran detail sempadan sungai"
        ],
        gambar: "assets/img/kategori/survey.png",
        galeri: [
            "assets/img/proyek/10-sungai/1.png",
            "assets/img/proyek/10-sungai/2.png",
            "assets/img/proyek/10-sungai/3.png",
            "assets/img/proyek/10-sungai/4.png",
            "assets/img/proyek/10-sungai/5.png"
        ]
    },
    {
        id: 11,
        judul: "Digitasi Aset Sungai BMN (Milik Negara)",
        kategori: "pemetaan",
        kategoriLabel: "Pemetaan",
        lokasi: "Berbagai Lokasi",
        tahun: "2024",
        deskripsi: "Digitasi peta aset sungai milik negara (BMN) untuk inventarisasi dan pengelolaan aset negara. Proyek ini mendukung pengelolaan aset negara yang lebih transparan dan terintegrasi.",
        tools: "ArcGIS Pro, QGIS, AutoCAD",
        hasil: "Peta digitasi aset sungai BMN untuk inventarisasi negara.",
        tanggung_jawab: [
            "Digitasi peta aset sungai",
            "Verifikasi data spasial",
            "Penyusunan peta inventarisasi"
        ],
        gambar: "assets/img/kategori/pemetaan.png",
        galeri: [
            "assets/img/proyek/11-bmn/cover.jpg",
            "assets/img/proyek/11-bmn/1.png",
            "assets/img/proyek/11-bmn/2.png",
            "assets/img/proyek/11-bmn/3.png",
            "assets/img/proyek/11-bmn/4.png"
        ]
    },
    {
        id: 12,
        judul: "Pengukuran Bidang Tanah",
        kategori: "survey",
        kategoriLabel: "Survey",
        lokasi: "Berbagai Lokasi",
        tahun: "2023-2024",
        deskripsi: "Pengukuran bidang tanah untuk keperluan sertifikasi dan administrasi pertanahan di BPN. Kegiatan ini mencakup pengambilan titik batas, perhitungan luasan, dan pembuatan peta bidang tanah.",
        tools: "GPS/GNSS, Total Station, AutoCAD",
        hasil: "Peta bidang tanah dan data koordinat untuk sertifikasi.",
        tanggung_jawab: [
            "Pengukuran titik batas tanah",
            "Perhitungan luasan bidang",
            "Pembuatan peta bidang tanah"
        ],
        gambar: "assets/img/kategori/survey.png",
        galeri: [
            "assets/img/proyek/12-bidang-tanah/2.jpg",
            "assets/img/proyek/12-bidang-tanah/3.jpg",
            "assets/img/proyek/12-bidang-tanah/4.jpg"
        ]
    },
    {
        id: 13,
        judul: "Digitalisasi Sertifikat Tanah",
        kategori: "pemetaan",
        kategoriLabel: "Pemetaan",
        lokasi: "Berbagai Lokasi",
        tahun: "2024",
        deskripsi: "Konversi sertifikat tanah fisik menjadi elektronik dalam program digitalisasi di BPN. Proyek ini mendukung modernisasi administrasi pertanahan dan kemudahan akses data.",
        tools: "Sistem Informasi Pertanahan BPN, ArcGIS, AutoCAD",
        hasil: "Sertifikat tanah elektronik terintegrasi.",
        tanggung_jawab: [
            "Digitalisasi sertifikat fisik",
            "Verifikasi data pertanahan",
            "Integrasi data ke sistem BPN"
        ],
        gambar: "assets/img/kategori/pemetaan.png",
        galeri: [
            "assets/img/proyek/13-sertifikat/4.jpg",
            "assets/img/proyek/13-sertifikat/1.jpg",
            "assets/img/proyek/13-sertifikat/2.jpg",
            "assets/img/proyek/13-sertifikat/3.jpg",
            "assets/img/proyek/13-sertifikat/5.jpg",
            "assets/img/proyek/13-sertifikat/6.jpg",
            "assets/img/proyek/13-sertifikat/7.jpg",
            "assets/img/proyek/13-sertifikat/8.jpg"
        ]
    },
    {
        id: 14,
        judul: "Sertifikasi Pilot Drone - APDI",
        kategori: "sertifikasi",
        kategoriLabel: "Sertifikasi",
        lokasi: "Indonesia",
        tahun: "2025",
        deskripsi: "Meraih sertifikasi sebagai Pilot Drone dari Asosiasi Pilot Drone Indonesia (APDI). Sertifikasi ini membuktikan kompetensi dalam mengoperasikan pesawat tanpa awak (drone) secara profesional, aman, dan sesuai dengan regulasi yang berlaku di Indonesia.",
        tools: "Drone, APDI, Regulasi Penerbangan",
        hasil: "Sertifikat Pilot Drone APDI yang menjadi bukti kompetensi dalam pengoperasian drone untuk keperluan pemetaan, survey, dan berbagai aplikasi geospasial.",
        isSertifikasi: true,
        tanggung_jawab: [
            "Mengikuti ujian teori dan praktik APDI",
            "Memahami regulasi penerbangan drone di Indonesia",
            "Mengoperasikan drone untuk berbagai keperluan pemetaan"
        ],
        gambar: "assets/img/kategori/sertifikasi.png",
        galeri: [
            "assets/img/proyek/14-sertifikasi-drone/3.png",
            "assets/img/proyek/14-sertifikasi-drone/1.png",
            "assets/img/proyek/14-sertifikasi-drone/2.png"
        ],
        qrCode: "assets/img/qr-code.png"
    }
];

// ============================================================
// FUNGSI FILTER + URL
// ============================================================
function getFilterFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('filter') || 'all';
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = projects.filter(p => filter === 'all' || p.kategori === filter);

    const url = new URL(window.location);
    if (filter === 'all') {
        url.searchParams.delete('filter');
    } else {
        url.searchParams.set('filter', filter);
    }
    window.history.replaceState({}, '', url);

    filtered.forEach(p => {
        const link = document.createElement('a');
        link.className = 'portfolio-item';
        link.id = `project-${p.id}`;
        link.href = `detail.html?id=${p.id}&filter=${filter}`;

        let badgeClass = 'category-badge';
        if (p.isSertifikasi) badgeClass += ' sertifikasi';

        link.innerHTML = `
            <div class="thumb">
                <img src="${p.gambar}" alt="${p.judul}">
                <span class="${badgeClass}">${p.isSertifikasi ? '🏆 Sertifikasi' : p.isSkripsi ? '⭐ Skripsi' : p.kategoriLabel}</span>
            </div>
            <div class="body">
                <h4>${p.judul}</h4>
                <p>${p.deskripsi.substring(0, 120)}${p.deskripsi.length > 120 ? '...' : ''}</p>
                <div class="tags">
                    ${p.tools.split(', ').slice(0, 3).map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(link);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const scrollToId = urlParams.get('scroll');
    if (scrollToId) {
        setTimeout(() => {
            const target = document.getElementById(`project-${scrollToId}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const cleanUrl = new URL(window.location);
                cleanUrl.searchParams.delete('scroll');
                window.history.replaceState({}, '', cleanUrl);
            }
        }, 300);
    }
}

// ============================================================
// NAVIGATION
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

if (navLinks) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
}

// ============================================================
// ACTIVE NAV LINK
// ============================================================
const sections = document.querySelectorAll('section[id]');
if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================================
// PORTFOLIO FILTER
// ============================================================
const filterBtns = document.querySelectorAll('.filter-btn');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });
}

// ============================================================
// PROJECT MAP (Leaflet)
// ============================================================
function loadLeaflet() {
    if (typeof L !== 'undefined') {
        initProjectMap();
        return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = initProjectMap;
    document.body.appendChild(script);
}

function initProjectMap() {
    const mapContainer = document.getElementById('project-map');
    if (!mapContainer) return;

    const projectMap = L.map('project-map', {
        center: [-6.5, 107.0],
        zoom: 7,
        zoomControl: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 19,
    }).addTo(projectMap);

    const projectLocations = [
        { name: 'Kecamatan Arcamanik, Bandung', lat: -6.9, lng: 107.65, type: 'Analisis Spasial' },
        { name: 'Kabupaten Garut', lat: -7.2, lng: 107.9, type: 'Analisis Spasial' },
        { name: 'Kecamatan Cisarua, Bandung Barat', lat: -6.85, lng: 107.55, type: 'Penginderaan Jauh' },
        { name: 'Cilegon, Banten', lat: -6.0, lng: 106.0, type: 'Analisis Spasial' },
        { name: 'Kabupaten Cirebon', lat: -6.7, lng: 108.55, type: 'WebGIS' },
        { name: 'Kecamatan Sumber, Cirebon', lat: -6.75, lng: 108.48, type: 'WebGIS' },
        { name: 'Kelurahan Sukapura, Cirebon', lat: -6.7, lng: 108.57, type: '3D Modeling' },
        { name: 'Desa Cipada', lat: -6.8, lng: 107.6, type: 'Pemetaan' },
        { name: 'Indramayu', lat: -6.33, lng: 108.32, type: 'Survey' },
    ];

    const icon = L.divIcon({
        html: '<i class="fas fa-map-pin" style="color:#60a5fa;font-size:22px;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5));"></i>',
        iconSize: [22, 22],
        iconAnchor: [11, 22],
        className: '',
    });

    projectLocations.forEach(p => {
        L.marker([p.lat, p.lng], { icon })
            .addTo(projectMap)
            .bindPopup(`
                <div style="font-family:Inter,sans-serif;padding:4px 0;color:#f1f5f9;">
                    <strong style="font-size:0.95rem;">${p.name}</strong>
                    <br>
                    <span style="font-size:0.8rem;color:#94a3b8;">${p.type}</span>
                </div>
            `);
    });

    setTimeout(() => {
        projectMap.invalidateSize();
    }, 300);

    window.addEventListener('resize', () => {
        projectMap.invalidateSize();
    });
}

// ============================================================
// DETAIL PAGE FUNCTIONS
// ============================================================
let currentIndex = 0;
let currentGallery = [];

function renderDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const filter = urlParams.get('filter') || 'all';

    const project = projects.find(p => p.id === id);

    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.href = `index.html?filter=${filter}&scroll=${id}`;
    }

    const container = document.getElementById('detailContent');
    if (!container) return;

    if (!project) {
        container.innerHTML = `
            <div class="not-found">
                <h2>⚠️ Proyek Tidak Ditemukan</h2>
                <p>Kembali ke <a href="index.html#portfolio">halaman utama</a>.</p>
            </div>
        `;
        return;
    }

    currentGallery = project.galeri || [project.gambar];
    currentIndex = 0;

    let thumbsHtml = '';
    const galeri = project.galeri || [project.gambar];
    galeri.forEach((img, idx) => {
        thumbsHtml += `
            <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${img}" alt="Thumbnail ${idx + 1}">
            </div>
        `;
    });

    const showNav = galeri.length > 1;
    const navHtml = showNav ? `
        <button class="gallery-nav prev" id="galleryPrev"><i class="fas fa-chevron-left"></i></button>
        <button class="gallery-nav next" id="galleryNext"><i class="fas fa-chevron-right"></i></button>
        <div class="gallery-counter">1 / ${galeri.length}</div>
    ` : '';

    let tanggungJawabHtml = '';
    if (project.tanggung_jawab && project.tanggung_jawab.length > 0) {
        tanggungJawabHtml = `
            <div class="detail-responsibility">
                <h3>Tanggung Jawab</h3>
                <ul>
                    ${project.tanggung_jawab.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    let badgeExtra = '';
    if (project.isSertifikasi) {
        badgeExtra = '<span><i class="fas fa-certificate" style="color:#fbbf24;"></i> <span class="badge badge-sertifikasi">🏆 Sertifikasi</span></span>';
    } else if (project.isSkripsi) {
        badgeExtra = '<span><i class="fas fa-star" style="color:#fbbf24;"></i> <span class="badge badge-skripsi">⭐ Skripsi</span></span>';
    }

// QR Code
let qrHtml = '';
if (project.qrCode) {
    qrHtml = `
        <div style="display: flex; justify-content: center; width: 100%; margin: 32px 0 24px;">
            <div style="text-align: center; background: var(--bg-card); padding: 24px; border-radius: 12px; border: 1px solid var(--border); max-width: 400px; width: 100%;">
                <h3 style="font-size: 1.1rem; margin-bottom: 16px; color: var(--text-primary);"> Verifikasi Sertifikat</h3>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <img src="${project.qrCode}" alt="QR Code Sertifikasi" style="width: 180px; height: 180px; object-fit: contain; border-radius: 8px; background: white; padding: 8px; display: block;">
                    <p style="color: var(--text-secondary); font-size: 0.9rem; text-align: center;">Scan QR Code untuk verifikasi sertifikat</p>
                </div>
            </div>
        </div>
    `;
}

    let videoHtml = '';
if (project.video) {
    const isYouTube = project.video.includes('youtube.com') || project.video.includes('youtu.be');
    if (isYouTube) {
        videoHtml = `
            <div class="detail-video">
                <h3>🎬 Video Demonstrasi</h3>
                <div class="video-wrapper" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;">
                    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="${project.video}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        `;
    } else {
        videoHtml = `
            <div class="detail-video">
                <h3>🎬 Video Demonstrasi</h3>
                <div class="video-wrapper">
                    <video controls width="100%" style="border-radius:12px;">
                        <source src="${project.video}" type="video/mp4">
                        Browser Anda tidak mendukung video.
                    </video>
                </div>
            </div>
        `;
    }
}
    
    container.innerHTML = `
        <div class="gallery-container" id="galleryContainer">
            <div class="gallery-main" id="galleryMain">
                <img src="${galeri[0]}" alt="${project.judul}" id="mainImage">
                ${navHtml}
            </div>
            <div class="gallery-thumbs" id="galleryThumbs">
                ${thumbsHtml}
            </div>
        </div>
        <div class="detail-content">
            <h1>${project.judul}</h1>
            <div class="detail-meta">
                <span><i class="fas fa-map-pin"></i> ${project.lokasi}</span>
                <span><i class="fas fa-calendar-alt"></i> ${project.tahun}</span>
                <span><i class="fas fa-tag"></i> <span class="badge">${project.kategoriLabel || project.kategori}</span></span>
                ${badgeExtra}
            </div>
            <div class="detail-description">
                ${project.deskripsi}
            </div>
            ${tanggungJawabHtml}
            <div class="detail-tools">
                <h3>Tools yang Digunakan</h3>
                <div class="tags">
                    ${project.tools.split(', ').map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
            <div class="detail-hasil">
                <h3> Hasil</h3>
                <p>${project.hasil}</p>
                ${videoHtml}
                ${qrHtml}
            </div>
        </div>
    `;

    setupGallery(galeri);
}

function setupGallery(galeri) {
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    const counter = document.querySelector('.gallery-counter');
    const galleryMain = document.getElementById('galleryMain');

    if (!mainImage) return;

    const updateGallery = (index) => {
        currentIndex = index;
        mainImage.src = galeri[index];
        mainImage.alt = `Gambar ${index + 1}`;

        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });

        if (counter) {
            counter.textContent = `${index + 1} / ${galeri.length}`;
        }

        if (prevBtn) prevBtn.style.display = index === 0 ? 'none' : 'flex';
        if (nextBtn) nextBtn.style.display = index === galeri.length - 1 ? 'none' : 'flex';
    };

    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            updateGallery(index);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentIndex > 0) updateGallery(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentIndex < galeri.length - 1) updateGallery(currentIndex + 1);
        });
    }

    if (galleryMain) {
        galleryMain.addEventListener('click', () => {
            openLightbox(currentIndex);
        });
    }

    updateGallery(0);
}

// ============================================================
// LIGHTBOX FUNCTIONS
// ============================================================
function openLightbox(index) {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('modalImage');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalCounter = document.getElementById('modalCounter');

    if (!modal || !modalImg) return;

    const galeri = currentGallery;
    if (!galeri || galeri.length === 0) return;

    let current = index;

    const updateModal = (idx) => {
        current = idx;
        modalImg.src = galeri[idx];
        modalImg.alt = `Gambar ${idx + 1}`;

        if (modalCounter) {
            modalCounter.textContent = `${idx + 1} / ${galeri.length}`;
        }

        if (modalPrev) {
            modalPrev.style.display = idx === 0 ? 'none' : 'flex';
        }
        if (modalNext) {
            modalNext.style.display = idx === galeri.length - 1 ? 'none' : 'flex';
        }
    };

    const prevHandler = () => {
        if (current > 0) updateModal(current - 1);
    };
    const nextHandler = () => {
        if (current < galeri.length - 1) updateModal(current + 1);
    };

    const newPrev = modalPrev.cloneNode(true);
    const newNext = modalNext.cloneNode(true);
    if (modalPrev.parentNode) modalPrev.parentNode.replaceChild(newPrev, modalPrev);
    if (modalNext.parentNode) modalNext.parentNode.replaceChild(newNext, modalNext);

    newPrev.addEventListener('click', prevHandler);
    newNext.addEventListener('click', nextHandler);

    const keyHandler = (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') prevHandler();
        if (e.key === 'ArrowRight') nextHandler();
        if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', keyHandler);

    const closeBtn = document.getElementById('modalClose');
    const closeHandler = () => closeLightbox();
    if (closeBtn) {
        closeBtn.addEventListener('click', closeHandler);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
    });

    modal._cleanup = () => {
        document.removeEventListener('keydown', keyHandler);
        if (closeBtn) {
            closeBtn.removeEventListener('click', closeHandler);
        }
    };

    updateModal(index);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightbox');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (modal._cleanup) modal._cleanup();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const isDetailPage = document.getElementById('detailContent') !== null;

    if (isDetailPage) {
        renderDetail();
    } else {
        const filter = getFilterFromURL();
        if (filterBtns.length > 0) {
            filterBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === filter);
            });
        }
        renderProjects(filter);
        loadLeaflet();
    }
});