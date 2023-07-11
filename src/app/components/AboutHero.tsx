import React from 'react';
import Image from 'next/image';
import HomeSocialIcons from './HomeSocialIcons';
import bridge from '../assets/bridge.jpeg';
import love from '../assets/love.jpg';
import museum from '../assets/museum.jpg';
import Header from '../components/Header'

import 'animate.css'; // import animate.css

const HomeContent: React.FC = () => (
  <div className="mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-xl border-l border-r border-gray-200 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-800">
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mx-4 sm:mx-20 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-4 animate__animated animate__slideInLeft">
        Pedro Reichow Software Engineer, Fullstack Developer and DevOps.
      </h1>
      <p className="mx-4 sm:mx-20 text-base leading-loose text-zinc-600 dark:text-zinc-400 animate__animated animate__slideInLeft">
        I'm Pedro, a software engineer based in Florianópolis, Santa Catarina, Brazil. With a strong skill set and experience in fullstack applications and devops tools,
        I provide high-quality solutions that drive business growth and efficiency.
      </p>
      <HomeSocialIcons />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mx-8">
        <div className="relative overflow-hidden rounded-xl h-64">
          <Image src={museum} alt="Photo 2" className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 animate__animated animate__slideInLeft" />
        </div>
        <div className="relative overflow-hidden rounded-xl h-64">
          <Image src={bridge} alt="Photo 1" className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 animate__animated animate__slideInLeft" />
        </div>
        <div className="relative overflow-hidden rounded-xl h-64">
          <Image src={love} alt="Photo 3" className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 animate__animated animate__slideInLeft" />
        </div>
      </div>
        <div className="mt-36 mr-96">

          <p className="mx-4 sm:mx-20 text-base leading-loose text-zinc-600 dark:text-zinc-400 animate__animated animate__slideInLeft">
          Describing oneself can be a challenge, but in my personal life, I strive to embody qualities such as reserve, discipline, and a strong commitment to maintaining good health. Living in the beautiful surroundings of Florianópolis Island, I find solace in nature and frequently embark on travels to broaden my horizons. Above all, I hold my family in the highest regard and prioritize their well-being. Additionally, I am fortunate to be engaged and share a loving home with my partner, fostering a sense of harmony and joy in our lives.
          </p>

        </div>
          <h2 className="mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-100 animate__animated animate__slideInLeft">Download my resume!</h2>
          <div className="flex space-x-4 mt-2">
            <a href="../assets/curriculum/curriculumPedroReichowPt.pdf" download className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 animate__animated animate__slideInLeft">Português</a>
            <a href="../assets/curriculum/curriculumPedroReichowEn" download className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 animate__animated animate__slideInLeft">English</a>
          </div>
    </div>
  </div>
);

export default HomeContent;
