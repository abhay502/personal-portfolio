export const profile = {
  name: 'Abhay S Nath',
  title: 'Full-Stack Developer (React.js / Node.js)',
  location: 'Kochi, Kerala, India',
  email: 'abhaysnath502@gmail.com',
  linkedin: 'https://linkedin.com/in/abhay-s-nath-192445182',
  summary:
    "AI-Full-stack developer with 3+ years shipping production web apps in React, Node.js, Next.js, and Vue 3 for enterprise and e-commerce clients — spanning REST API design, MongoDB/PostgreSQL data modeling, AWS deployment, and enterprise SSO.",
}

export const skills = {
  'Frontend': ['JavaScript (ES2024+)', 'TypeScript', 'React.js', 'Next.js', 'Vue 3', 'Redux', 'Pinia', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express.js', 'NestJS', 'Adonis.js', 'REST APIs', 'GraphQL', 'WebSockets'],
  'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Mongoose'],
  'Cloud & DevOps': ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'Vercel', 'Git'],
}

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'superDNA 3D Lab',
    location: 'Chandigarh, India',
    period: 'Jan 2024 — Present',
    points: [
      'Architected and shipped a Vue.js/React.js/Node.js platform delivering 3D product configurator experiences, live for US e-commerce clients.',
      'Built a Babylon.js-powered 3D viewer with real-time texture updates and drag-and-drop .glb loading.',
      'Developed an enterprise DAM system (Vue 3, PostgreSQL, Adonis.js) with SAML/OAuth 2.0 SSO managing 10,000+ assets.',
      'Optimized app performance by 40% via code-splitting, lazy loading, and bundle pruning.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Vertexblue India',
    location: 'Gujarat, India',
    period: 'Feb 2023 — Jan 2024',
    points: [
      'Delivered 5+ full-stack React/Node/MongoDB applications for US corporate clients in Texas, owning full lifecycle to production.',
      'Built a job portal from scratch — admin CRUD portal plus a user-facing listing and application flow.',
      'Implemented JWT access/refresh token authentication and managed state via Redux Toolkit.',
    ],
  },
]

export const projects = [
  {
    title: '3D Product Configurator & Viewer',
    stack: ['React.js', 'Babylon.js', 'Node.js', 'AWS S3', 'TypeScript'],
    description:
      'Real-time 3D rendering platform with live texture/colour configuration and drag-and-drop asset loading for US e-commerce clients.',
    link: 'https://3dtool.superdnax.com',
  },
  {
    title: 'Enterprise DAM Platform',
    stack: ['Vue 3', 'Adonis.js', 'PostgreSQL', 'SAML/OAuth 2.0'],
    description:
      'Secure, role-based digital asset management system for enterprise cross-functional teams, managing 10,000+ assets in production.',
    link: null,
  },
]