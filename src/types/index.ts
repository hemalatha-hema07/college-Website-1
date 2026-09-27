export interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export type NoticeCategory = 'all' | 'academic' | 'examination' | 'admission' | 'circular';

export interface NoticeItem {
  id: string;
  title: string;
  category: 'academic' | 'examination' | 'admission' | 'circular';
  date: string;
  isNew?: boolean;
  isUrgent?: boolean;
  fileSize?: string;
  referenceNo?: string;
  description?: string;
}

export interface Department {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: 'engineering' | 'computing' | 'management' | 'science';
  established: number;
  intake: number;
  description: string;
  hodName: string;
  hodQualification: string;
  labsCount: number;
  facultyCount: number;
  highlights: string[];
  image: string;
}

export interface Course {
  id: string;
  name: string;
  degree: 'B.Tech' | 'M.Tech' | 'MBA' | 'MCA' | 'Diploma';
  duration: string;
  intake: number;
  eligibility: string;
  code: string;
  overview: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  specialization: string;
  avatarBg: string;
}

export interface PlacementStat {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface InnovationProject {
  id: string;
  title: string;
  team: string;
  department: string;
  year: string;
  category: string;
  description: string;
  award?: string;
}

export interface StudentService {
  id: string;
  title: string;
  description: string;
  icon: string;
  actionText: string;
  route: string;
  badge?: string;
}
