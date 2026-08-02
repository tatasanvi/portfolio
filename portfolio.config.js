// Fichier de configuration du portfolio - Tata Marc A. SANVI
const PORTFOLIO_CONFIG = {
  "personal": {
    "name": "Tata Marc A. SANVI",
    "title": "Analyste de Données & Développeur Full Stack",
    "taglines": ["Analyste de Données", "Spécialiste Power BI", "Développeur Full Stack", "Master IA & Big Data"],
    "bio": "Diplômé en Génie Logiciel (IAI-Togo) et actuellement en Master IA & Big Data, je combine le développement d'applications web/mobiles performantes, l'analyse de données stratégiques (Power BI, Excel Avancé, Python) et l'administration d'infrastructures IT & Cloud (AWS EC2, Linux, GLPI).\n\nFondateur de KALA INFORMATIQUE, j'accompagne les entreprises dans leur transformation digitale, la création de tableaux de bord décisionnels, le développement logiciel sur-mesure et l'optimisation de leurs systèmes d'information.",
    "location": "Lomé, Togo",
    "email": "statamarc@gmail.com",
    "phone": "+228 93 23 45 15",
    "available": true,
    "photo": null,
    "socials": {
      "github": "https://github.com/tatasanvi",
      "linkedin": "https://www.linkedin.com/in/tata-sanvi",
      "twitter": ""
    }
  },
  "stats": [
    { "label": "Années d'expérience", "value": 3, "suffix": "+" },
    { "label": "Projets livrés", "value": 20, "suffix": "+" },
    { "label": "Clients & Partenaires", "value": 15, "suffix": "+" }
  ],
  "skills": [
    {
      "category": "Analyse de Données & BI",
      "icon": "📊",
      "items": [
        { "name": "Power BI & DAX", "level": 95 },
        { "name": "Excel Avancé & TCD", "level": 95 },
        { "name": "Power Query & ETL", "level": 90 },
        { "name": "Reporting & Dashboards KPI", "level": 95 },
        { "name": "SQL (MySQL, PostgreSQL)", "level": 85 }
      ]
    },
    {
      "category": "Développement Web & IA",
      "icon": "💻",
      "items": [
        { "name": "JavaScript & TypeScript", "level": 85 },
        { "name": "React.js & React Native", "level": 80 },
        { "name": "Node.js & Express / REST APIs", "level": 85 },
        { "name": "Python (Machine Learning, YOLOv5)", "level": 85 },
        { "name": "PHP & WordPress", "level": 80 },
        { "name": "Git, GitHub & CI/CD", "level": 90 }
      ]
    },
    {
      "category": "IT Support, Cloud & Réseaux",
      "icon": "☁️",
      "items": [
        { "name": "Support N1/N2 & GLPI (ITIL)", "level": 90 },
        { "name": "AWS EC2 & Linux Ubuntu", "level": 80 },
        { "name": "Windows Server & Win 10/11", "level": 85 },
        { "name": "Réseaux d'Entreprise (TCP/IP, VPN)", "level": 85 },
        { "name": "Microsoft 365 & Mail OVH", "level": 85 }
      ]
    }
  ],
  "projects": [
    {
      "id": "project-kala",
      "title": "KALA INFORMATIQUE",
      "description": "Entreprise de services informatiques créée pour accompagner la transformation numérique : développement logiciel, intégration web/mobile, création de tableaux de bord décisionnels, gestion réseau et sécurité.",
      "stack": ["Génie Logiciel", "Analyse de données", "Sécurité", "Infrastructure"],
      "category": "web",
      "featured": true,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "id": "project-aos",
      "title": "Adequate Outsourcing Services",
      "description": "Conception et développement du site web institutionnel pour l'entreprise spécialisée dans les services BPO, la relation client et le support informatique.",
      "stack": ["WordPress", "Web Design", "BPO", "SEO"],
      "category": "web",
      "featured": true,
      "image": "adequate-outsourcing-logo.png",
      "liveUrl": "https://adequate-outsourcing.com/",
      "githubUrl": ""
    },
    {
      "id": "project-amethyste",
      "title": "Améthyste Conseils",
      "description": "Développement et intégration responsive de la plateforme web institutionnelle pour le cabinet de conseil et d'accompagnement d'entreprises.",
      "stack": ["WordPress", "UI/UX Design", "Conseil", "SEO"],
      "category": "web",
      "featured": true,
      "image": "amethyste-conseil-logo.webp",
      "liveUrl": "https://amethyste-conseils.com/",
      "githubUrl": ""
    },
    {
      "id": "project-monsterville",
      "title": "MonsterVille Space",
      "description": "Développement et mise en ligne de la plateforme web immersive MonsterVille Space.",
      "stack": ["JavaScript", "HTML5/CSS3", "Web Design", "Responsive"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://monsterville.space/",
      "githubUrl": ""
    },
    {
      "id": "project-citafric",
      "title": "CITAFRIC — Maintenance & Services IT",
      "description": "Création du site web d'entreprise pour les prestations de maintenance informatique, d'intégration réseau et de solutions IT.",
      "stack": ["Web Dev", "Services IT", "Maintenance", "Responsive"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://citafric.tg/maintenance-3/",
      "githubUrl": ""
    },
    {
      "id": "project-bi",
      "title": "Tableaux de Bord Power BI & Reporting KPI",
      "description": "Conception et déploiement de modèles de données et tableaux de bord interactifs Power BI pour piloter les performances IT (SLA, suivi GLPI) et commerciales.",
      "stack": ["Power BI", "Power Query", "DAX", "Excel Avancé", "KPIs"],
      "category": "web",
      "featured": true,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "id": "project-yolo",
      "title": "Système de Détection EPI (YOLOv5 & Computer Vision)",
      "description": "Développement d'un système intelligent en temps réel par vision par ordinateur permettant la vérification automatique du port des Équipements de Protection Individuelle sur chantier.",
      "stack": ["Python", "YOLOv5", "PyTorch", "OpenCV", "Deep Learning"],
      "category": "ia",
      "featured": true,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "id": "project-vylonest",
      "title": "VyloNest Platform",
      "description": "Développement de l'application mobile (React Native) et du site web de la communauté étudiante indépendante VyloNest.",
      "stack": ["React Native", "Node.js", "Web Site", "Mobile App"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://vylonest.com",
      "githubUrl": ""
    },
    {
      "id": "project-turfandardor",
      "title": "TurfAndArdor.com",
      "description": "Conception et développement complet de la plateforme web et mobile TurfAndArdor avec intégration d'APIs et gestion d'utilisateurs.",
      "stack": ["Web Dev", "Mobile App", "API REST", "UI/UX"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://turfandardor.com",
      "githubUrl": ""
    },
    {
      "id": "project-ein-studio",
      "title": "EIN Studio — Architecture & Space",
      "description": "Site vitrine d'architecture d'intérieur avec une expérience visuelle haut de gamme, fluide et adaptative.",
      "stack": ["HTML5/CSS3", "JavaScript", "Portfolio", "Responsive"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://tatasanvi.github.io/architecture-ein/#hero",
      "githubUrl": ""
    },
    {
      "id": "project-aws",
      "title": "Infrastructures Cloud AWS EC2 & Docker",
      "description": "Déploiement, sécurisation et conteneurisation (Docker) de serveurs Linux Ubuntu sur AWS EC2 pour le hosting d'applications métiers.",
      "stack": ["AWS EC2", "Linux Ubuntu", "Docker", "Nginx"],
      "category": "backend",
      "featured": false,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    }
  ],
  "experience": [
    {
      "company": "CONSEIL RÉGIONAL DE LA KARA",
      "role": "Technicien Réseau & Systèmes",
      "period": "Janvier 2026 - Présent",
      "description": "Déploiement et sécurisation de l'infrastructure réseau d'entreprise (filaire & Wi-Fi). Diagnostics matériels/logiciels et assistance technique directe auprès des utilisateurs.",
      "current": true
    },
    {
      "company": "ADEQUATE OUTSOURCING SERVICES (AOS)",
      "role": "IT Support Specialist (N1/N2) & Data Analyst",
      "period": "Mars 2024 - Août 2025",
      "description": "Support technique N1/N2 et résolution des incidents via GLPI. Conception de tableaux de bord Power BI / Excel pour le suivi des KPIs de service (SLA). Administration de messageries OVH/M365 et des outils CRM métiers (Hermes, ViciDial).",
      "current": false
    },
    {
      "company": "TDS AVENUE CODEFORGE",
      "role": "Stagiaire Data Science & IA (Remote, Inde)",
      "period": "Septembre 2024 - Octobre 2024",
      "description": "Développement de modèles de Computer Vision (YOLOv5) et apprentissage par transfert pour la détection d'équipements de protection (EPI). Analyse statistique et reportings automatisés.",
      "current": false
    },
    {
      "company": "NUFIALA DIGITAL",
      "role": "Chef de Projet Web & Développeur Full-Stack",
      "period": "Août 2023 - Mai 2024",
      "description": "Cadrage, conception et développement d'applications web (React, Node.js, PHP, WordPress). Animation d'ateliers clients, rédaction de cahiers des charges et gestion des phases de recette.",
      "current": false
    },
    {
      "company": "SHADOW CABINET",
      "role": "Consultant IT & Maintenance Systèmes",
      "period": "Septembre 2023 - Juillet 2024",
      "description": "Assistance utilisateurs sur logiciels métiers, maintenance corrective des postes de travail et accompagnement dans l'optimisation des environnements de travail.",
      "current": false
    },
    {
      "company": "GERME TECH",
      "role": "Développeur Web Full-Stack",
      "period": "Mai 2023 - Août 2023",
      "description": "Développement d'une application web de gestion de projets d'entreprise. Modélisation de bases de données SQL, développement frontend/backend et formation des équipes utilisateurs.",
      "current": false
    }
  ]
};
