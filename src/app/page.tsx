'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce platform built with Next.js, featuring product catalogs, shopping cart, and payment integration.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    },
    {
      title: 'Design System',
      description:
        'Comprehensive design system and component library for a SaaS application, ensuring consistency across products.',
      tags: ['React', 'TypeScript', 'Storybook', 'Figma'],
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Real-time analytics dashboard with interactive charts and data visualization for business intelligence.',
      tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Mobile App',
      description:
        'Cross-platform mobile application built with React Native, featuring offline support and real-time sync.',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    },
    {
      title: 'Blog Platform',
      description:
        'Full-stack blogging platform with markdown support, image optimization, and SEO-friendly architecture.',
      tags: ['Next.js', 'Markdown', 'Image Optimization', 'SEO'],
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      tags: ['React', 'WebSockets', 'MongoDB', 'Express'],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-warm-gray-50 via-coral-50 to-amber-50 dark:from-warm-gray-900 dark:via-warm-gray-800 dark:to-warm-gray-900"
      >
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-coral via-coral-400 to-amber bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="text-warm-gray-900 dark:text-white">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-warm-gray-600 dark:text-warm-gray-300 max-w-2xl mx-auto mb-8"
            >
              I'm a developer and designer passionate about creating beautiful,
              functional web experiences. Currently exploring the intersection of
              code and design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-warm-gray-800"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-warm-gray-600 dark:text-warm-gray-300 text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my skills in modern web
              development and design.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-warm-gray-50 dark:bg-warm-gray-900"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-coral to-amber rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-coral-200 to-amber-200 dark:from-coral-700 dark:to-amber-700 flex items-center justify-center">
                    <span className="text-warm-gray-600 dark:text-warm-gray-300">
                      Avatar
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-warm-gray-700 dark:text-warm-gray-300 text-lg">
                  I'm a developer with a passion for creating elegant solutions
                  to complex problems. Over the past few years, I've worked on a
                  variety of projects ranging from small startups to large-scale
                  applications.
                </p>
                <p className="text-warm-gray-700 dark:text-warm-gray-300 text-lg">
                  Beyond development, I'm deeply interested in design and UX.
                  I believe that great code and beautiful design go hand in hand,
                  and I'm constantly learning to improve my design skills.
                </p>
                <p className="text-warm-gray-700 dark:text-warm-gray-300 text-lg">
                  When I'm not coding or designing, you'll find me exploring new
                  technologies, contributing to open source, or working on side
                  projects that excite me.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-warm-gray-800"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-warm-gray-600 dark:text-warm-gray-300 text-lg mb-8">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you'd like to discuss a project or just say hello!
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              <motion.div variants={itemVariants}>
                <a
                  href="mailto:hello@example.com"
                  className="text-xl text-coral hover:text-coral-600 dark:hover:text-amber transition-colors"
                >
                  hello@example.com
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-6 text-sm"
              >
                <a
                  href="#"
                  className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
                >
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                (e.target as HTMLFormElement).reset();
              }}
            >
              <motion.input
                variants={itemVariants}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-warm-gray-100 dark:bg-warm-gray-700 rounded-lg border border-warm-gray-200 dark:border-warm-gray-600 focus:outline-none focus:border-coral dark:focus:border-amber transition-colors"
              />
              <motion.input
                variants={itemVariants}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 bg-warm-gray-100 dark:bg-warm-gray-700 rounded-lg border border-warm-gray-200 dark:border-warm-gray-600 focus:outline-none focus:border-coral dark:focus:border-amber transition-colors"
              />
              <motion.textarea
                variants={itemVariants}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-warm-gray-100 dark:bg-warm-gray-700 rounded-lg border border-warm-gray-200 dark:border-warm-gray-600 focus:outline-none focus:border-coral dark:focus:border-amber transition-colors resize-none"
              />
              <motion.div variants={itemVariants}>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-warm-gray-900 dark:bg-warm-gray-950 text-warm-gray-300 py-8">
        <Container className="text-center">
          <p>
            © {new Date().getFullYear()} Wesley Poth. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
