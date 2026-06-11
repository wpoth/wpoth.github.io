'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/data/portfolio';

export function ExperienceTimeline() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const path = pathRef.current;

        if (!section || !path) return;

        const context = gsap.context(() => {
            const pathLength = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    end: 'bottom 35%',
                    scrub: 0.7,
                },
            });

            gsap.utils.toArray<HTMLElement>('.experience-card').forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 28 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 84%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });

            gsap.utils.toArray<HTMLElement>('.experience-dot').forEach((dot) => {
                gsap.fromTo(
                    dot,
                    { opacity: 0, scale: 0.7 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.35,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: dot,
                            start: 'top 86%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, section);

        return () => context.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="relative overflow-hidden bg-gray-50 py-32">
            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-6">
                <div className="mb-20 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
                        Work history
                    </p>
                    <h2 className="mb-6 text-5xl font-light text-black md:text-6xl">Experience</h2>
                    <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-600">
                        A LinkedIn-style overview of my education, internship experience, and development
                        projects.
                    </p>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    <svg
                        className="pointer-events-none absolute left-4 top-0 z-0 h-full w-10 overflow-visible md:left-1/2 md:-translate-x-1/2"
                        viewBox="0 0 80 1000"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M40 0 C 18 110, 62 210, 40 320 C 18 430, 62 530, 40 640 C 18 750, 62 850, 40 1000"
                            stroke="rgba(251, 146, 60, 0.22)"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            ref={pathRef}
                            d="M40 0 C 18 110, 62 210, 40 320 C 18 430, 62 530, 40 640 C 18 750, 62 850, 40 1000"
                            stroke="rgb(234, 88, 12)"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="relative z-10 space-y-12 md:space-y-16">
                        {experiences.map((experience, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={`${experience.role}-${experience.company}`}
                                    className="relative grid gap-6 pl-14 md:grid-cols-[1fr_80px_1fr] md:pl-0"
                                >
                                    <div className={`experience-card ${isLeft ? 'md:col-start-1' : 'md:col-start-3'}`}>
                                        <article className="rounded-[1.75rem] border border-orange-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                <div>
                                                    <p className="mb-2 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-orange-700">
                                                        {experience.type}
                                                    </p>
                                                    <h3 className="text-2xl font-semibold text-black">{experience.role}</h3>
                                                    <p className="mt-1 text-base font-light text-orange-700">
                                                        {experience.company}
                                                    </p>
                                                </div>

                                                <div className="text-left sm:text-right">
                                                    <p className="text-sm font-medium text-black">{experience.period}</p>
                                                    <p className="text-sm font-light text-gray-500">{experience.location}</p>
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
                                    </div>

                                    <div className="experience-dot absolute left-0 top-8 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 shadow-lg shadow-orange-600/20 md:left-1/2 md:-translate-x-1/2">
                                        <div className="h-3 w-3 rounded-full bg-white" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}