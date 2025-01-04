import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import type { Project } from '../types/project';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="font-display text-4xl text-gold mb-12">Our Projects</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="h-full flex items-end p-6">
                                    <div>
                                        <h3 className="font-display text-2xl text-offwhite mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="font-caption text-offwhite/80">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
