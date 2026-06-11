'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { contact } from '@/data/portfolio';
import { fadeContainer, fadeUp, sectionHeaderMotion } from '@/lib/motion';
import { useContactForm } from '@/hooks/useContactForm';

const fieldClassName =
    'w-full rounded-xl border border-warm-gray-200 bg-white px-6 py-3 font-light text-warm-gray-900 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/10 disabled:opacity-50';

export function ContactSection() {
    const { isSubmitting, message, handleSubmit } = useContactForm();
    const isSuccess = message.includes('Thank you');

    return (
        <section id="contact" className="bg-white py-32">
            <Container>
                <motion.div {...sectionHeaderMotion} className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-5xl font-light text-black md:text-6xl">
                        {"Let's Connect"}
                    </h2>

                    <p className="mb-12 text-lg font-light text-gray-600">
                        {
                            "I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!"
                        }
                    </p>

                    <motion.div
                        variants={fadeContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-12 space-y-4"
                    >
                        <motion.div variants={fadeUp}>
                            <a
                                href={`mailto:${contact.email}`}
                                className="text-2xl font-light text-orange-600 transition-colors hover:text-orange-700"
                            >
                                {contact.email}
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex justify-center gap-8 text-base">
                            {contact.socials.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-light text-warm-gray-600 transition-colors hover:text-orange-500 dark:text-warm-gray-400 dark:hover:text-orange-400"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.form
                        variants={fadeContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-4 rounded-2xl bg-gray-50 p-8"
                    >
                        <motion.input
                            variants={fadeUp}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            disabled={isSubmitting}
                            className={fieldClassName}
                        />

                        <motion.input
                            variants={fadeUp}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            disabled={isSubmitting}
                            className={fieldClassName}
                        />

                        <motion.textarea
                            variants={fadeUp}
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                            disabled={isSubmitting}
                            className={`${fieldClassName} resize-none`}
                        />

                        {message && (
                            <motion.div
                                variants={fadeUp}
                                className={`rounded-xl p-4 text-sm font-light ${isSuccess
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    }`}
                            >
                                {message}
                            </motion.div>
                        )}

                        <motion.div variants={fadeUp}>
                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </Container>
        </section>
    );
}