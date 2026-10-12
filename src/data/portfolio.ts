/**
 * Portfolio content for Cheepuru Vasu Dev.
 * Keep claims accurate and update this file as skills and projects grow.
 */
export type Palette = { from: string; via: string; to: string; accent: string };
const green: Palette = { from: '#04150d', via: '#07552e', to: '#030806', accent: '#39ff88' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const ocean: Palette = { from: '#06180f', via: '#12452c', to: '#05080d', accent: '#9cffc2' };
const violet: Palette = { from: '#08170e', via: '#14552d', to: '#050806', accent: '#39ff88' };

export const profile = {
  fullName: 'CHEEPURU VASU DEV',
  displayName: 'Vasu Dev',
  firstName: 'DEV',
  seriesTag: 'CYBERSECURITY',
  originalLabel: 'A DEV ORIGINAL',
  role: 'Cybersecurity Student & Aspiring Ethical Hacker',
  tagline: ['Cybersecurity Student', 'Ethical Hacking', 'Linux & Networking'],
  intro: 'A B.Tech Cyber Security student at Avanthi’s Research & Technological Academy, interested in ethical hacking, network security, vulnerability analysis, and learning to secure digital systems through hands-on practice.',
  location: 'Andhra Pradesh, India',
  email: 'vasudevcheepuru@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/cheepuru-vasu-dev-418641407',
    github: 'https://github.com/dev-igris',
  },
  resumePdf: '/assets/Dev_Resume.pdf',
  portrait: { src: '/assets/dev-profile-cyber.png', alt: 'Cinematic portrait of Vasu Dev with neon-green cybersecurity lighting' },
  interests: ['Ethical Hacking', 'Network Security', 'Vulnerability Assessment'],
};

export const education = [
  { school: "Avanthi's Research & Technological Academy", place: 'Andhra Pradesh, India', degree: 'B.Tech — Computer Science and Engineering (Cyber Security)', period: 'Expected June 2027', score: 'CGPA 7.9' },
  { school: 'Sri Gayatri Junior College', place: 'Vizianagaram, Andhra Pradesh', degree: 'Intermediate — MPC', period: 'March 2023', score: '852/1000' },
  { school: 'ZPH School, Dattirajeru', place: 'Vizianagaram, Andhra Pradesh', degree: 'SSC — Class X', period: 'March 2021', score: 'CGPA 9.6' },
];

export const experience = [
  { company: 'Independent Cybersecurity Learning', role: 'Cybersecurity Student', place: 'Personal Labs', period: 'Ongoing', points: [
    'Practicing network scanning and traffic analysis using tools such as Nmap and Wireshark in learning environments.',
    'Exploring ethical hacking and penetration-testing fundamentals in controlled labs.',
    'Building foundational knowledge of Kali Linux, web security, and vulnerability assessment.',
  ] },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string; stack: string[];
  build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};
export const projects: Project[] = [
  {
    id: 'network-analysis-lab', title: 'Network Analysis Lab', year: 'Learning Lab',
    genre: 'NETWORKING • SECURITY • LINUX',
    logline: 'A learning project focused on understanding network discovery and traffic analysis in controlled environments.',
    stack: ['Kali Linux', 'Nmap', 'Wireshark', 'Networking'],
    build: ['Practiced basic host discovery and service enumeration on authorized lab targets using Nmap.', 'Used Wireshark to inspect network packets and build familiarity with common protocols and traffic patterns.'],
    features: ['Authorized lab scanning', 'Service and port discovery basics', 'Packet inspection', 'Network protocol learning'],
    metrics: [{ value: 'Nmap', label: 'network discovery' }, { value: 'Wireshark', label: 'traffic analysis' }],
    palette: green, motif: 'flow',
  },
  {
    id: 'web-security-learning-lab', title: 'Web Security Learning Lab', year: 'Learning Lab',
    genre: 'WEB SECURITY • ETHICAL HACKING',
    logline: 'A practice track for learning web application security concepts with intentionally vulnerable or authorized lab applications.',
    stack: ['Kali Linux', 'Burp Suite', 'Web Security', 'OWASP Concepts'],
    build: ['Learning how HTTP requests and responses work and how to inspect them with browser tools and Burp Suite.', 'Studying common web vulnerability classes in training labs and focusing on safe, authorized testing.'],
    features: ['HTTP request inspection', 'Web security fundamentals', 'Controlled practice environments', 'Responsible disclosure principles'],
    metrics: [{ value: 'Web', label: 'application security' }, { value: 'Lab', label: 'authorized practice' }],
    palette: jade, motif: 'shield',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'cybersecurity-learning', title: 'Cybersecurity Skills Development', org: 'Independent Learning', detail: 'Developing practical knowledge of network security, ethical hacking concepts, and vulnerability assessment.', laurel: 'Ongoing Learning' },
  { id: 'security-awareness', title: 'Cyber Safety Awareness', org: 'Peer Awareness', detail: 'Sharing awareness of password safety, suspicious links, malicious emails, and safer internet practices.', laurel: 'Security Awareness' },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [
  { issuer: 'Infosys Springboard', name: 'Cyber Security and Applied Ethical Hacking', link: 'https://infyspringboard.onwingspan.com/' },
  { issuer: 'Infosys Springboard', name: 'Mastering Ethical Hacking', link: 'https://infyspringboard.onwingspan.com/' },
  { issuer: 'Infosys Springboard', name: 'Hands-on Web Penetration Testing with Kali Linux', link: 'https://infyspringboard.onwingspan.com/' },
  { issuer: 'Infosys Springboard', name: 'Mastering Kali Linux', link: 'https://infyspringboard.onwingspan.com/' },
  { issuer: 'Qubitech', name: 'Quantum Computing', link: 'https://www.google.com/search?q=Qubitech+Quantum+Computing' },
  { issuer: 'NPTEL', name: 'Artificial Intelligence', link: 'https://nptel.ac.in/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Programming', subtitle: 'Languages and scripting fundamentals', skills: [
    { name: 'Python', mono: 'Py' }, { name: 'C', mono: 'C' }, { name: 'JavaScript', mono: 'Js' }, { name: 'SQL', mono: 'Sq' },
  ] },
  { id: 'web', title: 'Web Fundamentals', subtitle: 'Building blocks of the web', skills: [
    { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' },
  ] },
  { id: 'security', title: 'Cybersecurity Tools', subtitle: 'Hands-on learning and lab practice', skills: [
    { name: 'Kali Linux', mono: 'K' }, { name: 'Nmap', mono: 'Nm' }, { name: 'Wireshark', mono: 'Ws' },
    { name: 'Burp Suite', mono: 'Bs' }, { name: 'Metasploit', mono: 'Ms' }, { name: 'John the Ripper', mono: 'Jt' }, { name: 'Hydra', mono: 'Hy' },
  ] },
  { id: 'database-os', title: 'Databases & Systems', subtitle: 'Foundational platforms', skills: [
    { name: 'MySQL', mono: 'My' }, { name: 'Windows', mono: 'W' }, { name: 'Linux', mono: 'Lx' },
  ] },
];
export const skillEvidence: Record<string, string[]> = {
  Python: ['Programming fundamentals and cybersecurity learning'],
  C: ['Programming fundamentals'],
  JavaScript: ['Web fundamentals'],
  SQL: ['Database fundamentals'],
  HTML: ['Web fundamentals'],
  CSS: ['Web fundamentals'],
  'Kali Linux': ['Cybersecurity learning labs'],
  Nmap: ['Network discovery practice'],
  Wireshark: ['Network traffic analysis practice'],
  'Burp Suite': ['Web security learning labs'],
  Metasploit: ['Cybersecurity tool familiarity'],
  'John the Ripper': ['Password security tool familiarity'],
  Hydra: ['Authentication security tool familiarity'],
  MySQL: ['Database fundamentals'],
  Linux: ['Linux command-line learning'],
  Windows: ['Operating system familiarity'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: '2021 – 2023', synopsis: 'School and intermediate studies built the foundation for a technology-focused path.', episodes: [
    { code: 'S01 E01', title: 'Class X', description: 'Completed SSC at ZPH School, Dattirajeru, with CGPA 9.6.', tags: ['SSC', 'CGPA 9.6'], runtime: 'March 2021', palette: ocean },
    { code: 'S01 E02', title: 'Intermediate MPC', description: 'Studied Mathematics, Physics and Chemistry at Sri Gayatri Junior College, Vizianagaram; score 852/1000.', tags: ['MPC', '852/1000'], runtime: 'March 2023', palette: green },
  ] },
  { number: 2, title: 'Cybersecurity Path', period: '2023 – 2027', synopsis: 'Working toward a B.Tech in Computer Science and Engineering with a Cyber Security focus.', episodes: [
    { code: 'S02 E01', title: 'The Cybersecurity Student', description: 'B.Tech CSE (Cyber Security) at Avanthi’s Research & Technological Academy, expected June 2027; CGPA 7.9.', tags: ['B.Tech', 'Cyber Security', 'CGPA 7.9'], runtime: 'Expected June 2027', palette: green },
    { code: 'S02 E02', title: 'Learning by Doing', description: 'Practicing network analysis and security concepts in controlled learning labs.', tags: ['Kali Linux', 'Nmap', 'Wireshark'], runtime: 'Ongoing', palette: jade },
  ] },
];

export const topPicks = [
  { label: 'Current focus', title: 'Ethical Hacking', detail: 'Learning security testing responsibly in controlled environments', palette: green },
  { label: 'Network toolkit', title: 'Nmap + Wireshark', detail: 'Network discovery and traffic analysis fundamentals', palette: jade },
  { label: 'Linux environment', title: 'Kali Linux', detail: 'Security tools and command-line practice', palette: ocean },
  { label: 'Web security', title: 'Burp Suite', detail: 'Learning to inspect web requests in authorized labs', palette: violet },
  { label: 'Education', title: 'B.Tech Cyber Security', detail: 'Expected graduation: June 2027', palette: green },
  { label: 'Core value', title: 'Responsible Testing', detail: 'Permission, safety, and ethical practice come first', palette: jade },
];

export const introSlides = [
  { kicker: 'Education', title: 'B.Tech · Cyber Security', lines: ['Avanthi’s Research & Technological Academy', 'Expected June 2027'], chips: ['CGPA 7.9'] },
  { kicker: 'Skills', title: 'Security + Systems', lines: ['Python, C, JavaScript, SQL, HTML, CSS', 'Kali Linux, Nmap, Wireshark, Burp Suite, Metasploit'], chips: ['Linux', 'Networking', 'Web Security'] },
  { kicker: 'Learning', title: 'Hands-on Labs', lines: ['Network discovery and packet analysis', 'Web security fundamentals in controlled environments'] },
  { kicker: 'Certifications', title: 'Security Learning', lines: ['Infosys Springboard · Ethical Hacking · Kali Linux', 'NPTEL Artificial Intelligence · Qubitech Quantum Computing'] },
  { kicker: 'Current mission', title: 'Learn. Test. Secure.', lines: ['Building practical foundations in cybersecurity', 'Focused on ethical and authorized security practice'] },
];

export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export type ProfileId = 'dev' | 'recruiter' | 'security';
export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  { id: 'dev', name: 'Dev', blurb: 'The complete cybersecurity portfolio', color: '#39ff88', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] as SectionId[] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Education, skills and resume first', color: '#9cffc2', order: ['story', 'about', 'skills', 'originals', 'journey', 'moments', 'picks'] as SectionId[] },
  { id: 'security', name: 'Security', blurb: 'Tools, labs and learning journey first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'about', 'moments', 'picks', 'story'] as SectionId[] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Education & learning', palette: green },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: ocean },
  originals: { nav: 'Labs', card: 'Learning Projects', meta: `${projects.length} Learning Projects`, palette: jade },
  picks: { nav: 'Focus', card: 'Areas of Focus', meta: `${topPicks.length} Highlights`, palette: green },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Certifications', card: 'Certifications & Awareness', meta: `${achievements.length} Highlights • ${certifications.length} Certifications`, palette: jade },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
