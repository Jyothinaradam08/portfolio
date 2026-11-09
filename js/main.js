// Main Interactive JavaScript for Jyothi Lakshmi Naradam's Portfolio
// Professional Palette: Crisp White Background, Deep Slate & Sky Blue Accents

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  renderStats();
  renderResearchInterests();
  renderSkills();
  renderProjects();
  initFilterButtons();
  initModals();
  initCopyButtons();
  initContactForm();
  initScrollSpy();
  initMobileMenu();
});

/* ==========================================================================
   1. Theme Management (Default: Light / Crisp White)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('jyothi_portfolio_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('jyothi_portfolio_theme', newTheme);
      updateThemeIcon(newTheme, themeIcon);
    });
  }
}

function updateThemeIcon(theme, iconEl) {
  if (!iconEl) return;
  if (theme === 'light') {
    iconEl.innerHTML = `
      <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `;
  } else {
    iconEl.innerHTML = `
      <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    `;
  }
}

/* ==========================================================================
   2. Dynamic Typewriter in Hero
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const words = [
    "AI/ML Engineer",
    "NLP & Multimodal AI Specialist",
    "Full-Stack Developer",
    "M.Tech Scholar @ NIT Raipur (8.87 CGPA)"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 65;
  const deletingSpeed = 35;
  const pauseEnd = 1600;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   3. Quick Stats Rendering
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container || !PORTFOLIO_DATA.personal.stats) return;

  container.innerHTML = PORTFOLIO_DATA.personal.stats.map(stat => `
    <div class="glass-card p-5 rounded-2xl text-center border border-slate-200/90 hover:border-sky-400 transition">
      <div class="text-2xl sm:text-3xl font-extrabold text-gradient mb-0.5">
        ${stat.value}<span class="text-xs sm:text-sm font-semibold opacity-85 text-sky-600">${stat.suffix}</span>
      </div>
      <div class="text-xs font-bold text-slate-800 tracking-wide uppercase">${stat.label}</div>
      <div class="text-[11px] text-slate-500 mt-0.5 font-medium">${stat.sub}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Research & Interests Section Rendering
   ========================================================================== */
function renderResearchInterests() {
  const container = document.getElementById('research-interests-grid');
  if (!container || !PORTFOLIO_DATA.researchInterests) return;

  const iconMap = {
    layers: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`,
    cpu: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`,
    shield: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
    mic: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>`,
    activity: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    eye: `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.researchInterests.map(item => `
    <div class="glass-card research-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 bg-white">
      <div>
        <div class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
          ${iconMap[item.icon] || iconMap.cpu}
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">${item.title}</h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${item.description}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-sky-700">
        <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
        <span>Research Focus</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Skills Matrix Rendering (7 Categorized Sections, No Fake Progress Bars)
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container || !PORTFOLIO_DATA.skills.categories) return;

  const iconSvgMap = {
    code: `<svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    brain: `<svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    cpu: `<svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`,
    layout: `<svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`,
    server: `<svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>`,
    database: `<svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>`,
    terminal: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.skills.categories.map(category => `
    <div class="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-slate-200">
      <div>
        <div class="flex items-center gap-3.5 mb-4">
          <div class="p-2.5 rounded-xl bg-sky-50 border border-sky-100 flex-shrink-0">
            ${iconSvgMap[category.icon] || iconSvgMap.code}
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900">${category.name}</h3>
            <p class="text-xs text-slate-500 mt-0.5">${category.description}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 pt-2">
          ${category.skills.map(sk => `
            <div class="tech-pill cursor-default">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span class="font-medium">${sk}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Projects Rendering & Filter Logic (With Visual Thumbnails)
   ========================================================================== */
let activeCategory = 'all';

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filteredProjects = activeCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  container.innerHTML = filteredProjects.map(proj => `
    <div class="glass-card project-card rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition duration-300 bg-white border border-slate-200 overflow-hidden shadow-sm">
      
      <!-- Visual Project Thumbnail -->
      <div class="project-thumb-container">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
      </div>

      <!-- Card Header with Badges -->
      <div class="project-header">
        <div class="flex items-center justify-between gap-2 mb-2.5">
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            ${proj.badge}
          </span>
          <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
            ${proj.category === 'ai-ml' ? 'AI / ML' : 'Full-Stack'}
          </span>
        </div>

        <h3 class="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
          ${proj.title}
        </h3>
        
        <p class="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
          ${proj.shortDesc}
        </p>
      </div>

      <!-- Card Body: Key Specs & Highlights -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div class="space-y-3">
          <div class="grid grid-cols-2 gap-2 text-xs">
            ${proj.keySpecs.slice(0, 2).map(m => `
              <div class="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100">
                <span class="text-sky-700 block text-[10px] uppercase font-bold tracking-wider">${m.label}</span>
                <span class="text-slate-800 font-bold text-xs mt-0.5 block">${m.val}</span>
              </div>
            `).join('')}
          </div>

          <ul class="space-y-1.5 text-xs text-slate-600">
            ${proj.highlights.slice(0, 3).map(h => `
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech Stack Pills -->
        <div class="mt-5 pt-4 border-t border-slate-100">
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${proj.technologies.slice(0, 6).map(t => `
              <span class="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                ${t}
              </span>
            `).join('')}
            ${proj.technologies.length > 6 ? `
              <span class="text-[11px] px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-semibold">
                +${proj.technologies.length - 6} more
              </span>
            ` : ''}
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2.5">
            <button onclick="openProjectModal('${proj.id}')" class="flex-1 btn-skyblue inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs tracking-wide transition">
              <span>View Details</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a href="${proj.codeUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition text-xs font-semibold" title="View Source on GitHub">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
            ${proj.liveUrl ? `
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition text-xs font-semibold">
                <span>Demo</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>

    </div>
  `).join('');
}

function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });
}

/* ==========================================================================
   7. Project Modal Controller
   ========================================================================== */
function initModals() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => closeModal(modalOverlay));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal(modalOverlay);
    });
  }

  // Resume Modal
  const resumeBtn = document.getElementById('view-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const closeResumeBtn = document.getElementById('resume-modal-close-btn');

  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', () => openModal(resumeModal));
  }
  if (closeResumeBtn && resumeModal) {
    closeResumeBtn.addEventListener('click', () => closeModal(resumeModal));
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeModal(resumeModal);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) closeModal(modalOverlay);
      if (resumeModal && resumeModal.classList.contains('active')) closeModal(resumeModal);
    }
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

window.openProjectModal = function(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalOverlay = document.getElementById('project-modal');
  const contentContainer = document.getElementById('modal-body-content');

  contentContainer.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 sm:p-8 border-b border-slate-200">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
          ${proj.badge}
        </span>
        <span class="text-xs font-mono text-slate-500 font-medium">
          ${proj.category === 'ai-ml' ? 'Artificial Intelligence / ML' : 'Full-Stack Web Engineering'}
        </span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
        ${proj.title}
      </h2>
      <p class="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
        ${proj.shortDesc}
      </p>
    </div>

    <!-- Modal Body -->
    <div class="p-6 sm:p-8 space-y-6">
      
      <!-- Key Specifications -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">Key Project Specifications</h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${proj.keySpecs.map(m => `
            <div class="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-center">
              <span class="block text-[11px] font-semibold text-sky-800 uppercase tracking-wider">${m.label}</span>
              <span class="block text-sm font-bold text-slate-900 mt-1">${m.val}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Architectural Breakdown -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">System Architecture & Engineering</h4>
        <div class="space-y-2.5">
          ${proj.architecture.map(step => `
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div class="p-1.5 rounded-lg bg-sky-100 text-sky-700 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Verified Features -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">Delivered Features & Technical Implementation</h4>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-700">
          ${proj.highlights.map(h => `
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tech Stack Badges -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2.5">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${proj.technologies.map(t => `
            <span class="tech-pill">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Modal Footer CTAs -->
      <div class="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <a href="${proj.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-skyblue inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs tracking-wide transition">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>View Source on GitHub</span>
          </a>
          ${proj.liveUrl ? `
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold transition">
              <span>View Live Demo</span>
            </a>
          ` : ''}
        </div>

        <button onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow='';" class="text-xs font-semibold text-slate-500 hover:text-slate-800 px-4 py-2 transition">
          Close Window
        </button>
      </div>

    </div>
  `;

  openModal(modalOverlay);
};

/* ==========================================================================
   8. Quick Copy Utilities & Toast Feedback (Email Only, No Phone)
   ========================================================================== */
function initCopyButtons() {
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        prompt("Copy Email:", PORTFOLIO_DATA.personal.email);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-xl flex items-center gap-2.5 transition-all transform duration-300 opacity-0 translate-y-4';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
    </svg>
    <span>${message}</span>
  `;

  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3000);
}

/* ==========================================================================
   9. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const senderEmail = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${name} via Portfolio`);
    const mailtoBody = encodeURIComponent(`Hi Jyothi Lakshmi Naradam,\n\n${message}\n\nFrom: ${name} (${senderEmail})`);

    showToast("Opening your email client to send message...");
    
    setTimeout(() => {
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  });
}

/* ==========================================================================
   10. Active Scroll Spy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   11. Mobile Menu Handling
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menuContainer = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && menuContainer) {
    toggleBtn.addEventListener('click', () => {
      menuContainer.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuContainer.classList.add('hidden');
      });
    });
  }
}

