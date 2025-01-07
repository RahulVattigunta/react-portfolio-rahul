import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Detail-oriented Full Stack Developer with expertise in designing and building scalable web applications using modern frameworks and technologies. Proficient in both font-end and back-end development, ensuring seamless user experiences and efficient system operations. Leverages experience as a Business Analyst and Scrum Master to facilitate collaborating across teams to gather requirements, analyze needs, and implement innovative solutions that drive technical and business growth. Combines strong problem-solving skills with a deep understanding of web architecture, delivering optimized and robust software solutions.`;

export const ABOUT_TEXT = `I am a skilled computer science professional with a Master’s from California State University Dominguez Hills and a Bachelor's from Presidency University, Bengaluru. My strong foundation in programming, AI, and software engineering, combined with 5 years of full-stack development experience, has allowed me to excel in front-end technologies like React and Next.js, and back-end systems such as Node.js, MySQL, PostgreSQL, and MongoDB.

Additionally, I have significant graphic design experience, having managed around 50 projects using Adobe Creative Cloud to create marketing packages, logos, and social media content. I am driven by solving complex problems, crafting innovative solutions, and delivering exceptional user experiences that fuel business growth.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Full Stack Developer",
    company: "PAYe LLC",
    description: `Collaborated with AI teams to design, develop, and deploy AI chatbot solutions using NLP techniques, enhancing user interactions and business automation. Built and maintained responsive web applications with React.js, Node.js, and JavaScript, ensuring seamless cross-platform experiences. Designed and implemented web scraping solutions for data collection and analysis, maintaining accuracy and integrity. Developed and integrated RESTful APIs to enable efficient communication between frontend and backend services. Managed relational and non-relational databases, including MySQL and MongoDB, ensuring reliable data storage and retrieval.ated comprehensive marketing packages for events using the Adobe Creative Cloud suite, demonstrating 95% proficiency in Graphic Design and UI/UX. Managing and developing social media content, including video recording and editing, I increased event engagement by 30%. I successfully completed around 50 projects, delivering marketing materials and video content that strengthened brand exposure. Additionally, I applied web development techniques to ensure user-friendly and responsive digital content, leading to a 20% improvement in website performance and user experience`,
    technologies: ["TesnsorFlow", "PostgreSQL", "NLP", "MongoDB"],
  },
  {
    year: "Sep 2024 - Jan 2025",
    role: "Business Analyst",
    company: "Inrika",
    description: `Demonstrated expertise in acquiring and applying quantitative and market research skills across diverse projects. Trained team members in statistical methodologies, collaborated on application automation, and maintained documentation tools like the Requirements Traceability Matrix (RTM). Conducted Gap Analysis, manual testing, and User Acceptance Testing (UAT) to ensure data accuracy and system reliability. Prepared security audit reports, led Joint Application Development (JAD) sessions for requirements gathering, and optimized documentation taxonomy for efficient knowledge management.Created comprehensive marketing packages for events using the Adobe Creative Cloud suite, demonstrating 95% proficiency in Graphic Design and UI/UX. Managing and developing social media content, including video recording and editing, I increased event engagement by 30%. I successfully completed around 50 projects, delivering marketing materials and video content that strengthened brand exposure. Additionally, I applied web development techniques to ensure user-friendly and responsive digital content, leading to a 20% improvement in website performance and user experience`,
    technologies: ["JIRA", "Agile", "UAT", "Migration"],
  },
  {
    year: "Sep 2023 - May 2024",
    role: "Graphic Designer",
    company: "California State Univeristy Dominguez Hills",
    description: `Created comprehensive marketing packages for events using the Adobe Creative Cloud suite, demonstrating 95% proficiency in Graphic Design and UI/UX. Managing and developing social media content, including video recording and editing, I increased event engagement by 30%. I successfully completed around 50 projects, delivering marketing materials and video content that strengthened brand exposure. Additionally, I applied web development techniques to ensure user-friendly and responsive digital content, leading to a 20% improvement in website performance and user experience`,
    technologies: ["Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop", "CapCut"],
  },
  {
    year: "Jul 2023 - Jun 2024",
    role: "Director of Student Services",
    company: "Associated Students Inc. CSUDH",
    description: `Acted as a key representative for student concerns regarding Student Services, ensuring their voices were heard and addressed in all relevant matters. Conducted thorough investigations into student issues related to Student Services, demonstrating a commitment to re-solving challenges and improving the student experience. Led the development, implementation, and evaluation of student services provided by ASI, showcasing skills in project management and service enhancement.`,
    technologies: ["Public Speaking", "Advocating", "Leadership", "Engagement"],
  },
  {
    year: "Jan 2021 - Jan 2022",
    role: "Full Stack Engineer",
    company: "Matryxsoft Tech LLP",
    description: `Efficiently guided diverse stakeholders through requirements discovery, analysis, and review, reducing time to market by 15%. Using SQL, Tableau, and Excel, I assessed demographic data to drive strategic planning. I developed dynamic front-end components with React.js and Angular to enhance user experience and reduce page load times, ensuring optimal performance across various devices and browsers. I improved code stability by implementing comprehensive unit and integration tests with frameworks like Jest, Mocha, and JUnit, increasing code coverage by 30% and reducing deployment risks. Additionally, I optimized server-side logic with Node.js and Java, fine-tuned database queries for faster response times, and deployed solutions on AWS and Google Cloud for scalability. Documenting development processes improved onboarding efficiency by 25%`,
    technologies: ["React.js", "Angular", "Node.js", "AWS"],
  },
  {
    year: "May 2021 - Jun 2021",
    role: "Innovative Entreprenuer Intern",
    company: "Saint Louis University",
    description: `Gained hands-on experience in business development, market research, and strategic planning. Assisted in analyzing market trends, developing business models, and identifying new growth opportunities. Collaborated with cross-functional teams to implement innovative solutions and drive business objectives.

`,
    technologies: ["Business Development", "Research", "Strategic Planning", "Problem-Solving"],
  },
  {
    year: "May 2019 - Aug 2019",
    role: "Full Stack Engineer",
    company: "Hindustan Aeronautics Limited",
    description: `Customized eight reports tailored to business requirements and conducted GAP analysis to enhance data accessibility. By identifying key business processes, I led the creation of comprehensive business and system requirements, including functional and non-functional specifications. Collaborating closely with cross-functional teams, I developed and maintained web applications, ensuring seamless integration between front-end and back-end components. I designed and implemented RESTful APIs to facilitate efficient data communication and partnered with DevOps to manage deployments and maintain CI/CD pipelines. I adhered to industry best practices, writing clean, maintainable code and using Git for version control. Additionally, I leveraged frameworks such as React, Node.js, and Express to deliver robust and scalable solutions.`,
    technologies: ["React", "Node.js", "Express"],
  },
];

export const PROJECTS = [
  {
    title: "ChatGPT Proactive Protection Against Malicious Engagements",
    image: project6,
    description:
      "Developed and maintained a Flask-based web application with front-end optimization using SASS and Twig, and Python for detecting toxic language in user text. By leveraging NLP techniques and machine learning models like logistic regression and support vector machines, I ensured effective toxicity classification. I integrated python-docx to dynamically load criteria from Word documents, enhancing customization for diverse user needs. Using scikit-learn, I trained and tested ML algorithms for real-time toxic content assessment, and employed NLTK for text preprocessing to optimize model performance. The responsive user interface was built with Bootstrap, HTML/CSS, JavaScript, and AJAX for seamless real-time updates. Comprehensive error handling and user feedback mechanisms, along with testing using pytest, ensured system reliability and model accuracy.",
    technologies: ["Flask", "Python", "scikit-learn", "Bootstrap"],
  },
  {
    title: "Enterprise Electronic Health Record (EHR) System",
    image: project1,
    description:
      "The project focuses on implementing an Enterprise Electronic Health Record (EHR) system across multiple clinical departments within a healthcare facility. This initiative aims to integrate existing clinical information systems and paper-based records into a cohesive digital platform. By providing unified access to patient information, the EHR will enhance clinical efficiency, improve patient safety through automated alerts, support real-time decision-making for healthcare providers, and streamline administrative processes. Ultimately, this implementation seeks to foster a more effective and responsive healthcare environment.",
    technologies: ["Data Integration", "Regulatory Compliance", "System Testing"],
  },
  {
    title: "Chatbot for Car Manufacturer",
    image: project2,
    description:
      "Developed a versatile chatbot application using Large Language Models (LLMs) to improve customer service and support our human agents. The chatbot performs various functions, such as: Sentiment analysis on car reviews,Answering customer inquiries ,Summarizing and translating text.",
    technologies: ["Python", "Hugging Face Transformers", "Flask", "NLTK", "SpaCy"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Event Posters",
    image: project4,
    description:
      "As part of my role at the student union, I created visually engaging event posters and recorded promotional videos. Utilizing Adobe Illustrator and Photoshop, I designed eye-catching graphics that effectively communicated the event details and attracted student interest. For video content, I employed CapCut and Adobe Premiere Pro to edit and produce high-quality promotional videos, ensuring a polished final product that showcased the vibrancy of our events.",
    technologies: ["Graphic Design", "Video Editing", "Creativity", "Project Management"],
  },
  {
    title: "Drug Safety Analysis",
    image: project5,
    description:
      "In this project, I evaluated the significance of adverse reactions using data provided by Hbiostat, focusing on symptoms such as headache, abdominal pain, dyspepsia, upper respiratory infection, and chronic obstructive airway disease (COAD). I conducted hypothesis testing to analyze the prevalence and severity of these adverse effects, aiming to identify any statistically significant correlations and provide insights into their impact on patient health. The findings contribute to a better understanding of the safety profile of the treatment under investigation.",
    technologies: ["Statistical Analysis", "Data Interpretation", "Software Proficiency"],
  },
];

export const CONTACT = {
  address: "5050 E Garford St Long Beach, CA 90815 ",
  phoneNo: "+1(562)380-5022",
  email: "vattiguntarahul9@gmail.com",
};
