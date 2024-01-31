// ServiceSteps.tsx

import React from 'react';
import Lottie from 'lottie-react';
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import one from '../assets/animations/1.json';
import two from '../assets/animations/2.json';
import three from '../assets/animations/3.json';
import four from '../assets/animations/4.json';
import five from '../assets/animations/5.json';
import six from '../assets/animations/6.json';
import seven from '../assets/animations/7.json';
import eight from '../assets/animations/8.json';
import nine from '../assets/animations/9.json';

const services = [
  {
    title: '1. Understanding Your Needs',
    description: 'The process begins with a thorough understanding of your business, goals, and challenges. This foundational knowledge guides the journey from where you are to where you want to go.',
    animation: one,
  },
  {
    title: '2. Concepting Ideas',
    description: 'Ideas are then brainstormed and a concrete, actionable plan is developed. Various approaches are considered to ensure the best one is selected for your specific needs.',
    animation: two,
  },
  {
    title: '3. Designing the Solution',
    description: 'A solution tailored to your needs is designed, with careful consideration of user experience, scalability, and future growth.',
    animation: three,
  },
  {
    title: '4. Building the System',
    description: 'The system is then built, with a focus on robustness, security, and efficiency.',
    animation: four,
  },
  {
    title: '5. Testing and Refining',
    description: 'The system undergoes thorough testing, with necessary refinements and tweaks made to ensure it meets your needs and expectations.',
    animation: five,
  },
  {
    title: '6. Integrating Systems',
    description: 'The new system is integrated with your existing systems, ensuring seamless operation for maximum efficiency.',
    animation: six,
  },
  {
    title: '7. Training and Support',
    description: 'Training and support are provided to help your team maximize the benefits of the new system. Any questions are answered and issues resolved.',
    animation: seven,
  },
  {
    title: '8. Analysing data for decision making',
    description: 'Data generated by the system is analyzed to inform decision-making and improve business processes.',
    animation: eight,
  },
  {
    title: '9. Deploying to Production',
    description: 'Finally, the system is deployed to a production environment, with careful monitoring to ensure smooth operation and delivery of expected results.',
    animation: nine,
  },
];

const ServiceSteps: React.FC = () => {
  const centerSlidePercentage = 50; // Adjust this value to center the selected card

  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string) => {
    return hasPrev && window.innerWidth >= 1000 ? (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ left: '11rem' }}
        className="absolute top-1/2 left-0 z-20 p-4 transform -translate-y-1/2"
      >
        <FaArrowLeft size={24} />
      </button>
    ) : null;
  };

  const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string) => {
    return hasNext && window.innerWidth >= 1000 ? (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ right: '11rem' }}
        className="absolute top-1/2 right-0 z-20 p-4 transform -translate-y-1/2"
      >
        <FaArrowRight size={24} />
      </button>
    ) : null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h2 className="text-3xl font-bold text-center  mb-4 md:text-xl text-black p-4 dark:text-white">Efficient Software Engineering Services</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center p-4">
        As a dedicated software engineer, my approach is rooted in meticulous planning and execution to effectively meet your software requirements. The process I follow is outlined in the subsequent steps.
      </p>
      <div className="carousel-container w-full max-w-screen-lg mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          centerMode
          autoPlay={false}
          centerSlidePercentage={centerSlidePercentage}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          selectedItem={0}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center my-8 mx-4 p-4 bg-white dark:bg-gray-900 shadow rounded-lg animate__animated animate__slideInLeft"
            >
              <div className="p-4 min-w-full md:min-w-0">
                <h2 className="lg:text-4xl text-base md:text-2xl lg:text-3xl xl:text-4xl mb-8 font-bold text-gray-900 dark:text-gray-200 mb-2 px-8">
                  {service.title}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 p-8">
                  {service.description}
                </p>
              </div>
              <div className="w-full">
                <Lottie animationData={service.animation} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceSteps;