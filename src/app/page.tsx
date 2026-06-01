'use client';

import { motion, easeOut } from 'framer-motion';
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
        ease: easeOut,
      },
    },
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce platform built with Symfony, featuring product catalogs, shopping cart, and payment integration.',
      tags: ['Symfony', 'PHP', 'MySQL', 'Tailwind CSS'],
    },
    {
      title: 'CRUD Application',
      description:
        'A full-featured CRUD application built with Symfony, featuring real-time updates and seamless integration.',
      tags: ['Symfony', 'PHP', 'MySQL', 'Tailwind CSS'],
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Real-time analytics dashboard with interactive charts and data visualization for business intelligence.',
      tags: ['HTML, CSS & JavaScript', 'Chart.JS', 'Node.js', 'MySQL'],
    },
    {
      title: 'Mobile App',
      description:
        'Quiz app made in swift that has a simple and intuitive interface, allowing users to test their knowledge on various topics.',
      tags: ['Swift', 'iOS', 'Android'],
    },
    {
      title: 'Portfolio :)',
      description:
        'Portfolio website built with Next.js, showcasing projects and skills with a focus on performance and SEO.',
      tags: ['Next.js', 'Framer Motion', 'Gsap', 'SEO'],
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-warm-gray-50 to-warm-gray-100 dark:from-warm-gray-900 dark:to-warm-gray-800"
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
              className="text-6xl md:text-8xl font-light mb-6 tracking-tight text-orange-600 dark:text-orange-400"
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-warm-gray-600 dark:text-warm-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            >
              A developer and designer focused on creating beautiful, functional web experiences with thoughtful design and clean code.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
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
        className="py-32 bg-white dark:bg-warm-gray-900"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-warm-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-warm-gray-600 dark:text-warm-gray-400 text-lg max-w-2xl mx-auto font-light">
              A selection of work showcasing modern web development and thoughtful design
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
        className="py-32 bg-warm-gray-50 dark:bg-warm-gray-900"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-12 text-center text-warm-gray-900 dark:text-white">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-400 rounded-3xl overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-700 dark:to-orange-800 flex items-center justify-center">
                    <span className="text-warm-gray-600 dark:text-warm-gray-300 text-xl">
                      <img src="me-portfolio.jpg" alt="Profile" />
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-warm-gray-700 dark:text-warm-gray-300 text-lg font-light leading-relaxed">
                  I'm a developer with a passion for creating elegant solutions
                  to complex problems. Over the past few years, I've worked on a
                  variety of projects ranging from small startups to large-scale
                  applications.
                </p>
                <p className="text-warm-gray-700 dark:text-warm-gray-300 text-lg font-light leading-relaxed">
                  Beyond development, I'm deeply interested in design and UX.
                  I believe that great code and beautiful design go hand in hand,
                  and I'm constantly learning to improve my craft.
                </p>
                <p className="text-warm-gray-700 dark:text-warm-gray-300 text-lg font-light leading-relaxed">
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
        className="py-32 bg-white dark:bg-warm-gray-900"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-warm-gray-900 dark:text-white">
              Let's Connect
            </h2>
            <p className="text-warm-gray-600 dark:text-warm-gray-400 text-lg mb-12 font-light">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you'd like to discuss a project or just say hello!
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-12"
            >
              <motion.div variants={itemVariants}>
                <a
                  href="mailto:hello@example.com"
                  className="text-2xl text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-light"
                >
                  hello@example.com
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-8 text-base"
              >
                <a
                  href="#"
                  className="text-warm-gray-600 dark:text-warm-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-light"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-warm-gray-600 dark:text-warm-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-light"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-warm-gray-600 dark:text-warm-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-light"
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
              className="space-y-4 bg-warm-gray-50 dark:bg-warm-gray-800 p-8 rounded-2xl"
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
                className="w-full px-6 py-3 bg-white dark:bg-warm-gray-700 rounded-xl border border-warm-gray-200 dark:border-warm-gray-600 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 dark:focus:ring-orange-500/20 transition-all font-light"
              />
              <motion.input
                variants={itemVariants}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-3 bg-white dark:bg-warm-gray-700 rounded-xl border border-warm-gray-200 dark:border-warm-gray-600 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 dark:focus:ring-orange-500/20 transition-all font-light"
              />
              <motion.textarea
                variants={itemVariants}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-6 py-3 bg-white dark:bg-warm-gray-700 rounded-xl border border-warm-gray-200 dark:border-warm-gray-600 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 dark:focus:ring-orange-500/20 transition-all resize-none font-light"
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
      <footer className="bg-warm-gray-900 dark:bg-warm-gray-950 text-warm-gray-400 py-8 border-t border-warm-gray-800">
        <Container className="text-center">
          <p className="font-light">
            © {new Date().getFullYear()} Wesley Poth. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
