"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  links?: ProjectLink[];
  featured?: boolean;
  eyebrow?: string;
  highlights?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
  links,
  featured = false,
  eyebrow,
  highlights,
}) => {
  const cardClassName = featured
    ? "group relative overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-warm-gray-50 shadow-sm transition-all duration-300"
    : "group relative overflow-hidden rounded-2xl border border-warm-gray-200 bg-white shadow-sm transition-all duration-300";

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={cardClassName}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {featured && (
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
      )}

      {image && (
        <div className="h-48 w-full overflow-hidden bg-orange-600">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      <div className={featured ? "relative p-8 md:p-10" : "relative p-8"}>
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-orange-600">
            {eyebrow}
          </p>
        )}

        <motion.h3
          className={
            featured
              ? "mb-4 text-3xl font-semibold text-black md:text-4xl"
              : "mb-3 text-2xl font-semibold text-black"
          }
          whileHover={{ x: 4 }}
        >
          {title}
        </motion.h3>

        <p
          className={
            featured
              ? "mb-6 max-w-3xl text-lg font-light leading-relaxed text-warm-gray-800"
              : "mb-6 font-light leading-relaxed text-black"
          }
        >
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mb-7 grid gap-3 text-sm font-light text-warm-gray-800 md:grid-cols-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mb-7 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="rounded-full bg-orange-600 px-3 py-1 text-sm font-light text-slate-50 transition-colors hover:bg-orange-700"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {links.map((projectLink, index) => (
              <a
                key={projectLink.href}
                href={projectLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  index === 0
                    ? "inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-700"
                    : "inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-medium text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-50"
                }
              >
                {projectLink.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link && (!links || links.length === 0)) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};