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
    <div className="move-up-on-hover bg-white dark:bg-warm-gray-800 rounded-lg overflow-hidden border border-warm-gray-200 dark:border-warm-gray-700">
      {image && (
        <div className="w-full h-48 bg-gradient-to-br from-coral-200 to-amber-200 dark:from-coral-700 dark:to-amber-700 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-warm-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-warm-gray-600 dark:text-warm-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-coral-100 dark:bg-coral-900 text-coral-700 dark:text-coral-200 text-sm rounded-full"
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
