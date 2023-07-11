import React from 'react';

const ProjectCard: React.FC<{project: {name: string, description: string, url: string, preview: string, codeSnippet: string}}> = ({project}) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={project.preview} alt={project.name} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
        <a href={project.url} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{project.description}</a>
        <p className="mt-2 text-gray-500">Key code snippet:</p>
        <pre className="p-2 bg-gray-200 rounded">
          <code>{project.codeSnippet}</code>
        </pre>
      </div>
    </div>
  </div>
);

export default ProjectCard;
