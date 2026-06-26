// src/data/portfolioData.js

export const bioData = {
  name: "Lahiru Januka",
  title: "AI Systems & Full-Stack Engineer",
  institution: "University of Moratuwa",
  department: "Computer Science & Engineering Undergraduate",
  tagline: "Building autonomous agentic workflows and scalable full-stack applications with mathematical precision.",
  aboutText: "I am a Computer Science and Engineering undergraduate at the University of Moratuwa, passionate about building meaningful, scalable software. Specializing in Agentic AI architectures and full-stack ecosystems, I bridge the gap between complex algorithmic reasoning and intuitive, fluid user interfaces. Always exploring. Always building.",
  status: "Open for Work / Internships"
};

export const coreSkills = [
  "Agentic AI (LangGraph, LangChain)",
  "Django Rest Framework",
  "Python & FastAPIs",
  "React & Tailwind CSS",
  "Java & C++",
  "MySQL & Relational Modeling",
  "Git & Cloud Infrastructure"
];

export const projectsList = [
    {
    title: "Personal Portfolio Website",
    desc: "A sleek, responsive portfolio website engineered with modern glassmorphic design and smooth animations to showcase my software engineering background and technical projects. Features automated contact transmission workflows and custom optimized assets.",
    tags: ["React.js", "Tailwind CSS", "Lucide Icons", "Vite", "Web3Forms"],
    image: "/projects/portfolio.jpg", 
    demo: "https://lahirujanuka.vercel.app", 
    github: "https://github.com/lahirujanuka/portfolio"
    },
    {
    title: "Govi Gnana (ගොවි ඥාන)",
    desc: "An AI-powered agricultural market insights and crop price forecasting platform tailored for Sri Lankan markets. Built with an automated data ingestion pipeline scraping CBSL reports, PDF table extraction, and a LangGraph multi-agent orchestration workflow to analyze historical price trends.",
    tags: ["LangGraph", "Python", "Streamlit", "Pandas", "GitHub Actions", "Groq API"],
    image: "/projects/govi-gnana.png",
    demo: "https://govi-gnana.streamlit.app/",
    github: "https://github.com/LahiruJanuka/Agri-Price-Predictor.git"
    },
    {
    title: "SAMS (School Administration and Management System)",
    desc: "Contributed as the Backend & Database Lead in a collaborative group project. I engineered the robust multi-user backend structure and API endpoints using Django REST Framework, designed the relational database schema, and implemented secure role-based authentication flows to streamline high school administrative bottlenecks.",
    tags: ["React.js", "Django REST Framework", "Sqlite3", "Tailwind CSS", "Team Collaboration"],
    image: "/projects/sams.png",
    demo: "https://school-management-system-frontend-zczt.onrender.com/", 
    github: "https://github.com/ScoobyGang-Devs/School_Management_System/"
    },
    {
    title: "LMS & CMS",
    desc: "Contributed as the Full-Stack Architect in a collaborative group project. I architected a modular Django REST Framework and React ecosystem featuring a polymorphic appeal system via GenericForeignKeys, batch student enrollment with automated ID generation algorithms, and role-based JWT session security. I also optimized database query aggregation, reducing dashboard endpoint loads by 66%.",
    tags: ["React.js", "Django REST Framework", "Polymorphic Architecture", "Backend Lead", "Database Optimization"],
    image: "/projects/lms-cms.png", 
    demo: "#",
    github: "https://github.com/Pentagon911/LMS-CMS"
    },
];

export const educationTimeline = [
  {
    period: "2026 — Present",
    role: "B.Sc. (Hons) in Computer Science & Engineering",
    company: "University of Moratuwa, Sri Lanka",
    description: "Deepening focus in distributed systems, software engineering patterns, algorithmic optimizations, and computational modeling. Engaging in active software production and peer technical groups.",
    technologies: ["Data Structures", "OOP", "Database Systems", "C++", "Java"]
  }
];

export const clientFeedback = [
  {
    quote: "Lahiru's work on our multi-agent AI system was nothing short of exceptional. His ability to architect complex workflows and deliver a seamless user experience was impressive.",
    author: "Shehan Nayanajith",
    role: "CSE(UG), University of Moratuwa.",
    avatar: "https://lh3.googleusercontent.com/d/169f-Rne9FgFua9dY1CmSEXqU6GScJvP_"
  },
  {
    quote: "Working with lahiru was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Anuchana Jayarathne",
    role: "CSE(UG), University of Moratuwa.",
    avatar: "https://lh3.googleusercontent.com/d/1KwsqbaYdcdcUTHbPhi3Ei-w8ZbRrIDU9"
  },
  {
    quote: "Lahiru's expertise in full-stack development and AI integration was instrumental in bringing our vision to life. His innovative approach and dedication were evident in every aspect of the project.",
    author: "Dineth Kavisara",
    role: "Engineering(UG), University of Ruhuna.",
    avatar: "https://lh3.googleusercontent.com/d/1cYEM7RQCbSPV_evSxPQ7I0DdwBPV0f_-"
  }
];