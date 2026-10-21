// ── Données des 3 projets informatiques ──
// Les images correspondent exactement aux dossiers dans public/images/it-projects/

export const TECH_PROJECTS = [
  {
    id: 1,
    title: "Application Web de Gestion de Paie & Suivi RH",
    subtitle: null,
    type: "Fullstack Web App",
    description:
      "Application Fullstack permettant la gestion complète du cycle de paie hebdomadaire. Elle automatise le calcul complexe des heures supplémentaires (majorations à 30%, 50%, 60% et plafonnement légal à 20h), édite les bulletins de salaire détaillés et fournit un tableau de bord analytique en temps réel pour le suivi de la masse salariale.",
    technologies: [
      "Java Spring Boot (API REST)",
      "React 18",
      "MySQL",
    ],
    images: {
      back: "/images/it-projects/paie/paie-back1.png",
      backList: [
        "/images/it-projects/paie/paie-back1.png",
        "/images/it-projects/paie/paie-back2.png",
        "/images/it-projects/paie/paie-back3.png",
      ],
      front: null,
      frontList: [],
    },
  },
  {
    id: 2,
    title: "Gestion Commerciale & Facturation ERP",
    subtitle: "Front-Office & Back-Office (Application Web)",
    type: "Front & Back Office ERP",
    description:
      "Application web de gestion commerciale et de facturation découpée en deux espaces distincts. Elle intègre un portail client (Front-Office) permettant la consultation du catalogue avec remises par article, la gestion du panier, ainsi que le suivi des factures et le règlement au comptant ou échelonné avec calcul automatique d'escomptes et utilisation de crédits. En parallèle, un panneau d'administration (Back-Office) facilite le pilotage financier : tableau de bord analytique (chiffre d'affaires mensuel, ventes par produit, suivi des impayés), configuration des règles de remise, gestion des remboursements et calcul de la paie.",
    technologies: [
      "API REST Dolibarr",
      "React 19",
      "SQLite",
    ],
    images: {
      back: "/images/it-projects/erp/erp-back1.png",
      backList: [
        "/images/it-projects/erp/erp-back1.png",
        "/images/it-projects/erp/erp-back2.png",
        "/images/it-projects/erp/erp-back3.png",
      ],
      front: "/images/it-projects/erp/erp-front1.png",
      frontList: [
        "/images/it-projects/erp/erp-front1.png",
        "/images/it-projects/erp/erp-front2.png",
        "/images/it-projects/erp/erp-front3.png",
        "/images/it-projects/erp/erp-front4.png",
        "/images/it-projects/erp/erp-front5.png",
      ],
    },
  },
  {
    id: 3,
    title: "Gestion & Suivi de Forage",
    subtitle: "Back-Office (Application Web)",
    type: "Système d'Optimisation Logistique",
    description:
      "Système de gestion de réservation de véhicules intégrant un algorithme d'optimisation des affectations. L'application vise à minimiser les dépenses de transport en prenant en compte le type de carburant et en regroupant intelligemment les trajets (multi-réservation) dans un même véhicule selon la proximité des hôtels de destination (ex: départ groupé depuis l'aéroport).",
    technologies: [
      "Java Spring Boot",
      "JSP (Java Server Pages)",
      "MySQL",
    ],
    images: {
      back: "/images/it-projects/forage/forage-back1.png",
      backList: [
        "/images/it-projects/forage/forage-back1.png",
        "/images/it-projects/forage/forage-back2.png",
        "/images/it-projects/forage/forage-back3.png",
        "/images/it-projects/forage/forage-back4.png",
        "/images/it-projects/forage/forage-back5.png",
      ],
      front: null,
      frontList: [],
    },
  },
];
