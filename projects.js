const Projects = {
  items: [
    {
      id: 'pasteur',
      image: 'images/services/web_mobile_design.png',
      category: 'mobile',
      status: 'progress',
      featured: true,
      fr: {
        title: 'Institut Pasteur de Dakar',
        client: 'Santé publique',
        desc: 'Applications web et mobiles pour la surveillance épidémiologique, les laboratoires et le transport d\'échantillons, avec intégration des normes HPRIM.',
        tags: ['Flutter', 'NestJS', 'Santé']
      },
      en: {
        title: 'Institut Pasteur de Dakar',
        client: 'Public health',
        desc: 'Web and mobile apps for epidemiological surveillance, labs, and sample transport, with HPRIM standards integration.',
        tags: ['Flutter', 'NestJS', 'Healthcare']
      }
    },
    {
      id: 'tukkijamm',
      image: 'images/partners/tukkijamm.png',
      category: 'mobile',
      status: 'progress',
      featured: true,
      fr: {
        title: 'Tukki Jamm',
        client: 'Mobilité · Covoiturage',
        desc: 'Solution de covoiturage domicile-travail pour entreprises en Afrique de l\'Ouest — web, Android et iOS. Pilotage technique d\'une équipe de 8 personnes.',
        tags: ['Flutter', 'Rails', 'Next.js']
      },
      en: {
        title: 'Tukki Jamm',
        client: 'Mobility · Carpooling',
        desc: 'Commute carpooling for companies in West Africa — web, Android, and iOS. Technical leadership for a team of 8.',
        tags: ['Flutter', 'Rails', 'Next.js']
      }
    },
    {
      id: 'shopmeaway',
      image: 'images/partners/shopmeaway.png',
      category: 'web',
      status: 'done',
      featured: true,
      fr: {
        title: 'Shopmeaway',
        client: 'E-commerce',
        desc: 'Plateforme e-commerce desservant plus de 25 000 clients en Afrique. Conception, développement et amélioration continue en équipe.',
        tags: ['Rails', 'Vue.js', 'E-commerce']
      },
      en: {
        title: 'Shopmeaway',
        client: 'E-commerce',
        desc: 'E-commerce platform serving 25,000+ customers across Africa. End-to-end development and continuous improvement.',
        tags: ['Rails', 'Vue.js', 'E-commerce']
      }
    },
    {
      id: 'sn-software',
      image: 'images/services/web_mobile_design.png',
      category: 'mobile',
      status: 'progress',
      featured: false,
      fr: {
        title: 'SN Software',
        client: 'Secteurs public & agricole',
        desc: 'Applications mobiles critiques multi-secteurs (défense, agriculture). Analyse des besoins métiers et architecture performante.',
        tags: ['Flutter', 'PostgreSQL', 'Keycloak']
      },
      en: {
        title: 'SN Software',
        client: 'Public & agriculture',
        desc: 'Critical multi-sector mobile applications (defense, agriculture). Business analysis and robust technical architecture.',
        tags: ['Flutter', 'PostgreSQL', 'Keycloak']
      }
    },
    {
      id: 'respublica',
      image: 'images/partners/respublica_logo.png',
      category: 'web',
      status: 'done',
      featured: false,
      fr: {
        title: 'Jenparle — Respublica Conseil',
        client: 'Concertation citoyenne',
        desc: 'Développement et évolution de la plateforme de concertation et dialogue collaboratif. Authentification par filtrage IP et refonte UX.',
        tags: ['Rails', 'React', 'GraphQL']
      },
      en: {
        title: 'Jenparle — Respublica Conseil',
        client: 'Citizen engagement',
        desc: 'Development and evolution of a collaborative consultation platform. IP-based authentication and UX redesign.',
        tags: ['Rails', 'React', 'GraphQL']
      }
    },
    {
      id: 'golob-election',
      image: 'images/page.png',
      category: 'web',
      status: 'done',
      featured: false,
      fr: {
        title: 'Plateforme électorale 2024',
        client: 'Golob Soft',
        desc: 'Frontend de gestion des partis politiques et remontée d\'informations lors des élections présidentielles 2024 au Sénégal.',
        tags: ['Vue.js', 'Quasar', 'Leaflet']
      },
      en: {
        title: '2024 Election platform',
        client: 'Golob Soft',
        desc: 'Frontend for political party management and field reporting during Senegal\'s 2024 presidential elections.',
        tags: ['Vue.js', 'Quasar', 'Leaflet']
      }
    },
    {
      id: 'weebi',
      image: 'images/partners/weebi.png',
      category: 'web',
      status: 'done',
      featured: false,
      fr: {
        title: 'Weebi',
        client: 'Retail & caisse',
        desc: 'Application de caisse pour ventes, stock et comptes clients. Refonte du site (WordPress → Hugo) pour des performances accrues.',
        tags: ['Go', 'Hugo', 'Mobile']
      },
      en: {
        title: 'Weebi',
        client: 'Retail & POS',
        desc: 'Point-of-sale app for sales, inventory, and customer accounts. Site rebuild (WordPress → Hugo) for better performance.',
        tags: ['Go', 'Hugo', 'Mobile']
      }
    },
    {
      id: 's2c-rh',
      image: 'images/services/web_mobile_design.png',
      category: 'web',
      status: 'done',
      featured: false,
      fr: {
        title: 'Plateforme RH — S2C Group',
        client: 'Ressources humaines',
        desc: 'Gestion des CV, candidatures et processus internes. Scraping web et OCR pour l\'extraction automatisée de données.',
        tags: ['Rails', 'Vue.js', 'OCR']
      },
      en: {
        title: 'HR platform — S2C Group',
        client: 'Human resources',
        desc: 'CV management, applications, and internal workflows. Web scraping and OCR for automated data extraction.',
        tags: ['Rails', 'Vue.js', 'OCR']
      }
    },
    {
      id: 'atnos',
      image: 'images/partners/atnos.svg',
      category: 'web',
      status: 'done',
      featured: false,
      fr: {
        title: 'ATNOS',
        client: 'Services IT',
        desc: 'Développement, maintenance et évolution des plateformes Profilplus et Orly Paris pour un acteur IT français.',
        tags: ['Rails', 'Vue.js', 'PostgreSQL']
      },
      en: {
        title: 'ATNOS',
        client: 'IT services',
        desc: 'Development and maintenance of Profilplus and Orly Paris platforms for a French IT services company.',
        tags: ['Rails', 'Vue.js', 'PostgreSQL']
      }
    },
    {
      id: 'club-kossam',
      image: 'images/services/social_media.png',
      category: 'web',
      status: 'done',
      featured: false,
      fr: {
        title: 'Club Kossam / Club Thiossane',
        client: 'E-commerce alimentaire',
        desc: 'Plateforme e-commerce de livraison de fruits et légumes frais à domicile — développement et amélioration continue.',
        tags: ['Node.js', 'Vue.js', 'Leaflet']
      },
      en: {
        title: 'Club Kossam / Club Thiossane',
        client: 'Food e-commerce',
        desc: 'E-commerce platform for fresh fruit and vegetable home delivery — development and continuous improvement.',
        tags: ['Node.js', 'Vue.js', 'Leaflet']
      }
    },
    {
      id: 'simplon',
      image: 'images/partners/simplon_senegal.png',
      category: 'formation',
      status: 'done',
      featured: false,
      fr: {
        title: 'Simplon Sénégal',
        client: 'Formation & mentorat',
        desc: 'Xam Ak Jang Tech (300+ élèves, 50 professeurs), Teggu Ci Tech (200+ étudiants), Référentes Digitales 3FPT (25 femmes). Mentorat sur projets web et mobile.',
        tags: ['Laravel', 'Flutter', 'Agile']
      },
      en: {
        title: 'Simplon Senegal',
        client: 'Training & mentoring',
        desc: 'Xam Ak Jang Tech (300+ students, 50 teachers), Teggu Ci Tech (200+ learners), Digital Referents 3FPT (25 women). Web and mobile project mentoring.',
        tags: ['Laravel', 'Flutter', 'Agile']
      }
    },
    {
      id: 'energy-dclic',
      image: 'images/partners/energy_generation.png',
      category: 'formation',
      status: 'done',
      featured: false,
      fr: {
        title: 'Energy Generation × D-CLIC',
        client: 'Formation DWWM',
        desc: 'Formateur principal : parcours développement web et mobile pour 80 jeunes au Togo (HTML, CSS, JavaScript, Flutter, Agile/Scrum).',
        tags: ['Flutter', 'JavaScript', 'Agile']
      },
      en: {
        title: 'Energy Generation × D-CLIC',
        client: 'DWWM training',
        desc: 'Lead trainer: full web and mobile development track for 80 young people in Togo (HTML, CSS, JavaScript, Flutter, Agile/Scrum).',
        tags: ['Flutter', 'JavaScript', 'Agile']
      }
    },
    {
      id: 'oif-dclic',
      image: 'images/partners/simplon_senegal.png',
      category: 'formation',
      status: 'progress',
      featured: false,
      fr: {
        title: 'OIF — Programme D-CLIC',
        client: 'Mentor expert',
        desc: 'Mentorat technique et pédagogique à distance pour apprenants francophones (HTML5, CSS3, PHP) dans le cadre des REL.',
        tags: ['Mentorat', 'OIF', 'REL']
      },
      en: {
        title: 'OIF — D-CLIC program',
        client: 'Expert mentor',
        desc: 'Remote technical and pedagogical mentoring for Francophone learners (HTML5, CSS3, PHP) on open educational resources.',
        tags: ['Mentoring', 'OIF', 'OER']
      }
    },
    {
      id: 'startups-mentor',
      image: 'images/services/graphic_design.png',
      category: 'web',
      status: 'progress',
      featured: false,
      fr: {
        title: 'Startups accompagnées',
        client: 'Mentorat technique',
        desc: 'Conseil en architecture, choix technologiques, code review et stratégie produit pour yoonema, mafalia et kiliya.',
        tags: ['Mentorat', 'Architecture', 'Produit']
      },
      en: {
        title: 'Mentored startups',
        client: 'Technical mentoring',
        desc: 'Architecture advice, technology choices, code review, and product strategy for yoonema, mafalia, and kiliya.',
        tags: ['Mentoring', 'Architecture', 'Product']
      }
    }
  ],

  labels(lang) {
    return I18N.strings[lang]?.portfolio || I18N.strings.fr.portfolio;
  },

  cardHtml(project, lang) {
    const copy = project[lang] || project.fr;
    const L = this.labels(lang);
    const statusLabel = project.status === 'progress' ? L.statusProgress : L.statusDone;
    const statusClass =
      project.status === 'progress'
        ? 'bg-tertiary/15 text-tertiary'
        : 'bg-emerald-500/15 text-emerald-800';

    const tags = copy.tags
      .map((tag) => `<span class="rounded-full bg-primary-container/60 px-2.5 py-0.5 text-xs font-medium text-primary">${tag}</span>`)
      .join('');

    return `
      <article class="project-card flex flex-col overflow-hidden rounded-3xl bg-surface-bright shadow-md-elevation-1 transition hover:-translate-y-1 hover:shadow-md-elevation-3" data-category="${project.category}" data-status="${project.status}">
        <div class="flex h-44 items-center justify-center bg-surface-dim p-6">
          <img src="${project.image}" alt="${copy.title}" class="max-h-28 w-full object-contain" loading="lazy">
        </div>
        <div class="flex flex-1 flex-col p-6">
          <div class="mb-3 flex flex-wrap items-center gap-2">
            <span class="rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusClass}">${statusLabel}</span>
            <span class="text-xs font-medium text-on-surface-variant">${copy.client}</span>
          </div>
          <h3 class="text-title-large font-semibold text-primary">${copy.title}</h3>
          <p class="mt-2 flex-1 text-body-medium text-on-surface-variant">${copy.desc}</p>
          <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
        </div>
      </article>
    `;
  },

  renderGrid(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lang = document.documentElement.lang || 'fr';
    let list = [...this.items];

    if (options.featuredOnly) {
      list = list.filter((p) => p.featured);
    }
    if (options.limit) {
      list = list.slice(0, options.limit);
    }
    if (options.category && options.category !== 'all') {
      list = list.filter((p) => p.category === options.category);
    }

    container.innerHTML = list.map((p) => this.cardHtml(p, lang)).join('');
  },

  setupFilters() {
    const buttons = document.querySelectorAll('[data-project-filter]');
    const grid = document.getElementById('projects-page-grid');
    if (!buttons.length || !grid) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-project-filter');
        buttons.forEach((b) => {
          const active = b === btn;
          b.setAttribute('aria-pressed', String(active));
          b.classList.toggle('bg-primary', active);
          b.classList.toggle('text-primary-on', active);
          b.classList.toggle('shadow-md-elevation-1', active);
          b.classList.toggle('text-on-surface-variant', !active);
        });
        this.renderGrid('projects-page-grid', { category: filter });
      });
    });
  },

  renderAll() {
    this.renderGrid('projects-home-grid', { featuredOnly: true, limit: 3 });
    this.renderGrid('projects-page-grid');
    this.setupFilters();
  }
};
