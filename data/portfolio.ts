export const profile = {
  name: "Debajit Roy",
  preferredName: "Debajit",
  title: "Independent Developer",
  role: "Software Developer & Privacy Advocate",
  intro:
    "I build practical, privacy-first software to solve real-world problems. As a self-driven developer, I focus on creating secure tools that prioritize user control and ethical engineering.",
  location: "Haldibari, West Bengal",
  education: "B.Sc. Computer Science",
  institution: "North Bengal University",
  graduation: "Class of 2025",
  email: "debajitroy0005@gmail.com",
  github: "https://github.com/SilentP01",
  avatar: "/avatar-debajit.svg",
  about: [
    "I am a recent B.Sc. Computer Science graduate from North Bengal University. While my degree provided a strong academic foundation, my true passion lies in learning through building. I focus on developing functional software that solves everyday problems, with a strong emphasis on data privacy.",
    "My development journey is largely self-driven. I build tools for my personal use first—whether that's a peer-to-peer chat app to avoid server tracking or an Android utility for better mobile control. If a tool proves useful, I refine it into an accessible application for others.",
    "I use this portfolio as a living space to document my learning journey, showcase the practical tools I build, and share my thoughts on privacy-first software with the wider community.",
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const principles = [
  "Privacy by Default",
  "Learning through Building",
  "Ethical Software Design",
  "Resilient Systems",
];

export const projects = [
  {
    title: "Barta",
    status: "Deployed",
    eyebrow: "Peer-to-Peer Communication",
    description:
      "A privacy-focused messaging application I built to ensure that chat, media, and files move directly between users, bypassing centralized server storage.",
    image: "/projects/barta.png",
    stack: [
      "WebRTC",
      "Node.js",
      "PostgreSQL",
      "Kotlin",
      "GitHub Actions",
      "Railway",
    ],
    features: [
      "Real-time peer-to-peer chat, voice, and video routing via WebRTC",
      "No message history or personal data persistence on the server",
      "Encrypted transport utilizing DTLS/SRTP protocols",
      "Native Android application featuring FLAG_SECURE screen-capture prevention",
      "Anonymous, handle-based authentication to eliminate the need for phone numbers",
    ],
    challenges: [
      "Learned to implement and stabilize WebRTC signaling for out-of-order SDP and ICE candidates",
      "Optimized connection latency through prefetching and STUN fallback mechanisms",
      "Managed asynchronous scrypt password hashing to keep the backend performant",
    ],
    role: "Creator & Developer",
    roleDetails:
      "Built the entire application independently to learn full-stack development, from the privacy model and WebRTC signaling to the Android client and deployment.",
    links: {
      demo: "https://barta.up.railway.app",
      github: "https://github.com/SilentP01/Barta.git",
    },
  },
  {
    title: "Personal AI Workspace",
    status: "In Development",
    eyebrow: "Local AI Integration",
    description:
      "An ongoing experiment to build an intelligent, privacy-first personal assistant that handles daily workflows without sending private data to external APIs.",
    image: "/projects/assistant.png",
    stack: ["Next.js", "TypeScript", "Local LLMs", "Tailwind CSS"],
    features: [
      "Context-aware assistance using completely local knowledge bases",
      "Transparent, user-controlled data management without telemetry",
      "Designed as an extensible foundation for future local-first tools",
    ],
    challenges: [
      "Balancing the performance of local LLMs with practical response times",
      "Designing a user interface that makes complex AI interactions feel intuitive",
    ],
    role: "Developer",
    roleDetails:
      "Exploring how AI can support personal thinking and organization while strictly maintaining data privacy.",
    links: {
      demo: "#contact",
      github: profile.github,
    },
  },
  {
    title: "Mobile Utility Suite",
    status: "Prototyping",
    eyebrow: "Android Experiments",
    description:
      "A series of lightweight Android applications I am building to learn native mobile capabilities, privacy controls, and practical utility workflows.",
    image: "/projects/android-lab.png",
    stack: ["Kotlin", "Android SDK", "WebView", "Gradle"],
    features: [
      "Implementation of native Android privacy controls",
      "Exploration of hybrid integration using custom WebView bridges",
      "Focus on fast prototypes that solve immediate personal needs",
    ],
    challenges: [
      "Translating web development experience into the Android ecosystem",
      "Learning to build clean, accessible mobile UI patterns",
    ],
    role: "Developer",
    roleDetails:
      "Using hands-on projects to deepen my understanding of Kotlin and native Android performance optimization.",
    links: {
      demo: "#contact",
      github: profile.github,
    },
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Kotlin", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Web Technologies",
    items: ["React", "Next.js", "WebRTC", "WebSockets", "REST APIs"],
  },
  {
    title: "Backend & Systems",
    items: ["Node.js", "PostgreSQL", "Authentication", "Cryptography Basics"],
  },
  {
    title: "Mobile Development",
    items: ["Android SDK", "Kotlin for Android", "WebView Integration"],
  },
  {
    title: "Tools & Deployment",
    items: ["Git & GitHub", "GitHub Actions", "Linux Environment", "Railway"],
  },
  {
    title: "Design & UI",
    items: ["Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
];

export const timeline = [
  {
    year: "2022 - 2025",
    title: "B.Sc. Computer Science",
    body: "Graduated from North Bengal University, building a strong academic foundation in algorithms, systems, and programming.",
  },
  {
    year: "Present",
    title: "Building & Learning",
    body: "Actively developing independent projects like Barta to solve personal privacy needs and gain practical software engineering experience.",
  },
  {
    year: "Future Outlook",
    title: "Expanding Personal Tools",
    body: "Continuing to experiment with local-first technologies, building out my personal AI workspace, and sharing my projects with the open-source community.",
  },
];
