'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { aboutParagraphs } from '@/data/portfolio';
import { sectionHeaderMotion } from '@/lib/motion';

export function AboutSection() {
    return (
        <section id="about" className="bg-gray-50 py-32">
            <Container>
                <motion.div {...sectionHeaderMotion} className="mx-auto max-w-5xl">
                    <h2 className="mb-12 text-center text-5xl font-light text-black md:text-6xl">
                        About Me
                    </h2>

                    <div className="grid items-center gap-16 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg">
                                <Image
                                    src="/me-portfolio.jpg"
                                    alt="Profile"
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {aboutParagraphs.map((paragraph, index) => (
                                <p
                                    key={paragraph}
                                    className={`text-lg font-light leading-relaxed ${index === 0
                                            ? 'text-black'
                                            : 'text-warm-gray-700 dark:text-warm-gray-300'
                                        }`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}