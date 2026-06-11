'use client';

import { useLayoutEffect, useRef, useState } from 'react';
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

interface DotPosition {
    x: number;
    y: number;
}

interface CardBounds {
    left: number;
    right: number;
    top: number;
    bottom: number;
    centerY: number;
    anchorX: number;
    anchorY: number;
    anchorSide: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
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

function getCardLoopPath(card: CardBounds) {
    const radius = 28;
    const inset = 10;

    const { left, right, top, bottom, anchorX, anchorY, anchorSide } = card;

    if (anchorSide === 'right') {
        return [
            `L ${right + inset} ${anchorY}`,
            `L ${right + inset} ${top + radius}`,
            `Q ${right + inset} ${top} ${right - radius} ${top}`,
            `L ${left + radius} ${top}`,
            `Q ${left} ${top} ${left} ${top + radius}`,
            `L ${left} ${bottom - radius}`,
            `Q ${left} ${bottom} ${left + radius} ${bottom}`,
            `L ${right - radius} ${bottom}`,
            `Q ${right + inset} ${bottom} ${right + inset} ${bottom - radius}`,
            `L ${right + inset} ${anchorY}`,
            `L ${anchorX} ${anchorY}`,
        ].join(' ');
    }

    return [
        `L ${left - inset} ${anchorY}`,
        `L ${left - inset} ${top + radius}`,
        `Q ${left - inset} ${top} ${left + radius} ${top}`,
        `L ${right - radius} ${top}`,
        `Q ${right} ${top} ${right} ${top + radius}`,
        `L ${right} ${bottom - radius}`,
        `Q ${right} ${bottom} ${right - radius} ${bottom}`,
        `L ${left + radius} ${bottom}`,
        `Q ${left - inset} ${bottom} ${left - inset} ${bottom - radius}`,
        `L ${left - inset} ${anchorY}`,
        `L ${anchorX} ${anchorY}`,
    ].join(' ');
}

function getConnectorPath(from: CardBounds, to: CardBounds) {
    const midY = from.anchorY + (to.anchorY - from.anchorY) / 2;

    return [
        `C ${from.anchorX} ${midY}`,
        `${to.anchorX} ${midY}`,
        `${to.anchorX} ${to.anchorY}`,
    ].join(' ');
}

export function ExperienceTimeline() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);
    const cardShellRefs = useRef<Array<HTMLElement | null>>([]);

    const [svgPath, setSvgPath] = useState('');
    const [dots, setDots] = useState<DotPosition[]>([]);
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const timeline = timelineRef.current;

        if (!section || !timeline) return;

        let animationContext: gsap.Context | null = null;

        const buildPath = () => {
            const timelineRect = timeline.getBoundingClientRect();
            const isDesktop = window.innerWidth >= 768;

            const cards: CardBounds[] = cardShellRefs.current
                .filter(Boolean)
                .map((card) => {
                    const rect = card!.getBoundingClientRect();

                    const padding = isDesktop ? 20 : 14;
                    const left = rect.left - timelineRect.left - padding;
                    const right = rect.right - timelineRect.left + padding;
                    const top = rect.top - timelineRect.top - padding;
                    const bottom = rect.bottom - timelineRect.top + padding;
                    const centerY = top + (bottom - top) / 2;

                    const cardCenterX = left + (right - left) / 2;
                    const timelineCenterX = timelineRect.width / 2;

                    const anchorSide: 'left' | 'right' = !isDesktop
                        ? 'left'
                        : cardCenterX < timelineCenterX
                            ? 'right'
                            : 'left';

                    const anchorX = anchorSide === 'right' ? right : left;

                    return {
                        left,
                        right,
                        top,
                        bottom,
                        centerY,
                        anchorX,
                        anchorY: centerY,
                        anchorSide,
                    };
                });

            if (cards.length === 0) return;

            const pathParts: string[] = [];

            cards.forEach((card, index) => {
                if (index === 0) {
                    pathParts.push(`M ${card.anchorX} ${card.anchorY}`);
                }

                pathParts.push(getCardLoopPath(card));

                const nextCard = cards[index + 1];

                if (nextCard) {
                    pathParts.push(getConnectorPath(card, nextCard));
                }
            });

            setSvgPath(pathParts.join(' '));

            setDots(
                cards.map((card) => ({
                    x: card.anchorX,
                    y: card.anchorY,
                }))
            );

            setSvgSize({
                width: timelineRect.width,
                height: timelineRect.height,
            });

            requestAnimationFrame(() => {
                const path = pathRef.current;

                if (!path) return;

                const pathLength = path.getTotalLength();

                animationContext?.revert();

                animationContext = gsap.context(() => {
                    gsap.set(path, {
                        strokeDasharray: pathLength,
                        strokeDashoffset: pathLength,
                    });

                    gsap.to(path, {
                        strokeDashoffset: 0,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: timeline,
                            start: 'top 75%',
                            end: 'bottom 35%',
                            scrub: 0.8,
                            invalidateOnRefresh: true,
                        },
                    });

                    gsap.utils
                        .toArray<HTMLElement>('.experience-card-content')
                        .forEach((card, index) => {
                            const direction = index % 2 === 0 ? -70 : 70;

                            gsap.fromTo(
                                card,
                                {
                                    opacity: 0,
                                    x: window.innerWidth >= 768 ? direction : 0,
                                    y: 44,
                                    scale: 0.97,
                                },
                                {
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    duration: 0.85,
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
                                opacity: 0,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                scale: 1,
                                duration: 0.45,
                                ease: 'back.out(1.9)',
                                scrollTrigger: {
                                    trigger: dot,
                                    start: 'top 85%',
                                    toggleActions: 'play none none reverse',
                                },
                            }
                        );
                    });

                    ScrollTrigger.refresh();
                }, section);
            });
        };

        buildPath();

        const resizeObserver = new ResizeObserver(() => {
            buildPath();
        });

        resizeObserver.observe(timeline);
        window.addEventListener('resize', buildPath);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', buildPath);
            animationContext?.revert();
        };
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative overflow-hidden bg-gray-50 py-32"
        >
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

                <div ref={timelineRef} className="relative">
                    <svg
                        className="pointer-events-none absolute left-0 top-0 z-0 overflow-visible"
                        width={svgSize.width}
                        height={svgSize.height}
                        viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d={svgPath}
                            stroke="rgba(251, 146, 60, 0.18)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            ref={pathRef}
                            d={svgPath}
                            stroke="rgb(234, 88, 12)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {dots.map((dot, index) => (
                        <div
                            key={`${dot.x}-${dot.y}-${index}`}
                            className="experience-dot pointer-events-none absolute z-20 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 shadow-lg shadow-orange-600/20"
                            style={{
                                left: dot.x,
                                top: dot.y,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <div className="h-3 w-3 rounded-full bg-white" />
                        </div>
                    ))}

                    <div className="relative z-10 space-y-16 md:space-y-20">
                        {experiences.map((experience, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <article
                                    key={`${experience.role}-${experience.company}`}
                                    ref={(element) => {
                                        cardShellRefs.current[index] = element;
                                    }}
                                    className={`relative md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'
                                        }`}
                                >
                                    <div className="experience-card-content rounded-[1.75rem] border border-orange-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl">
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
                                                <li
                                                    key={achievement}
                                                    className="flex gap-3 text-sm text-gray-700"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                                                    <span className="font-light leading-relaxed">
                                                        {achievement}
                                                    </span>
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
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}