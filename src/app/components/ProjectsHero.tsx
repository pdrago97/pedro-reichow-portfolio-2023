import React from 'react';
import ProjectCard from './ProjectsCard';
import Header from './Header';

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a description of Project 1.',
      url: 'https://github.com/username/project1',
      preview: 'https://example.com/images/project1.jpg',
      codeSnippet: 'const example = "This is a code snippet from Project 1."'
    },
    {
      name: 'Project 2',
      description: 'This is a description of Project 2.',
      url: 'https://github.com/username/project2',
      preview: 'https://example.com/images/project2.jpg',
      codeSnippet: 'const example = "This is a code snippet from Project 2."'
    },
    // Add more projects as needed...
  ];

  return (
    <div className="mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-xl border-l border-r border-gray-200 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-800">
      <Header />
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
