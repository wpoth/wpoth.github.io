'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = Project;

const cardMotion = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  links,
  featured = false,
  eyebrow,
  highlights,
}: ProjectCardProps) {
  const cardClassName = featured
    ? 'group relative overflow-hidden rounded-[2rem] border border-orange-200/80 bg-gradient-to-br from-orange-50 via-white to-white shadow-[0_18px_70px_rgba(234,88,12,0.10)] transition-all duration-500 hover:border-orange-300 hover:shadow-[0_28px_90px_rgba(234,88,12,0.18)]'
    : 'group relative h-full overflow-hidden rounded-[1.75rem] border border-warm-gray-200 bg-white shadow-sm transition-all duration-500 hover:border-orange-200 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)]';

  const cardContent = (
    <motion.article
      variants={cardMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: featured ? 1.01 : 1.025,
      }}
      className={cardClassName}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-orange-100/80 blur-3xl" />
      </div>

      <motion.div
        className="pointer-events-none absolute left-6 right-6 top-0 h-px overflow-hidden"
        initial={{ opacity: 0, scaleX: 0.65 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'center' }}
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-10 right-10 top-0 h-8 bg-gradient-to-b from-orange-500/12 to-transparent blur-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      />

      {featured && (
        <div className="absolute right-6 top-6 z-10 hidden rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-orange-700 shadow-sm backdrop-blur-md md:inline-flex">
          Featured
        </div>
      )}

      {image && (
        <div className="relative h-52 w-full overflow-hidden bg-orange-600">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70" />
        </div>
      )}

      <div className={featured ? 'relative p-8 md:p-10' : 'relative flex h-full flex-col p-7'}>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-orange-600"
          >
            {eyebrow}
          </motion.p>
        )}

        <div className="mb-4 flex items-start justify-between gap-4">
          <motion.h3
            className={
              featured
                ? 'text-3xl font-semibold tracking-tight text-black md:text-4xl'
                : 'text-2xl font-semibold tracking-tight text-black'
            }
            transition={{ duration: 0.25 }}
          >
            {title}
          </motion.h3>

          <motion.span
            className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-orange-50 text-orange-700 transition-colors group-hover:border-orange-200 group-hover:bg-orange-600 group-hover:text-white sm:flex"
            whileHover={{ rotate: -12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            aria-hidden="true"
          >
            ↗
          </motion.span>
        </div>

        <p
          className={
            featured
              ? 'mb-7 max-w-3xl text-lg font-light leading-relaxed text-warm-gray-800'
              : 'mb-6 font-light leading-relaxed text-warm-gray-700'
          }
        >
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mb-7 grid gap-3 text-sm font-light text-warm-gray-800 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <motion.li
                key={highlight}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="flex gap-3"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className={featured ? 'mb-8 flex flex-wrap gap-2' : 'mt-auto mb-7 flex flex-wrap gap-2'}>
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.35,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              className={
                featured
                  ? 'rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-sm font-light text-orange-700 shadow-sm backdrop-blur-sm'
                  : 'rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-light text-orange-700 transition-colors group-hover:border-orange-200 group-hover:bg-orange-100/70'
              }
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {links.map((projectLink, index) => (
              <motion.a
                key={projectLink.href}
                href={projectLink.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={
                  index === 0
                    ? 'inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-orange-600/20 transition-colors hover:bg-orange-700'
                    : 'inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-medium text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-50'
                }
              >
                <span>{projectLink.label}</span>
                <motion.span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );

  if (link && (!links || links.length === 0)) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}