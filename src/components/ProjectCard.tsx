'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = Project & {
  index?: number;
};

const cardMotion = {
  hidden: {
    opacity: 0,
    y: 36,
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
  index = 0,
}: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, '0');

  const cardClassName = featured
    ? 'group relative overflow-hidden rounded-[2.25rem] border border-orange-200/70 bg-[#fffaf4] shadow-[0_26px_90px_rgba(234,88,12,0.12)] transition-all duration-500 hover:border-orange-300/80 hover:shadow-[0_32px_110px_rgba(234,88,12,0.18)]'
    : 'group relative flex h-full overflow-hidden rounded-[2rem] border border-warm-gray-200 bg-white shadow-sm transition-all duration-500 hover:border-orange-200/80 hover:shadow-[0_26px_80px_rgba(15,23,42,0.10)]';

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
        y: -8,
      }}
      className={cardClassName}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 overflow-hidden">
        <div className="absolute right-[-3.75rem] top-[-3.75rem] h-28 w-28 rotate-45 bg-orange-500/10 transition-colors duration-500 group-hover:bg-orange-500/20" />
      </div>

      {featured && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-orange-300/40" />
          <div className="absolute left-14 top-14 h-12 w-12 rounded-full border border-orange-300/30" />
        </div>
      )}

      <div
        className={
          featured
            ? 'relative grid w-full gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10'
            : 'relative flex w-full flex-col p-7'
        }
      >
        <div className="relative z-10 flex flex-col">
          <div className="mb-6 flex items-start justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-orange-600">
                {eyebrow || 'Project'}
              </p>

              <motion.h3
                className={
                  featured
                    ? 'max-w-2xl text-4xl font-semibold tracking-tight text-black md:text-5xl'
                    : 'text-2xl font-semibold tracking-tight text-black'
                }
                transition={{ duration: 0.25 }}
              >
                {title}
              </motion.h3>
            </div>

            <div className="hidden shrink-0 text-right sm:block">
              <p className="font-mono text-sm text-orange-600/70">
                /{projectNumber}
              </p>
              <div className="mt-3 h-px w-12 bg-orange-300/70 transition-all duration-500 group-hover:w-16 group-hover:bg-orange-500" />
            </div>
          </div>

          <p
            className={
              featured
                ? 'mb-8 max-w-3xl text-lg font-light leading-relaxed text-warm-gray-800'
                : 'mb-7 font-light leading-relaxed text-warm-gray-700'
            }
          >
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <div className="mb-8 grid gap-3 md:grid-cols-2">
              {highlights.map((highlight, highlightIndex) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: highlightIndex * 0.05,
                    duration: 0.45,
                  }}
                  className="rounded-2xl border border-orange-100 bg-white/70 p-4 text-sm font-light leading-relaxed text-warm-gray-800 shadow-sm backdrop-blur-sm"
                >
                  <span className="mb-3 block h-1 w-8 rounded-full bg-orange-500" />
                  {highlight}
                </motion.div>
              ))}
            </div>
          )}

          <div className={featured ? 'mb-8 flex flex-wrap gap-2' : 'mt-auto mb-7 flex flex-wrap gap-2'}>
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: tagIndex * 0.035,
                  duration: 0.35,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -3,
                }}
                className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-light text-orange-700 transition-colors group-hover:border-orange-200 group-hover:bg-orange-100/70"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {links && links.length > 0 && (
            <div className="flex flex-col gap-3 sm:flex-row">
              {links.map((projectLink, linkIndex) => (
                <motion.a
                  key={projectLink.href}
                  href={projectLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={
                    linkIndex === 0
                      ? 'inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-orange-600/20 transition-colors hover:bg-orange-700'
                      : 'inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-medium text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-50'
                  }
                >
                  <span>{projectLink.label}</span>
                  <motion.span
                    aria-hidden="true"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {featured && (
          <div className="relative hidden min-h-[360px] overflow-hidden rounded-[1.75rem] border border-orange-200/70 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-300 p-6 shadow-inner md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.25),transparent_35%)]" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex justify-between">
                <div className="rounded-2xl bg-white/20 px-4 py-3 text-sm font-medium text-white backdrop-blur-md">
                  Case Study
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                  ↗
                </div>
              </div>

              <div>
                <p className="mb-4 max-w-sm text-sm font-light leading-relaxed text-white/85">
                  Spotify authentication, playlist management, AI analysis, and a
                  polished dashboard experience.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md">
                    <p className="text-3xl font-semibold text-white">AI</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">
                      Analysis
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md">
                    <p className="text-3xl font-semibold text-white">API</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">
                      Spotify
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!featured && image && (
          <div className="mt-6 overflow-hidden rounded-2xl bg-orange-600">
            <motion.img
              src={image}
              alt={title}
              className="h-44 w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        )}

        {!featured && !image && (
          <div className="pointer-events-none absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-xl text-orange-600 transition-all duration-500 group-hover:rotate-6 group-hover:border-orange-200 group-hover:bg-orange-100">
            ↗
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