'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { hero } from '@/data/portfolio';
import { fadeContainer, fadeUp } from '@/lib/motion';
import { useTypewriter } from '@/hooks/useTypewriter';

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function HeroSection() {
    const typedText = useTypewriter(hero.description);

    return (
        <section
            id="hero"
            className="flex min-h-screen items-center justify-center bg-white pb-20 pt-20"
        >
            <Container>
                <motion.div
                    variants={fadeContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="mb-6 text-6xl font-light tracking-tight text-orange-600 md:text-8xl"
                    >
                        {hero.titleTop}
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text font-semibold text-transparent">
                            {hero.titleHighlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mb-12 max-w-3xl text-xl font-light leading-relaxed text-gray-600 md:text-2xl"
                    >
                        {typedText}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col justify-center gap-6 sm:flex-row"
                    >
                        <Button onClick={() => scrollToSection('projects')}>View My Work</Button>
                        <Button variant="secondary" onClick={() => scrollToSection('contact')}>
                            Get In Touch
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}