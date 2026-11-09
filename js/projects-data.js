// Structured data for Jyothi Lakshmi Naradam's Portfolio
// Professional Palette: Crisp White Background, Deep Slate & Sky Blue Accents

const PORTFOLIO_DATA = {
  personal: {
    name: "Jyothi Lakshmi Naradam",
    title: "AI & Machine Learning Engineer | Full-Stack Developer",
    subtitle: "M.Tech Information Technology @ NIT Raipur | CGPA: 8.87/10",
    email: "jyopandu2361@gmail.com",
    phone: "+91 7036872361",
    location: "Raipur, India / Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/jyothi-lakshmi-naradam",
    github: "https://github.com/jyothinaradam",
    bio: "M.Tech Information Technology student at National Institute of Technology (NIT) Raipur with a strong foundation in Artificial Intelligence, Machine Learning, Data Analytics, and Full-Stack Web Development. Passionate about building intelligent, data-driven, and scalable systems that solve complex real-world challenges.",
    statusBadge: "Open to AI/ML & Software Engineering Roles (Internships / Full-Time)",
    stats: [
      { label: "M.Tech CGPA", value: "8.87", suffix: "/10", sub: "NIT Raipur" },
      { label: "B.Tech CGPA", value: "8.60", suffix: "/10", sub: "JNTUA College of Eng." },
      { label: "Core Projects", value: "3+", suffix: "", sub: "Multimodal AI & Full-Stack" },
      { label: "Multilingual Pipeline", value: "3", suffix: " Langs", sub: "English, Hindi, Telugu" }
    ]
  },

  skills: {
    categories: [
      {
        id: "ai-ml",
        name: "AI & Machine Learning",
        icon: "brain",
        description: "Deep learning, NLP, transformers, and multimodal classification pipelines",
        skills: [
          { name: "PyTorch", level: "Advanced", badge: "Core ML" },
          { name: "Scikit-learn", level: "Advanced", badge: "Classifiers & Regressors" },
          { name: "NLP & Transformers", level: "Advanced", badge: "Text Processing" },
          { name: "OpenAI Whisper", level: "Proficient", badge: "Speech-to-Text" },
          { name: "XGBoost", level: "Proficient", badge: "Ensemble Learning" },
          { name: "Multimodal ML", level: "Advanced", badge: "Audio, Video, Text" },
          { name: "TF-IDF & Feature Extraction", level: "Advanced", badge: "Vectorization" },
          { name: "Model Evaluation", level: "Advanced", badge: "Explainability & Metrics" }
        ]
      },
      {
        id: "web-dev",
        name: "Web & Full-Stack Technologies",
        icon: "layout",
        description: "Modern frontend frameworks, responsive UI, state management, and backend services",
        skills: [
          { name: "React.js", level: "Advanced", badge: "Frontend Framework" },
          { name: "Node.js", level: "Proficient", badge: "Runtime Environment" },
          { name: "Express.js", level: "Proficient", badge: "RESTful Services" },
          { name: "Redux", level: "Proficient", badge: "State Management" },
          { name: "Flask (Python)", level: "Advanced", badge: "ML Microservices" },
          { name: "Streamlit", level: "Advanced", badge: "Data Apps" },
          { name: "JWT Authentication", level: "Proficient", badge: "Token Security" },
          { name: "OAuth 2.0", level: "Proficient", badge: "Third-Party Auth" },
          { name: "CSS3 & Modern Styling", level: "Advanced", badge: "Responsive UI" }
        ]
      },
      {
        id: "languages",
        name: "Programming Languages & DB",
        icon: "code",
        description: "Core algorithms, data engineering, relational and object databases",
        skills: [
          { name: "Python", level: "Expert", badge: "AI, ML, Backend" },
          { name: "JavaScript (ES6+)", level: "Advanced", badge: "Modern Web" },
          { name: "Java", level: "Proficient", badge: "OOP & Enterprise" },
          { name: "C", level: "Proficient", badge: "Systems & Memory" },
          { name: "MySQL", level: "Advanced", badge: "Relational Queries" },
          { name: "PostgreSQL", level: "Proficient", badge: "Relational DB" }
        ]
      },
      {
        id: "fundamentals",
        name: "CS Fundamentals & Tools",
        icon: "terminal",
        description: "Theoretical foundations and modern engineering tooling",
        skills: [
          { name: "Data Structures & Algorithms", level: "Strong", badge: "Problem Solving" },
          { name: "Object-Oriented Programming (OOP)", level: "Strong", badge: "Design Principles" },
          { name: "Operating Systems", level: "Strong", badge: "Concurrency & Memory" },
          { name: "Computer Networks", level: "Strong", badge: "Protocols & TCP/IP" },
          { name: "Database Management Systems (DBMS)", level: "Strong", badge: "Indexing & Normalization" },
          { name: "Git & Version Control", level: "Proficient", badge: "Collaboration" },
          { name: "FFmpeg Pipeline", level: "Proficient", badge: "Media Processing" },
          { name: "REST APIs & Postman", level: "Advanced", badge: "API Testing" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "verisense-ai",
      title: "VeriSense AI – AI-Powered Multilingual Multimodal Misinformation Detection Platform",
      shortTitle: "VeriSense AI: Multimodal Fact Verification",
      category: "ai-ml",
      featured: true,
      badge: "Featured AI Project",
      accentColor: "#0284c7",
      icon: "shield-alert",
      shortDesc: "End-to-end full-stack platform detecting misinformation across Text, Audio, and Video in English, Hindi, and Telugu with explainable AI verdicts.",
      technologies: ["React.js", "Node.js", "Python", "Flask", "OpenAI Whisper", "FFmpeg", "NLP", "Scikit-Learn", "TF-IDF"],
      highlights: [
        "Multimodal input ingestion for text articles, voice recordings (audio), and video clips.",
        "Trilingual language detection and processing across English, Hindi, and Telugu.",
        "Audio/video processing pipeline with FFmpeg and OpenAI Whisper speech-to-text.",
        "TF-IDF feature extraction combined with language-specific Logistic Regression classifiers.",
        "Transparent explainability: confidence scores, influential token highlights, transcript display, and historical analytics."
      ],
      metrics: [
        { label: "Modalities", val: "Text, Audio, Video" },
        { label: "Supported Languages", val: "English, Hindi, Telugu" },
        { label: "Pipeline Latency", val: "Real-Time / Streamlined" },
        { label: "Verdict System", val: "REAL / FAKE + Probabilities" }
      ],
      architecture: [
        "Frontend: Interactive React interface for media upload, live transcription review, and explainable prediction dashboards.",
        "Backend / Orchestrator: Node.js/Express API layer managing upload sessions, file storage, and verification requests.",
        "Media Processing: FFmpeg extracts audio tracks; OpenAI Whisper executes automatic speech recognition (ASR) with trilingual language identification.",
        "ML Engine: Python Flask microservice evaluating extracted text with specialized TF-IDF vectorizers and calibrated Logistic Regression classifiers.",
        "Explainable AI (XAI): Returns prediction probabilities, confidence metrics, and influential keyword weights."
      ],
      codeUrl: "https://github.com/jyothinaradam",
      liveUrl: null
    },
    {
      id: "resume-screening",
      title: "AI Powered Resume Screening & Recommendation System",
      shortTitle: "AI Resume Screening & Recommendation",
      category: "ai-ml",
      featured: true,
      badge: "AI & HR Tech",
      accentColor: "#0ea5e9",
      icon: "file-search",
      shortDesc: "Intelligent NLP system parsing resumes, benchmarking candidate skills against job profiles, and delivering targeted upskilling roadmaps.",
      technologies: ["Python", "NLP", "Streamlit", "Machine Learning", "MySQL", "Scikit-learn", "PDF/DOCX Parsing"],
      highlights: [
        "Automated extraction of skills, education, and work experience from PDF and DOCX resumes.",
        "Machine learning evaluation engine ranking candidate compatibility against 10+ defined job roles.",
        "Personalized resume recommendations, pinpointing skill gaps, interview preparation questions, and course suggestions.",
        "Interactive analytics dashboard built with Streamlit and backed by relational MySQL candidate tracking.",
        "Dual export functionality supporting instant Excel and PDF candidate evaluation reports."
      ],
      metrics: [
        { label: "Job Roles Supported", val: "10+ Roles" },
        { label: "File Formats", val: "PDF & DOCX Parsed" },
        { label: "Export Formats", val: "Excel & PDF Reports" },
        { label: "Database", val: "MySQL Relational Tracking" }
      ],
      architecture: [
        "Document Parsing: Custom Python pipeline extracting textual segments and entities from arbitrary resume layouts.",
        "Skill Entity Extractor: Tokenization, lemmatization, and phrase matching against standardized industry taxonomy.",
        "Recommendation Engine: Cosine similarity and ranking algorithms assessing job role alignment and upskilling gaps.",
        "Analytics Dashboard: Streamlit interactive interface presenting score breakdowns, candidate leaderboards, and metric distributions.",
        "Data Storage: MySQL database schema tracking candidates, scores, timestamped evaluations, and batch statistics."
      ],
      codeUrl: "https://github.com/jyothinaradam",
      liveUrl: null
    },
    {
      id: "spotify-streaming",
      title: "Spotify-Based Music Streaming Web Application",
      shortTitle: "Spotify Web Streaming Application",
      category: "web-dev",
      featured: true,
      badge: "Full-Stack Web & API",
      accentColor: "#0284c7",
      icon: "music",
      shortDesc: "Feature-rich, high-performance music streaming application integrating Spotify Web API with OAuth 2.0 user authentication and real-time playback.",
      technologies: ["React.js", "Spotify Web API", "JavaScript (ES6+)", "RESTful APIs", "OAuth 2.0", "Redux", "Modern CSS"],
      highlights: [
        "Real-time track search, artist catalog exploration, and playlist retrieval powered by Spotify Web API.",
        "Seamless OAuth 2.0 authentication flow with secure token refresh and session persistence.",
        "Dynamic playback controller managing track progression, pause/play, volume, and queue navigation.",
        "5+ core application modules including user profile integration, custom playlist viewing, and reactive state management.",
        "Responsive, high-fidelity UI engineered for mobile and desktop screens."
      ],
      metrics: [
        { label: "Core Features", val: "5+ Interactive Modules" },
        { label: "Auth Protocol", val: "OAuth 2.0 PKCE / Token" },
        { label: "API Integrations", val: "Spotify REST API" },
        { label: "State Architecture", val: "Centralized React State" }
      ],
      architecture: [
        "Client UI: Component-driven React architecture with custom audio player controls, equalizer animations, and responsive navigation.",
        "Authentication: OAuth 2.0 handshake handling authorization grant flow, token storage, and proactive refresh.",
        "API Service Layer: Asynchronous fetch utilities with debounce for search queries and robust error handling.",
        "State Management: Global state tracking active track, playback status, playback queue, and user context.",
        "Responsive Design: CSS Flexbox/Grid layouts providing fluid experience across smartphones, tablets, and wide monitors."
      ],
      codeUrl: "https://github.com/jyothinaradam",
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
        "Maintained top-tier academic performance with CGPA 8.87/10 in Information Technology.",
        "Advanced specialization in Artificial Intelligence, Multimodal Machine Learning, and Large-Scale Data Systems.",
        "Engaged in research-oriented implementations in Multimodal Misinformation Detection and NLP algorithms."
      ]
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "JNTUA College of Engineering, Kalikiri",
      location: "Andhra Pradesh, India",
      period: "2020 – 2024",
      grade: "CGPA: 8.60 / 10",
      status: "Graduated with Distinction",
      badge: "B.Tech CSE Graduate",
      highlights: [
        "Graduated with First Class with Distinction (8.60 CGPA).",
        "Deep foundation in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Software Design.",
        "Led project initiatives in Full-Stack Web Development, REST APIs, and Machine Learning applications."
      ]
    }
  ],

  contact: {
    email: "jyopandu2361@gmail.com",
    phone: "+91 7036872361",
    location: "Raipur, Chhattisgarh & Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/jyothi-lakshmi-naradam",
    github: "https://github.com/jyothinaradam"
  }
};
