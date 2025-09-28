'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  Cpu, 
  BarChart3, 
  Microscope,
  Zap,
  Target,
  Layers,
  Search,
  Filter,
  X,
  Calendar,
  Clock,
  BookOpen,
  Award,
  ExternalLink,
  TrendingUp,
  Download,
  Share2,
  Star,
  ChevronRight,
  Lightbulb,
  Target as TargetIcon,
  CheckCircle,
  HelpCircle,
  Trophy,
  Award as AwardIcon,
  Zap as ZapIcon,
  BarChart,
  TrendingUp as TrendingUpIcon,
  Users,
  Star as StarIcon,
  Target as TargetIcon2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Users as UsersIcon,
  MessageCircle,
  UserPlus,
  UserCheck,
  Globe,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Heart,
  ThumbsUp,
  MessageSquare,
  Send,
  Bell,
  Settings,
  User,
  Shield,
  Crown,
  Star as StarIcon2,
  Award as Certificate,
  CheckCircle as CheckCircleIcon,
  AlertTriangle,
  FileText,
  Download as DownloadIcon,
  Upload,
  Scan,
  QrCode,
  Key,
  Lock as LockIcon,
  Verified,
  Badge,
  Award as AwardIcon2,
  GraduationCap,
  BookOpen as BookOpenIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  UserCheck as UserCheckIcon,
  MessageSquare as MessageSquareIcon,
  Video,
  Phone,
  Mail,
  MapPin,
  Star as StarIcon3,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  Plus,
  Minus,
  Edit,
  Trash2,
  Flag,
  Shield as ShieldIcon,
  AlertCircle,
  CheckCircle as CheckCircleIcon2,
  ChevronDown,
  ChevronUp,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  Briefcase,
  TrendingDown
} from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'research' | 'tools' | 'analysis';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
  yearsExperience?: number;
  lastUsed?: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  learningPath?: string[];
  relatedSkills?: string[];
  skillCertifications?: string[];
  resources?: {
    type: 'course' | 'book' | 'tutorial' | 'documentation';
    title: string;
    url?: string;
  }[];
  nextSteps?: string[];
  timeline?: {
    date: string;
    milestone: string;
    description: string;
  }[];
  progress?: {
    current: number;
    target: number;
    lastUpdated: string;
  };
  assessment?: {
    questions: {
      id: string;
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    }[];
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    timeLimit: number; // in minutes
  };
  badges?: {
    name: string;
    description: string;
    icon: string;
    earned: boolean;
    earnedDate?: string;
  }[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
    image?: string;
    status: 'completed' | 'in-progress' | 'planned';
    date: string;
  }[];
  collaboration?: {
    isPublic: boolean;
    teamMembers: {
      name: string;
      role: 'owner' | 'collaborator' | 'viewer';
      avatar?: string;
      joinedDate: string;
    }[];
    permissions: {
      canEdit: boolean;
      canInvite: boolean;
      canExport: boolean;
    };
    comments: {
      id: string;
      author: string;
      content: string;
      timestamp: string;
      likes: number;
    }[];
    endorsements: {
      endorser: string;
      message: string;
      timestamp: string;
    }[];
  };
  marketplace?: {
    isAvailable: boolean;
    price?: number;
    currency?: string;
    description: string;
    tags: string[];
    rating: number;
    reviews: number;
  };
  certifications?: {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId: string;
    verificationUrl: string;
    status: 'active' | 'expired' | 'pending' | 'revoked';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    skills: string[];
    description: string;
    verificationCode: string;
  }[];
  verification?: {
    isVerified: boolean;
    verificationMethod: 'self' | 'peer' | 'institutional' | 'blockchain';
    verifiedBy: string;
    verificationDate: string;
    confidence: number; // 0-100
    evidence: {
      type: 'certificate' | 'project' | 'testimonial' | 'portfolio';
      title: string;
      url?: string;
      description: string;
    }[];
  };
  mentoring?: {
    isMentor: boolean;
    isMentee: boolean;
    mentorProfile?: {
      name: string;
      title: string;
      company: string;
      experience: number;
      rating: number;
      sessionsCompleted: number;
      specialties: string[];
      availability: string[];
      hourlyRate?: number;
      currency?: string;
      bio: string;
      avatar?: string;
      contact: {
        email: string;
        phone?: string;
        linkedin?: string;
        website?: string;
      };
    };
    menteeProfile?: {
      name: string;
      goals: string[];
      currentLevel: string;
      targetLevel: string;
      learningStyle: string;
      timeCommitment: string;
      preferredSchedule: string[];
    };
    sessions?: {
      id: string;
      title: string;
      date: string;
      duration: number;
      type: 'video' | 'phone' | 'in-person' | 'chat';
      status: 'scheduled' | 'completed' | 'cancelled';
      notes?: string;
      feedback?: {
        rating: number;
        comment: string;
      };
    }[];
    goals?: {
      id: string;
      title: string;
      description: string;
      targetDate: string;
      status: 'not-started' | 'in-progress' | 'completed' | 'paused';
      progress: number;
      milestones: {
        title: string;
        completed: boolean;
        date?: string;
      }[];
    }[];
  };
  jobMatching?: {
    isAvailable: boolean;
    jobRecommendations: {
      id: string;
      title: string;
      company: string;
      location: string;
      type: 'full-time' | 'part-time' | 'contract' | 'internship';
      salary?: {
        min: number;
        max: number;
        currency: string;
      };
      skills: string[];
      experience: string;
      description: string;
      requirements: string[];
      benefits: string[];
      postedDate: string;
      applicationDeadline?: string;
      remote: boolean;
      url?: string;
      matchScore: number;
    }[];
    careerPaths: {
      id: string;
      title: string;
      description: string;
      steps: {
        title: string;
        description: string;
        duration: string;
        skills: string[];
      }[];
      salaryRange: {
        entry: number;
        senior: number;
        currency: string;
      };
      growth: number; // percentage
      demand: 'low' | 'medium' | 'high';
    }[];
    skillGaps: {
      skill: string;
      importance: 'low' | 'medium' | 'high';
      difficulty: 'easy' | 'medium' | 'hard';
      timeToLearn: string;
      resources: {
        type: 'course' | 'book' | 'tutorial' | 'practice';
        title: string;
        url?: string;
      }[];
    }[];
  };
  performanceMetrics?: {
    overallScore: number;
    improvementRate: number;
    consistency: number;
    engagement: number;
    kpis: {
      name: string;
      value: number;
      target: number;
      unit: string;
      trend: 'up' | 'down' | 'stable';
      description: string;
    }[];
    achievements: {
      id: string;
      title: string;
      description: string;
      date: string;
      points: number;
      category: 'learning' | 'application' | 'teaching' | 'innovation';
    }[];
    challenges: {
      id: string;
      title: string;
      description: string;
      difficulty: number;
      attempts: number;
      completed: boolean;
      dateCompleted?: string;
    }[];
    timeTracking: {
      totalHours: number;
      weeklyAverage: number;
      lastActivity: string;
      peakHours: string[];
      productivityScore: number;
    };
    socialMetrics: {
      followers: number;
      likes: number;
      shares: number;
      comments: number;
      influence: number;
    };
  };
}

const skills: Skill[] = [
  { 
    name: 'MATLAB', 
    level: 5, 
    category: 'programming', 
    icon: Code, 
    color: 'bg-orange-500',
    description: 'Advanced MATLAB programming for signal processing, data analysis, and research applications',
    yearsExperience: 6,
    lastUsed: '2024',
    proficiency: 'Expert',
    learningPath: ['Basic MATLAB', 'Data Analysis', 'Signal Processing', 'Advanced Toolboxes'],
    relatedSkills: ['Python', 'Signal Processing', 'Data Analysis'],
    skillCertifications: ['MATLAB Onramp', 'Signal Processing with MATLAB'],
    resources: [
      { type: 'course', title: 'MATLAB Fundamentals', url: '#' },
      { type: 'book', title: 'MATLAB for Engineers', url: '#' },
      { type: 'documentation', title: 'MATLAB Documentation', url: '#' }
    ],
    nextSteps: ['Explore Simulink', 'Learn MATLAB App Designer', 'Advanced Statistical Toolbox'],
    timeline: [
      { date: '2018-01', milestone: 'Started Learning', description: 'First introduction to MATLAB programming' },
      { date: '2019-06', milestone: 'Basic Proficiency', description: 'Completed MATLAB fundamentals course' },
      { date: '2020-12', milestone: 'Advanced Usage', description: 'Started using MATLAB for research projects' },
      { date: '2022-03', milestone: 'Expert Level', description: 'Leading MATLAB workshops and training' },
      { date: '2024-01', milestone: 'Current', description: 'Teaching advanced MATLAB techniques' }
    ],
    progress: {
      current: 95,
      target: 100,
      lastUpdated: '2024-01-15'
    },
    assessment: {
      questions: [
        {
          id: 'matlab-1',
          question: 'What is the primary purpose of MATLAB?',
          options: ['Web development', 'Mathematical computing and visualization', 'Database management', 'Game development'],
          correct: 1,
          explanation: 'MATLAB is primarily used for mathematical computing, data analysis, and visualization.'
        },
        {
          id: 'matlab-2',
          question: 'Which command is used to create a matrix in MATLAB?',
          options: ['matrix()', 'createMatrix()', '[]', 'Both A and C'],
          correct: 3,
          explanation: 'Matrices in MATLAB are created using square brackets [] or specific functions like zeros(), ones(), etc.'
        },
        {
          id: 'matlab-3',
          question: 'What does the semicolon (;) do in MATLAB?',
          options: ['Ends a statement', 'Suppresses output', 'Creates a comment', 'Both A and B'],
          correct: 3,
          explanation: 'The semicolon both ends a statement and suppresses the output display.'
        }
      ],
      difficulty: 'intermediate',
      timeLimit: 10
    },
    badges: [
      {
        name: 'MATLAB Master',
        description: 'Completed advanced MATLAB assessment',
        icon: 'trophy',
        earned: true,
        earnedDate: '2024-01-10'
      },
      {
        name: 'Signal Processing Expert',
        description: 'Expert level in MATLAB signal processing',
        icon: 'zap',
        earned: true,
        earnedDate: '2023-12-15'
      },
      {
        name: 'Data Visualization Pro',
        description: 'Advanced MATLAB plotting and visualization',
        icon: 'bar-chart',
        earned: false
      }
    ],
    projects: [
      {
        name: 'Real-time MRI Speech Analysis',
        description: 'Advanced MATLAB application for analyzing speech production using real-time MRI data',
        technologies: ['MATLAB', 'Signal Processing', 'Image Analysis', 'GUI Development'],
        url: 'https://example.com/rtmri-analysis',
        github: 'https://github.com/username/rtmri-analysis',
        status: 'completed',
        date: '2023-12-01'
      },
      {
        name: 'Speech Production Visualization Tool',
        description: 'Interactive MATLAB tool for visualizing articulatory movements during speech',
        technologies: ['MATLAB', '3D Visualization', 'Data Processing'],
        status: 'in-progress',
        date: '2024-01-15'
      },
      {
        name: 'Automated Speech Recognition System',
        description: 'MATLAB-based ASR system for research applications',
        technologies: ['MATLAB', 'Machine Learning', 'Audio Processing'],
        status: 'planned',
        date: '2024-06-01'
      }
    ],
    collaboration: {
      isPublic: true,
      teamMembers: [
        {
          name: 'Dr. Sarah Johnson',
          role: 'collaborator',
          joinedDate: '2023-10-15'
        },
        {
          name: 'Prof. Michael Chen',
          role: 'viewer',
          joinedDate: '2023-11-20'
        }
      ],
      permissions: {
        canEdit: true,
        canInvite: true,
        canExport: true
      },
      comments: [
        {
          id: 'comment-1',
          author: 'Dr. Sarah Johnson',
          content: 'Excellent MATLAB implementation! The signal processing algorithms are very well structured.',
          timestamp: '2024-01-10T14:30:00Z',
          likes: 5
        },
        {
          id: 'comment-2',
          author: 'Prof. Michael Chen',
          content: 'Great work on the real-time MRI analysis. Would love to collaborate on the next version.',
          timestamp: '2024-01-12T09:15:00Z',
          likes: 3
        }
      ],
      endorsements: [
        {
          endorser: 'Dr. Sarah Johnson',
          message: 'Expert level MATLAB skills with excellent research applications',
          timestamp: '2024-01-08T16:45:00Z'
        }
      ]
    },
    marketplace: {
      isAvailable: true,
      price: 150,
      currency: 'USD',
      description: 'Professional MATLAB consulting and training services',
      tags: ['MATLAB', 'Signal Processing', 'Research', 'Training'],
      rating: 4.8,
      reviews: 24
    },
    certifications: [
      {
        id: 'matlab-cert-001',
        name: 'MATLAB Certified Associate',
        issuer: 'MathWorks',
        issueDate: '2023-06-15',
        expiryDate: '2025-06-15',
        credentialId: 'MW-CA-2023-001234',
        verificationUrl: 'https://credentials.mathworks.com/verify/001234',
        status: 'active',
        level: 'expert',
        skills: ['MATLAB', 'Simulink', 'Signal Processing'],
        description: 'Certified MATLAB Associate with expertise in signal processing and data analysis',
        verificationCode: 'MW-CA-2023-001234'
      },
      {
        id: 'matlab-cert-002',
        name: 'Advanced MATLAB Programming',
        issuer: 'Coursera',
        issueDate: '2023-03-20',
        credentialId: 'COURSERA-MATLAB-ADV-2023',
        verificationUrl: 'https://coursera.org/verify/advanced-matlab-2023',
        status: 'active',
        level: 'advanced',
        skills: ['MATLAB', 'Programming', 'Data Analysis'],
        description: 'Advanced MATLAB programming techniques and best practices',
        verificationCode: 'COURSERA-MATLAB-ADV-2023'
      }
    ],
    verification: {
      isVerified: true,
      verificationMethod: 'institutional',
      verifiedBy: 'MathWorks Certification Program',
      verificationDate: '2023-06-15',
      confidence: 95,
      evidence: [
        {
          type: 'certificate',
          title: 'MATLAB Certified Associate Certificate',
          url: 'https://credentials.mathworks.com/certificate/001234',
          description: 'Official MathWorks certification document'
        },
        {
          type: 'project',
          title: 'Real-time MRI Speech Analysis Project',
          url: 'https://github.com/username/rtmri-analysis',
          description: 'Open-source project demonstrating advanced MATLAB skills'
        },
        {
          type: 'testimonial',
          title: 'Peer Endorsement from Dr. Sarah Johnson',
          description: 'Professional endorsement from research collaborator'
        }
      ]
    },
    mentoring: {
      isMentor: true,
      isMentee: false,
      mentorProfile: {
        name: 'Dr. Shreya Patel',
        title: 'Senior Research Scientist',
        company: 'University Research Lab',
        experience: 8,
        rating: 4.9,
        sessionsCompleted: 45,
        specialties: ['MATLAB', 'Signal Processing', 'Research Methods', 'Data Analysis'],
        availability: ['Monday-Friday 9AM-5PM', 'Weekends 10AM-2PM'],
        hourlyRate: 75,
        currency: 'USD',
        bio: 'Expert in MATLAB with 8+ years of experience in signal processing and research applications. Passionate about teaching and helping others develop their technical skills.',
        contact: {
          email: 'shreya.patel@university.edu',
          phone: '+1-555-0123',
          linkedin: 'https://linkedin.com/in/shreya-patel',
          website: 'https://shreyapatel-research.com'
        }
      },
      sessions: [
        {
          id: 'session-001',
          title: 'MATLAB Fundamentals Review',
          date: '2024-01-15T10:00:00Z',
          duration: 60,
          type: 'video',
          status: 'completed',
          notes: 'Great session covering basic MATLAB syntax and data structures',
          feedback: {
            rating: 5,
            comment: 'Excellent explanation of MATLAB concepts. Very helpful!'
          }
        },
        {
          id: 'session-002',
          title: 'Advanced Signal Processing',
          date: '2024-01-22T14:00:00Z',
          duration: 90,
          type: 'video',
          status: 'scheduled',
          notes: 'Focus on FFT, filtering, and spectral analysis'
        }
      ],
      goals: [
        {
          id: 'goal-001',
          title: 'Master MATLAB Signal Processing',
          description: 'Develop expertise in advanced signal processing techniques using MATLAB',
          targetDate: '2024-06-01',
          status: 'in-progress',
          progress: 65,
          milestones: [
            { title: 'Complete basic MATLAB course', completed: true, date: '2024-01-10' },
            { title: 'Implement FFT algorithms', completed: true, date: '2024-01-20' },
            { title: 'Build signal processing toolkit', completed: false },
            { title: 'Complete final project', completed: false }
          ]
        }
      ]
    },
    jobMatching: {
      isAvailable: true,
      jobRecommendations: [
        {
          id: 'job-001',
          title: 'Senior MATLAB Developer',
          company: 'TechCorp Research',
          location: 'San Francisco, CA',
          type: 'full-time',
          salary: {
            min: 120000,
            max: 160000,
            currency: 'USD'
          },
          skills: ['MATLAB', 'Signal Processing', 'Machine Learning', 'Python'],
          experience: '5+ years',
          description: 'Lead MATLAB development for advanced signal processing applications in a cutting-edge research environment.',
          requirements: [
            'Expert level MATLAB programming',
            'Signal processing experience',
            'Machine learning knowledge',
            'PhD in Engineering or related field'
          ],
          benefits: [
            'Health insurance',
            '401k matching',
            'Flexible work hours',
            'Professional development budget'
          ],
          postedDate: '2024-01-10',
          applicationDeadline: '2024-02-15',
          remote: true,
          url: 'https://techcorp.com/careers/matlab-developer',
          matchScore: 95
        },
        {
          id: 'job-002',
          title: 'Research Scientist - Signal Processing',
          company: 'University Research Lab',
          location: 'Boston, MA',
          type: 'full-time',
          salary: {
            min: 90000,
            max: 120000,
            currency: 'USD'
          },
          skills: ['MATLAB', 'Signal Processing', 'Research', 'Statistics'],
          experience: '3+ years',
          description: 'Conduct research in signal processing using MATLAB for academic and industry projects.',
          requirements: [
            'Advanced MATLAB skills',
            'Signal processing background',
            'Research experience',
            'PhD preferred'
          ],
          benefits: [
            'Academic benefits',
            'Research funding',
            'Conference attendance',
            'Publication support'
          ],
          postedDate: '2024-01-05',
          remote: false,
          url: 'https://university.edu/careers/research-scientist',
          matchScore: 88
        }
      ],
      careerPaths: [
        {
          id: 'career-001',
          title: 'Research Scientist',
          description: 'Advanced career path for MATLAB experts in research and academia',
          steps: [
            {
              title: 'Junior Research Assistant',
              description: 'Entry-level research position with MATLAB focus',
              duration: '1-2 years',
              skills: ['MATLAB Basics', 'Data Analysis', 'Research Methods']
            },
            {
              title: 'Research Associate',
              description: 'Mid-level research role with advanced MATLAB applications',
              duration: '2-3 years',
              skills: ['Advanced MATLAB', 'Signal Processing', 'Machine Learning']
            },
            {
              title: 'Senior Research Scientist',
              description: 'Lead research projects and mentor junior researchers',
              duration: '3-5 years',
              skills: ['MATLAB Expert', 'Project Leadership', 'Mentoring']
            }
          ],
          salaryRange: {
            entry: 60000,
            senior: 150000,
            currency: 'USD'
          },
          growth: 15,
          demand: 'high'
        }
      ],
      skillGaps: [
        {
          skill: 'Machine Learning',
          importance: 'high',
          difficulty: 'medium',
          timeToLearn: '3-6 months',
          resources: [
            { type: 'course', title: 'Machine Learning with MATLAB', url: '#' },
            { type: 'book', title: 'MATLAB Machine Learning', url: '#' }
          ]
        },
        {
          skill: 'Python',
          importance: 'medium',
          difficulty: 'easy',
          timeToLearn: '1-3 months',
          resources: [
            { type: 'tutorial', title: 'Python for MATLAB Users', url: '#' }
          ]
        }
      ]
    },
    performanceMetrics: {
      overallScore: 92,
      improvementRate: 15,
      consistency: 88,
      engagement: 95,
      kpis: [
        {
          name: 'Code Quality',
          value: 94,
          target: 90,
          unit: '%',
          trend: 'up',
          description: 'Code quality score based on best practices'
        },
        {
          name: 'Project Completion',
          value: 8,
          target: 10,
          unit: 'projects',
          trend: 'up',
          description: 'Number of completed projects this year'
        },
        {
          name: 'Learning Velocity',
          value: 3.2,
          target: 2.5,
          unit: 'skills/month',
          trend: 'up',
          description: 'Rate of new skills acquired per month'
        },
        {
          name: 'Teaching Impact',
          value: 45,
          target: 30,
          unit: 'students',
          trend: 'up',
          description: 'Number of students mentored'
        }
      ],
      achievements: [
        {
          id: 'ach-001',
          title: 'MATLAB Expert Certification',
          description: 'Achieved expert level certification in MATLAB programming',
          date: '2024-01-15',
          points: 100,
          category: 'learning'
        },
        {
          id: 'ach-002',
          title: 'Research Paper Published',
          description: 'Published research paper using advanced MATLAB techniques',
          date: '2023-12-10',
          points: 150,
          category: 'application'
        },
        {
          id: 'ach-003',
          title: 'Workshop Leader',
          description: 'Led MATLAB workshop for 25+ participants',
          date: '2023-11-20',
          points: 75,
          category: 'teaching'
        }
      ],
      challenges: [
        {
          id: 'challenge-001',
          title: 'Advanced Signal Processing',
          description: 'Implement real-time signal processing algorithm',
          difficulty: 8,
          attempts: 3,
          completed: true,
          dateCompleted: '2024-01-10'
        },
        {
          id: 'challenge-002',
          title: 'Machine Learning Integration',
          description: 'Integrate ML models with MATLAB workflows',
          difficulty: 7,
          attempts: 1,
          completed: false
        }
      ],
      timeTracking: {
        totalHours: 1200,
        weeklyAverage: 15,
        lastActivity: '2024-01-20',
        peakHours: ['9:00 AM', '2:00 PM', '7:00 PM'],
        productivityScore: 87
      },
      socialMetrics: {
        followers: 1250,
        likes: 3400,
        shares: 890,
        comments: 450,
        influence: 78
      }
    }
  },
  { 
    name: 'Python', 
    level: 4, 
    category: 'programming', 
    icon: Code, 
    color: 'bg-blue-500',
    description: 'Python for data science, machine learning, and scientific computing',
    yearsExperience: 4,
    lastUsed: '2024',
    proficiency: 'Advanced',
    learningPath: ['Python Basics', 'NumPy & Pandas', 'Data Visualization', 'Machine Learning'],
    relatedSkills: ['MATLAB', 'Data Analysis', 'Machine Learning'],
    skillCertifications: ['Python for Data Science', 'Machine Learning with Python'],
    resources: [
      { type: 'course', title: 'Python for Data Science', url: '#' },
      { type: 'tutorial', title: 'NumPy Tutorial', url: '#' },
      { type: 'documentation', title: 'Python Documentation', url: '#' }
    ],
    nextSteps: ['Advanced Pandas', 'Deep Learning with TensorFlow', 'Web Development with Django']
  },
  { 
    name: 'Signal Processing', 
    level: 5, 
    category: 'research', 
    icon: Zap, 
    color: 'bg-purple-500',
    description: 'Digital signal processing, spectral analysis, and audio processing techniques',
    yearsExperience: 5,
    lastUsed: '2024',
    proficiency: 'Expert'
  },
  { 
    name: 'Speech Science', 
    level: 5, 
    category: 'research', 
    icon: Brain, 
    color: 'bg-indigo-500',
    description: 'Speech production research, articulatory phonetics, and acoustic analysis',
    yearsExperience: 6,
    lastUsed: '2024',
    proficiency: 'Expert'
  },
  { 
    name: 'rtMRI', 
    level: 5, 
    category: 'tools', 
    icon: Microscope, 
    color: 'bg-cyan-500',
    description: 'Real-time MRI data acquisition and analysis for speech research',
    yearsExperience: 4,
    lastUsed: '2024',
    proficiency: 'Expert'
  },
  { 
    name: 'EMA', 
    level: 4, 
    category: 'tools', 
    icon: Target, 
    color: 'bg-green-500',
    description: 'Electromagnetic articulography for articulatory tracking and analysis',
    yearsExperience: 3,
    lastUsed: '2024',
    proficiency: 'Advanced'
  },
  { 
    name: 'Data Analysis', 
    level: 4, 
    category: 'analysis', 
    icon: BarChart3, 
    color: 'bg-pink-500',
    description: 'Statistical analysis, data visualization, and research methodology',
    yearsExperience: 5,
    lastUsed: '2024',
    proficiency: 'Advanced'
  },
  { 
    name: 'Machine Learning', 
    level: 3, 
    category: 'analysis', 
    icon: Cpu, 
    color: 'bg-red-500',
    description: 'Machine learning algorithms for pattern recognition and data classification',
    yearsExperience: 2,
    lastUsed: '2024',
    proficiency: 'Intermediate'
  },
  { 
    name: 'Image Processing', 
    level: 4, 
    category: 'tools', 
    icon: Layers, 
    color: 'bg-yellow-500',
    description: 'Medical image processing, segmentation, and visualization techniques',
    yearsExperience: 3,
    lastUsed: '2024',
    proficiency: 'Advanced'
  },
];

const categoryColors = {
  programming: 'from-blue-500 to-cyan-500',
  research: 'from-purple-500 to-pink-500',
  tools: 'from-green-500 to-emerald-500',
  analysis: 'from-orange-500 to-red-500',
};

const categoryIcons = {
  programming: Code,
  research: Brain,
  tools: Microscope,
  analysis: BarChart3,
};

export default function AnimatedSkillTags() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [minLevel, setMinLevel] = useState(1);
  const [selectedProficiency, setSelectedProficiency] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [showLearningPaths, setShowLearningPaths] = useState(false);
  const [selectedSkillForPath, setSelectedSkillForPath] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [selectedSkillForTimeline, setSelectedSkillForTimeline] = useState<string | null>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentAssessment, setCurrentAssessment] = useState<{
    skill: string;
    questions: any[];
    currentQuestion: number;
    answers: number[];
    timeRemaining: number;
    isCompleted: boolean;
    score: number;
  } | null>(null);
  const [showBadges, setShowBadges] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showCollaboration, setShowCollaboration] = useState(false);
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [selectedSkillForCollab, setSelectedSkillForCollab] = useState<string | null>(null);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showMentoring, setShowMentoring] = useState(false);
  const [showJobMatching, setShowJobMatching] = useState(false);
  const [showPerformanceMetrics, setShowPerformanceMetrics] = useState(false);

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesCategory = !selectedCategory || skill.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = skill.level >= minLevel;
      const matchesProficiency = !selectedProficiency || skill.proficiency === selectedProficiency;
      
      return matchesCategory && matchesSearch && matchesLevel && matchesProficiency;
    });
  }, [selectedCategory, searchQuery, minLevel, selectedProficiency]);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto px-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-4 h-4" />
            Advanced Filters
          </motion.button>
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showAdvancedFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Minimum Level: {minLevel}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={minLevel}
                    onChange={(e) => setMinLevel(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Proficiency Filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Proficiency Level
                  </label>
                  <select
                    value={selectedProficiency || ''}
                    onChange={(e) => setSelectedProficiency(e.target.value || null)}
                    className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  >
                    <option value="">All Levels</option>
                    {proficiencyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Selection Controls */}
      {selectedSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4 mx-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-indigo-700 dark:text-indigo-300">
              {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''} selected
            </div>
            <div className="flex flex-wrap gap-2">
              <motion.button
                onClick={() => setShowComparison(!showComparison)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-4 h-4" />
                {showComparison ? 'Hide' : 'Compare'} Skills
              </motion.button>
              <motion.button
                onClick={() => setShowLearningPaths(!showLearningPaths)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-4 h-4" />
                Learning Paths
              </motion.button>
              <motion.button
                onClick={() => setShowRecommendations(!showRecommendations)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lightbulb className="w-4 h-4" />
                Recommendations
              </motion.button>
              <motion.button
                onClick={() => setShowExport(!showExport)}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Export
              </motion.button>
              <motion.button
                onClick={() => setShowTimeline(!showTimeline)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="w-4 h-4" />
                Timeline
              </motion.button>
              <motion.button
                onClick={() => setShowAssessment(!showAssessment)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HelpCircle className="w-4 h-4" />
                Assessment
              </motion.button>
              <motion.button
                onClick={() => setShowBadges(!showBadges)}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trophy className="w-4 h-4" />
                Badges
              </motion.button>
              <motion.button
                onClick={() => setShowPortfolio(!showPortfolio)}
                className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Layers className="w-4 h-4" />
                Portfolio
              </motion.button>
              <motion.button
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BarChart className="w-4 h-4" />
                Analytics
              </motion.button>
              <motion.button
                onClick={() => setShowCollaboration(!showCollaboration)}
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UsersIcon className="w-4 h-4" />
                Collaborate
              </motion.button>
              <motion.button
                onClick={() => setShowMarketplace(!showMarketplace)}
                className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                Marketplace
              </motion.button>
              <motion.button
                onClick={() => setShowCertifications(!showCertifications)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Certificate className="w-4 h-4" />
                Certifications
              </motion.button>
              <motion.button
                onClick={() => setShowVerification(!showVerification)}
                className="px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Verified className="w-4 h-4" />
                Verification
              </motion.button>
              <motion.button
                onClick={() => setShowMentoring(!showMentoring)}
                className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg text-sm font-medium hover:bg-fuchsia-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserCheckIcon className="w-4 h-4" />
                Mentoring
              </motion.button>
              <motion.button
                onClick={() => setShowJobMatching(!showJobMatching)}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-4 h-4" />
                Jobs
              </motion.button>
              <motion.button
                onClick={() => setShowPerformanceMetrics(!showPerformanceMetrics)}
                className="px-4 py-2 bg-lime-600 text-white rounded-lg text-sm font-medium hover:bg-lime-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-4 h-4" />
                Metrics
              </motion.button>
              <motion.button
                onClick={() => setSelectedSkills([])}
                className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Comparison Panel */}
      <AnimatePresence>
        {showComparison && selectedSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center">
              Skill Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedSkills.map(skillName => {
                const skill = skills.find(s => s.name === skillName);
                if (!skill) return null;
                
                return (
                  <motion.div
                    key={skillName}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${skill.color} rounded-lg flex items-center justify-center`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.name}</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{skill.proficiency}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-600 dark:text-zinc-400">Level:</span>
                        <span className="font-medium">{skill.level}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600 dark:text-zinc-400">Experience:</span>
                        <span className="font-medium">{skill.yearsExperience} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600 dark:text-zinc-400">Last Used:</span>
                        <span className="font-medium">{skill.lastUsed}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Learning Paths Panel */}
      <AnimatePresence>
        {showLearningPaths && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              Learning Paths & Resources
            </h3>
            
            {selectedSkills.length === 0 ? (
              <div className="text-center text-zinc-500 dark:text-zinc-400 py-8">
                Select skills to view their learning paths and resources
              </div>
            ) : (
              <div className="space-y-6">
                {selectedSkills.map(skillName => {
                  const skill = skills.find(s => s.name === skillName);
                  if (!skill || !skill.learningPath) return null;
                  
                  return (
                    <motion.div
                      key={skillName}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                          <skill.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.proficiency} Level</p>
                        </div>
                      </div>
                      
                      {/* Learning Path */}
                      <div className="mb-6">
                        <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                          <TargetIcon className="w-4 h-4" />
                          Learning Path
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {skill.learningPath.map((step, index) => (
                            <motion.div
                              key={step}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-2 rounded-lg text-sm"
                            >
                              <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </span>
                              {step}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Resources */}
                      {skill.resources && skill.resources.length > 0 && (
                        <div className="mb-6">
                          <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Learning Resources
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {skill.resources.map((resource, index) => (
                              <motion.a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  resource.type === 'course' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' :
                                  resource.type === 'book' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' :
                                  resource.type === 'tutorial' ? 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400' :
                                  'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                                }`}>
                                  {resource.type === 'course' ? <BookOpen className="w-4 h-4" /> :
                                   resource.type === 'book' ? <BookOpen className="w-4 h-4" /> :
                                   resource.type === 'tutorial' ? <ExternalLink className="w-4 h-4" /> :
                                   <BookOpen className="w-4 h-4" />}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{resource.title}</div>
                                  <div className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">{resource.type}</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-zinc-400" />
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Next Steps */}
                      {skill.nextSteps && skill.nextSteps.length > 0 && (
                        <div>
                          <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Next Steps
                          </h5>
                          <div className="space-y-2">
                            {skill.nextSteps.map((step, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                              >
                                <ChevronRight className="w-3 h-3 text-purple-500" />
                                {step}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recommendations Panel */}
      <AnimatePresence>
        {showRecommendations && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Skill Recommendations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Skill Gaps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                  <TargetIcon className="w-4 h-4 text-orange-500" />
                  Skill Gaps to Address
                </h4>
                <div className="space-y-2">
                  {skills
                    .filter(skill => skill.level < 4)
                    .slice(0, 3)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-900 rounded-lg"
                      >
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{skill.name}</span>
                        <span className="text-xs text-orange-600 dark:text-orange-400">Level {skill.level}/5</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
              
              {/* Related Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-500" />
                  Recommended Skills
                </h4>
                <div className="space-y-2">
                  {['Deep Learning', 'Cloud Computing', 'Docker', 'Kubernetes'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900 rounded-lg"
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{skill}</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400">New</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-500" />
                  Recommended Certifications
                </h4>
                <div className="space-y-2">
                  {['AWS Machine Learning', 'Google Cloud AI', 'Microsoft Azure AI'].map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900 rounded-lg"
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{cert}</span>
                      <Award className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export Panel */}
      <AnimatePresence>
        {showExport && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Export & Share Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Export Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-500" />
                  Export Options
                </h4>
                <div className="space-y-3">
                  <motion.button
                    onClick={() => {
                      const selectedSkillsData = selectedSkills.length > 0 
                        ? skills.filter(skill => selectedSkills.includes(skill.name))
                        : skills;
                      const csvContent = [
                        ['Skill', 'Level', 'Category', 'Proficiency', 'Experience', 'Last Used'],
                        ...selectedSkillsData.map(skill => [
                          skill.name,
                          skill.level.toString(),
                          skill.category,
                          skill.proficiency,
                          skill.yearsExperience?.toString() || 'N/A',
                          skill.lastUsed || 'N/A'
                        ])
                      ].map(row => row.join(',')).join('\n');
                      
                      const blob = new Blob([csvContent], { type: 'text/csv' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'skills-export.csv';
                      a.click();
                      window.URL.revokeObjectURL(url);
                    }}
                    className="w-full flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-800 rounded-lg flex items-center justify-center">
                        <Download className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">CSV Export</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Download as spreadsheet</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      const selectedSkillsData = selectedSkills.length > 0 
                        ? skills.filter(skill => selectedSkills.includes(skill.name))
                        : skills;
                      const jsonContent = JSON.stringify(selectedSkillsData, null, 2);
                      const blob = new Blob([jsonContent], { type: 'application/json' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'skills-export.json';
                      a.click();
                      window.URL.revokeObjectURL(url);
                    }}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                        <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">JSON Export</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Download as JSON data</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      const selectedSkillsData = selectedSkills.length > 0 
                        ? skills.filter(skill => selectedSkills.includes(skill.name))
                        : skills;
                      const textContent = selectedSkillsData.map(skill => 
                        `${skill.name} - Level ${skill.level}/5 (${skill.proficiency})\n` +
                        `Category: ${skill.category}\n` +
                        `Experience: ${skill.yearsExperience} years\n` +
                        `Last Used: ${skill.lastUsed}\n` +
                        `Description: ${skill.description}\n`
                      ).join('\n---\n\n');
                      
                      const blob = new Blob([textContent], { type: 'text/plain' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'skills-export.txt';
                      a.click();
                      window.URL.revokeObjectURL(url);
                    }}
                    className="w-full flex items-center justify-between p-3 bg-green-50 dark:bg-green-900 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">Text Export</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Download as text file</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Share Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-blue-500" />
                  Share Options
                </h4>
                <div className="space-y-3">
                  <motion.button
                    onClick={() => {
                      const selectedSkillsData = selectedSkills.length > 0 
                        ? skills.filter(skill => selectedSkills.includes(skill.name))
                        : skills;
                      const shareText = `Check out my skills: ${selectedSkillsData.map(s => s.name).join(', ')}`;
                      if (navigator.share) {
                        navigator.share({
                          title: 'My Skills Portfolio',
                          text: shareText,
                          url: window.location.href
                        });
                      } else {
                        navigator.clipboard.writeText(shareText);
                        alert('Skills copied to clipboard!');
                      }
                    }}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                        <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">Share Skills</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Share via native sharing</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      const selectedSkillsData = selectedSkills.length > 0 
                        ? skills.filter(skill => selectedSkills.includes(skill.name))
                        : skills;
                      const linkedinText = `I'm skilled in: ${selectedSkillsData.map(s => s.name).join(', ')}. Check out my full skills portfolio!`;
                      const linkedinUrl = `https://www.linkedin.com/in/your-profile?text=${encodeURIComponent(linkedinText)}`;
                      window.open(linkedinUrl, '_blank');
                    }}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                        <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">LinkedIn Share</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Share on LinkedIn</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      const selectedSkillsData = selectedSkills.length > 0 
                        ? skills.filter(skill => selectedSkills.includes(skill.name))
                        : skills;
                      const twitterText = `Check out my skills: ${selectedSkillsData.map(s => s.name).join(', ')} #Skills #Portfolio`;
                      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
                      window.open(twitterUrl, '_blank');
                    }}
                    className="w-full flex items-center justify-between p-3 bg-sky-50 dark:bg-sky-900 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-lg flex items-center justify-center">
                        <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">Twitter Share</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Share on Twitter</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Panel */}
      <AnimatePresence>
        {showTimeline && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Skill Timeline & Progress Tracking
            </h3>
            
            {selectedSkills.length === 0 ? (
              <div className="text-center text-zinc-500 dark:text-zinc-400 py-8">
                Select skills to view their timeline and progress
              </div>
            ) : (
              <div className="space-y-6">
                {selectedSkills.map(skillName => {
                  const skill = skills.find(s => s.name === skillName);
                  if (!skill) return null;
                  
                  return (
                    <motion.div
                      key={skillName}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                          <skill.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.proficiency} Level</p>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      {skill.progress && (
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Progress</span>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                              {skill.progress.current}% / {skill.progress.target}%
                            </span>
                          </div>
                          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3">
                            <motion.div
                              className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.progress.current}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                            Last updated: {skill.progress.lastUpdated}
                          </p>
                        </div>
                      )}
                      
                      {/* Timeline */}
                      {skill.timeline && skill.timeline.length > 0 && (
                        <div>
                          <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Learning Timeline
                          </h5>
                          <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500"></div>
                            
                            {skill.timeline.map((milestone, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex items-start gap-4 mb-6 last:mb-0"
                              >
                                {/* Timeline dot */}
                                <div className="relative z-10 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">{index + 1}</span>
                                </div>
                                
                                {/* Timeline content */}
                                <div className="flex-1 bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                      {milestone.milestone}
                                    </h6>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                      {milestone.date}
                                    </span>
                                  </div>
                                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {milestone.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assessment Panel */}
      <AnimatePresence>
        {showAssessment && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Skill Assessment & Quiz
            </h3>
            
            {!currentAssessment ? (
              <div className="space-y-4">
                <div className="text-center text-zinc-500 dark:text-zinc-400 py-4">
                  Select a skill to start an assessment
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.filter(skill => skill.assessment).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => {
                        setCurrentAssessment({
                          skill: skill.name,
                          questions: skill.assessment!.questions,
                          currentQuestion: 0,
                          answers: [],
                          timeRemaining: skill.assessment!.timeLimit * 60,
                          isCompleted: false,
                          score: 0
                        });
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${skill.color} rounded-lg flex items-center justify-center`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.name}</h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
                            {skill.assessment!.difficulty} • {skill.assessment!.timeLimit} min
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {skill.assessment!.questions.length} questions
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
                {!currentAssessment.isCompleted ? (
                  <div>
                    {/* Assessment Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                          {currentAssessment.skill} Assessment
                        </h4>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          Question {currentAssessment.currentQuestion + 1} of {currentAssessment.questions.length}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {Math.floor(currentAssessment.timeRemaining / 60)}:{(currentAssessment.timeRemaining % 60).toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Time Remaining</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 mb-6">
                      <motion.div
                        className="bg-red-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentAssessment.currentQuestion + 1) / currentAssessment.questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Current Question */}
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                        {currentAssessment.questions[currentAssessment.currentQuestion].question}
                      </h5>
                      <div className="space-y-2">
                        {currentAssessment.questions[currentAssessment.currentQuestion].options.map((option: string, index: number) => (
                          <motion.button
                            key={index}
                            onClick={() => {
                              const newAnswers = [...currentAssessment.answers];
                              newAnswers[currentAssessment.currentQuestion] = index;
                              setCurrentAssessment({
                                ...currentAssessment,
                                answers: newAnswers
                              });
                            }}
                            className={`w-full text-left p-3 rounded-lg border transition-colors ${
                              currentAssessment.answers[currentAssessment.currentQuestion] === index
                                ? 'border-red-500 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300'
                                : 'border-zinc-200 dark:border-zinc-700 hover:border-red-300 dark:hover:border-red-600'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                      <motion.button
                        onClick={() => {
                          if (currentAssessment.currentQuestion > 0) {
                            setCurrentAssessment({
                              ...currentAssessment,
                              currentQuestion: currentAssessment.currentQuestion - 1
                            });
                          }
                        }}
                        disabled={currentAssessment.currentQuestion === 0}
                        className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      
                      <motion.button
                        onClick={() => {
                          if (currentAssessment.currentQuestion < currentAssessment.questions.length - 1) {
                            setCurrentAssessment({
                              ...currentAssessment,
                              currentQuestion: currentAssessment.currentQuestion + 1
                            });
                          } else {
                            // Calculate score
                            const score = currentAssessment.questions.reduce((acc, question, index) => {
                              return acc + (currentAssessment.answers[index] === question.correct ? 1 : 0);
                            }, 0);
                            
                            setCurrentAssessment({
                              ...currentAssessment,
                              isCompleted: true,
                              score: Math.round((score / currentAssessment.questions.length) * 100)
                            });
                          }
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentAssessment.currentQuestion === currentAssessment.questions.length - 1 ? 'Finish' : 'Next'}
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  /* Results Screen */
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Trophy className="w-10 h-10 text-red-600 dark:text-red-400" />
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                      Assessment Complete!
                    </h4>
                    <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
                      {currentAssessment.score}%
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                      You scored {currentAssessment.score}% on the {currentAssessment.skill} assessment
                    </p>
                    
                    <div className="flex gap-4 justify-center">
                      <motion.button
                        onClick={() => setCurrentAssessment(null)}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Take Another
                      </motion.button>
                      <motion.button
                        onClick={() => setShowAssessment(false)}
                        className="px-6 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Badges Panel */}
      <AnimatePresence>
        {showBadges && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5" />
              Skill Badges & Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.filter(skill => skill.badges).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.name}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{skill.badges!.length} badges</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {skill.badges!.map((badge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          badge.earned 
                            ? 'bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700' 
                            : 'bg-zinc-50 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          badge.earned 
                            ? 'bg-yellow-500 text-white' 
                            : 'bg-zinc-300 dark:bg-zinc-600 text-zinc-500 dark:text-zinc-400'
                        }`}>
                          {badge.icon === 'trophy' ? <Trophy className="w-4 h-4" /> :
                           badge.icon === 'zap' ? <ZapIcon className="w-4 h-4" /> :
                           badge.icon === 'bar-chart' ? <BarChart className="w-4 h-4" /> :
                           <AwardIcon className="w-4 h-4" />}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${
                            badge.earned 
                              ? 'text-yellow-700 dark:text-yellow-300' 
                              : 'text-zinc-500 dark:text-zinc-400'
                          }`}>
                            {badge.name}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            {badge.description}
                          </div>
                          {badge.earned && badge.earnedDate && (
                            <div className="text-xs text-yellow-600 dark:text-yellow-400">
                              Earned: {badge.earnedDate}
                            </div>
                          )}
                        </div>
                        {badge.earned && (
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Panel */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Layers className="w-5 h-5" />
              Skill Portfolio & Projects
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.projects && skill.projects.length > 0).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.projects!.length} projects</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skill.projects!.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                            {project.name}
                          </h5>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                            project.status === 'in-progress' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                            'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                          {project.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-zinc-200 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-300 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                            <span>{project.date}</span>
                            <div className="flex gap-2">
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                  <Code className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analytics Panel */}
      <AnimatePresence>
        {showAnalytics && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <BarChart className="w-5 h-5" />
              Skill Analytics & Insights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Skill Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-emerald-500" />
                  Skill Distribution
                </h4>
                <div className="space-y-3">
                  {Object.entries(
                    skills.reduce((acc, skill) => {
                      acc[skill.category] = (acc[skill.category] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([category, count]) => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 capitalize">{category}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                          <motion.div
                            className="bg-emerald-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(count / skills.length) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Proficiency Levels */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <TrendingUpIcon className="w-4 h-4 text-blue-500" />
                  Proficiency Levels
                </h4>
                <div className="space-y-3">
                  {['Expert', 'Advanced', 'Intermediate', 'Beginner'].map((level, index) => {
                    const count = skills.filter(s => s.proficiency === level).length;
                    return (
                      <div key={level} className="flex items-center justify-between">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">{level}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${
                                level === 'Expert' ? 'bg-red-500' :
                                level === 'Advanced' ? 'bg-purple-500' :
                                level === 'Intermediate' ? 'bg-blue-500' :
                                'bg-green-500'
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${(count / skills.length) * 100}%` }}
                              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                            />
                          </div>
                          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{count}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              
              {/* Experience Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  Experience Overview
                </h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {Math.round(skills.reduce((acc, skill) => acc + (skill.yearsExperience || 0), 0) / skills.length * 10) / 10}
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Avg. Years</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-400">Total Skills</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{skills.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-400">Categories</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {new Set(skills.map(s => s.category)).size}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-400">Expert Level</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {skills.filter(s => s.proficiency === 'Expert').length}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  Recent Activity
                </h4>
                <div className="space-y-3">
                  {skills
                    .filter(skill => skill.lastUsed === '2024')
                    .slice(0, 3)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 p-2 bg-zinc-50 dark:bg-zinc-700 rounded-lg"
                      >
                        <div className={`w-6 h-6 ${skill.color} rounded flex items-center justify-center`}>
                          <skill.icon className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{skill.name}</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">Last used: {skill.lastUsed}</div>
                        </div>
                        <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                          {skill.level}/5
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collaboration Panel */}
      <AnimatePresence>
        {showCollaboration && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <UsersIcon className="w-5 h-5" />
              Skill Collaboration & Team Features
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.collaboration).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                        <div className="flex items-center gap-2">
                          {skill.collaboration!.isPublic ? (
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                              <Globe className="w-4 h-4" />
                              <span className="text-sm">Public</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                              <Lock className="w-4 h-4" />
                              <span className="text-sm">Private</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <UserPlus className="w-3 h-3" />
                        Invite
                      </motion.button>
                      <motion.button
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Settings className="w-3 h-3" />
                        Settings
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Team Members */}
                  <div className="mb-6">
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <UsersIcon className="w-4 h-4" />
                      Team Members ({skill.collaboration!.teamMembers.length})
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skill.collaboration!.teamMembers.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{member.name}</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">{member.role}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {member.role === 'owner' && <Crown className="w-3 h-3 text-yellow-500" />}
                            {member.role === 'collaborator' && <UserCheck className="w-3 h-3 text-green-500" />}
                            {member.role === 'viewer' && <Eye className="w-3 h-3 text-blue-500" />}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Comments */}
                  <div className="mb-6">
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Comments ({skill.collaboration!.comments.length})
                    </h5>
                    <div className="space-y-3">
                      {skill.collaboration!.comments.map((comment, index) => (
                        <motion.div
                          key={comment.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                <User className="w-3 h-3 text-white" />
                              </div>
                              <span className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{comment.author}</span>
                            </div>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              {new Date(comment.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <motion.button
                              className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Heart className="w-3 h-3" />
                              <span className="text-xs">{comment.likes}</span>
                            </motion.button>
                            <motion.button
                              className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span className="text-xs">Reply</span>
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Endorsements */}
                  {skill.collaboration!.endorsements.length > 0 && (
                    <div>
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        Endorsements ({skill.collaboration!.endorsements.length})
                      </h5>
                      <div className="space-y-2">
                        {skill.collaboration!.endorsements.map((endorsement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900 rounded-lg"
                          >
                            <ThumbsUp className="w-4 h-4 text-green-600 dark:text-green-400 mt-1" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{endorsement.endorser}</div>
                              <div className="text-xs text-zinc-600 dark:text-zinc-400">{endorsement.message}</div>
                              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                {new Date(endorsement.timestamp).toLocaleDateString()}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marketplace Panel */}
      <AnimatePresence>
        {showMarketplace && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Skill Marketplace & Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.filter(skill => skill.marketplace?.isAvailable).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.name}</h4>
                      <div className="flex items-center gap-1">
                        <StarIcon2 className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {skill.marketplace!.rating} ({skill.marketplace!.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {skill.marketplace!.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        ${skill.marketplace!.price}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {skill.marketplace!.currency}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {skill.marketplace!.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.button
                        className="flex-1 bg-rose-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Contact
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 border border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300 rounded-lg text-sm font-medium hover:bg-rose-50 dark:hover:bg-rose-900 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Heart className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certifications Panel */}
      <AnimatePresence>
        {showCertifications && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Certificate className="w-5 h-5" />
              Skill Certifications & Credentials
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.certifications && skill.certifications.length > 0).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.certifications!.length} certifications</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.certifications!.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Certificate className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            <div>
                              <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{cert.name}</h5>
                              <p className="text-xs text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                            cert.status === 'expired' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                            cert.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                            'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300'
                          }`}>
                            {cert.status}
                          </span>
                        </div>
                        
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">{cert.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500 dark:text-zinc-400">Issued:</span>
                            <span className="text-zinc-900 dark:text-zinc-100">{cert.issueDate}</span>
                          </div>
                          {cert.expiryDate && (
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-zinc-500 dark:text-zinc-400">Expires:</span>
                              <span className="text-zinc-900 dark:text-zinc-100">{cert.expiryDate}</span>
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500 dark:text-zinc-400">Level:</span>
                            <span className="text-zinc-900 dark:text-zinc-100 capitalize">{cert.level}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-500 dark:text-zinc-400">ID:</span>
                            <span className="text-zinc-900 dark:text-zinc-100 font-mono text-xs">{cert.credentialId}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <motion.a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <CheckCircleIcon className="w-3 h-3" />
                            Verify
                          </motion.a>
                          <motion.button
                            onClick={() => navigator.clipboard.writeText(cert.verificationCode)}
                            className="px-3 py-2 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <DownloadIcon className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Verification Panel */}
      <AnimatePresence>
        {showVerification && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Verified className="w-5 h-5" />
              Skill Verification & Evidence
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.verification).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                        <div className="flex items-center gap-2">
                          {skill.verification!.isVerified ? (
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                              <Verified className="w-4 h-4" />
                              <span className="text-sm">Verified</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                              <AlertTriangle className="w-4 h-4" />
                              <span className="text-sm">Unverified</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {skill.verification!.confidence}%
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">Confidence</div>
                    </div>
                  </div>
                  
                  {/* Verification Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Method:</span>
                        <span className="text-zinc-900 dark:text-zinc-100 capitalize">{skill.verification!.verificationMethod}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Verified By:</span>
                        <span className="text-zinc-900 dark:text-zinc-100">{skill.verification!.verifiedBy}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Date:</span>
                        <span className="text-zinc-900 dark:text-zinc-100">{skill.verification!.verificationDate}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">Evidence:</span>
                        <span className="text-zinc-900 dark:text-zinc-100">{skill.verification!.evidence.length} items</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.verification!.confidence}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Evidence */}
                  <div>
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Evidence & Documentation
                    </h5>
                    <div className="space-y-3">
                      {skill.verification!.evidence.map((evidence, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            evidence.type === 'certificate' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' :
                            evidence.type === 'project' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' :
                            evidence.type === 'testimonial' ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400' :
                            'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
                          }`}>
                            {evidence.type === 'certificate' ? <Certificate className="w-4 h-4" /> :
                             evidence.type === 'project' ? <Code className="w-4 h-4" /> :
                             evidence.type === 'testimonial' ? <MessageCircle className="w-4 h-4" /> :
                             <FileText className="w-4 h-4" />}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{evidence.title}</div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">{evidence.description}</div>
                            {evidence.url && (
                              <motion.a
                                href={evidence.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink className="w-3 h-3" />
                                View Evidence
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mentoring Panel */}
      <AnimatePresence>
        {showMentoring && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <UserCheckIcon className="w-5 h-5" />
              Skill Mentoring & Coaching
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.mentoring).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                      <div className="flex items-center gap-4">
                        {skill.mentoring!.isMentor && (
                          <span className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-xs font-medium">
                            Mentor Available
                          </span>
                        )}
                        {skill.mentoring!.isMentee && (
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                            Seeking Mentorship
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mentor Profile */}
                  {skill.mentoring!.mentorProfile && (
                    <div className="mb-6">
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <UserCheckIcon className="w-4 h-4" />
                        Mentor Profile
                      </h5>
                      <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h6 className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.mentoring!.mentorProfile.name}</h6>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{skill.mentoring!.mentorProfile.title}</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.mentoring!.mentorProfile.company}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex items-center gap-1">
                                <StarIcon3 className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-medium">{skill.mentoring!.mentorProfile.rating}</span>
                              </div>
                              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                ({skill.mentoring!.mentorProfile.sessionsCompleted} sessions)
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{skill.mentoring!.mentorProfile.bio}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h6 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm mb-2">Specialties</h6>
                            <div className="flex flex-wrap gap-1">
                              {skill.mentoring!.mentorProfile.specialties.map((specialty, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-700 dark:text-fuchsia-300 rounded text-xs"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h6 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm mb-2">Availability</h6>
                            <div className="space-y-1">
                              {skill.mentoring!.mentorProfile.availability.map((time, index) => (
                                <div key={index} className="text-xs text-zinc-600 dark:text-zinc-400">{time}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {skill.mentoring!.mentorProfile.hourlyRate && (
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">Hourly Rate:</span>
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                              ${skill.mentoring!.mentorProfile.hourlyRate}/{skill.mentoring!.mentorProfile.currency}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex gap-2">
                          <motion.button
                            className="flex-1 bg-fuchsia-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-fuchsia-700 transition-colors flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <MessageSquareIcon className="w-4 h-4" />
                            Contact Mentor
                          </motion.button>
                          <motion.button
                            className="px-4 py-2 border border-fuchsia-300 dark:border-fuchsia-700 text-fuchsia-700 dark:text-fuchsia-300 rounded-lg text-sm font-medium hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Video className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Sessions */}
                  {skill.mentoring!.sessions && skill.mentoring!.sessions.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Mentoring Sessions
                      </h5>
                      <div className="space-y-3">
                        {skill.mentoring!.sessions.map((session, index) => (
                          <motion.div
                            key={session.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                session.type === 'video' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' :
                                session.type === 'phone' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' :
                                session.type === 'in-person' ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400' :
                                'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
                              }`}>
                                {session.type === 'video' ? <Video className="w-4 h-4" /> :
                                 session.type === 'phone' ? <Phone className="w-4 h-4" /> :
                                 session.type === 'in-person' ? <MapPin className="w-4 h-4" /> :
                                 <MessageCircleIcon className="w-4 h-4" />}
                              </div>
                              <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{session.title}</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                  {new Date(session.date).toLocaleDateString()} • {session.duration} min
                                </div>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              session.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                              session.status === 'scheduled' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                              'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                            }`}>
                              {session.status}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Goals */}
                  {skill.mentoring!.goals && skill.mentoring!.goals.length > 0 && (
                    <div>
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <TargetIcon className="w-4 h-4" />
                        Learning Goals
                      </h5>
                      <div className="space-y-3">
                        {skill.mentoring!.goals.map((goal, index) => (
                          <motion.div
                            key={goal.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h6 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{goal.title}</h6>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400">{goal.description}</p>
                              </div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                goal.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                                goal.status === 'in-progress' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                                goal.status === 'paused' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                                'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300'
                              }`}>
                                {goal.status}
                              </span>
                            </div>
                            
                            <div className="mb-3">
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Progress</span>
                                <span className="text-zinc-900 dark:text-zinc-100">{goal.progress}%</span>
                              </div>
                              <div className="w-full bg-zinc-200 dark:bg-zinc-600 rounded-full h-2">
                                <motion.div
                                  className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${goal.progress}%` }}
                                  transition={{ duration: 0.8, delay: 0.5 }}
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                Target: {goal.targetDate}
                              </div>
                              <div className="space-y-1">
                                {goal.milestones.map((milestone, milestoneIndex) => (
                                  <div key={milestoneIndex} className="flex items-center gap-2 text-xs">
                                    <CheckCircleIcon2 className={`w-3 h-3 ${
                                      milestone.completed ? 'text-green-500' : 'text-zinc-400'
                                    }`} />
                                    <span className={`${
                                      milestone.completed ? 'text-zinc-600 dark:text-zinc-400 line-through' : 'text-zinc-900 dark:text-zinc-100'
                                    }`}>
                                      {milestone.title}
                                    </span>
                                    {milestone.date && (
                                      <span className="text-zinc-500 dark:text-zinc-400">
                                        ({milestone.date})
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Matching Panel */}
      <AnimatePresence>
        {showJobMatching && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              Job Matching & Career Guidance
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.jobMatching?.isAvailable).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {skill.jobMatching!.jobRecommendations.length} job recommendations
                      </p>
                    </div>
                  </div>
                  
                  {/* Job Recommendations */}
                  <div className="mb-6">
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Job Recommendations
                    </h5>
                    <div className="space-y-4">
                      {skill.jobMatching!.jobRecommendations.map((job, index) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h6 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{job.title}</h6>
                              <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.company}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <MapPin className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">{job.location}</span>
                                {job.remote && (
                                  <span className="px-1 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs">
                                    Remote
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {job.matchScore}% match
                              </div>
                              <div className="w-16 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 mt-1">
                                <motion.div
                                  className="bg-gradient-to-r from-sky-500 to-blue-500 h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${job.matchScore}%` }}
                                  transition={{ duration: 0.8, delay: 0.5 }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{job.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h6 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm mb-2">Skills Required</h6>
                              <div className="flex flex-wrap gap-1">
                                {job.skills.map((skillName, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="px-2 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded text-xs"
                                  >
                                    {skillName}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h6 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm mb-2">Experience</h6>
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">{job.experience}</span>
                            </div>
                          </div>
                          
                          {job.salary && (
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">Salary:</span>
                              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} {job.salary.currency}
                              </span>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <motion.a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-sky-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Apply Now
                            </motion.a>
                            <motion.button
                              className="px-4 py-2 border border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 rounded-lg text-sm font-medium hover:bg-sky-50 dark:hover:bg-sky-900 transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <HeartIcon className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Career Paths */}
                  {skill.jobMatching!.careerPaths.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Career Paths
                      </h5>
                      <div className="space-y-4">
                        {skill.jobMatching!.careerPaths.map((path, index) => (
                          <motion.div
                            key={path.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h6 className="font-semibold text-zinc-900 dark:text-zinc-100">{path.title}</h6>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{path.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                  {path.growth}% growth
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  path.demand === 'high' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                                  path.demand === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                                  'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                                }`}>
                                  {path.demand} demand
                                </span>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-zinc-600 dark:text-zinc-400">Salary Range:</span>
                                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                  ${path.salaryRange.entry.toLocaleString()} - ${path.salaryRange.senior.toLocaleString()} {path.salaryRange.currency}
                                </span>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <h6 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Career Steps:</h6>
                              {path.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start gap-3 p-2 bg-white dark:bg-zinc-800 rounded">
                                  <div className="w-6 h-6 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center text-xs font-medium">
                                    {stepIndex + 1}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{step.title}</div>
                                    <div className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">{step.description}</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                      Duration: {step.duration}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Skill Gaps */}
                  {skill.jobMatching!.skillGaps.length > 0 && (
                    <div>
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <TargetIcon className="w-4 h-4" />
                        Skill Gaps to Address
                      </h5>
                      <div className="space-y-3">
                        {skill.jobMatching!.skillGaps.map((gap, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900 rounded-lg"
                          >
                            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-1" />
                            <div className="flex-1">
                              <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{gap.skill}</div>
                              <div className="flex items-center gap-4 mt-1">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  gap.importance === 'high' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                                  gap.importance === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                                  'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                                }`}>
                                  {gap.importance} importance
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  gap.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                                  gap.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                                  'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                                }`}>
                                  {gap.difficulty} difficulty
                                </span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                  {gap.timeToLearn} to learn
                                </span>
                              </div>
                              <div className="mt-2">
                                <div className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">Resources:</div>
                                <div className="flex flex-wrap gap-1">
                                  {gap.resources.map((resource, resourceIndex) => (
                                    <motion.a
                                      key={resourceIndex}
                                      href={resource.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-2 py-1 bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300 rounded text-xs hover:bg-orange-200 dark:hover:bg-orange-700 transition-colors"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      {resource.title}
                                    </motion.a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Metrics Panel */}
      <AnimatePresence>
        {showPerformanceMetrics && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-lime-50 to-green-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mx-4"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance Metrics & KPIs
            </h3>
            
            <div className="space-y-6">
              {skills.filter(skill => skill.performanceMetrics).map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{skill.name}</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          Overall Score: {skill.performanceMetrics!.overallScore}%
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          +{skill.performanceMetrics!.improvementRate}% improvement
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overall Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-br from-lime-100 to-green-100 dark:from-lime-900 dark:to-green-900 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-lime-700 dark:text-lime-300">
                        {skill.performanceMetrics!.overallScore}%
                      </div>
                      <div className="text-sm text-lime-600 dark:text-lime-400">Overall Score</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        +{skill.performanceMetrics!.improvementRate}%
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">Improvement</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                        {skill.performanceMetrics!.consistency}%
                      </div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">Consistency</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                        {skill.performanceMetrics!.engagement}%
                      </div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">Engagement</div>
                    </motion.div>
                  </div>
                  
                  {/* KPIs */}
                  <div className="mb-6">
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <BarChart className="w-4 h-4" />
                      Key Performance Indicators
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skill.performanceMetrics!.kpis.map((kpi, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{kpi.name}</h6>
                            <div className="flex items-center gap-1">
                              {kpi.trend === 'up' ? (
                                <TrendingUp className="w-4 h-4 text-green-500" />
                              ) : kpi.trend === 'down' ? (
                                <TrendingDown className="w-4 h-4 text-red-500" />
                              ) : (
                                <Minus className="w-4 h-4 text-zinc-500" />
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                              {kpi.value} {kpi.unit}
                            </span>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                              Target: {kpi.target} {kpi.unit}
                            </span>
                          </div>
                          <div className="w-full bg-zinc-200 dark:bg-zinc-600 rounded-full h-2 mb-2">
                            <motion.div
                              className="bg-gradient-to-r from-lime-500 to-green-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${(kpi.value / kpi.target) * 100}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400">{kpi.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      Recent Achievements
                    </h5>
                    <div className="space-y-3">
                      {skill.performanceMetrics!.achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-lg"
                        >
                          <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1" />
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{achievement.title}</div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">{achievement.description}</div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                {new Date(achievement.date).toLocaleDateString()}
                              </span>
                              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 rounded text-xs">
                                {achievement.points} pts
                              </span>
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded text-xs capitalize">
                                {achievement.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Challenges */}
                  <div className="mb-6">
                    <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                      <TargetIcon className="w-4 h-4" />
                      Active Challenges
                    </h5>
                    <div className="space-y-3">
                      {skill.performanceMetrics!.challenges.map((challenge, index) => (
                        <motion.div
                          key={challenge.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-3 rounded-lg ${
                            challenge.completed 
                              ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700' 
                              : 'bg-zinc-50 dark:bg-zinc-700'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{challenge.title}</div>
                              <div className="text-xs text-zinc-600 dark:text-zinc-400">{challenge.description}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              {challenge.completed ? (
                                <CheckCircleIcon2 className="w-5 h-5 text-green-500" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-zinc-300 dark:border-zinc-600 rounded-full" />
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-zinc-500 dark:text-zinc-400">
                              Difficulty: {challenge.difficulty}/10
                            </span>
                            <span className="text-zinc-500 dark:text-zinc-400">
                              Attempts: {challenge.attempts}
                            </span>
                            {challenge.dateCompleted && (
                              <span className="text-green-600 dark:text-green-400">
                                Completed: {new Date(challenge.dateCompleted).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Time Tracking & Social Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        Time Tracking
                      </h5>
                      <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Total Hours:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.timeTracking.totalHours}h
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Weekly Average:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.timeTracking.weeklyAverage}h
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Productivity Score:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.timeTracking.productivityScore}%
                          </span>
                        </div>
                        <div>
                          <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Peak Hours:</div>
                          <div className="flex flex-wrap gap-1">
                            {skill.performanceMetrics!.timeTracking.peakHours.map((hour, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300 rounded text-xs"
                              >
                                {hour}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                        <UsersIcon className="w-4 h-4" />
                        Social Metrics
                      </h5>
                      <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Followers:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.socialMetrics.followers.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Likes:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.socialMetrics.likes.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Shares:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.socialMetrics.shares.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">Influence:</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {skill.performanceMetrics!.socialMetrics.influence}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap gap-3 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === null
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Skills
        </motion.button>
        
        {categories.map((category) => {
          const IconComponent = categoryIcons[category];
          return (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="w-4 h-4" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          const isHovered = hoveredSkill === skill.name;
          
          return (
            <motion.div
              key={skill.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => {
                if (selectedSkills.includes(skill.name)) {
                  setSelectedSkills(selectedSkills.filter(s => s !== skill.name));
                } else {
                  setSelectedSkills([...selectedSkills, skill.name]);
                }
              }}
            >
              {/* Main skill card */}
              <motion.div
                className={`relative p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border group ${
                  selectedSkills.includes(skill.name)
                    ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-300 dark:border-indigo-700'
                    : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                }`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Selection indicator */}
                {selectedSkills.includes(skill.name) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center z-10"
                  >
                    <span className="text-white text-xs font-bold">✓</span>
                  </motion.div>
                )}
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${categoryColors[skill.category]} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />
                
                {/* Skill icon */}
                <motion.div
                  className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>

                {/* Skill name */}
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center mb-2">
                  {skill.name}
                </h3>

                {/* Enhanced Skill level with progress animation */}
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < skill.level 
                          ? 'bg-indigo-500' 
                          : 'bg-zinc-200 dark:bg-zinc-700'
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1 + i * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: i < skill.level ? '#8b5cf6' : undefined
                      }}
                    />
                  ))}
                </div>

                {/* Proficiency Badge */}
                <motion.div
                  className={`text-xs px-2 py-1 rounded-full mb-2 ${
                    skill.proficiency === 'Expert' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                    skill.proficiency === 'Advanced' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                    skill.proficiency === 'Intermediate' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {skill.proficiency}
                </motion.div>

                {/* Category badge */}
                <div className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                  {skill.category}
                </div>
              </motion.div>

              {/* Enhanced Hover tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-3 rounded-xl text-sm z-10 max-w-xs shadow-2xl"
                  >
                    <div className="space-y-2">
                      <div className="font-semibold text-base">{skill.name}</div>
                      <div className="text-xs opacity-90">{skill.description}</div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {skill.yearsExperience} years
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {skill.lastUsed}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">{skill.proficiency}</span>
                        <span className="text-xs">Level {skill.level}/5</span>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Results Counter */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Showing {filteredSkills.length} of {skills.length} skills
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Research & Technical Expertise
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Specialized in speech production research with expertise in real-time MRI and EMA technologies. 
            Proficient in MATLAB and Python for data analysis and visualization.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400">
                {skills.filter(s => s.proficiency === 'Expert').length}
              </div>
              <div className="text-zinc-500 dark:text-zinc-400">Expert Skills</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-purple-600 dark:text-purple-400">
                {skills.filter(s => s.proficiency === 'Advanced').length}
              </div>
              <div className="text-zinc-500 dark:text-zinc-400">Advanced Skills</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-green-600 dark:text-green-400">
                {Math.round(skills.reduce((acc, skill) => acc + (skill.yearsExperience || 0), 0) / skills.length * 10) / 10}
              </div>
              <div className="text-zinc-500 dark:text-zinc-400">Avg. Experience</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-orange-600 dark:text-orange-400">
                {categories.length}
              </div>
              <div className="text-zinc-500 dark:text-zinc-400">Categories</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
