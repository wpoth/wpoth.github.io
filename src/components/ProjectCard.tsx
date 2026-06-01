'use client';

import React from 'react';

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
    <div className="group bg-white dark:bg-warm-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-warm-gray-100 dark:border-warm-gray-700 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-orange-500 before:to-orange-400 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300">
      {image && (
        <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-700 dark:to-orange-800 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-warm-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-warm-gray-600 dark:text-warm-gray-400 mb-6 leading-relaxed font-light">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-warm-gray-100 dark:bg-warm-gray-700 text-warm-gray-700 dark:text-warm-gray-200 text-sm rounded-full font-light hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (link) {
    return <a href={link}>{CardContent}</a>;
  }

  return CardContent;
};
