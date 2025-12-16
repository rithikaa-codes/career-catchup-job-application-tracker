export enum JobStatus {
  APPLIED = 'Applied',
  INTERVIEW = 'Interview',
  OFFER = 'Offer',
  REJECTED = 'Rejected',
  WISHLIST = 'Wishlist'
}

export enum JobType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  CONTRACT = 'Contract',
  INTERNSHIP = 'Internship',
  REMOTE = 'Remote'
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Job {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  location: string;
  salary?: string;
  jobType: JobType;
  appliedDate: string; // ISO Date string
  interviewDate?: string; // ISO Date string
  notes?: string;
  userId: string;
  logoUrl?: string; // Placeholder for company logo
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface DashboardStats {
  total: number;
  applied: number;
  interviewing: number;
  offers: number;
  rejected: number;
}