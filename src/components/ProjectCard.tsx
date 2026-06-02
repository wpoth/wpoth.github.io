"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-warm-gray-200  shadow-sm transition-all duration-300"
    >
      {" "}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />{" "}
      {image && (
        <div className="h-48 w-full overflow-hidden bg-orange-600">
          {" "}
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />{" "}
        </div>
      )}{" "}
      <div className="p-8">
        {" "}
        <motion.h3
          className="mb-3 text-2xl font-semibold text-black"
          whileHover={{ x: 4 }}
        >
          {" "}
          {title}{" "}
        </motion.h3>{" "}
        <p className="mb-6 leading-relaxed font-light text-black">
          {" "}
          {description}{" "}
        </p>{" "}
        <div className="flex flex-wrap gap-2">
          {" "}
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="rounded-full  px-3 py-1 text-sm font-light text-slate-50 transition-colors bg-orange-600 hover:bg-orange-700"
            >
              {" "}
              {tag}{" "}
            </motion.span>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {" "}
        {CardContent}{" "}
      </a>
    );
  }
  return CardContent;
};
