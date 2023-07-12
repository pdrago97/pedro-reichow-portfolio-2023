import React from 'react';
import ProjectCard from './ProjectsCard';
import Header from './Header';
import Image3 from '../assets/2points.png';
import Image1 from '../assets/analysis.png';
import Image2 from '../assets/calculus.png';
import Image4 from '../assets/pdfs.png';


const ProjectsContent: React.FC = () => {
  const projects = [
    {
      name: 'Data Science Dashboard with Python/Streamlit',
      description: 'An interactive dashboard built with Python and Streamlit for data analysis and visualization. It features various data manipulation capabilities and supports multiple types of charts for comprehensive data exploration.',
      url: 'https://github.com/pdrago97/streamlit-test-dash',
      image: Image1,
      preview: 'https://pdrago97-streamlit-test-dash-app1-055rbs.streamlit.app/',
      codeSnippet: 'const example = "This is a code snippet from Project 1."'
    },
    {
      name: 'Calculus visualization with Python/Streamlit',
      description: 'A Python-based application that visualizes calculus concepts using Streamlit. It helps students understand complex calculus concepts through interactive visualizations and simulations.',
      url: 'https://github.com/pdrago97/streamlit-calculus',
      image: Image2,
      preview: 'https://pdrago97-streamlit-calculus-calculus-cynpwh.streamlit.app/',
      codeSnippet: 'const example = "This is a code snippet from Project 2."'
    },
    {
      name: 'Calculating the Distance between two points with Python/Streamlit',
      description: 'A Python application that calculates the distance between two points. Built with Streamlit, it provides a user-friendly interface for inputting coordinates and displays the calculated distance in a clear and understandable format.',
      url: 'https://github.com/pdrago97/streamlit-2pd',
      image: Image3,
      preview: 'https://pdrago97-streamlit-2pd-app-svy5ky.streamlit.app/',
      codeSnippet: 'const example = "This is a code snippet from Project 2."'
    },
    {
      name: 'PDF Reader and Audio Converter with Python/Streamlit',
      description: 'A tool that reads PDF files and converts them into audio files. Built with Python and Streamlit, it provides an easy-to-use interface for uploading PDFs and outputs high-quality audio files for listening on the go.',
      url: 'https://github.com/pdrago97/pdf-reader',
      image: Image4,
      preview: 'https://pdrago97-pdf-reader-pdf-reader-vlyf6a.streamlit.app/',
      codeSnippet: 'const example = "This is a code snippet from Project 2."'
    },
  ];

  return (
    <div className="mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-xl border-l border-r border-gray-200 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-800 text-gray-900">
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
