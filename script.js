// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('shadow-lg', 'border-borderLight');
    navbar.classList.remove('border-transparent');
  } else {
    navbar.classList.remove('shadow-lg', 'border-borderLight');
    navbar.classList.add('border-transparent');
  }
});

// Project Modals Data
const projectsData = {
  'modal-p1': {
    title: 'Titanic Survival Analysis',
    status: 'Practice project',
    overview: 'Data exploration and cleaning to uncover survival patterns by class, age, and family size.',
    problem: 'Understanding the key factors that influenced survival rates among passengers on the Titanic.',
    dataset: 'Titanic Passenger Data (Age, Sex, Pclass, SibSp, Parch, Fare, Embarked).',
    tools: ['Python', 'Pandas', 'EDA', 'Data Visualization', 'Statistics'],
    cleaning: 'Missing-value analysis (Age, Cabin). Feature engineering by grouping variables (e.g., family size) into meaningful categories.',
    analysis: 'Explored passenger age distribution, survival rates by passenger class, and family size patterns.',
    findings: 'Verified findings from available notebooks show distinct correlations between passenger class/gender and survival probability.',
    links: { github: 'https://github.com/keroshohdy' } // Placeholder for actual link if available
  },
  'modal-p2': {
    title: 'E-commerce Stockout and Potential Lost Revenue Analysis',
    status: 'Practice project',
    overview: 'Analyzing ASOS product data to estimate potential lost revenue based on stockout rates and pricing.',
    problem: 'How do stockouts impact potential revenue for different brands on ASOS?',
    dataset: 'ASOS product data including brand, price, and stock status.',
    tools: ['Python', 'Pandas', 'Data Cleaning', 'Groupby Analysis', 'Visualization'],
    analysis: 'Brand-level comparisons, product price analysis, Stockout_Count, Stockout_Rate, and calculating Lost_Revenue.',
    findings: 'Explored the relationship between price and stockout rate. The estimated lost revenue heavily depends on assumptions about demand and available stock data; findings demonstrate theoretical impact rather than verified actual financial loss.',
    links: { github: 'https://github.com/keroshohdy' }
  },
  'modal-p3': {
    title: 'Banking Database SQL Analysis',
    status: 'SQL Practice Project',
    overview: 'Writing complex business-oriented queries involving CTEs, joins, and window functions on a banking database.',
    problem: 'Extracting meaningful business metrics from a relational database to support decision-making.',
    dataset: 'bank_training.db (SQLite database with 8 tables).',
    tools: ['SQL', 'SQLite'],
    analysis: 'SQL joins and subqueries, Common Table Expressions (CTEs), Views and database relationships, Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD), Aggregations.',
    links: { github: 'https://github.com/keroshohdy' }
  },
  'modal-p4': {
    title: 'Accident Data Analysis and Hospital Recommendation',
    status: 'In Progress / Planned',
    overview: 'Exploring road accident severity and patient needs to inform potential hospital recommendations.',
    problem: 'How can accident severity, location, and patient requirements be utilized to recommend appropriate hospitals?',
    dataset: 'accidents.csv, patients_with_needs.csv (Accident_ID, Date, Time, Latitude, Longitude, Severity, etc.)',
    tools: ['Python', 'Pandas', 'SQL', 'Data Cleaning', 'EDA', 'Geospatial Visualization'],
    analysis: 'Data preparation and geospatial exploration. Note: This is an analytical objective and not a clinically validated medical decision system.',
    links: { github: 'https://github.com/keroshohdy' }
  },
  'modal-p5': {
    title: 'Food Waste and Business Financial Loss Analysis',
    status: 'Research Idea',
    overview: 'Investigating how data analysis could help businesses understand food waste and potential financial impact.',
    problem: 'Understanding waste trends, product categories, operational patterns, and their estimated financial impact on businesses.',
    dataset: 'Public or legally accessible datasets (TBD).',
    tools: ['Data Analysis', 'Business Research'],
    analysis: 'Project is currently in the conceptual phase; data sourcing and analysis methodology are being planned.',
  }
};

const modalOverlay = document.getElementById('modal-overlay');
const modalsContainer = document.getElementById('modals-container');

function openModal(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  // Build Tools tags
  const toolsHtml = data.tools.map(tool => `<span class="text-xs bg-bgSecondary text-textPrimary px-2 py-1 rounded border border-borderLight">${tool}</span>`).join('');

  const modalHtml = `
    <div id="modal-content" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bgPrimary border border-borderLight rounded-xl shadow-2xl z-[70] modal-enter">
      <div class="p-6 md:p-8">
        <div class="flex justify-between items-start mb-6">
          <div>
            <span class="text-xs font-semibold px-2 py-1 rounded border border-borderLight text-textSecondary uppercase tracking-wider mb-3 inline-block">${data.status}</span>
            <h2 class="text-2xl font-bold text-textPrimary">${data.title}</h2>
          </div>
          <button onclick="closeModal()" class="text-textSecondary hover:text-white p-1 transition-colors">
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>
        </div>

        <p class="text-lg text-textSecondary mb-8">${data.overview}</p>

        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-2">Business Problem</h4>
            <p class="text-textSecondary text-sm leading-relaxed">${data.problem}</p>
          </div>
          
          ${data.dataset ? `
          <div>
            <h4 class="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-2">Dataset</h4>
            <p class="text-textSecondary text-sm leading-relaxed">${data.dataset}</p>
          </div>
          ` : ''}

          ${data.cleaning ? `
          <div>
            <h4 class="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-2">Data Preparation</h4>
            <p class="text-textSecondary text-sm leading-relaxed">${data.cleaning}</p>
          </div>
          ` : ''}

          <div>
            <h4 class="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-2">Analysis & Approach</h4>
            <p class="text-textSecondary text-sm leading-relaxed">${data.analysis}</p>
          </div>

          ${data.findings ? `
          <div>
            <h4 class="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-2">Findings</h4>
            <p class="text-textSecondary text-sm leading-relaxed">${data.findings}</p>
          </div>
          ` : ''}

          <div>
            <h4 class="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-2">Tools Used</h4>
            <div class="flex flex-wrap gap-2 mt-2">
              ${toolsHtml}
            </div>
          </div>
          
          ${data.links && data.links.github ? `
          <div class="pt-6 mt-6 border-t border-borderLight">
            <a href="${data.links.github}" target="_blank" class="inline-flex items-center gap-2 text-sm text-textPrimary hover:text-accent transition-colors">
              <i data-lucide="github" class="w-4 h-4"></i> View on GitHub
            </a>
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  modalsContainer.innerHTML = modalHtml;
  
  // Re-initialize icons for the new modal content
  lucide.createIcons();

  modalOverlay.classList.remove('hidden');
  // Small delay to allow display:block to apply before animating opacity
  setTimeout(() => {
    modalOverlay.classList.add('opacity-100');
    const modalContent = document.getElementById('modal-content');
    modalContent.classList.remove('modal-enter');
    modalContent.classList.add('modal-enter-active');
  }, 10);
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
}

function openImageModal(src, title) {
  const modalHtml = `
    <div id="modal-content" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[90vh] flex flex-col bg-bgPrimary border border-borderLight rounded-xl shadow-2xl z-[70] modal-enter overflow-hidden">
      <div class="p-4 border-b border-borderLight flex justify-between items-center bg-bgSecondary/50 shrink-0">
        <h3 class="text-lg font-bold text-textPrimary truncate pr-4">${title}</h3>
        <button onclick="closeModal()" class="text-textSecondary hover:text-white p-1 transition-colors shrink-0">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>
      <div class="flex-1 overflow-hidden p-4 flex items-center justify-center bg-black/20">
        <img src="${src}" alt="${title}" class="max-w-full max-h-full object-contain rounded">
      </div>
    </div>
  `;

  modalsContainer.innerHTML = modalHtml;
  lucide.createIcons();
  
  modalOverlay.classList.remove('hidden');
  setTimeout(() => {
    modalOverlay.classList.add('opacity-100');
    const modalContent = document.getElementById('modal-content');
    modalContent.classList.remove('modal-enter');
    modalContent.classList.add('modal-enter-active');
  }, 10);
  
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalContent = document.getElementById('modal-content');
  if (modalContent) {
    modalContent.classList.remove('modal-enter-active');
    modalContent.classList.add('modal-exit-active');
  }
  
  modalOverlay.classList.remove('opacity-100');
  
  setTimeout(() => {
    modalOverlay.classList.add('hidden');
    modalsContainer.innerHTML = '';
    document.body.style.overflow = '';
  }, 200); // matches transition duration
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const htmlEl = document.documentElement;

function updateThemeIcons() {
  const isDark = htmlEl.classList.contains('dark');
  const iconName = isDark ? 'sun' : 'moon';
  
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  }
  if (themeToggleMobileBtn) {
    themeToggleMobileBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  }
  lucide.createIcons();
}

function toggleTheme() {
  htmlEl.classList.toggle('dark');
  if (htmlEl.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
  updateThemeIcons();
}

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

// Initialize theme icons
updateThemeIcons();
