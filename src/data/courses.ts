import { Course } from '../types';

export const coursesData: Course[] = [
  // B.Tech Programs
  {
    id: 'btech-cse',
    name: 'B.Tech in Computer Science & Engineering',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 180,
    eligibility: '10+2 with MPC (Mathematics, Physics, Chemistry) and valid AP EAPCET rank / Management Quota',
    code: '05',
    overview: 'Core software engineering, algorithms, database systems, networking, distributed systems, and modern AI/cloud technologies.'
  },
  {
    id: 'btech-aiml',
    name: 'B.Tech in CSE (Artificial Intelligence & Machine Learning)',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 120,
    eligibility: '10+2 with MPC and qualifying AP EAPCET / JEE Main rank or Category-B Management eligibility',
    code: '42',
    overview: 'In-depth specialization in deep learning, natural language processing, computer vision, robotics, and generative AI.'
  },
  {
    id: 'btech-ai',
    name: 'B.Tech in CSE (Artificial Intelligence)',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    eligibility: '10+2 with MPC and valid AP EAPCET score',
    code: '43',
    overview: 'Foundational and applied cognitive systems, automated knowledge discovery, neural reasoning, and ethical AI.'
  },
  {
    id: 'btech-aids',
    name: 'B.Tech in CSE (AI & Data Science)',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    eligibility: '10+2 with MPC and valid AP EAPCET score',
    code: '44',
    overview: 'Big data pipelines, data visualization, predictive modeling, machine learning operations, and statistical computing.'
  },
  {
    id: 'btech-csit',
    name: 'B.Tech in Computer Science & Information Technology',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    eligibility: '10+2 with MPC and valid AP EAPCET score',
    code: '45',
    overview: 'Enterprise computing, cloud infrastructure, full-stack application development, DevOps, and cyber risk governance.'
  },
  {
    id: 'btech-ece',
    name: 'B.Tech in Electronics & Communication Engineering',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 180,
    eligibility: '10+2 with MPC and qualifying AP EAPCET rank',
    code: '04',
    overview: 'VLSI chip design, embedded systems, 5G wireless communications, signal processing, and IoT smart devices.'
  },
  {
    id: 'btech-eee',
    name: 'B.Tech in Electrical & Electronics Engineering',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    eligibility: '10+2 with MPC and qualifying AP EAPCET rank',
    code: '02',
    overview: 'Power generation, renewable solar & wind grids, electric vehicle drivetrains, and industrial automation.'
  },
  {
    id: 'btech-mech',
    name: 'B.Tech in Mechanical Engineering',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    eligibility: '10+2 with MPC and qualifying AP EAPCET rank',
    code: '03',
    overview: 'CAD/CAM manufacturing, thermal engineering, robotics, automotive design, and 3D printing technologies.'
  },
  {
    id: 'btech-civil',
    name: 'B.Tech in Civil Engineering',
    degree: 'B.Tech',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    eligibility: '10+2 with MPC and qualifying AP EAPCET rank',
    code: '01',
    overview: 'Structural engineering, smart city transportation, environmental hydraulics, and geo-technical construction.'
  },
  // PG M.Tech Programs
  {
    id: 'mtech-cse',
    name: 'M.Tech in Computer Science & Engineering',
    degree: 'M.Tech',
    duration: '2 Years (4 Semesters)',
    intake: 18,
    eligibility: 'B.E. / B.Tech in CSE/IT or equivalent with valid AP PGECET or GATE qualification',
    code: '58',
    overview: 'Advanced research in distributed systems, machine learning architectures, and high-performance computing.'
  },
  {
    id: 'mtech-vlsi',
    name: 'M.Tech in VLSI & Embedded Systems',
    degree: 'M.Tech',
    duration: '2 Years (4 Semesters)',
    intake: 18,
    eligibility: 'B.E. / B.Tech in ECE/EEE or equivalent with valid AP PGECET or GATE qualification',
    code: '57',
    overview: 'ASIC/FPGA architecture, analog/digital IC design, nano-electronics, and real-time firmware development.'
  },
  // Management & Applications
  {
    id: 'mba-program',
    name: 'Master of Business Administration (MBA)',
    degree: 'MBA',
    duration: '2 Years (4 Semesters)',
    intake: 120,
    eligibility: 'Any recognized Bachelor degree with at least 50% marks and valid AP ICET qualification',
    code: 'MB',
    overview: 'Specializations in HR, Finance, Marketing, Business Analytics, and International Supply Chain Management.'
  },
  {
    id: 'mca-program',
    name: 'Master of Computer Applications (MCA)',
    degree: 'MCA',
    duration: '2 Years (4 Semesters)',
    intake: 60,
    eligibility: 'BCA / B.Sc in CS or IT with Mathematics at 10+2 or Graduation level, and valid AP ICET rank',
    code: 'MC',
    overview: 'Enterprise software architecture, cloud platforms, full-stack frameworks, and IT product management.'
  },
  // Polytechnic Diploma
  {
    id: 'diploma-dcse',
    name: 'Diploma in Computer Engineering (DCSE)',
    degree: 'Diploma',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: '10th Standard (SSC) with AP POLYCET qualifying rank',
    code: 'D-CSE',
    overview: 'Foundational programming, web technologies, computer hardware, operating systems, and networking.'
  },
  {
    id: 'diploma-dece',
    name: 'Diploma in Electronics & Communication (DECE)',
    degree: 'Diploma',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: '10th Standard (SSC) with AP POLYCET qualifying rank',
    code: 'D-ECE',
    overview: 'Electronic devices, circuits, digital electronics, microprocessors, and communication systems.'
  }
];
