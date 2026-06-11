'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProject, projects } from '@/data/portfolio';
import { fadeContainer, fadeUp, sectionHeaderMotion } from '@/lib/motion';

export function ProjectsSection() {
    return (
        <section id="projects" className="bg-white py-32">
            <Container>
                <motion.div {...sectionHeaderMotion} className="mb-20 text-center">
                    <h2 className="mb-6 text-5xl font-light text-black md:text-6xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-light text-gray-600">
                        A selection of work showcasing modern web development and thoughtful design
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.div variants={fadeUp}>
                        <ProjectCard {...featuredProject} index={0} />
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div key={project.title} variants={fadeUp}>
                                <ProjectCard {...project} index={index + 1} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}