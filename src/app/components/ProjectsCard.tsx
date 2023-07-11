import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const ProjectCard: React.FC<{project: {name: string, description: string, url: string, image: any, preview: string, codeSnippet: string}}> = ({project}) => (
  <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md md:max-w-2xl m-3 dark:bg-gray-900">
    <div className="md:flex p-6 items-center">
      <div className="md:flex-shrink-0 flex items-center justify-center">
        <Image className="h-48 w-full object-cover md:w-48" src={project.image} alt={project.name} width={500} height={300} />
      </div>
      <div className="p-6 text-gray-800 dark:text-gray-100 flex flex-col justify-center items-start flex-grow">
        <div className="block mt-1 text-lg leading-tight font-medium text-teal-500 dark:text-teal-300">
          <div className="uppercase tracking-wide text-sm font-semibold">{project.name}</div>
        </div>
        <p className="mt-2 text-base leading-loose text-gray-700 dark:text-gray-400 animate__animated animate__slideInLeft">{project.description}</p>
        <div className="mt-4">
          <a href={project.url} className="text-teal-500 hover:underline dark:text-teal-300">
            <FaGithub /> GitHub
          </a>
          <a href={project.preview} className="ml-4 text-teal-500 hover:underline dark:text-teal-300">
            Preview
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
