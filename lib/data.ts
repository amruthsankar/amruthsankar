export const profile = {
  name: 'Amruth Sankar R P',
  role: 'Electronics & Communication Engineering Student',
  institute: 'Rajiv Gandhi Institute of Technology (RIT), Kottayam',
  tagline:
    'Passionate about engineering, programming (C & Python), and continuous learning.',
  email: 'amruthsankarrp@gmail.com',
  phone: '+91 8547901127',
  linkedin: 'https://linkedin.com/in/amruthsankar',
  github: 'https://github.com/amruthsankar',
  resumeUrl: '#',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const education = [
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    place: 'Rajiv Gandhi Institute of Technology (RIT), Kottayam',
    period: 'First Year · In Progress',
    detail: 'Focused on VLSI, embedded systems and programming fundamentals.',
    status: 'current' as const,
  },
  {
    degree: 'Higher Secondary Education',
    place: 'A.B. Vilasam H.S.S, Alappuzha',
    period: '2023 – 2025',
    detail: 'Scored 97.25% · KEAM 2026 Rank 3870',
    status: 'done' as const,
  },
  {
    degree: 'High School (SSLC)',
    place: 'A.B. Vilasam H.S.S, Alappuzha',
    period: '2023',
    detail: 'Scored 90%',
    status: 'done' as const,
  },
]

export const technicalSkills = [
  { name: 'C', level: 'Intermediate', value: 85 },
  { name: 'Python', level: 'Beginner', value: 72 },
  { name: 'Digital Electronics', level: 'Beginner', value: 68 },
  { name: 'VLSI Fundamentals', level: 'Beginner', value: 45 },
]

export const interpersonalSkills = [
  {
    name: 'Leadership',
    detail: 'Led an NSS unit, coordinating volunteers and community drives.',
  },
  {
    name: 'Teamwork',
    detail: 'Collaborated on academic team projects and lab work.',
  },
  {
    name: 'Communication',
    detail: 'Presented ideas clearly across technical and social settings.',
  },
]

export const activities = [
  {
    title: 'NSS Unit Leader',
    org: 'National Service Scheme',
    period: 'Higher Secondary · 2023 – 2025',
    points: [
      'Coordinated volunteer teams for community service and awareness drives.',
      'Organized social responsibility initiatives promoting collaboration.',
      'Developed leadership, discipline and public engagement skills.',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  description: string
  category: 'Embedded Systems' | 'Electronics / VLSI' | 'Python / C Software' | 'Academic Research'
  status: 'Upcoming' | 'In Progress' | 'Planned'
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'smart-blind-stick',
    title: 'Smart Assistive Blind Stick',
    description:
      'An Arduino based navigation aid using ultrasonic sensing and haptic feedback to detect low hanging and near field obstacles for visually impaired users.',
    category: 'Embedded Systems',
    status: 'In Progress',
    tags: ['Arduino', 'HC-SR04 Ultrasonic Sensor', 'Embedded Systems', 'C++'],
  },
  {
    slug: 'comming soon',
    title: 'Project #2',
    description:
      'comming soon...',
    category: 'Python / C Software',
    status: 'Upcoming',
    tags: ['C', 'Embedded', 'Sensors'],
  },
  {
    slug: 'comming soon',
    title: 'Project #3',
    description:
      'comming soon...',
    category: 'Python / C Software',
    status: 'Upcoming',
    tags: ['Python', 'DSP', 'NumPy'],
  },
  {
    slug: 'comming soon',
    title: 'Project #4',
    description:
      'comming soon...',
    category: 'Academic Research',
    status: 'Upcoming',
    tags: ['Research', 'IoT', 'Networks'],
  },
  {
    slug: 'comming soon',
    title: 'Project #5',
    description:
      'comming soon...',
    category: 'Electronics / VLSI',
    status: 'Upcoming',
    tags: ['FPGA', 'Verilog', 'Image Processing'],
  },
  {
    slug: 'comming soon',
    title: 'Project #6',
    description:
      'comming soon....',
    category: 'Python / C Software',
    status: 'Upcoming',
    tags: ['Python', 'Algorithms', 'Education'],
  },
]
