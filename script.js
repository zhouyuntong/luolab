/**
 * 罗伟教授课题组网站交互脚本
 * Shenzhen University of Advanced Technology
 * School of Materials — Prof. Luo Wei Group
 */

// ═══════════════════════════════════════════════════
// 论文数据
// ═══════════════════════════════════════════════════
const publicationsData = [
  {
    "id": 1,
    "titleZh": "Quantum criticality at cryogenic melting of polar bubble lattices",
    "titleEn": "Quantum criticality at cryogenic melting of polar bubble lattices",
    "authors": "W. Luo+, A. Akbarzadeh, Y. Nahas, S. Prokhorenko*, L. Bellaiche*",
    "journal": "Nature Communications",
    "year": 2023,
    "doi": "10.1038/s41467-023-43598-0",
    "tags": [
      "ferroic"
    ]
  },
  {
    "id": 2,
    "titleZh": "Prediction of silicon-based layered structures for optoelectronic applications",
    "titleEn": "Prediction of silicon-based layered structures for optoelectronic applications",
    "authors": "W. Luo+, Y. Ma, X. Gong, H. Xiang*",
    "journal": "Journal of the American Chemical Society",
    "year": 2014,
    "doi": "10.1021/ja507147p",
    "tags": [
      "lowdimensional"
    ]
  },
  {
    "id": 3,
    "titleZh": "Two-dimensional phosphorus oxides as energy and information materials",
    "titleEn": "Two-dimensional phosphorus oxides as energy and information materials",
    "authors": "W. Luo+, H. Xiang*",
    "journal": "Angewandte Chemie International Edition",
    "year": 2016,
    "doi": "10.1002/anie.201602295",
    "tags": [
      "lowdimensional",
      "ferroic"
    ]
  },
  {
    "id": 4,
    "titleZh": "Room temperature quantum spin Hall insulators with a buckled square lattice",
    "titleEn": "Room temperature quantum spin Hall insulators with a buckled square lattice",
    "authors": "W. Luo+, H. Xiang*",
    "journal": "Nano Letters",
    "year": 2015,
    "doi": "10.1021/acs.nanolett.5b00418",
    "tags": [
      "topological"
    ]
  },
  {
    "id": 5,
    "titleZh": "Strain-induced gyrotropic effects in ferroelectric BaTiS3",
    "titleEn": "Strain-induced gyrotropic effects in ferroelectric BaTiS3",
    "authors": "W. Luo*, A. Zabalo, G. Ren, G.-Y. Jung, M. Stengel, R. Mishra, J. Ravichandran, L. Bellaiche",
    "journal": "Physical Review B",
    "year": 2026,
    "doi": "10.1103/zk45-6lb2",
    "tags": [
      "ferroic",
      "fieldcontrol"
    ]
  },
  {
    "id": 6,
    "titleZh": "Nonlinear phonon Hall effects in ferroelectrics: its existence and non-volatile electrical control",
    "titleEn": "Nonlinear phonon Hall effects in ferroelectrics: its existence and non-volatile electrical control",
    "authors": "W. Luo+, J. Ji+, P. Che, Y. Xu, L. Zhang*, H. Xiang*, L. Bellaiche",
    "journal": "Physical Review B",
    "year": 2023,
    "doi": "10.1103/PhysRevB.107.L241107",
    "tags": [
      "ferroic",
      "fieldcontrol"
    ]
  },
  {
    "id": 7,
    "titleZh": "Topological interfacial states at phase boundaries in two-dimensional ferroelectric bismuth",
    "titleEn": "Topological interfacial states at phase boundaries in two-dimensional ferroelectric bismuth",
    "authors": "W. Luo+, Y. Zhong+, H. Yu, M. Xie, Y. Chen, H. Xiang*, L. Bellaiche",
    "journal": "Physical Review B",
    "year": 2025,
    "doi": "10.1103/PhysRevB.111.075407",
    "tags": [
      "ferroic",
      "topological"
    ]
  },
  {
    "id": 8,
    "titleZh": "Two-dimensional hyperferroelectric metals: A different route to ferromagnetic-ferroelectric multiferroics",
    "titleEn": "Two-dimensional hyperferroelectric metals: A different route to ferromagnetic-ferroelectric multiferroics",
    "authors": "W. Luo+, K. Xu, H. Xiang*",
    "journal": "Physical Review B",
    "year": 2017,
    "doi": "10.1103/PhysRevB.96.235415",
    "tags": [
      "ferroic"
    ]
  },
  {
    "id": 9,
    "titleZh": "Two-dimensional topological semimetals protected by symmorphic symmetries",
    "titleEn": "Two-dimensional topological semimetals protected by symmorphic symmetries",
    "authors": "W. Luo+, J. Ji+, J. Lu, X. Zhang, H. Xiang*",
    "journal": "Physical Review B",
    "year": 2020,
    "doi": "10.1103/PhysRevB.101.195111",
    "tags": [
      "topological"
    ]
  },
  {
    "id": 10,
    "titleZh": "Cobalt-based magnetic Weyl semimetals with high-thermodynamic stabilities",
    "titleEn": "Cobalt-based magnetic Weyl semimetals with high-thermodynamic stabilities",
    "authors": "W. Luo+, Y. Nakamura, J. Park, M. Yoon*",
    "journal": "npj Computational Materials",
    "year": 2021,
    "doi": "10.1038/s41524-020-00461-w",
    "tags": [
      "topological"
    ]
  },
  {
    "id": 11,
    "titleZh": "Unusual ferroelectricity in two-dimensional perovskite oxide thin films",
    "titleEn": "Unusual ferroelectricity in two-dimensional perovskite oxide thin films",
    "authors": "J. Lu+, W. Luo+, J. Feng, H. Xiang*",
    "journal": "Nano Letters",
    "year": 2018,
    "doi": "10.1021/acs.nanolett.7b04797",
    "tags": [
      "ferroic"
    ]
  },
  {
    "id": 12,
    "titleZh": "Recent Advances in Unconventional Ferroelectrics and Multiferroics",
    "titleEn": "Recent Advances in Unconventional Ferroelectrics and Multiferroics",
    "authors": "H. Yu+, J. Ji, W. Luo*, X. Gong, H. Xiang*",
    "journal": "Advanced Materials",
    "year": 2025,
    "doi": "10.1002/adma.202507070",
    "tags": [
      "ferroic"
    ]
  }
];

// ═══════════════════════════════════════════════════
// 团队成员数据
// ═══════════════════════════════════════════════════
const teamData = [];

// ═══════════════════════════════════════════════════
// DOM 元素
// ═══════════════════════════════════════════════════
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const langDropdown = document.getElementById('langDropdown');
const langTrigger = document.getElementById('langTrigger');
const langMenu = document.getElementById('langMenu');
const langOptions = document.querySelectorAll('.lang-option');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const publicationList = document.getElementById('publicationList');
const resultCount = document.getElementById('resultCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMore = document.getElementById('loadMore');
const teamGrid = document.getElementById('teamGrid');

// ═══════════════════════════════════════════════════
// 状态
// ═══════════════════════════════════════════════════
const isPreviewPage = publicationList && publicationList.dataset.preview === 'true';
const defaultVisibleCount = isPreviewPage ? 3 : publicationsData.length;

let currentLang = 'zh';
try { currentLang = localStorage.getItem('luo-original-language') === 'en' ? 'en' : 'zh'; } catch {}
let currentFilter = 'all';
let currentSearch = '';
let visibleCount = defaultVisibleCount;
let filteredPublications = [...publicationsData];

// ═══════════════════════════════════════════════════
// URL 状态同步
// ═══════════════════════════════════════════════════
function updateURL() {
    const params = new URLSearchParams(window.location.search);
    if (currentSearch) {
        params.set('q', currentSearch);
    } else {
        params.delete('q');
    }

    if (currentFilter && currentFilter !== 'all') {
        params.set('filter', currentFilter);
    } else {
        params.delete('filter');
    }

    const newSearch = params.toString();
    const newUrl = newSearch
        ? `${window.location.pathname}?${newSearch}`
        : window.location.pathname;
    if (!isPreviewPage) { try { window.history.replaceState({}, '', newUrl + window.location.hash); } catch {} }
}

function initFromURL() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const requestedFilter = params.get('filter');
    const filter = ['all','ferroic','topological','fieldcontrol','lowdimensional'].includes(requestedFilter) ? requestedFilter : 'all';

    if (q && searchInput) {
        currentSearch = q;
        searchInput.value = q;
        searchClear.classList.add('visible');
    }

    if (filter !== 'all') {
        currentFilter = filter;
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
    }

    filterPublications();
}

// ═══════════════════════════════════════════════════
// 初始化
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initScrollEffects();
    initAOS();
    initFromURL();
    animateNumbers();
    initSmoothScroll();
    renderTeam();
    updateLanguage();
});

// ═══════════════════════════════════════════════════
// 粒子网络背景动画（晶格/计算网络主题）
// ═══════════════════════════════════════════════════
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    function resizeCanvas() {
        const oldW = canvas.width;
        const oldH = canvas.height;
        const newW = canvas.clientWidth;
        const newH = canvas.clientHeight;
        canvas.width = newW;
        canvas.height = newH;
        // 随画布尺寸等比缩放已有粒子坐标，使其平铺满新区域
        // （避免拉宽窗口后右侧出现大片空白）
        if (particles.length && oldW && oldH) {
            const scaleX = newW / oldW;
            const scaleY = newH / oldH;
            particles.forEach(p => {
                p.x *= scaleX;
                p.y *= scaleY;
            });
        }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 1;
            this.speedX = (Math.random() - 0.5) * 0.25;
            this.speedY = (Math.random() - 0.5) * 0.25;
            this.baseOpacity = Math.random() * 0.2 + 0.4;
            this.opacity = this.baseOpacity;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = dx * dx + dy * dy;

            if (distance < 40000) {
                this.opacity = Math.min(0.9, this.opacity + 0.03);
            } else {
                this.opacity = Math.max(this.baseOpacity, this.opacity - 0.015);
            }
        }

        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#73207c';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particleCount = window.matchMedia('(max-width: 768px)').matches ? 40 : 100;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    document.addEventListener('mousemove', (e) => {
        const heroRect = canvas.getBoundingClientRect();
        const inHero = e.clientX >= heroRect.left &&
                       e.clientX <= heroRect.right &&
                       e.clientY >= heroRect.top &&
                       e.clientY <= heroRect.bottom;

        if (inHero) {
            mouse.x = e.clientX - heroRect.left;
            mouse.y = e.clientY - heroRect.top;
        } else {
            mouse.x = -1000;
            mouse.y = -1000;
        }
    });

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 140) {
                    const opacity = (1 - distance / 140) * 0.18;
                    ctx.globalAlpha = opacity;
                    ctx.strokeStyle = '#73207c';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {
                const opacity = (1 - distance / 180) * 0.35;
                ctx.globalAlpha = opacity;
                ctx.strokeStyle = '#73207c';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }

    let animationId = 0;
    let heroVisible = true;
    function animate() {
        if (document.hidden || !heroVisible) { animationId = 0; return; }
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawConnections();

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }
    const resume = () => { if (!animationId && heroVisible && !document.hidden) animate(); };
    new IntersectionObserver(entries => { heroVisible = entries[0].isIntersecting; resume(); }).observe(canvas);
    document.addEventListener("visibilitychange", resume);
    animate();
}

// ═══════════════════════════════════════════════════
// 语言切换
// ═══════════════════════════════════════════════════
function updateLanguage() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    const english = currentLang === 'en';
    const pageTitles = { index: ['罗伟课题组 | 深圳理工大学', 'Luo Wei Group | SUAT'], publications: ['研究成果 - 罗伟课题组', 'Publications - Luo Wei Group'], members: ['课题组成员 - 罗伟课题组', 'People - Luo Wei Group'] };
    document.title = (pageTitles[document.body.dataset.page] || pageTitles.index)[english ? 1 : 0];
    const menuOpen = navLinks.classList.contains('active');
    mobileToggle.setAttribute('aria-label', english ? (menuOpen ? 'Close menu' : 'Open menu') : (menuOpen ? '关闭菜单' : '打开菜单'));
    if (searchClear) searchClear.setAttribute('aria-label', english ? 'Clear search' : '清除搜索');


    // 更新所有带 data-zh/data-en 的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.textContent = text;
    });

    // 更新 placeholder
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        el.placeholder = currentLang === 'zh'
            ? el.getAttribute('data-zh-placeholder')
            : el.getAttribute('data-en-placeholder');
    });

    // 更新下拉菜单选中状态
    langOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });

    // 重新渲染论文列表与团队成员（标题需要切换语言）
    renderPublications();
    renderTeam();
    renderMemberDirectory();
}

function toggleLangMenu() {
    const isOpen = langDropdown.classList.toggle('open');
    langTrigger.setAttribute('aria-expanded', isOpen);
}

function closeLangMenu() {
    langDropdown.classList.remove('open');
    langTrigger.setAttribute('aria-expanded', 'false');
}

if (langTrigger) {
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLangMenu();
    });
}

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentLang = option.dataset.lang;
        try { localStorage.setItem('luo-original-language', currentLang); } catch {}
        updateLanguage();
        closeLangMenu();
    });
});

// 点击页面其他地方关闭语言菜单
document.addEventListener('click', (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) {
        closeLangMenu();
    }
});

// ═══════════════════════════════════════════════════
// 团队成员渲染
// ═══════════════════════════════════════════════════
function renderTeam() {
    if (!teamGrid) return;

    teamGrid.innerHTML = teamData.map((member, index) => {
        const name = currentLang === 'zh' ? member.nameZh : member.nameEn;
        const role = currentLang === 'zh' ? member.roleZh : member.roleEn;
        const desc = currentLang === 'zh' ? member.descZh : member.descEn;
        const leaderClass = member.leader ? 'leader' : '';
        const avatar = member.avatarImg
            ? `<img src="${member.avatarImg}" alt="${name}" class="member-avatar-img" width="100" height="100" loading="lazy" />`
            : member.avatarText
                ? `<span class="member-avatar-text">${member.avatarText}</span>`
                : `<span class="member-avatar-text" aria-hidden="true">LW</span>`;

        return `
            <article class="team-member ${leaderClass}" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="member-avatar">${avatar}</div>
                <div class="member-info">
                    <h3>${name}</h3>
                    <p class="member-role">${role}</p>
                    <p class="member-desc">${desc}</p>
                </div>
            </article>
        `;
    }).join('');

    refreshAOS();
}

// ═══════════════════════════════════════════════════
// 论文检索功能
// ═══════════════════════════════════════════════════
function filterPublications() {
    const query = currentSearch.toLowerCase().trim();

    filteredPublications = [...publicationsData].sort((a,b) => b.year - a.year || b.id - a.id).filter(pub => {
        // 分类筛选
        if (currentFilter !== 'all' && !pub.tags.includes(currentFilter)) {
            return false;
        }

        // 关键词搜索
        if (!query) return true;

        const title = currentLang === 'zh' ? pub.titleZh : pub.titleEn;
        const searchText = `${title} ${pub.authors} ${pub.journal} ${pub.year} ${pub.doi}`.toLowerCase();
        return searchText.includes(query);
    });

    visibleCount = defaultVisibleCount;
    updateURL();
    renderPublications();
}

function renderPublications() {
    if (!publicationList) return;
    filterBtns.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.filter === currentFilter)));

    const total = filteredPublications.length;
    if (resultCount) {
        resultCount.textContent = total;
    }

    if (total === 0) {
        publicationList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></div>
                <p>${currentLang === 'zh' ? '未找到相关成果，请尝试其他关键词' : 'No results found. Please try different keywords.'}</p>
            </div>
        `;
        if (loadMore) loadMore.classList.add('hidden');
        return;
    }

    const visible = filteredPublications.slice(0, visibleCount);

    publicationList.innerHTML = visible.map((pub, index) => {
        const title = currentLang === 'zh' ? pub.titleZh : pub.titleEn;
        const tagsHtml = pub.tags.map(tag => {
            const tagNames = {
                ferroic: { zh: '铁电多铁', en: 'Ferroic' },
                topological: { zh: '拓扑电子态', en: 'Topological' },
                fieldcontrol: { zh: '外场调控', en: 'Field Control' },
                lowdimensional: { zh: '低维材料', en: 'Low-dimensional' }
            };
            const tagName = tagNames[tag] ? tagNames[tag][currentLang] : tag;
            return `<span class="pub-tag">${tagName}</span>`;
        }).join('');

        return `
            <article class="publication-item" data-doi="${pub.doi}" data-aos="fade-up" data-aos-delay="${index % 3 * 100}">
                <div class="pub-year">${pub.year}</div>
                <div class="pub-content">
                    <h3 class="pub-title"><a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
                    <div class="pub-meta">
                        <span>${pub.authors}</span>
                        <span>${pub.journal}</span>
                        <span>${pub.year}</span>
                        <span>DOI: ${pub.doi}</span>
                    </div>
                    <div class="pub-tags">${tagsHtml}</div>
                </div>
                <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" class="pub-link" aria-label="查看论文">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </a>
            </article>
        `;
    }).join('');

    // 控制加载更多按钮
    if (loadMore) {
        if (visibleCount >= total) {
            loadMore.classList.add('hidden');
        } else {
            loadMore.classList.remove('hidden');
        }
    }

    // 重新触发 AOS
    refreshAOS();
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        searchClear.classList.toggle('visible', currentSearch.length > 0);
        filterPublications();
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        searchClear.classList.remove('visible');
        filterPublications();
        searchInput.focus();
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterPublications();
    });
});

if (loadMore) {
    loadMore.addEventListener('click', () => {
        visibleCount += 6;
        renderPublications();
    });
}

// 点击整张论文卡片跳转到 DOI（点击右上角箭头 .pub-link 时不触发，避免重复打开）
if (publicationList) {
    publicationList.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const item = e.target.closest('.publication-item');
        if (item && item.dataset.doi) {
            window.open('https://doi.org/' + item.dataset.doi, '_blank', 'noopener');
        }
    });
}

// ═══════════════════════════════════════════════════
// 导航栏滚动效果
// ═══════════════════════════════════════════════════
function initScrollEffects() {
    const page = document.body.dataset.page || 'index';
    const navItems = [...document.querySelectorAll('.nav-item')];
    const setCurrent = (href, type) => navItems.forEach(item => {
        const active = item.getAttribute('href') === href;
        item.classList.toggle('active', active);
        if (active) item.setAttribute('aria-current', type);
        else item.removeAttribute('aria-current');
    });
    const sections = [...document.querySelectorAll('main > section[id]')];
    function updateNavigation() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        if (page !== 'index') { setCurrent(page + '.html', 'page'); return; }
        let current = 'home';
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= navbar.offsetHeight + 80) current = section.id;
        }
        const destination = current === 'representative-publications' ? 'publications.html'
            : current === 'team' ? 'members.html' : '#' + current;
        setCurrent(destination, 'location');
    }
    let pending = false;
    window.addEventListener('scroll', () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => { updateNavigation(); pending = false; });
    }, { passive: true });
    window.addEventListener('resize', updateNavigation);
    updateNavigation();
}

// ═══════════════════════════════════════════════════
// 移动端菜单
// ═══════════════════════════════════════════════════
function setMobileMenu(open) {
    mobileToggle.classList.toggle('active', open);
    navLinks.classList.toggle('active', open);
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', currentLang === 'zh'
        ? (open ? '关闭菜单' : '打开菜单') : (open ? 'Close menu' : 'Open menu'));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) navbar.classList.remove('hidden');
    if (!open && langDropdown) {
        langDropdown.classList.remove('open');
        langTrigger.setAttribute('aria-expanded', 'false');
    }
}

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        setMobileMenu(!navLinks.classList.contains('active'));
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMobileMenu(false));
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            setMobileMenu(false);
            mobileToggle.focus();
        }
    });
    window.matchMedia('(max-width: 1180px)').addEventListener('change', () => {
        setMobileMenu(false);
    });
}

// ═══════════════════════════════════════════════════
// 平滑滚动
// ═══════════════════════════════════════════════════
function initSmoothScroll() { /* Native anchor navigation preserves the URL and focus behavior. */ }

// ═══════════════════════════════════════════════════
// 数字计数动画
// ═══════════════════════════════════════════════════
function animateNumbers() {
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = 2000;
                const startTime = performance.now();
                const startValue = 0;

                function updateNumber(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(startValue + (target - startValue) * easeOut);

                    el.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        el.textContent = target;
                    }
                }

                requestAnimationFrame(updateNumber);
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    statNums.forEach(num => observer.observe(num));
}

// ═══════════════════════════════════════════════════
// 滚动显示动画 (AOS)
// ═══════════════════════════════════════════════════
function initAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

function refreshAOS() {
    document.querySelectorAll('.publication-item [data-aos]').forEach(el => {
        el.classList.remove('aos-animate');
    });

    // 使用 setTimeout 确保新元素被观测
    setTimeout(() => {
        initAOS();
    }, 50);
}

// ═══════════════════════════════════════════════════
// 键盘快捷键
// ═══════════════════════════════════════════════════
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
            const publicationsSection = document.getElementById('publications');
            if (publicationsSection) {
                publicationsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // ESC 清空搜索
    if (e.key === 'Escape' && searchInput && document.activeElement === searchInput) {
        searchInput.value = '';
        currentSearch = '';
        searchClear.classList.remove('visible');
        filterPublications();
    }
});

// Keep filter accessibility and language-menu dismissal in sync.
filterBtns.forEach(btn => btn.addEventListener('click', () => { filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn))); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && langDropdown?.classList.contains('open')) { closeLangMenu(); langTrigger.focus(); } });

// 学生与青年研究人员：新增成员时在此维护姓名和分类，不填写尚未确认的学位或年级。
const supervisedMembers = [
    { nameZh: '罗伟', nameEn: 'Wei Luo', initialsZh: '罗', initialsEn: 'WL', category: 'faculty', photo: 'wei-luo.jpg', roleZh: '导师 · 助理教授', roleEn: 'PI · Assistant Professor', profile: 'https://msee.suat-sz.edu.cn/info/1010/1382.htm' },
    { nameZh: '周运通', nameEn: 'Zhou Yuntong', initialsZh: '周', initialsEn: 'ZY', category: 'graduates', photo: 'zhou-yuntong.jpg', photoPosition: 'center 50%' },
    { nameZh: '黄文烽', nameEn: 'Huang Wenfeng', initialsZh: '黄', initialsEn: 'HW', category: 'graduates' }
];
const memberCategoryNames = {
    all: { zh: '全部成员', en: 'All Members' },
    faculty: { zh: '导师', en: 'Principal Investigator' },
    postdocs: { zh: '博士后', en: 'Postdoctoral Researchers' },
    graduates: { zh: '研究生', en: 'Graduate Students' },
    'former-postdocs': { zh: '已离站博士后', en: 'Former Postdocs' },
    'phd-alumni': { zh: '已毕业博士', en: 'PhD Alumni' },
    'masters-alumni': { zh: '已毕业硕士', en: 'Master’s Alumni' }
};
let memberCategory = 'all';
let memberPage = 1;
const memberPageSize = 6;
function membersInCategory(category) {
    if (category === 'all') return supervisedMembers;
    return supervisedMembers.filter(member => member.category === category);
}
function renderMemberDirectory() {
    const results = document.getElementById('directoryResults');
    if (!results) return;
    const english = currentLang === 'en';
    const members = membersInCategory(memberCategory);
    const pageCount = Math.max(1, Math.ceil(members.length / memberPageSize));
    memberPage = Math.min(Math.max(1, memberPage), pageCount);
    const title = memberCategoryNames[memberCategory][currentLang];
    document.getElementById('directoryTitle').textContent = title;
    document.getElementById('directoryCrumb').textContent = title;
    document.getElementById('directoryCount').textContent = english
        ? `${members.length} ${members.length === 1 ? 'member' : 'members'}` : `共 ${members.length} 位成员`;
    document.querySelectorAll('[data-member-category]').forEach(button => {
        const key = button.dataset.memberCategory;
        const active = key === memberCategory;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
        button.querySelector('.category-count').textContent = membersInCategory(key).length;
    });
    results.replaceChildren();
    if (!members.length) {
        const empty = document.createElement('div');
        empty.className = 'directory-empty';
        const icon = document.createElement('span');
        icon.className = 'directory-empty-symbol';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = '—';
        const text = document.createElement('p');
        text.textContent = english ? 'No member information available yet.' : '暂无成员信息';
        empty.append(icon, text);
        results.append(empty);
    } else {
        members.slice((memberPage - 1) * memberPageSize, memberPage * memberPageSize).forEach(member => {
            const article = document.createElement('article');
            article.className = 'student-card' + (member.category === 'faculty' ? ' faculty-card' : '');
            const avatar = document.createElement('div');
            avatar.className = 'student-avatar';
            avatar.setAttribute('aria-hidden', 'true');
            if (member.photo) {
                const photo = document.createElement('img');
                photo.src = member.photo;
                if (member.photoPosition) photo.style.objectPosition = member.photoPosition;
                photo.alt = english ? member.nameEn : member.nameZh;
                photo.width = 64; photo.height = 64;
                avatar.append(photo);
            } else { avatar.textContent = english ? member.initialsEn : member.initialsZh; }
            const info = document.createElement('div');
            info.className = 'directory-member-info';
            const name = document.createElement('h5');
            name.textContent = english ? member.nameEn : member.nameZh;
            const role = document.createElement('p');
            role.textContent = (english ? member.roleEn : member.roleZh) || memberCategoryNames[member.category][currentLang];
            info.append(name, role);
            if (member.category === 'faculty') {
                const bio = document.createElement('p');
                bio.className = 'faculty-summary';
                bio.textContent = english
                    ? 'PhD in theoretical physics from Fudan University. Studies ferroic and topological quantum materials using first-principles calculations and machine learning.'
                    : '复旦大学理论物理博士，结合第一性原理计算与机器学习，研究铁电、多铁与拓扑量子材料的微观机制及功能调控。';
                const email = document.createElement('a');
                email.className = 'faculty-email';
                email.href = 'mailto:luowei@suat-sz.edu.cn';
                email.textContent = 'luowei@suat-sz.edu.cn';
                info.append(bio, email);
                role.textContent = english ? 'Assistant Professor · PhD Supervisor' : '助理教授（特聘副教授）· 博士生导师';
            }
            if (member.profile) {
                const link = document.createElement('a');
                link.href = member.profile;
                link.target = '_blank'; link.rel = 'noopener noreferrer';
                link.className = 'directory-profile-link';
                link.textContent = english ? 'University Profile ↗' : '学校个人主页 ↗';
                info.append(link);
            }
            article.append(avatar, info);
            results.append(article);
        });
    }
    document.getElementById('directoryPagination').hidden = pageCount <= 1;
    document.getElementById('directoryPageStatus').textContent = english
        ? `Page ${memberPage} of ${pageCount}` : `第 ${memberPage} / ${pageCount} 页`;
    const select = document.getElementById('directoryPage');
    select.replaceChildren();
    for (let page = 1; page <= pageCount; page++) {
        select.add(new Option(String(page), String(page), false, page === memberPage));
    }
    select.disabled = pageCount <= 1;
    document.querySelectorAll('[data-member-page]').forEach(button => {
        button.disabled = ['first', 'prev'].includes(button.dataset.memberPage)
            ? memberPage === 1 : memberPage === pageCount;
    });
}
document.querySelectorAll('[data-member-category]').forEach(button => {
    button.addEventListener('click', () => {
        memberCategory = button.dataset.memberCategory;
        memberPage = 1;
        renderMemberDirectory();
    });
});
document.querySelectorAll('[data-member-page]').forEach(button => {
    button.addEventListener('click', () => {
        const lastPage = Math.max(1, Math.ceil(membersInCategory(memberCategory).length / memberPageSize));
        memberPage = {first: 1, prev: memberPage - 1, next: memberPage + 1, last: lastPage}[button.dataset.memberPage];
        renderMemberDirectory();
    });
});
document.getElementById('directoryPage')?.addEventListener('change', event => {
    memberPage = Number(event.target.value);
    renderMemberDirectory();
});

// 课题组动态：筛选已有真实动态，不生成占位新闻。
document.querySelectorAll('[data-news-filter]').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.newsFilter;
        let count = 0;
        document.querySelectorAll('[data-news-filter]').forEach(item => {
            const active = item === button;
            item.classList.toggle('active', active);
            item.setAttribute('aria-pressed', String(active));
        });
        document.querySelectorAll('[data-news-category]').forEach(item => {
            const visible = category === 'all' || item.dataset.newsCategory === category;
            item.hidden = !visible;
            if (visible) count++;
        });
        document.getElementById('groupNewsEmpty').hidden = count > 0;
    });
});
