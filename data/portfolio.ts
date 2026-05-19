export const profile = {
  name: "Debajit Roy",
  preferredName: "Debajit",
  title: "B.Sc. Computer Science Graduate",
  role: "Privacy-focused builder",
  intro:
    "In an era of everyday vulnerabilities, I want to protect privacy through legal, simple, and thoughtful ideas.",
  location: "Haldibari, West Bengal",
  education: "B.Sc. Computer Science, 2022-2025 batch",
  email: "debajitroy0005@gmail.com",
  github: "https://github.com/SilentP01",
  avatar: "/avatar-debajit.svg",
  about: [
    "I am a B.Sc. Computer Science graduate from the 2022-2025 batch. My degree gave me a basic foundation in the programming world, and I am continuing to learn independently through open-source resources.",
    "I love building tools for my own personal use, especially when privacy and simplicity matter. If those tools can help other people too, I want to make them available in a clear and usable way.",
    "My long-term vision is to reduce vulnerabilities that lead to daily exploitation, while staying on the legal and ethical side of security work.",
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const principles = [
  "Privacy by design",
  "Legal and ethical security thinking",
  "Simplicity over noise",
  "Offline-first resilience",
];

export const projects = [
  {
    title: "Barta",
    status: "Deployed",
    eyebrow: "Peer-to-peer conversation tool",
    description:
      "A privacy-focused peer-to-peer conversation tool where chats, media, and files route directly between devices instead of being stored in a database.",
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
      "Direct peer media, chat, and file routing with zero message persistence",
      "End-to-end encrypted WebRTC DataChannels, voice, and video",
      "Native Android shell with hardware-level screenshot protection",
      "Anonymous handle-based connection flow without phone numbers or real names",
      "Backend-driven version checker for OTA update dialogs",
    ],
    challenges: [
      "Handled WebRTC SDP and ICE candidate race conditions with asynchronous queueing",
      "Reduced ISP DNS and firewall delays with prefetching, preconnects, and STUN fallbacks",
      "Moved heavy scrypt hashing away from blocking server execution",
    ],
    role: "Lead Architect & Product Owner",
    roleDetails:
      "Led the security layout, serverless E2EE matchmaking idea, Android privacy controls, WebRTC signaling fixes, backend performance work, and automated APK release workflow.",
    links: {
      demo: "https://barta.up.railway.app",
      github: "https://github.com/SilentP01/Barta.git",
    },
  },
  {
    title: "Future AI Assistant",
    status: "Planned",
    eyebrow: "Private AI experiment",
    description:
      "A future assistant idea for research, planning, and personal workflows, designed around user control and privacy-first thinking.",
    image: "/projects/assistant.png",
    stack: ["Next.js", "TypeScript", "LLMs", "Local knowledge", "Privacy UX"],
    features: [
      "Private knowledge base direction",
      "Readable planning and research flows",
      "Designed for future demos and project dashboards",
    ],
    challenges: [
      "Balancing helpful automation with transparent behavior",
      "Keeping user data control central to the product idea",
    ],
    role: "Concept Owner",
    roleDetails:
      "Exploring how AI can support daily thinking without turning the user into the product.",
    links: {
      demo: "#contact",
      github: profile.github,
    },
  },
  {
    title: "Android Experiments",
    status: "Learning",
    eyebrow: "Mobile prototypes",
    description:
      "Small Android and hybrid app experiments for learning mobile interfaces, native privacy controls, and practical utility flows.",
    image: "/projects/android-lab.png",
    stack: ["Kotlin", "Android SDK", "WebView", "Gradle", "Firebase ideas"],
    features: [
      "Native Android privacy controls",
      "Hybrid WebView bridge experiments",
      "Fast prototypes for personal-use tools",
    ],
    challenges: [
      "Turning rough personal ideas into testable screens",
      "Learning mobile patterns while keeping the interface simple",
    ],
    role: "Builder",
    roleDetails:
      "Using experiments to learn mobile development by building tools that solve small real problems.",
    links: {
      demo: "#contact",
      github: profile.github,
    },
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript ES6+", "Kotlin", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Protocols & APIs",
    items: ["WebRTC", "WebSockets", "STUN/TURN", "DTLS/SRTP", "HTTPS", "REST APIs"],
  },
  {
    title: "Backend & Systems",
    items: ["Node.js", "PostgreSQL", "Connection pooling", "scrypt hashing", "Cryptography"],
  },
  {
    title: "Mobile & Hybrid",
    items: ["Android SDK", "WebView Bridge", "FLAG_SECURE", "Gradle", "Kotlin Android"],
  },
  {
    title: "Tools & DevOps",
    items: ["GitHub Actions", "Git", "Railway", "Linux", "Windows Terminal"],
  },
  {
    title: "Portfolio Website Stack",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "SEO basics",
      "Vercel deployment",
    ],
  },
];

export const timeline = [
  {
    year: "2022-2025",
    title: "Computer Science foundation",
    body: "Completed B.Sc. Computer Science and built a base understanding of programming, systems, and software thinking.",
  },
  {
    year: "Now",
    title: "Learning through open source",
    body: "Growing independently through open-source learning and by building privacy-focused tools for real personal use.",
  },
  {
    year: "Long term",
    title: "Reduce daily exploitation",
    body: "Build simple, legal, privacy-first tools that reduce vulnerabilities in everyday digital life.",
  },
];
