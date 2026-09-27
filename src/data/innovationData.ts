import { InnovationProject } from '../types';

export const iicHighlights = {
  rating: '4-Star Rating by MoE’s Innovation Cell (MIC), Govt. of India',
  established: 2018,
  patentsFiled: '38+ Patents Filed & Published',
  startupsIncubated: '12 Student & Alumni Startups',
  fundingGrants: '₹45+ Lakhs Seed Grants & Govt. Funding Mobilized',
  mousSigned: '25+ Active Industry Innovation MOUs'
};

export const innovationProjects: InnovationProject[] = [
  {
    id: 'proj-01',
    title: 'Autonomous Agro-Drone for Precision Fertilizer Spraying & Crop Disease Diagnostics',
    team: 'AeroTech Team (Lead: K. Sumanth, IV ECE & CSE)',
    department: 'ECE & CSE Joint Project',
    year: '2025-26',
    category: 'Agritech & Robotics',
    description: 'A GPS-guided quadcopter utilizing multispectral camera telemetry and on-device YOLO vision models to detect sugarcane leaf rust and deliver micro-dosed eco-friendly nutrients.',
    award: '1st Prize at Smart AP State Innovation Expo (Cash Award ₹50,000)'
  },
  {
    id: 'proj-02',
    title: 'Smart Regenerative Braking & BMS for Low-Cost Two-Wheeler Electric Vehicles',
    team: 'EcoVolt Innovations (Lead: P. Harish, IV EEE & MECH)',
    department: 'EEE & Mechanical',
    year: '2025',
    category: 'Clean Energy & E-Mobility',
    description: 'Novel micro-controller topology achieving 14% kinetic energy recovery in city driving and real-time battery thermal runaway prevention with IoT cloud telemetry.',
    award: 'Winner, National Green Vehicle Challenge 2025'
  },
  {
    id: 'proj-03',
    title: 'AI-Powered Telugu-to-English Speech Diagnostic Assistant for Rural PHCs',
    team: 'DeepHealth Lab (Lead: R. Keerthana, IV CSE AI & ML)',
    department: 'CSE (AI & ML)',
    year: '2025-26',
    category: 'Healthcare & Natural Language Processing',
    description: 'Fine-tuned LLM running locally on edge hardware to transcribe rural dialect Telugu medical complaints into structured English electronic health records.',
    award: 'Selected for National AICTE Innovation Fellowship'
  },
  {
    id: 'proj-04',
    title: 'Low-Carbon Geopolymer Concrete Utilizing Chittoor Granite Dust & Fly Ash',
    team: 'GreenBuild Squad (Lead: M. Rajesh, IV Civil)',
    department: 'Civil Engineering',
    year: '2025',
    category: 'Sustainable Materials',
    description: 'Eliminates 70% Portland cement through alkaline activation of regional granite cutting slurry waste, achieving 42 MPa compressive strength.',
    award: 'Best Sustainable Civil Tech Project Award'
  }
];

export const innovationActivities = [
  {
    title: 'Smart India Hackathon (SIH) Internal Selection & Bootcamps',
    date: 'Bi-annual Event',
    description: '36-hour non-stop prototyping hackathon featuring real problem statements from Government ministries and tech conglomerates.'
  },
  {
    title: 'Annual VEMU Innovation & Project Expo (VIP-EXPO)',
    date: 'National Science Day (February 28)',
    description: 'Over 150 student working prototypes displayed before eminent judges from ISRO, DRDO, JNTUA, and corporate R&D wings.'
  },
  {
    title: 'Entrepreneurship Awareness Camp (EAC)',
    date: 'Quarterly',
    description: 'Interactive bootcamps on intellectual property rights (IPR), patent drafting, venture pitching, and MSME subsidy schemas.'
  },
  {
    title: 'Idea-to-Product (I2P) Pre-Incubation Program',
    date: '6-Month Cohort',
    description: 'Mentorship, cloud credits, fab-lab access, and seed support for promising student hardware and software startups.'
  }
];
