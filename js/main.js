// Main Interactive JavaScript for Jyothi Lakshmi Naradam's Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  renderStats();
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
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('jyothi_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
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
      <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    `;
  } else {
    iconEl.innerHTML = `
      <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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
    "AI & Machine Learning Engineer",
    "M.Tech Scholar @ NIT Raipur (8.87 CGPA)",
    "Multimodal AI & NLP Specialist",
    "Full-Stack Web Developer",
    "Data-Driven Problem Solver"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 75;
  const deletingSpeed = 40;
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
    <div class="glass-card p-4 rounded-xl text-center border border-white/5 hover:border-indigo-500/40 transition">
      <div class="text-2xl sm:text-3xl font-extrabold text-gradient mb-0.5">
        ${stat.value}<span class="text-xs sm:text-sm font-semibold opacity-80">${stat.suffix}</span>
      </div>
      <div class="text-xs font-bold text-slate-300 tracking-wide uppercase">${stat.label}</div>
      <div class="text-[11px] text-slate-400 mt-0.5">${stat.sub}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Skills Matrix Rendering
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container || !PORTFOLIO_DATA.skills.categories) return;

  const iconSvgMap = {
    brain: `<svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    layout: `<svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`,
    code: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    terminal: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.skills.categories.map(category => `
    <div class="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3.5 mb-4">
          <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
            ${iconSvgMap[category.icon] || iconSvgMap['code']}
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-100">${category.name}</h3>
            <p class="text-xs text-slate-400 mt-0.5">${category.description}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 pt-2">
          ${category.skills.map(sk => `
            <div class="tech-pill group cursor-default" title="${sk.badge} • ${sk.level}">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform"></span>
              <span class="font-medium">${sk.name}</span>
              <span class="text-[10px] opacity-70 px-1 py-0.2 rounded bg-white/5 border border-white/5">${sk.badge}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Projects Rendering & Filter Logic
   ========================================================================== */
let activeCategory = 'all';

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filteredProjects = activeCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  container.innerHTML = filteredProjects.map(proj => `
    <div class="glass-card project-card rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
      
      <!-- Card Header with Badges -->
      <div class="project-header">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            ${proj.badge}
          </span>
          <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            ${proj.category === 'ai-ml' ? 'AI / ML' : 'Web & APIs'}
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors leading-snug">
          ${proj.title}
        </h3>
        
        <p class="text-sm text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
          ${proj.shortDesc}
        </p>
      </div>

      <!-- Card Body: Key Highlights & Metrics -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div class="space-y-3">
          <div class="grid grid-cols-2 gap-2 text-xs">
            ${proj.metrics.slice(0, 2).map(m => `
              <div class="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
                <span class="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">${m.label}</span>
                <span class="text-slate-200 font-semibold text-xs mt-0.5 block">${m.val}</span>
              </div>
            `).join('')}
          </div>

          <ul class="space-y-1.5 text-xs text-slate-300">
            ${proj.highlights.slice(0, 3).map(h => `
              <li class="flex items-start gap-2">
                <svg class="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech Stack Pills -->
        <div class="mt-5 pt-4 border-t border-slate-800/80">
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${proj.technologies.slice(0, 6).map(t => `
              <span class="text-[11px] px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50">
                ${t}
              </span>
            `).join('')}
            ${proj.technologies.length > 6 ? `
              <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 font-medium">
                +${proj.technologies.length - 6} more
              </span>
            ` : ''}
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-3">
            <button onclick="openProjectModal('${proj.id}')" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wide transition shadow-lg shadow-indigo-600/25">
              <span>Deep Dive Architecture</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a href="${proj.codeUrl}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition" title="View Source Repository">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
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
   6. Project Modal Controller
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

  // LinkedIn Helper Modal
  const linkedinHelperBtn = document.getElementById('linkedin-guide-btn');
  const linkedinModal = document.getElementById('linkedin-guide-modal');
  const closeLinkedinBtn = document.getElementById('linkedin-modal-close-btn');

  if (linkedinHelperBtn && linkedinModal) {
    linkedinHelperBtn.addEventListener('click', () => openModal(linkedinModal));
  }
  if (closeLinkedinBtn && linkedinModal) {
    closeLinkedinBtn.addEventListener('click', () => closeModal(linkedinModal));
    linkedinModal.addEventListener('click', (e) => {
      if (e.target === linkedinModal) closeModal(linkedinModal);
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

  // Global ESC Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) closeModal(modalOverlay);
      if (linkedinModal && linkedinModal.classList.contains('active')) closeModal(linkedinModal);
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
    <div class="p-6 sm:p-8 border-b border-slate-800">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          ${proj.badge}
        </span>
        <span class="text-xs font-mono text-slate-400">
          ${proj.category === 'ai-ml' ? 'Artificial Intelligence / ML' : 'Full-Stack Web Engineering'}
        </span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
        ${proj.title}
      </h2>
      <p class="text-sm sm:text-base text-slate-300 mt-2.5">
        ${proj.shortDesc}
      </p>
    </div>

    <!-- Modal Body -->
    <div class="p-6 sm:p-8 space-y-6">
      
      <!-- Key Metrics Row -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">Key Project Metrics & Specifications</h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${proj.metrics.map(m => `
            <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span class="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">${m.label}</span>
              <span class="block text-sm font-bold text-slate-100 mt-1">${m.val}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Architectural Breakdown -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">System Architecture & Engineering Highlights</h4>
        <div class="space-y-2.5">
          ${proj.architecture.map(step => `
            <div class="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
              <div class="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 mt-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Resume Verified Accomplishments -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">Delivered Features & Technical Implementation</h4>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
          ${proj.highlights.map(h => `
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tech Stack Badges -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2.5">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${proj.technologies.map(t => `
            <span class="tech-pill">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Modal Footer CTAs -->
      <div class="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <a href="${proj.codeUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wide transition shadow-lg shadow-indigo-600/30">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          <span>View Source on GitHub</span>
        </a>

        <button onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow='';" class="text-xs font-semibold text-slate-400 hover:text-white px-4 py-2 transition">
          Close Window
        </button>
      </div>

    </div>
  `;

  openModal(modalOverlay);
};

/* ==========================================================================
   7. Quick Copy Utilities & Toast Feedback
   ========================================================================== */
function initCopyButtons() {
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const copyPhoneBtns = document.querySelectorAll('.copy-phone-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        prompt("Copy Email:", PORTFOLIO_DATA.personal.email);
      });
    });
  });

  copyPhoneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone).then(() => {
        showToast("Phone number copied to clipboard!");
      }).catch(() => {
        prompt("Copy Phone:", PORTFOLIO_DATA.personal.phone);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium text-xs shadow-2xl flex items-center gap-2.5 transition-all transform duration-300 opacity-0 translate-y-4';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
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
   8. Contact Form Handling
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
    const mailtoBody = encodeURIComponent(`Hi Jyothi,\n\n${message}\n\nFrom: ${name} (${senderEmail})`);

    showToast("Opening your email client to send message...");
    
    setTimeout(() => {
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  });
}

/* ==========================================================================
   9. Active Scroll Spy
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
   10. Mobile Menu Handling
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
