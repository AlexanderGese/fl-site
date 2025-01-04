import React from 'react';
import type { Project } from '../types/project';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full overflow-y-auto">
          <button
              className="absolute top-4 right-4 text-red-500"
              onClick={onClose}
          >
            Close ✖
          </button>
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded mb-4"
          />
          <p className="mb-6">{project.fullDescription}</p>
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="rounded shadow-md w-full h-auto object-cover"
                />
            ))}
          </div>
        </div>
      </div>
  );
}
