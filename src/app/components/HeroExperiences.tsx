import React from 'react';
import 'animate.css'; // import animate.css
import Header from './Header';


const experiences = [
    {
        "id": "63d342e8-eb03-4da2-8ef8-7149b62d8745",
        "url": "https://www.ajxtec.com.br/",
        "date": {
            "end": "2016-02-01",
            "start": "2015-05-01"
        },
        "level": "Intern",
        "title": "AJX Tech",
        "summary": "Internship in the field of electrical and mechanical production. I carried out the assembly and validation of projects for nautical towers in piers and marinas. Assembled electrical panels, hydraulic connections, and structural components. I also contributed to the sizing and production of electrical projects.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Electric/Mechanical Production Assistant"
    },
    {
        "id": "cf1034c0-d107-4c89-8ad7-922abd602aff",
        "url": "",
        "date": {
            "end": "2016-12-10",
            "start": "2016-03-10"
        },
        "level": "Intern",
        "title": "Projeto Novos Valores",
        "summary": "The \"New Values\" program was a project by the government of the state of Santa Catarina aimed at introducing students from technical courses to the job market. Upon entering the program, I was assigned to the position of electrical services assistant, where I had the opportunity to experience the routine of services in all state public offices in the capital city. I was involved in implementing electrical projects, performing maintenance on machines and electrical installations, and improving my report-writing skills.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Electrician Assistant"
    },
    {
        "id": "d887b88f-981e-4005-9b24-94142b12ec64",
        "url": "",
        "date": {
            "end": "2017-08-10",
            "start": "2017-02-10"
        },
        "level": "Intern",
        "title": "Jiggly Kids",
        "summary": "At Jiggly Kids, I had the opportunity to work as an assistant in electronic and mechanical assembly and production in the field of electric children's vehicles. My responsibilities included sizing and assembly of electronic components, maintenance of direct current motors, assembly and soldering of chassis, and overall structural testing.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Eletronic/Mechanical Production Assistant"
    },
    {
        "id": "a1252c75-1cb2-4cb1-9e81-7b790d435113",
        "url": "https://www.decathlon.com.br",
        "date": {
            "end": "2018-03-10",
            "start": "2018-01-10"
        },
        "level": "",
        "title": "Decathlon",
        "summary": "Customer Service Representative: Cash Handling, Customer Assistance, and General Customer Service",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Customer Service Assistant"
    },
    {
        "id": "daca180e-87a1-4a11-81ff-1689ebc21bbe",
        "url": "https://www.hostgator.com.br",
        "date": {
            "end": "2019-06-01",
            "start": "2018-09-10"
        },
        "level": "Junior",
        "title": "Hostgator",
        "summary": "My first taste of the tech world was nothing short of enlightening. I joined a tech support team where I got hands-on experience helping customers with their issues and questions. This direct user interaction allowed me to quickly grasp the basics of HTML, CSS, PHP, Wordpress, along with essential web hosting tools like Cpanel and WHMCS. Working in web hosting support made me understand the importance of helping small businesses make their digital debut, as well as ensuring big companies maintain top-notch performance and reliability online (zero downtimes). This experience underscored how tech can be a game changer for businesses of all sizes.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Technical Suport"
    },
    {
        "id": "d431fadd-392d-44da-94db-34adb5cdeb9a",
        "url": "https://www.beiramarshopping.com.br/",
        "date": {
            "end": "2020-05-01",
            "start": "2019-06-10"
        },
        "level": "Mid Level",
        "title": "Beiramar Shopping",
        "summary": "As a maintenance technician, I was responsible for carrying out a variety of electrical installations, adhering strictly to the specifics of project plans. Among my primary duties were maintaining electrical panels, alarm systems, closed-circuit television (CCTV), substations, motors, and generators. Additionally, it was my responsibility to strictly follow regular maintenance routines and inspections, ensuring the preservation of high safety and efficiency standards.\n\n\n\n\n",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Maintenance Technician"
    },
    {
        "id": "e78b4482-3f6b-45d5-9f34-a4d9134815ce",
        "url": "https://www.intelbras.com/",
        "date": {
            "end": "2021-05-10",
            "start": "2020-11-10"
        },
        "level": "Junior",
        "title": "Intelbras",
        "summary": "I was a key player in the development team for analog cameras. This role encompassed a diverse range of tasks including the meticulous creation of technical documentation, conducting rigorous tests, and validating features and specifications. I worked on solutions for industrial manufacturing, which involved strategic negotiations with international suppliers. In addition to these specific duties, I performed a wide range of general engineering tasks integral to electronic product development. This included designing and prototyping, performing feasibility studies, conducting failure mode and effect analysis, planning and executing product certification, and collaborating with cross-functional teams to ensure the successful execution of the product from concept to launch.\n",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Product Development Technician"
    },
    {
        "id": "c57a7406-d92f-4009-970e-8bc01fc93ccb",
        "url": "https://fontespromotora.com.br/",
        "date": {
            "end": "2021-10-01",
            "start": "2021-05-10"
        },
        "level": "Junior",
        "title": "Fontes Promotora",
        "summary": "My role as a Software Engineer included developing backend software for internal services using Python and JavaScript, showcasing my ability to employ multiple languages in solving complex problems. My work went beyond just coding, as I was also engaged in webscraping, automating tasks, and performing sophisticated data modeling and cleansing. I contributed to software architecture decisions, applying design patterns to create efficient, scalable solutions.\n\nI regularly employed a range of powerful tools and technologies, including MongoDB, PostgreSQL, Django, Flask, FastAPI, Node.js, ReactJS, along with cloud services such as AWS EC2 and AWS Elastic Beanstalk. My ability to navigate these diverse technologies demonstrated my adaptability and willingness to stay current in an evolving technological landscape.\n\nFurthermore, my role involved cross-functional collaboration with other teams, communication with stakeholders, and mentoring junior team members. My contributions positively impacted the overall software development lifecycle, leading to more efficient, high-quality, and robust applications.\n\nIn addition, I have also worked with Smartsheets automation using Python to integrate project management with backend APIs. This involved leveraging the Smartsheets API to automate tasks and streamline project workflows. By integrating Smartsheets with backend systems, I facilitated seamless data synchronization, real-time updates, and improved collaboration between different teams and stakeholders.\n\nUsing Python, I developed scripts and applications to interact with the Smartsheets API, allowing for the retrieval and manipulation of project data, creation of new sheets, updating existing sheets, and tracking progress. This integration helped bridge the gap between project management tools and the backend software systems, enabling efficient coordination and enhancing overall productivity.\n\nMy experience with Smartsheets automation further highlights my ability to leverage diverse technologies and APIs to create comprehensive solutions that address complex business requirements.\n\n\n\n\n\n",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Software Engineer"
    },
    {
        "id": "c8031be8-acbd-466d-89e0-62ad8781e26e",
        "url": "https://www.citebonline.com.br/",
        "date": {
            "end": "2022-03-01",
            "start": "2021-10-10"
        },
        "level": "Junior",
        "title": "Fundação Citeb",
        "summary": "My work involved the design and development of intuitive front-end projects on Windows, Mac, and mobile platforms for large companies, with a keen focus on enhancing user experience and usability. A notable project was creating a system to capture images and videos seamlessly across Windows and Mac interfaces. This system not only provided robust capturing capabilities but also included a feature similar to streaming platforms for recording screens and cameras.\n\nIn building these solutions, I utilized technologies like React for the user interface, Node.js for the backend services, and Electron to ensure desktop application compatibility across both Windows and Mac platforms. This project showcased my ability to merge technology with user-centric design, resulting in a well-received product that met the users' needs while ensuring a smooth, intuitive interface.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Software Engineer"
    },
    {
        "id": "0856d411-6ecf-48c6-83ab-06d99f47bdd5",
        "url": "https://www.pecsmart.com.br/",
        "date": {
            "end": "2023-01-01",
            "start": "2022-10-01"
        },
        "level": "Intern",
        "title": "Pecsmart",
        "summary": "At Pecsmart, I worked part-time as a Backend Software Engineer:\n\n- Utilized Python and Django for developing IoT integrations with bespoke devices.\n- Integrated Django APIs with MySQL relational databases and Raspberry Pis via Balena CLI.\n- Collected smart data like silo fill levels, animal coughs, and AI-assisted measurements like pig weight via volume estimation in images.\n- Provided intelligent tracking of key production indicators in animal farming.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Software Engineer backend"
    },
    {
      "id": "0856d411-6ecf-48c6-83ab-06d99f47bdd5",
      "url": "https://www.qitech.com.br/",
      "date": {
          "end": "2023-02-01",
          "start": "2022-03-01"
      },
      "level": "Software Engineer backend",
      "title": "Qi-Tech",
      "summary": "As a Fullstack Software Developer at QiTech, my key responsibilities encompassed:\n\n- Crafting scalable Python backend solutions for financial microservices, such as bank-as-a-service and credit collaterals.\n- Developing interactive, responsive web interfaces for data and service interaction with NextJs.\n- Implementing Test-Driven Development (TDD) with pytest for rigorous testing.\n- Utilizing Kubernetes and cloud technologies for efficient application deployment and management.\n- Automating routines and messaging for improved efficiency.\n- Adhering to best practices in software architecture, design patterns, and data governance.\n- Leveraging GCP and Grafana for application reliability and observability.\n- Catering to the specific needs of the Brazilian SaaS market.",
      "keywords": [],
      "levelNum": 0,
      "subtitle": "Software Engineer backend"
      },
      {
        "id": "0856d411-6ecf-48c6-83ab-06d99f47bdd5",
        "url": "https://www.simulatedreality.io/",
        "date": {
            "end": "-",
            "start": "2023-02-01"
        },
        "level": "Fullstack Software engineer",
        "title": "Simulated Reality",
        "summary": "As part of my role in SimulatedReality, I had the chance to manage content systems for 3D experiences across sectors like gaming, education, healthcare, and wellness:\n\n- Built robust monolithic infrastructures using Node.js APIs and Express.\n- Implemented unit testing with Jest for code reliability.\n- Leveraged Ajax and jQuery for interface development and frontend requests.\n- Created data visualizations using Chart.js and 3D.js.\n- Utilized Redis, RabbitMQ design patterns for efficient data handling.\n- Ensured FedRAMP and HIPAA compliance via Red Hat OpenShift containers and CI/CD GitOps automation.",
        "keywords": [],
        "levelNum": 0,
        "subtitle": "Software Engineer Fullstack"
    }
    ].reverse();

    const HeroExperiences: React.FC = () => (
      <div className="mt-[-100px] pt-[100px] p-10 mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-xl border-l border-r border-gray-200 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 text-gray-900">
      <Header/>
        {experiences.map((experience, index) => (
          <div key={index} className="mx-16 mt-12 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-4 animate__animated animate__slideInLeft">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                {experience.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                {experience.subtitle}
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700">
              <dl>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Duration
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                  {new Date(experience.date.start).toISOString().split('T')[0]} - {experience.date.end === "-" ? "Current Job" : new Date(experience.date.end).toISOString().split('T')[0]}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Summary
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                    {experience.summary}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    URL
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                    <a href={experience.url} target="_blank" rel="noopener noreferrer" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400">
                      {experience.url}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    );
                


export default HeroExperiences;
