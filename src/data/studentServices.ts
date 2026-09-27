import { StudentService } from '../types';

export const studentPortalCards: StudentService[] = [
  {
    id: 'student-login',
    title: 'Student ERP Portal',
    description: 'Access individual student dashboard, internal marks, fee payments, and academic profile.',
    icon: 'LogIn',
    actionText: 'Portal Login',
    route: '/students?tab=login',
    badge: 'Daily Access'
  },
  {
    id: 'results',
    title: 'Examination Results',
    description: 'Check semester-end regular and supplementary exam results, grade sheets, and challenge valuations.',
    icon: 'FileCheck',
    actionText: 'Check Results',
    route: '/students?tab=results',
    badge: 'Updated'
  },
  {
    id: 'examination',
    title: 'Exam Branch & Circulars',
    description: 'Download hall tickets, exam schedules, revaluation forms, and academic regulations.',
    icon: 'FileSpreadsheet',
    actionText: 'View Exam Cell',
    route: '/students?tab=exam',
    badge: 'Exam Cell'
  },
  {
    id: 'attendance',
    title: 'Attendance Tracker',
    description: 'Monitor daily subject-wise and aggregate percentage attendance in real-time.',
    icon: 'CalendarCheck',
    actionText: 'View Attendance',
    route: '/students?tab=attendance'
  },
  {
    id: 'timetable',
    title: 'Class & Lab Timetable',
    description: 'Semester section-wise weekly class schedule, laboratory sessions, and tutorial hours.',
    icon: 'Clock',
    actionText: 'Download Timetable',
    route: '/students?tab=timetable'
  },
  {
    id: 'student-clubs',
    title: 'Student Clubs & Activities',
    description: 'Join Coding Club, Robotics & IoT Guild, Literary Society, NSS, Cultural Wings, and Sports Teams.',
    icon: 'Award',
    actionText: 'Explore Clubs',
    route: '/students?tab=clubs'
  },
  {
    id: 'alumni',
    title: 'VEMU Alumni Association',
    description: 'Connect with thousands of graduates worldwide, discover mentorship, and alumni meetups.',
    icon: 'Share2',
    actionText: 'Alumni Network',
    route: '/students?tab=alumni'
  },
  {
    id: 'library',
    title: 'Central Digital Library',
    description: 'Access 35,000+ volumes, IEEE e-journals, DELNET, NPTEL video archives, and remote book renewals.',
    icon: 'BookOpen',
    actionText: 'OPAC Catalog',
    route: '/students?tab=library'
  },
  {
    id: 'moodle',
    title: 'Moodle LMS & E-Learning',
    description: 'Online course materials, assignment submissions, digital quizzes, and faculty lecture notes.',
    icon: 'Laptop',
    actionText: 'Launch Moodle',
    route: '/students?tab=moodle'
  },
  {
    id: 'scholarships',
    title: 'Scholarships & JVD',
    description: 'Guidance and biometric processing for AP Jagananna Vidya Deevena, Vasathi Deevena, and merit grants.',
    icon: 'Landmark',
    actionText: 'Scholarship Desk',
    route: '/students?tab=scholarships'
  },
  {
    id: 'notifications',
    title: 'Student Notice Board',
    description: 'Live academic circulars, fee deadlines, event registrations, and departmental announcements.',
    icon: 'Bell',
    actionText: 'All Notices',
    route: '/students?tab=notices'
  }
];

export const studentClubs = [
  {
    name: 'ByteCraft Coding Club',
    domain: 'Software & Algorithms',
    members: '280+ Active Members',
    desc: 'Organizes weekly LeetCode sprints, internal hackathons, and open source development workshops.'
  },
  {
    name: 'RoboVEMU Robotics Society',
    domain: 'Hardware, Drones & IoT',
    members: '160+ Members',
    desc: 'Design and fabrication of autonomous rovers, agricultural inspection drones, and combat bots.'
  },
  {
    name: 'Spark EEE Innovators Club',
    domain: 'Renewable & EV Tech',
    members: '120+ Members',
    desc: 'Hands-on projects in solar inverters, battery management systems, and electric mobility kits.'
  },
  {
    name: 'VEMU Literary & Debating Society',
    domain: 'Communication & Leadership',
    members: '200+ Members',
    desc: 'Fosters public speaking, parliamentary debate, model UN conventions, and creative writing.'
  },
  {
    name: 'NSS (National Service Scheme)',
    domain: 'Community & Social Service',
    members: '300+ Volunteers',
    desc: 'Blood donation camps, rural village literacy drives, environmental awareness, and health checkup camps.'
  },
  {
    name: 'Tarang Cultural & Arts Guild',
    domain: 'Music, Dance & Drama',
    members: '250+ Artists',
    desc: 'Spearheads the annual cultural extravaganza "VEMU FEST", classical music, dance, and fine arts.'
  }
];
