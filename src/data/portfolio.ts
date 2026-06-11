export interface ProjectLink {
    label: string;
    href: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
    links?: ProjectLink[];
    featured?: boolean;
    eyebrow?: string;
    highlights?: string[];
}

export interface ExperienceItem {
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const hero = {
    titleTop: 'Crafting Digital',
    titleHighlight: 'Experiences',
    description:
        'A developer and designer focused on creating beautiful, functional web experiences with thoughtful design and clean code.',
};

export const featuredProject: Project = {
    title: 'VibeForge',
    eyebrow: 'Featured project',
    description:
        'An AI-powered Spotify playlist manager where users can log in with Spotify, view and manage their playlists, remove tracks, generate playlist analysis, and discover new tracks based on a vibe or artist.',
    tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'NextAuth',
        'Spotify Web API',
        'AI Integration',
        'Vercel',
    ],
    highlights: [
        'Built secure Spotify authentication with NextAuth and OAuth scopes.',
        'Integrated Spotify playlist, track, search, create, and update flows.',
        'Added AI-generated playlist analysis and track suggestions.',
        'Designed a responsive dashboard-style interface with smooth interactions.',
    ],
    links: [
        {
            label: 'View live project',
            href: 'https://vibeforge-music.vercel.app/',
        },
        {
            label: 'View code',
            href: 'https://github.com/wpoth/VibeForge',
        },
    ],
};

export const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        description:
            'A modern e-commerce platform built with Symfony, featuring product catalogs, shopping cart, and payment integration.',
        tags: ['Symfony', 'PHP', 'MySQL', 'Tailwind CSS'],
    },
    {
        title: 'Healthcare administration system',
        description:
            'A web application that uses Nedap database data to access client records, handle client administration, and show client history.',
        tags: ['PHP', 'MySQL', 'PHPMailer', 'Chart.js'],
    },
    {
        title: 'Analytics Dashboard',
        description:
            'Real-time analytics dashboard with interactive charts and data visualization for business intelligence.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'MySQL'],
    },
    {
        title: 'Mobile App',
        description:
            'Quiz app made in Swift with a simple and intuitive interface, allowing users to test their knowledge on various topics.',
        tags: ['Swift', 'iOS'],
    },
    {
        title: 'This Portfolio :)',
        description:
            'Portfolio website built with Next.js, showcasing projects and skills with a focus on performance and SEO.',
        tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'GSAP', 'SEO'],
    },
];

export const experiences: ExperienceItem[] = [
    {
        role: 'ICT employee',
        company: 'Hollandse Zorggroep',
        location: 'Berkel en Rodenrijs',
        period: 'April 2026 - June 2026',
        type: 'Full-time job',
        description:
            'Worked on an internal healthcare administration web application used to support client processes, task tracking, email automation, and data visibility. Helped interns with software projects and educated them where necessary.',
        achievements: [
            'Assisted three interns with projects.',
            'Helped setting up a work from home environment.',
            'Further enhanced my internship project.',
        ],
        technologies: ['PHP', 'MySQL', 'PHPMailer', 'Chart.js', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        role: 'Software Developer Intern',
        company: 'Hollandse Zorggroep',
        location: 'Berkel en Rodenrijs',
        period: '2025 - April 2026',
        type: 'Internship',
        description:
            'Worked on an internal healthcare administration web application used to support client processes, task tracking, email automation, and data visibility.',
        achievements: [
            'Built client process workflows where users can complete steps and trigger automated emails.',
            'Integrated PHPMailer for dynamic email notifications based on client and employee data.',
            'Worked with Nedap Ons database data to display client records and process information.',
            'Implemented role-based visibility so different teams only see relevant process steps.',
        ],
        technologies: ['PHP', 'MySQL', 'PHPMailer', 'Chart.js', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        role: 'Full-stack Developer',
        company: 'VibeForge',
        location: 'Personal Project',
        period: '2026',
        type: 'Portfolio Project',
        description:
            'Designed and developed an AI-powered Spotify playlist manager with Spotify authentication, playlist management, and AI-generated music suggestions.',
        achievements: [
            'Implemented Spotify login using NextAuth and OAuth scopes.',
            'Built playlist, track, search, create, delete, and update flows with the Spotify Web API.',
            'Added AI playlist analysis and AI-generated track suggestions.',
            'Deployed the application to Vercel with a responsive dashboard-style interface.',
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NextAuth', 'Spotify Web API', 'AI'],
    },
    {
        role: 'Software Development Student',
        company: 'ROC Mondriaan',
        location: 'The Netherlands',
        period: '2022 - Present',
        type: 'Education',
        description:
            'Studying software development with a focus on web development, databases, application logic, and practical project-based learning.',
        achievements: [
            'Worked on multiple web projects using PHP, JavaScript, SQL, and modern front-end tooling.',
            'Built portfolio projects focused on clean UI, responsive layouts, and practical functionality.',
            'Developed stronger interest in front-end development, UX/UI, and design-focused coding.',
        ],
        technologies: ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'NodeJS', 'Java'],
    },
];

export const aboutParagraphs = [
    "I'm a developer with a passion for creating elegant solutions to complex problems. Over the past few years, I've worked on a variety of projects ranging from small startups to larger applications.",
    "Beyond development, I'm deeply interested in design and UX. I believe that great code and beautiful design go hand in hand, and I'm constantly learning to improve my craft.",
    "When I'm not coding or designing, you'll find me exploring new technologies, contributing to open source, or working on side projects that excite me.",
];

export const contact = {
    email: 'w.poth1001@gmail.com',
    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/wpoth',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/wesley-poth-41a1262b4/',
        },
    ],
};