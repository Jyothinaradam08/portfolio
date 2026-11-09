# Jyothi Lakshmi Naradam - Professional Portfolio Website 🚀

A high-performance, modern, and fully responsive developer portfolio built for **Jyothi Lakshmi Naradam** featuring a **crisp white background with professional sky blue accents**, optimized for LinkedIn, GitHub, and recruiter presentation.

---

## 🌟 Highlights & Features

- **Pristine Professional Styling**:
  - Crisp white background (`#ffffff`) with subtle light slate accents (`#f8fafc`).
  - Professional Sky Blue highlights (`#0284c7`, `#0ea5e9`, `#38bdf8`) with deep slate typography for maximum readability.
  - Clean card borders and executive button designs.
- **Built from Verified Academic Record**:
  - **M.Tech in Information Technology** at **National Institute of Technology (NIT), Raipur** (2025–2027) | **CGPA: 8.87 / 10**
  - **B.Tech in Computer Science & Engineering** at **JNTUA College of Engineering, Kalikiri** (2020–2024) | **CGPA: 8.60 / 10**
- **Featured Project Showcases**:
  1. **VeriSense AI**: AI-Powered Multilingual Multimodal Misinformation Detection Platform (English, Hindi, Telugu via OpenAI Whisper, FFmpeg, Python Flask, React.js, Scikit-learn).
  2. **AI-Powered Resume Screening & Recommendation System**: NLP parsing, candidate evaluation scoring across 10+ job roles, MySQL analytics, Excel/PDF export.
  3. **Spotify-Based Music Streaming Web App**: OAuth 2.0 authentication, real-time Spotify Web API playback, state management.
  4. **Real-Time Currency Converter Web App**: Real-time foreign exchange conversions supporting 150+ fiat currencies with Node.js/Express rate caching and responsive React UI ([GitHub Repo](https://github.com/Jyothinaradam08/fullstack-currency-converter)).
- **Interactive Capabilities**:
  - ⌨️ Dynamic typing hero animation in sky blue
  - 🔬 Dedicated Research & Interests section (Multimodal AI, NLP, Speech, XAI)
  - 🔍 Filterable projects (All / AI & Machine Learning / Full-Stack Web)
  - 🛠️ Deep Dive Architecture modal for each project with actual mockups
  - 📋 One-click copy for Email (`pandujyo2361@gmail.com`) with visual toast feedback
  - 📄 Interactive Resume Preview modal with printable CV stylesheet (`Ctrl + P`)
  - 🌓 Dark / Light Mode toggle support

---

## 📂 Project Structure

```text
Portfolio/
├── index.html              # Main HTML5 semantic page with SEO & LinkedIn Open Graph tags
├── css/
│   └── style.css           # Custom styles, responsive rules, glassmorphism, sky blue accents
├── js/
│   ├── projects-data.js    # Easy-to-edit portfolio data (projects, skills, education, bio)
│   └── main.js             # Interactions (typewriter, filter, modals, theme toggle, copy)
├── assets/
│   ├── avatar.svg          # Tech badge illustration
│   ├── Jyothi_Lakshmi_Naradam_Resume.pdf  # Downloadable PDF Resume
│   ├── verisense-ai.svg    # VeriSense AI mockup thumbnail
│   ├── resume-screening.png# Resume screening app screenshot
│   ├── spotify-app.svg     # Spotify app mockup thumbnail
│   └── currency-converter.svg # Currency converter mockup thumbnail
└── README.md               # Complete setup, deployment & LinkedIn integration guide
```

---

## 🚀 How to Preview Locally

1. Open your File Explorer and navigate to `c:\Jyo\Project\Portfolio`.
2. Double-click `index.html` to open it immediately in Google Chrome, Microsoft Edge, or any web browser.
3. *Optional (using VS Code)*: Right-click `index.html` and click **Open with Live Server**.

---

## 🌐 Deployment (GitHub & Netlify)

### Option A: GitHub Pages (Free & Automatic)

1. Repository: **[Jyothinaradam08/portfolio](https://github.com/Jyothinaradam08/portfolio)**
2. In this folder (`c:\Jyo\Project\Portfolio`), run in PowerShell:
   ```bash
   git add .
   git commit -m "Optimize portfolio"
   git push origin main
   ```
3. Your site deploys automatically or via Netlify:
   `https://lambent-sunshine-797e41.netlify.app/`

---

## 💼 How to Add to Your LinkedIn Profile

### 1. Add as Custom Link in Profile Intro (Top of Profile)
1. Go to your LinkedIn profile: **[naradam-jyothi-lakshmi](https://www.linkedin.com/in/naradam-jyothi-lakshmi/)**
2. Click the **Edit (Pencil)** icon on your top introduction card.
3. Scroll down to the bottom to **Custom link**.
4. In **Link URL**, paste your live portfolio URL (`https://lambent-sunshine-797e41.netlify.app/`).
5. In **Link text**, paste:
   ```text
   👉 View AI & Full-Stack Portfolio (NIT Raipur)
   ```
6. Click **Save**.

---

### 2. Add to the "Featured" Section (Visual Showcase)
1. On your LinkedIn profile, click **Add profile section** > **Recommended** > **Add Featured**.
2. Click the **+** button > **Add a link**.
3. Paste your portfolio link.
4. Enter:
   - **Title**: `AI/ML & Full-Stack Portfolio | Jyothi Lakshmi Naradam`
   - **Description**: `Showcasing VeriSense AI (Multimodal Misinformation Detection in English/Hindi/Telugu), NLP Resume Screening System, Spotify Web App, Currency Converter, and M.Tech IT (8.87 CGPA) at NIT Raipur.`
5. Click **Save**.

---

### 3. Professional LinkedIn Headline
```text
AI/ML Engineer | NLP & Multimodal AI | Full-Stack Developer | M.Tech IT @ NIT Raipur (8.87 CGPA)
```

---

### 4. LinkedIn "About" Summary
```text
I am an M.Tech Information Technology student at National Institute of Technology (NIT), Raipur with a strong academic record (CGPA: 8.87/10) and a solid foundation in Artificial Intelligence, Machine Learning, Data Analytics, and Full-Stack Web Development. Previously, I completed my B.Tech in Computer Science and Engineering from JNTUA College of Engineering, Kalikiri (CGPA: 8.60/10).

My primary focus lies in developing intelligent, scalable, and data-driven systems. Key projects include:
🔹 VeriSense AI: A trilingual (English, Hindi, Telugu) multimodal misinformation detection platform using OpenAI Whisper, FFmpeg, Scikit-learn, and Flask microservices.
🔹 AI-Powered Resume Screening & Recommendation: An NLP-driven candidate evaluation engine with skill extraction and personalized upskilling roadmaps.
🔹 Spotify-Based Music Streaming App: Full-stack application utilizing Spotify Web API, OAuth 2.0, and React.js.
🔹 Real-Time Currency Converter: Full-stack Forex platform with Node.js/Express in-memory rate caching and React UI.

I am actively seeking software engineering, machine learning, and AI internship / full-time opportunities. Feel free to connect or reach me at pandujyo2361@gmail.com!
```

---

## ✏️ How to Customize Further

All portfolio content is neatly organized in [js/projects-data.js](file:///c:/Jyo/Project/Portfolio/js/projects-data.js):
- Change your LinkedIn or GitHub profile link by updating the `linkedin` or `github` URLs in `personal`.
- Add new projects or update existing ones by editing the `projects` array.
- Add or modify skills in the `skills.categories` array.
