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
        id: 1,
        titleZh: "Quantum criticality at cryogenic melting of polar bubble lattices",
        titleEn: "Quantum criticality at cryogenic melting of polar bubble lattices",
        authors: "W. Luo+, A. Akbarzadeh, Y. Nahas, S. Prokhorenko*, L. Bellaiche*",
        journal: "Nature Communications",
        year: 2023,
        doi: "10.1038/s41467-023-43598-0",
        tags: ["ferroic", "fieldcontrol"]
    },
    {
        id: 2,
        titleZh: "Prediction of silicon-based layered structures for optoelectronic applications",
        titleEn: "Prediction of silicon-based layered structures for optoelectronic applications",
        authors: "W. Luo+, Y. Ma, X. Gong, H. Xiang*",
        journal: "Journal of the American Chemical Society",
        year: 2014,
        doi: "10.1021/ja507147p",
        tags: ["topological", "aidesign"]
    },
    {
        id: 3,
        titleZh: "Two-dimensional phosphorus oxides as energy and information materials",
        titleEn: "Two-dimensional phosphorus oxides as energy and information materials",
        authors: "W. Luo+, H. Xiang*",
        journal: "Angewandte Chemie International Edition",
        year: 2016,
        doi: "10.1002/anie.201602295",
        tags: ["ferroic", "topological"]
    },
    {
        id: 4,
        titleZh: "Room temperature quantum spin Hall insulators with a buckled square lattice",
        titleEn: "Room temperature quantum spin Hall insulators with a buckled square lattice",
        authors: "W. Luo+, H. Xiang*",
        journal: "Nano Letters",
        year: 2015,
        doi: "10.1021/acs.nanolett.5b00418",
        tags: ["topological"]
    },
    {
        id: 5,
        titleZh: "Strain-induced gyrotropic effects in ferroelectric BaTiS3",
        titleEn: "Strain-induced gyrotropic effects in ferroelectric BaTiS3",
        authors: "W. Luo*+, A. Zabalo, G. Ren, G.-Y. Jung, M. Stengel, R. Mishra, J. Ravichandran, L. Bellaiche",
        journal: "Physical Review B",
        year: 2026,
        doi: "10.1103/PhysRevB.111.L100101",
        tags: ["ferroic", "fieldcontrol"]
    },
    {
        id: 6,
        titleZh: "Nonlinear phonon Hall effects in ferroelectrics: its existence and non-volatile electrical control",
        titleEn: "Nonlinear phonon Hall effects in ferroelectrics: its existence and non-volatile electrical control",
        authors: "W. Luo+, J. Ji+, P. Che, Y. Xu, L. Zhang*, H. Xiang*, L. Bellaiche",
        journal: "Physical Review B",
        year: 2023,
        doi: "10.1103/PhysRevB.107.L241107",
        tags: ["ferroic", "fieldcontrol"]
    },
    {
        id: 7,
        titleZh: "Topological interfacial states at phase boundaries in two-dimensional ferroelectric bismuth",
        titleEn: "Topological interfacial states at phase boundaries in two-dimensional ferroelectric bismuth",
        authors: "W. Luo+, Y. Zhong+, H. Yu, M. Xie, Y. Chen, H. Xiang*, L. Bellaiche",
        journal: "Physical Review B",
        year: 2025,
        doi: "10.1103/PhysRevB.111.075407",
        tags: ["ferroic", "topological"]
    },
    {
        id: 8,
        titleZh: "Two-dimensional hyperferroelectric metals: A different route to ferromagnetic-ferroelectric multiferroics",
        titleEn: "Two-dimensional hyperferroelectric metals: A different route to ferromagnetic-ferroelectric multiferroics",
        authors: "W. Luo+, K. Xu, H. Xiang*",
        journal: "Physical Review B",
        year: 2017,
        doi: "10.1103/PhysRevB.96.235415",
        tags: ["ferroic", "topological"]
    },
    {
        id: 9,
        titleZh: "Two-dimensional topological semimetals protected by symmorphic symmetries",
        titleEn: "Two-dimensional topological semimetals protected by symmorphic symmetries",
        authors: "W. Luo+, J. Ji+, J. Lu, X. Zhang, H. Xiang*",
        journal: "Physical Review B",
        year: 2020,
        doi: "10.1103/PhysRevB.101.195111",
        tags: ["topological"]
    },
    {
        id: 10,
        titleZh: "Cobalt-based magnetic Weyl semimetals with high-thermodynamic stabilities",
        titleEn: "Cobalt-based magnetic Weyl semimetals with high-thermodynamic stabilities",
        authors: "W. Luo+, Y. Nakamura, J. Park, M. Yoon*",
        journal: "npj Computational Materials",
        year: 2021,
        doi: "10.1038/s41524-020-00461-w",
        tags: ["topological", "aidesign"]
    },
    {
        id: 11,
        titleZh: "Unusual ferroelectricity in two-dimensional perovskite oxide thin films",
        titleEn: "Unusual ferroelectricity in two-dimensional perovskite oxide thin films",
        authors: "J. Lu+, W. Luo+, J. Feng, H. Xiang*",
        journal: "Nano Letters",
        year: 2018,
        doi: "10.1021/acs.nanolett.7b04797",
        tags: ["ferroic"]
    },
    {
        id: 12,
        titleZh: "Recent Advances in Unconventional Ferroelectrics and Multiferroics",
        titleEn: "Recent Advances in Unconventional Ferroelectrics and Multiferroics",
        authors: "H. Yu+, J. Ji, W. Luo*, X. Gong, H. Xiang*",
        journal: "Advanced Materials",
        year: 2025,
        doi: "10.1002/adma.202507070",
        tags: ["ferroic", "topological"]
    }
];

// ═══════════════════════════════════════════════════
// 团队成员数据
// ═══════════════════════════════════════════════════
const teamData = [
    {
        id: 'pi',
        nameZh: '罗伟',
        nameEn: 'Wei Luo',
        roleZh: '课题组组长 / 助理教授（特聘副教授）',
        roleEn: 'Group Leader / Assistant Professor (Distinguished Associate Professor)',
        descZh: '深圳理工大学材料科学与能源工程学院独立 PI、博士生导师。博士毕业于复旦大学凝聚态物理专业，曾在美国田纳西大学、橡树岭国家实验室、阿肯色大学从事博士后研究。',
        descEn: 'Independent PI and PhD supervisor at the School of Materials Science and Energy Engineering, Shenzhen University of Advanced Technology. PhD in condensed matter physics from Fudan University; postdoctoral research at the University of Tennessee, Oak Ridge National Laboratory, and the University of Arkansas.',
        avatarImg: 'https://msee.suat-sz.edu.cn/__local/2/41/99/154E41BE5000E348FDD0DBFCEBC_81A6F9F3_219C9.jpg',
        leader: true
    },
    {
        id: 'postdoc1',
        nameZh: '博士后（招聘中）',
        nameEn: 'Postdoc (Recruiting)',
        roleZh: '博士后',
        roleEn: 'Postdoctoral Researcher',
        descZh: '欢迎具有计算材料、凝聚态物理或机器学习背景的优秀博士加入。',
        descEn: 'We welcome outstanding PhDs with backgrounds in computational materials, condensed matter physics, or machine learning.',
        emoji: '🔬',
        leader: false
    },
    {
        id: 'student1',
        nameZh: '研究生（招聘中）',
        nameEn: 'Graduate Student (Recruiting)',
        roleZh: '博士 / 硕士研究生',
        roleEn: 'PhD / Master\'s Student',
        descZh: '计划招收 2-3 名博士/硕士研究生，方向包括铁电/多铁、拓扑材料与 AI for Science。',
        descEn: 'We plan to recruit 2-3 PhD/Master\'s students in ferroic/multiferroic materials, topological materials, and AI for Science.',
        emoji: '🎓',
        leader: false
    },
    {
        id: 'ra1',
        nameZh: '科研助理（招聘中）',
        nameEn: 'Research Assistant (Recruiting)',
        roleZh: '科研助理',
        roleEn: 'Research Assistant',
        descZh: '招聘 1 名科研助理，协助课题组开展计算模拟与项目管理工作。',
        descEn: 'We are recruiting 1 research assistant to support computational modeling and project management.',
        emoji: '📊',
        leader: false
    }
];

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
const defaultVisibleCount = isPreviewPage ? 6 : publicationsData.length;

let currentLang = 'zh';
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
    window.history.replaceState({}, '', newUrl);
}

function initFromURL() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const filter = params.get('filter') || 'all';

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
        const newW = window.innerWidth;
        const newH = window.innerHeight;
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

    const particleCount = 140;
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

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawConnections();

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ═══════════════════════════════════════════════════
// 语言切换
// ═══════════════════════════════════════════════════
function updateLanguage() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    // 更新所有带 data-zh/data-en 的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.textContent = text;
    });

    // 更新 placeholder
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        el.placeholder = currentLang === 'zh'
            ? el.getAttribute('placeholder')
            : el.getAttribute('data-en-placeholder');
    });

    // 更新下拉菜单选中状态
    langOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });

    // 重新渲染论文列表与团队成员（标题需要切换语言）
    renderPublications();
    renderTeam();
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
                : `<span class="member-avatar-emoji" aria-hidden="true">${member.emoji || '👤'}</span>`;

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

    filteredPublications = publicationsData.filter(pub => {
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

    const total = filteredPublications.length;
    if (resultCount) {
        resultCount.textContent = total;
    }

    if (total === 0) {
        publicationList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
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
                aidesign: { zh: 'AI 材料设计', en: 'AI Design' }
            };
            const tagName = tagNames[tag] ? tagNames[tag][currentLang] : tag;
            return `<span class="pub-tag">${tagName}</span>`;
        }).join('');

        return `
            <article class="publication-item" data-doi="${pub.doi}" data-aos="fade-up" data-aos-delay="${index % 3 * 100}">
                <div class="pub-year">${pub.year}</div>
                <div class="pub-content">
                    <h3 class="pub-title">${title}</h3>
                    <div class="pub-meta">
                        <span>👤 ${pub.authors}</span>
                        <span>📚 ${pub.journal}</span>
                        <span>📅 ${pub.year}</span>
                        <span>🔗 DOI: ${pub.doi}</span>
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
        if (e.target.closest('.pub-link')) return;
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
    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // 导航栏背景
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 滚动方向判断：向下滚动隐藏，向上滚动显示
        if (currentScroll > scrollThreshold) {
            if (currentScroll > lastScroll) {
                // 向下滚动
                navbar.classList.add('hidden');
            } else {
                // 向上滚动
                navbar.classList.remove('hidden');
            }
        } else {
            // 在页面顶部附近始终显示
            navbar.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });

    // 高亮当前导航（使用 IntersectionObserver 避免布局读取）
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    const observerOptions = {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ═══════════════════════════════════════════════════
// 移动端菜单
// ═══════════════════════════════════════════════════
if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ═══════════════════════════════════════════════════
// 平滑滚动
// ═══════════════════════════════════════════════════
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 72;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

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
