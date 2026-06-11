'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ExperienceItem {
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: 'ICT employee',
        company: 'Hollandse Zorggroep',
        location: 'Berkel en Rodenrijs',
        period: 'april 2026 - june 2026',
        type: 'Fulltime job',
        description:
            'Worked on an internal healthcare administration web application used to support client processes, task tracking, email automation, and data visibility. Helped interns with software projects and educated them where necessary',
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
        period: '2025 - april 2026',
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
        company: 'None (Personal project)',
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
        technologies: ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Boostrap', 'NodeJS', 'Java'],
    },
];

export function ExperienceTimeline() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const line = lineRef.current;

        if (!section || !line) return;

        const context = gsap.context(() => {
            gsap.set(line, {
                scaleY: 0,
                transformOrigin: 'top center',
            });

            gsap.to(line, {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    scrub: 0.7,
                },
            });

            gsap.utils.toArray<HTMLElement>('.experience-card').forEach((card, index) => {
                const direction = index % 2 === 0 ? -80 : 80;

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: direction,
                        y: 40,
                        scale: 0.96,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 82%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });

            gsap.utils.toArray<HTMLElement>('.experience-dot').forEach((dot) => {
                gsap.fromTo(
                    dot,
                    {
                        scale: 0,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'back.out(1.8)',
                        scrollTrigger: {
                            trigger: dot,
                            start: 'top 84%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, section);

        return () => context.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative overflow-hidden bg-gray-50 py-32"
        >
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-orange-200 md:block">
                <div ref={lineRef} className="h-full w-full bg-orange-600" />
            </div>

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-6">
                <div className="mb-20 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                        Work history
                    </p>
                    <h2 className="mb-6 text-5xl font-light text-black md:text-6xl">
                        Experience
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-600">
                        A LinkedIn-style overview of my education, internship experience,
                        and development projects.
                    </p>
                </div>

                <div className="relative space-y-10 md:space-y-16">
                    {experiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={`${experience.role}-${experience.company}`}
                                className={`relative grid items-center gap-8 md:grid-cols-[1fr_72px_1fr] ${isLeft ? '' : 'md:[&_.experience-card]:col-start-3'
                                    }`}
                            >
                                <article
                                    className={`experience-card rounded-[1.75rem] border border-orange-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl ${isLeft ? 'md:col-start-1' : 'md:col-start-3'
                                        }`}
                                >
                                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="mb-2 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-orange-700">
                                                {experience.type}
                                            </p>
                                            <h3 className="text-2xl font-semibold text-black">
                                                {experience.role}
                                            </h3>
                                            <p className="mt-1 text-base font-light text-orange-700">
                                                {experience.company}
                                            </p>
                                        </div>

                                        <div className="text-left sm:text-right">
                                            <p className="text-sm font-medium text-black">
                                                {experience.period}
                                            </p>
                                            <p className="text-sm font-light text-gray-500">
                                                {experience.location}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mb-5 font-light leading-relaxed text-gray-700">
                                        {experience.description}
                                    </p>

                                    <ul className="mb-6 space-y-3">
                                        {experience.achievements.map((achievement) => (
                                            <li key={achievement} className="flex gap-3 text-sm text-gray-700">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                                                <span className="font-light leading-relaxed">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-light text-orange-700"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </article>

                                <div className="experience-dot absolute left-0 top-8 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 shadow-lg shadow-orange-600/20 md:static md:col-start-2 md:mx-auto">
                                    <div className="h-3 w-3 rounded-full bg-white" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}