// Structured data for Jyothi Lakshmi Naradam's Portfolio
// Career-Focused: AI/ML Engineer | ML Engineer | NLP Engineer | Deep Learning Engineer | Data Scientist | Full-Stack Developer
// NIT Raipur M.Tech Scholar (8.87 CGPA)

const PORTFOLIO_DATA = {
  personal: {
    name: "Jyothi Lakshmi Naradam",
    headline: "AI/ML Engineer | NLP & Deep Learning | Full-Stack Developer",
    institution: "National Institute of Technology, Raipur (NIT Raipur)",
    degree: "M.Tech in Information Technology",
    mtechCgpa: "8.87",
    btechCgpa: "8.60",
    email: "pandujyo2361@gmail.com",
    location: "Raipur, Chhattisgarh & Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/naradam-jyothi-lakshmi/",
    github: "https://github.com/Jyothinaradam08",
    resumePath: "assets/Jyothi_Lakshmi_Naradam_Resume.pdf",
    bio: "M.Tech IT student at NIT Raipur with a strong research and development focus in Machine Learning, Deep Learning, Natural Language Processing, and Full-Stack Web Development. Passionate about designing robust, scalable, and mathematically sound AI systems that bridge research innovation with production software engineering.",
    statusBadge: "Open to AI/ML & Software Engineering Roles",
    targetRoles: [
      "AI/ML Engineer",
      "Machine Learning Engineer",
      "NLP Engineer",
      "Deep Learning Engineer",
      "Data Scientist",
      "Software Engineer / Full-Stack Developer"
    ],
    stats: [
      { label: "M.Tech CGPA", value: "8.87", suffix: "/10", sub: "NIT Raipur" },
      { label: "B.Tech CGPA", value: "8.60", suffix: "/10", sub: "JNTUA College of Eng." },
      { label: "Core Projects", value: "4", suffix: "", sub: "AI/ML & Full-Stack" },
      { label: "Multilingual Pipeline", value: "3", suffix: " Langs", sub: "English, Hindi, Telugu" }
    ]
  },

  // M.Tech Thesis & Research
  thesis: {
    title: "GPF-HCT: Targeted Graph-Preserving Feature Fusion in a Hybrid CNN–Transformer for Leukemia Cell Classification",
    shortTitle: "GPF-HCT: Hybrid CNN–Transformer for Leukemia Cell Classification",
    badge: "M.Tech Research Thesis • NIT Raipur",
    status: "Ongoing M.Tech Thesis (2025–2027)",
    manuscriptNote: "Manuscript prepared for submission to International Journal of Information Technology (Springer)",
    dataset: "C-NMC 2019 Microscopic Blood-Cell Benchmark Dataset",
    image: "assets/gpf-hct-architecture.svg",
    summary: "Research focused on automated Acute Lymphoblastic Leukemia (ALL) cell classification from microscopic blood-cell images. It introduces GPF-HCT, a hybrid architecture combining Convolutional Neural Networks (CNNs) for fine local morphological feature extraction with Vision Transformers (ViT) for global contextual representations, unified through Graph-Preserving Feature Fusion.",
    highlights: [
      {
        title: "Graph-Preserving Feature Fusion",
        desc: "Models structural topological relational graphs to preserve cross-modal feature geometry between CNN local embeddings and Transformer global tokens."
      },
      {
        title: "Hybrid CNN–Transformer Architecture",
        desc: "Unifies convolutional inductive biases with self-attention mechanisms to simultaneously learn localized cellular details and long-range semantic patterns."
      },
      {
        title: "Local Morphological & Global Contextual Extraction",
        desc: "Extracts fine cytological features including cell boundaries and cytoplasm texture while modeling global inter-patch relationships."
      },
      {
        title: "Architectural Optimization",
        desc: "Balanced network parameterization designed for computational efficiency and robust representation learning on high-resolution medical imagery."
      },
      {
        title: "Controlled Ablation Studies",
        desc: "Systematic modular ablation validating the distinct contribution of graph fusion, multi-scale CNN backbones, and attention heads."
      },
      {
        title: "Multi-Seed Ensemble Learning",
        desc: "Evaluates stability across randomized seeds to minimize stochastic initialization variance and enhance out-of-sample generalization."
      },
      {
        title: "Validation-Based Threshold Calibration",
        desc: "Empirically calibrates decision threshold boundaries on validation distributions to prioritize clinically reliable classification verdicts."
      }
    ],
    technologies: [
      "PyTorch",
      "Vision Transformers (ViT)",
      "Convolutional Neural Networks (CNN)",
      "Graph-Preserving Fusion",
      "Medical Image Analysis",
      "Scikit-learn",
      "Python",
      "Ensemble Learning"
    ]
  },

  researchInterests: [
    {
      title: "Multimodal AI",
      description: "Developing cross-modal architectures that unify textual semantics, acoustic signals, and visual data for robust representation learning.",
      icon: "layers"
    },
    {
      title: "Natural Language Processing",
      description: "Text classification, semantic entity extraction, sequence modeling, and applying transformer-based linguistic embeddings.",
      icon: "cpu"
    },
    {
      title: "Misinformation Detection",
      description: "Engineering multilingual verification systems that detect false or deceptive claims across diverse regional dialects and media formats.",
      icon: "shield"
    },
    {
      title: "Speech Recognition",
      description: "Building end-to-end Automatic Speech Recognition (ASR) pipelines with OpenAI Whisper for multi-accent and multi-language transcription.",
      icon: "mic"
    },
    {
      title: "Deep Learning",
      description: "Designing neural networks with PyTorch, optimizing gradient dynamics, and fine-tuning models for high inference efficiency.",
      icon: "activity"
    },
    {
      title: "Explainable AI (XAI)",
      description: "Demystifying black-box machine learning predictions through probability calibrations, confidence scores, and token-level feature attributions.",
      icon: "eye"
    }
  ],

  skills: {
    categories: [
      {
        id: "programming-languages",
        name: "Programming Languages",
        icon: "code",
        description: "Core programming and algorithmic development languages",
        skills: ["Python", "Java", "C", "JavaScript"]
      },
      {
        id: "ai-ml",
        name: "AI & Machine Learning",
        icon: "brain",
        description: "Statistical machine learning, deep learning architectures, and model training",
        skills: ["Machine Learning", "Deep Learning", "PyTorch", "Scikit-learn", "XGBoost"]
      },
      {
        id: "nlp",
        name: "Natural Language Processing (NLP)",
        icon: "cpu",
        description: "Text processing, transformers, and speech-to-text pipelines",
        skills: ["Natural Language Processing", "Transformers", "Whisper"]
      },
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "layout",
        description: "Modern, component-driven user interfaces and reactive state management",
        skills: ["React.js", "Redux", "HTML", "CSS"]
      },
      {
        id: "backend",
        name: "Backend Development",
        icon: "server",
        description: "RESTful API engineering, caching, and scalable server runtime",
        skills: ["Node.js", "Express.js"]
      },
      {
        id: "databases",
        name: "Databases",
        icon: "database",
        description: "Relational schema design, query optimization, and structured persistence",
        skills: ["MySQL", "PostgreSQL"]
      },
      {
        id: "core-cs",
        name: "Core Computer Science",
        icon: "terminal",
        description: "Foundational computer science principles and software engineering fundamentals",
        skills: ["Data Structures and Algorithms", "Operating Systems", "DBMS", "Computer Networks"]
      }
    ]
  },

  projects: [
    {
      id: "verisense-ai",
      title: "VeriSense AI – Multimodal Misinformation Detection Platform",
      shortTitle: "VeriSense AI: Multimodal Fact Verification",
      category: "ai-ml",
      featured: true,
      badge: "Featured AI Project",
      accentColor: "#0284c7",
      image: "assets/verisense-ai.svg",
      targetRolePill: "AI/ML Engineer • NLP Engineer",
      shortDesc: "End-to-end multimodal misinformation detection platform analyzing text, audio, and video inputs in English, Hindi, and Telugu with explainable AI verdicts.",
      technologies: ["OpenAI Whisper", "NLP", "Machine Learning", "Deep Learning", "Python", "Flask", "React.js", "Node.js", "FFmpeg", "Scikit-learn"],
      highlights: [
        "Multimodal analysis ingestion supporting text articles, audio recordings, and video clips.",
        "Trilingual pipeline supporting English, Hindi, and Telugu languages.",
        "Audio/video processing pipeline with FFmpeg and OpenAI Whisper automatic speech recognition (ASR).",
        "Language-specific TF-IDF vectorization and calibrated Logistic Regression classifiers.",
        "Explainable AI output providing prediction probabilities, confidence metrics, and influential token highlights."
      ],
      keySpecs: [
        { label: "Modalities", val: "Text, Audio, Video" },
        { label: "Languages", val: "English, Hindi, Telugu" },
        { label: "Speech Engine", val: "OpenAI Whisper ASR" },
        { label: "Verdict System", val: "REAL / FAKE + Probabilities" }
      ],
      architecture: [
        "Frontend Client: React.js interface for uploading multimedia inputs, monitoring transcription, and reviewing explainability results.",
        "Backend Orchestrator: Node.js/Express server coordinating upload sessions, storage, and API communication.",
        "Media Processing: FFmpeg extracts audio streams; OpenAI Whisper transcribes speech with automatic language identification.",
        "ML Inference Service: Python Flask microservice evaluating text using TF-IDF feature extractors and trained classifiers.",
        "Explainability Layer: Computes prediction probabilities and highlights influential tokens driving the classification verdict."
      ],
      codeUrl: "https://github.com/Jyothinaradam08",
      liveUrl: null
    },
    {
      id: "resume-screening",
      title: "AI-Powered Resume Screening & Recommendation System",
      shortTitle: "AI Resume Screening System",
      category: "ai-ml",
      featured: true,
      badge: "AI & HR Tech",
      accentColor: "#0ea5e9",
      image: "assets/resume-screening.png",
      targetRolePill: "NLP Engineer • Data Scientist",
      shortDesc: "Intelligent NLP system parsing resumes, extracting technical skills, evaluating candidate compatibility, and providing role-based recommendations.",
      technologies: ["Python", "Natural Language Processing", "Streamlit", "Machine Learning", "Scikit-learn", "MySQL", "PDF/DOCX Parsing"],
      highlights: [
        "Automated parsing of PDF and DOCX resume documents to extract candidate skills, education, and experience.",
        "Candidate evaluation engine ranking candidate compatibility across 10+ defined job roles.",
        "Personalized resume recommendations highlighting skill gaps, relevant interview questions, and learning roadmaps.",
        "Interactive analytics dashboard built with Streamlit and backed by relational candidate tracking in MySQL.",
        "Automated generation and export of candidate evaluation reports in Excel and PDF formats."
      ],
      keySpecs: [
        { label: "Supported Formats", val: "PDF & DOCX Parsed" },
        { label: "Role Alignment", val: "10+ Job Categories" },
        { label: "Database Layer", val: "MySQL Relational Tracking" },
        { label: "Report Export", val: "Excel & PDF Summaries" }
      ],
      architecture: [
        "Document Parsing: Python text extraction module processing structured and unstructured resume documents.",
        "NLP Skill Extractor: Tokenization, keyword matching, and taxonomy lookup for technical skill identification.",
        "Candidate Matching: Scoring algorithms evaluating profile alignment against job role requirements.",
        "Streamlit Dashboard: Interactive user interface displaying candidate rankings, score distributions, and gap analysis.",
        "Data Storage: MySQL database schema recording parsed applicant metadata and evaluation histories."
      ],
      codeUrl: "https://github.com/Jyothinaradam08",
      liveUrl: null
    },
    {
      id: "spotify-streaming",
      title: "Spotify-Based Music Streaming Application",
      shortTitle: "Spotify Music Streaming App",
      category: "web-dev",
      featured: true,
      badge: "Full-Stack Web & API",
      accentColor: "#0284c7",
      image: "assets/spotify-app.svg",
      targetRolePill: "Full-Stack Developer • Software Engineer",
      shortDesc: "Feature-rich web application integrating Spotify Web API with OAuth 2.0 user authentication, playlist management, and music playback controls.",
      technologies: ["React.js", "Spotify Web API", "JavaScript", "OAuth 2.0", "Redux", "HTML5", "CSS3"],
      highlights: [
        "Integration with official Spotify Web API for real-time track search, artist catalog exploration, and playlist retrieval.",
        "Secure OAuth 2.0 authentication flow managing user permissions, token handling, and session state.",
        "Interactive playback controller supporting track navigation, play/pause, volume modulation, and queue progression.",
        "5+ core application modules including user profile integration, custom playlist viewing, and reactive state management.",
        "Responsive, modern user interface optimized for desktop and mobile displays."
      ],
      keySpecs: [
        { label: "Core Modules", val: "5+ Interactive Features" },
        { label: "Auth Flow", val: "OAuth 2.0 Token Auth" },
        { label: "API Integration", val: "Spotify Web REST API" },
        { label: "State Layer", val: "Redux State Management" }
      ],
      architecture: [
        "UI Layer: Component-driven React application with custom audio player interface and responsive navigation.",
        "OAuth Integration: Handles authorization redirect, access token retrieval, and token refresh handling.",
        "API Service Layer: Asynchronous fetch utilities with debounced search query handling and API response caching.",
        "State Management: Centralized store managing active track state, playback status, user playlists, and auth session."
      ],
      codeUrl: "https://github.com/Jyothinaradam08",
      liveUrl: null
    },
    {
      id: "currency-converter",
      title: "Real-Time Currency Converter Web Application",
      shortTitle: "Real-Time Currency Converter",
      category: "web-dev",
      featured: true,
      badge: "Full-Stack & FinTech",
      accentColor: "#0284c7",
      image: "assets/currency-converter.svg",
      targetRolePill: "Full-Stack Developer • Backend Engineer",
      shortDesc: "Full-stack web application delivering real-time currency conversions, multi-currency support, and optimized backend caching across 150+ world currencies.",
      technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "RESTful APIs", "HTML5", "CSS3"],
      highlights: [
        "Full-stack currency conversion platform integrating live foreign exchange REST APIs.",
        "Interactive user interface supporting instant bidirectional conversions, one-click currency swapping, and currency search across 150+ world currencies.",
        "Node.js and Express.js backend API service with in-memory caching to optimize response latency and prevent external API rate-limiting.",
        "Robust error handling and validation routines to handle network disconnects and edge cases gracefully.",
        "Dynamic conversion history tracking and multi-currency comparison cards for streamlined cross-currency analysis."
      ],
      keySpecs: [
        { label: "Supported Currencies", val: "150+ World Currencies" },
        { label: "Exchange Data", val: "Real-Time REST APIs" },
        { label: "Backend Optimization", val: "In-Memory Rate Caching" },
        { label: "Architecture", val: "Full-Stack (React + Node.js)" }
      ],
      architecture: [
        "Frontend Client: React interface featuring debounced inputs, quick swap toggle, and real-time conversion feedback.",
        "Backend Server: Node.js/Express API server acting as proxy to external foreign exchange providers.",
        "Rate Caching: In-memory cache preserving current exchange rates to reduce latency and conserve external API quotas.",
        "Calculation Engine: Precise numeric conversion and cross-rate calculation routines."
      ],
      codeUrl: "https://github.com/Jyothinaradam08/fullstack-currency-converter",
      liveUrl: null
    }
  ],

  education: [
    {
      degree: "M.Tech in Information Technology",
      institution: "National Institute of Technology, Raipur (NIT Raipur)",
      location: "Raipur, Chhattisgarh, India",
      period: "2025 – Expected 2027",
      grade: "CGPA: 8.87 / 10",
      status: "Currently Pursuing (M.Tech Scholar)",
      badge: "Premier National Institute (NIT)",
      highlights: [
        "Maintained top-tier academic score with CGPA 8.87/10 in Information Technology.",
        "Specialized focus on Artificial Intelligence, Multimodal Machine Learning, and Natural Language Processing.",
        "Conducting ongoing M.Tech thesis on GPF-HCT for automated Leukemia cell classification."
      ]
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "JNTUA College of Engineering, Kalikiri",
      location: "Andhra Pradesh, India",
      period: "2020 – 2024",
      grade: "CGPA: 8.60 / 10",
      status: "Graduated with First Class with Distinction",
      badge: "B.Tech CSE Graduate",
      highlights: [
        "Graduated with First Class with Distinction (8.60/10 CGPA).",
        "Deep foundation in Data Structures and Algorithms, Operating Systems, Computer Networks, and DBMS.",
        "Completed project initiatives in Full-Stack Web Development and Machine Learning applications."
      ]
    }
  ],

  contact: {
    email: "pandujyo2361@gmail.com",
    location: "Raipur, Chhattisgarh & Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/naradam-jyothi-lakshmi/",
    github: "https://github.com/Jyothinaradam08"
  }
};
