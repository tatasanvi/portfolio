// Fichier de configuration du portfolio - Tata Marc A. SANVI
const PORTFOLIO_CONFIG = {
  "personal": {
    "name": "Tata Marc A. SANVI",
    "title": "Analyste de Données & Développeur Web",
    "taglines": ["Analyste de Données", "Spécialiste Power BI", "Développeur Web", "Master IA & Big Data"],
    "bio": "Analyste de données et spécialiste Power BI / Excel avec une expérience solide en reporting, visualisation de données et conception de tableaux de bord décisionnels. Titulaire d'une Licence Professionnelle en Informatique (Génie Logiciel) de l'IAI-Togo et actuellement en Master IA & Big Data, je combine développement logiciel et analyse de données.\n\nFondateur de KALA INFORMATIQUE, j'accompagne également les entreprises dans leur transition digitale, le développement d'applications sur mesure et la gestion de leur infrastructure.",
    "location": "Lomé, Togo",
    "email": "statamarc@gmail.com",
    "phone": "+228 93 23 45 15",
    "available": true,
    "photo": null,
    "socials": {
      "github": "https://github.com/tatasanvi",
      "linkedin": "https://linkedin.com/in/tata-marc-a-sanvi",
      "twitter": ""
    }
  },
  "stats": [
    { "label": "Années d'expérience", "value": 3, "suffix": "+" },
    { "label": "Projets livrés", "value": 20, "suffix": "+" },
    { "label": "Clients satisfaits", "value": 15, "suffix": "+" }
  ],
  "skills": [
    {
      "category": "Analyse de Données & BI",
      "icon": "📊",
      "items": [
        { "name": "Power BI", "level": 95 },
        { "name": "Excel Avancé & TCD", "level": 95 },
        { "name": "Power Query", "level": 90 },
        { "name": "Dashboards KPI", "level": 95 }
      ]
    },
    {
      "category": "Développement & IA",
      "icon": "🧠",
      "items": [
        { "name": "Python (Machine Learning)", "level": 85 },
        { "name": "Java / PHP / WordPress", "level": 80 },
        { "name": "HTML5 / CSS3 / JavaScript", "level": 85 },
        { "name": "Git & GitHub", "level": 90 }
      ]
    },
    {
      "category": "Systèmes & Cloud",
      "icon": "☁️",
      "items": [
        { "name": "AWS EC2 & Linux Ubuntu", "level": 80 },
        { "name": "Windows Server & Windows 10/11", "level": 85 },
        { "name": "Réseaux & Maintenance IT", "level": 85 },
        { "name": "GLPI & CRM", "level": 80 }
      ]
    }
  ],
  "projects": [
    {
      "id": "project-kala",
      "title": "KALA INFORMATIQUE",
      "description": "Entreprise de services informatiques spécialisée dans le développement d'applications, la création de sites web (vitrines et e-commerce), l'installation réseau, la gestion/analyse de données et la sécurité informatique.",
      "stack": ["Développement d'applications", "Analyse de données", "Sécurité", "Réseau d'entreprise"],
      "category": "web",
      "featured": true,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "id": "project-1",
      "title": "Dashboards Power BI & Reporting KPI",
      "description": "Création de tableaux de bord interactifs pour le suivi des activités, performances et indicateurs décisionnels commerciaux et IT.",
      "stack": ["Power BI", "Excel", "Power Query", "KPIs"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "id": "project-2",
      "title": "Détection EPI avec YOLOv5",
      "description": "Développement d'un système d'intelligence artificielle de surveillance en temps réel du port d'équipements de protection sur chantier (détection par image).",
      "stack": ["Python", "YOLOv5", "Computer Vision", "PyTorch"],
      "category": "ia",
      "featured": false,
      "image": null,
      "liveUrl": "",
      "githubUrl": ""
    },
    {
      "id": "project-3",
      "title": "VyloNest",
      "description": "Développement de l'application mobile et du site web de la plateforme pour la communauté étudiante indépendante VyloNest.",
      "stack": ["React Native", "Web Site", "Mobile App", "Node.js"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://vylonest.com",
      "githubUrl": ""
    },
    {
      "id": "project-4",
      "title": "turfandardor.com",
      "description": "Développement complet du site internet et de l'application mobile de la plateforme turfandardor.",
      "stack": ["Web Dev", "Mobile App", "API Integration"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://turfandardor.com",
      "githubUrl": ""
    },
    {
      "id": "project-ein-studio",
      "title": "EIN Studio — Architecture & Space",
      "description": "Site vitrine d'architecture et d'espace, conçu pour présenter une identité visuelle immersive et des projets inspirants.",
      "stack": ["Design Web", "Architecture", "Portfolio", "Responsive"],
      "category": "web",
      "featured": false,
      "image": null,
      "liveUrl": "https://tatasanvi.github.io/architecture-ein/#hero",
      "githubUrl": ""
    },
    {
      "id": "project-5",
      "title": "Déploiement Serveurs AWS EC2",
      "description": "Configuration et mise en production sécurisée de serveurs Ubuntu sur l'infrastructure cloud AWS EC2.",
      "stack": ["AWS EC2", "Linux Ubuntu", "Cloud Systems"],
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
      "role": "Développeur Web & Technicien Réseau",
      "period": "Janvier 2026 - Présent",
      "description": "Déploiement et configuration du réseau d'entreprise. Installation et maintenance des équipements réseau.",
      "current": true
    },
    {
      "company": "ADEQUATE OUTSOURCING SERVICES",
      "role": "IT Support (N1/N2)",
      "period": "Mars 2024 - Août 2025",
      "description": "Conception de tableaux de bord Power BI et Excel pour le suivi des performances IT et commerciales. Support technique N1/N2 et gestion des incidents via GLPI. Configuration et tests de CRM (Hermes, ViciDial, EBP).",
      "current": false
    },
    {
      "company": "TDS AVENUE CODEFORGE",
      "role": "Stagiaire Data Science (Remote, Inde)",
      "period": "Septembre 2024 - Octobre 2024",
      "description": "Développement de modèles de Machine Learning. Analyse statistique, visualisation de données et production de reportings automatisés.",
      "current": false
    },
    {
      "company": "SHADOW CABINET",
      "role": "Consultant IT",
      "period": "Septembre 2023 - Juillet 2024",
      "description": "Assistance utilisateurs sur applications métiers et bureautiques. Maintenance corrective et optimisation des systèmes.",
      "current": false
    },
    {
      "company": "GERME TECH",
      "role": "Développeur Web",
      "period": "Mai 2023 - Août 2023",
      "description": "Développement d'une application web de gestion de projets. Gestion de base de données et formation des utilisateurs.",
      "current": false
    }
  ]
};
