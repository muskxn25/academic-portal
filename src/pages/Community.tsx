import React, { useState } from 'react';
import { Building, MapPin, Users, Star, Award, ArrowLeft, Briefcase, UserCheck, X, Cpu, Rocket, Search, BookOpen } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Cpu,
  Rocket,
  Award,
};

// Mock Data with ApplyBoard-style structure
const universities = {
  mit: {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    ranking: 1,
    location: 'Cambridge, MA, USA',
    address: '77 Massachusetts Avenue, Cambridge',
    phone: '+1 (617) 253-1000',
    founded: 1861,
    schoolId: 'MIT001',
    institutionType: 'Private',
    studentCount: '11,934',
    averageTuition: '$53,790 USD / Year',
    costOfLiving: '$18,000 USD / Year',
    applicationFee: '$75 USD',
    acceptanceTime: '2-4 weeks',
    history: "Founded in 1861, MIT has been a pioneer in research and education, fostering a culture of innovation and hands-on discovery. Its motto, 'Mens et Manus' (Mind and Hand), reflects its commitment to applying knowledge to solve real-world challenges.",
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    ],
    features: [
      { title: 'Post Graduation Permit', available: true, icon: 'GraduationCap' },
      { title: 'Co-op/Internship Participation', available: true, icon: 'Briefcase' },
      { title: 'Work While Studying', available: true, icon: 'Users' },
      { title: 'Conditional Offer Letter', available: true, icon: 'Mail' },
      { title: 'Accommodations', available: true, icon: 'Building' }
    ],
    showcase: [
        { title: 'Leader in AI Research', description: 'Home to CSAIL, one of the world\'s most advanced AI labs.', icon: 'Cpu' },
        { title: '200+ Startups a Year', description: 'A thriving ecosystem for entrepreneurship and innovation.', icon: 'Rocket' },
        { title: '97 Nobel Laureates', description: 'A legacy of groundbreaking contributions to science and humanity.', icon: 'Award' }
    ],
    famousPrograms: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
    departments: [
      { 
        name: 'Electrical Engineering & Computer Science', 
        head: 'Prof. Anantha Chandrakasan', 
        contact: 'eecs-head@mit.edu',
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        academicMaterials: [
            { id: 1, title: '6.042J - Mathematics for Computer Science', type: 'Course Notes' },
            { id: 2, title: 'CSAIL Research Papers - 2023 Edition', type: 'Research Compilation' }
        ],
        alumni: [
            { id: 1, name: 'Drew Houston', gradYear: 2005, role: 'Founder & CEO, Dropbox' },
            { id: 2, name: 'Amar Bose', gradYear: 1956, role: 'Founder, Bose Corporation' }
        ]
      },
      { 
        name: 'Mechanical Engineering', 
        head: 'Prof. Evelyn Wang', 
        contact: 'meche-head@mit.edu',
        image: 'https://images.unsplash.com/photo-1556124269-026d3a4b918b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        academicMaterials: [
            { id: 1, title: '2.007 - Design and Manufacturing I', type: 'Lab Manual' },
            { id: 2, title: 'Journal of Heat Transfer - Selected Articles', type: 'Journal' }
        ],
        alumni: [
            { id: 1, name: 'Woodie Flowers', gradYear: 1973, role: 'Co-Founder, FIRST Robotics' },
            { id: 2, name: 'Shiela Widnall', gradYear: 1964, role: 'Former Secretary of the Air Force' }
        ]
      },
    ],
    announcements: [
      { id: 1, type: 'Departmental', department: 'Computer Science', title: 'AI Ethics & Society Guest Lecture', date: 'NOV 15', description: 'Join us for a talk with Dr. Ananya Sharma on the societal impacts of AI.' },
      { id: 2, type: 'Career Services', department: 'Career Services', title: 'Fall Career Fair Registration Now Open', date: 'NOV 18', description: 'Meet with top employers from tech, finance, and more. Register on Handshake.' },
      { id: 3, type: 'Campus Life', department: 'Student Union', title: 'Annual Winter Gala Tickets Available', date: 'NOV 20', description: 'Get your tickets for a night of music, dancing, and celebration.' },
    ],
    clubs: [
        { 
            name: 'AI Alignment', 
            members: 150, 
            description: 'A student-led group exploring the ethical implications and future of artificial intelligence.',
            image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            events: [{ name: 'Guest Lecture: AI Safety', date: 'Nov 15, 2023'}],
            coordinators: [{ name: 'Alex Johnson', role: 'President' }]
        },
        { 
            name: 'Robotics Club', 
            members: 200, 
            description: 'Build and compete with autonomous robots in national competitions.',
            image: 'https://images.unsplash.com/photo-1620712943543-2858200f74fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            events: [{ name: 'Robotics Competition Info Session', date: 'Nov 20, 2023'}],
            coordinators: [{ name: 'Maria Garcia', role: 'Captain' }]
        },
    ],
    professors: [
      { id: 1, name: 'Prof. Erik Demaine', department: 'Computer Science', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.9, email: 'edemaine@mit.edu', office: 'Stata Center 32-G580' },
      { id: 2, name: 'Prof. Sangeeta Bhatia', department: 'Health Sciences & Technology', avatar: 'https://images.unsplash.com/photo-1580894732444-c14656d0859b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', rating: 4.8, email: 'sbhatia@mit.edu', office: 'Koch Institute 76-453' },
    ],
    news: [{ id: 1, title: 'New Quantum Computing Center Opens', date: 'Oct 26, 2023'}],
    studentHub: {
        materials: [{ id: 1, title: 'Advanced Algorithms Lecture Notes'}],
        placements: [{ id: 1, title: 'Google Tech Talk - Fall 2023'}],
    },
    currentStudents: [
      { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', year: 'Freshman', country: 'USA', program: 'Computer Science', gpa: 3.8, bio: 'A passionate computer science student with a keen interest in AI and machine learning.' },
      { id: 2, name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', year: 'Sophomore', country: 'Canada', program: 'Engineering', gpa: 3.9, bio: 'An engineering student who loves to build things and solve problems.' },
      { id: 3, name: 'Bob Johnson', avatar: 'https://images.unsplash.com/photo-1503023077655-149d280e8a5a?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', year: 'Junior', country: 'UK', program: 'Business', gpa: 3.7, bio: 'A business student who enjoys learning about finance and marketing.' },
      { id: 4, name: 'Alice Brown', avatar: 'https://images.unsplash.com/photo-1519085360753-af0a688d1b06?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', year: 'Senior', country: 'USA', program: 'Arts & Humanities', gpa: 3.6, bio: 'An arts and humanities student who loves to write and explore different cultures.' },
      { id: 5, name: 'Charlie Davis', avatar: 'https://images.unsplash.com/photo-1516259765402-91c9b33397e1?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', year: 'Graduate', country: 'Canada', program: 'Computer Science', gpa: 4.0, bio: 'A graduate student who is passionate about research and software development.' },
      { id: 6, name: 'Diana Wilson', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', year: 'Freshman', country: 'UK', program: 'Engineering', gpa: 3.9, bio: 'An engineering student who loves to build things and solve problems.' },
    ],
    studentStories: [
      { id: 1, student: { name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Computer Science', year: 'Freshman' }, date: '2023-09-15', content: 'My first week at MIT was amazing! I met so many interesting people and learned a lot about computer science.', quote: 'The sky is the limit.' },
      { id: 2, student: { name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Engineering', year: 'Sophomore' }, date: '2023-09-20', content: 'I love the co-op program at MIT. It has given me real-world experience and helped me develop my skills.', quote: 'Every problem is an opportunity.' },
      { id: 3, student: { name: 'Bob Johnson', avatar: 'https://images.unsplash.com/photo-1503023077655-149d280e8a5a?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Business', year: 'Junior' }, date: '2023-09-25', content: 'The business school at MIT has been a great experience. I learned a lot about finance and marketing.', quote: 'Success is not final, failure is not fatal.' },
    ],
    recentGraduates: [
      { id: 1, name: 'Eva Green', avatar: 'https://images.unsplash.com/photo-1519085360753-af0a688d1b06?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Arts & Humanities', gradYear: 2023, currentRole: 'Freelance Writer', company: 'The New York Times' },
      { id: 2, name: 'Michael Fassbender', avatar: 'https://images.unsplash.com/photo-1516259765402-91c9b33397e1?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Engineering', gradYear: 2023, currentRole: 'Software Engineer', company: 'Google' },
      { id: 3, name: 'Scarlett Johansson', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Computer Science', gradYear: 2023, currentRole: 'Data Scientist', company: 'Amazon' },
      { id: 4, name: 'Chris Hemsworth', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', program: 'Business', gradYear: 2023, currentRole: 'Marketing Manager', company: 'Apple' },
    ],
  },
  stanford: { 
    id: 'stanford', 
    name: 'Stanford University', 
    ranking: 3, 
    location: 'Stanford, CA, USA',
    address: '450 Serra Mall, Stanford',
    phone: '+1 (650) 723-2300',
    founded: 1885,
    schoolId: 'STAN001',
    institutionType: 'Private',
    studentCount: '17,246',
    averageTuition: '$56,169 USD / Year',
    costOfLiving: '$20,000 USD / Year',
    applicationFee: '$90 USD',
    acceptanceTime: '3-5 weeks',
    famousPrograms: ['Business', 'AI Research', 'Medicine', 'Law'],
    history: 'Stanford has a rich history of innovation in the heart of Silicon Valley.',
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?q=80&w=2070&auto=format&fit=crop'
    ],
    features: [
      { title: 'Post Graduation Permit', available: true, icon: 'GraduationCap' },
      { title: 'Co-op/Internship Participation', available: true, icon: 'Briefcase' },
      { title: 'Work While Studying', available: true, icon: 'Users' },
      { title: 'Conditional Offer Letter', available: true, icon: 'Mail' },
      { title: 'Accommodations', available: true, icon: 'Building' }
    ],
    showcase: [], 
    announcements: [], 
    clubs: [], 
    professors: [],
    currentStudents: [
      { id: 1, name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=140&auto=format&fit=crop', year: 'Sophomore', country: 'China', program: 'Computer Science', gpa: 3.9, bio: 'Passionate about AI and machine learning research.' },
      { id: 2, name: 'Alex Rodriguez', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', year: 'Junior', country: 'Mexico', program: 'Business', gpa: 3.8, bio: 'Entrepreneurial spirit with focus on tech startups.' },
      { id: 3, name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=140&auto=format&fit=crop', year: 'Senior', country: 'USA', program: 'Medicine', gpa: 3.95, bio: 'Future doctor dedicated to improving healthcare.' },
    ],
    studentStories: [
      { id: 1, student: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=140&auto=format&fit=crop', program: 'Computer Science', year: 'Sophomore' }, date: '2023-09-10', content: 'Stanford\'s AI research opportunities are incredible. I\'ve been working on cutting-edge projects.', quote: 'Innovation happens here.' },
    ],
    recentGraduates: [
      { id: 1, name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', program: 'Computer Science', gradYear: 2023, currentRole: 'AI Researcher', company: 'OpenAI' },
      { id: 2, name: 'Lisa Park', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=140&auto=format&fit=crop', program: 'Business', gradYear: 2023, currentRole: 'Product Manager', company: 'Tesla' },
    ]
  },
  harvard: { 
    id: 'harvard', 
    name: 'Harvard University', 
    ranking: 5, 
    location: 'Cambridge, MA, USA',
    address: 'Massachusetts Hall, Cambridge',
    phone: '+1 (617) 495-1000',
    founded: 1636,
    schoolId: 'HARV001',
    institutionType: 'Private',
    studentCount: '21,000',
    averageTuition: '$54,768 USD / Year',
    costOfLiving: '$19,000 USD / Year',
    applicationFee: '$85 USD',
    acceptanceTime: '4-6 weeks',
    famousPrograms: ['Law', 'Medicine', 'Business', 'Arts'],
    history: 'Founded in 1636, Harvard is the oldest institution of higher learning in the US.',
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?q=80&w=2070&auto=format&fit=crop'
    ],
    features: [
      { title: 'Post Graduation Permit', available: true, icon: 'GraduationCap' },
      { title: 'Co-op/Internship Participation', available: true, icon: 'Briefcase' },
      { title: 'Work While Studying', available: true, icon: 'Users' },
      { title: 'Conditional Offer Letter', available: true, icon: 'Mail' },
      { title: 'Accommodations', available: true, icon: 'Building' }
    ],
    showcase: [], 
    announcements: [], 
    clubs: [], 
    professors: [],
    currentStudents: [
      { id: 1, name: 'Michael Thompson', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', year: 'Senior', country: 'USA', program: 'Law', gpa: 3.9, bio: 'Future lawyer passionate about constitutional law and civil rights.' },
      { id: 2, name: 'Sophia Garcia', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=140&auto=format&fit=crop', year: 'Graduate', country: 'Spain', program: 'Business', gpa: 3.8, bio: 'MBA student focused on sustainable business practices.' },
      { id: 3, name: 'James Lee', avatar: 'https://images.unsplash.com/photo-1503023077655-149d280e8a5a?q=80&w=140&auto=format&fit=crop', year: 'Junior', country: 'South Korea', program: 'Medicine', gpa: 3.95, bio: 'Pre-med student dedicated to global health initiatives.' },
    ],
    studentStories: [
      { id: 1, student: { name: 'Michael Thompson', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', program: 'Law', year: 'Senior' }, date: '2023-09-12', content: 'Harvard Law School has exceeded my expectations. The professors are world-class.', quote: 'Excellence in everything.' },
    ],
    recentGraduates: [
      { id: 1, name: 'Jennifer Adams', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=140&auto=format&fit=crop', program: 'Law', gradYear: 2023, currentRole: 'Associate Attorney', company: 'Skadden Arps' },
      { id: 2, name: 'Robert Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', program: 'Business', gradYear: 2023, currentRole: 'Investment Banker', company: 'Goldman Sachs' },
    ]
  },
  berkeley: { 
    id: 'berkeley', 
    name: 'UC Berkeley', 
    ranking: '27', 
    location: 'Berkeley, CA, USA',
    address: '200 California Hall, Berkeley',
    phone: '+1 (510) 642-6000',
    founded: 1868,
    schoolId: 'UCB001',
    institutionType: 'Public',
    studentCount: '45,036',
    averageTuition: '$44,008 USD / Year',
    costOfLiving: '$18,000 USD / Year',
    applicationFee: '$70 USD',
    acceptanceTime: '2-3 weeks',
    famousPrograms: ['Chemistry', 'Economics', 'Engineering', 'Computer Science'],
    history: 'UC Berkeley is renowned for its history of student activism and scientific breakthroughs.',
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?q=80&w=2070&auto=format&fit=crop'
    ],
    features: [
      { title: 'Post Graduation Permit', available: true, icon: 'GraduationCap' },
      { title: 'Co-op/Internship Participation', available: true, icon: 'Briefcase' },
      { title: 'Work While Studying', available: true, icon: 'Users' },
      { title: 'Conditional Offer Letter', available: true, icon: 'Mail' },
      { title: 'Accommodations', available: true, icon: 'Building' }
    ],
    showcase: [], 
    announcements: [], 
    clubs: [], 
    professors: [],
    currentStudents: [
      { id: 1, name: 'Aisha Patel', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=140&auto=format&fit=crop', year: 'Sophomore', country: 'India', program: 'Computer Science', gpa: 3.8, bio: 'Tech enthusiast working on social impact projects.' },
      { id: 2, name: 'Carlos Mendez', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', year: 'Senior', country: 'Mexico', program: 'Economics', gpa: 3.7, bio: 'Economics major interested in public policy and social justice.' },
      { id: 3, name: 'Rachel Green', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=140&auto=format&fit=crop', year: 'Junior', country: 'USA', program: 'Chemistry', gpa: 3.9, bio: 'Chemistry student passionate about environmental science.' },
    ],
    studentStories: [
      { id: 1, student: { name: 'Aisha Patel', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=140&auto=format&fit=crop', program: 'Computer Science', year: 'Sophomore' }, date: '2023-09-15', content: 'Berkeley\'s diverse community and innovative spirit make it an amazing place to learn.', quote: 'Diversity drives innovation.' },
    ],
    recentGraduates: [
      { id: 1, name: 'Daniel Brown', avatar: 'https://images.unsplash.com/photo-1507003211169-1a12f87310a1?q=80&w=140&auto=format&fit=crop', program: 'Computer Science', gradYear: 2023, currentRole: 'Software Engineer', company: 'Microsoft' },
      { id: 2, name: 'Maria Santos', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=140&auto=format&fit=crop', program: 'Economics', gradYear: 2023, currentRole: 'Policy Analyst', company: 'World Bank' },
    ]
  },
};

// Department Details Data
const departmentDetailsData: { [key: string]: any } = {
  'Electrical Engineering & Computer Science': {
    overview: 'The EECS department at MIT is one of the most prestigious computer science and electrical engineering departments in the world. We focus on cutting-edge research in AI, robotics, quantum computing, and more.',
    tags: ['Artificial Intelligence', 'Robotics', 'Quantum Computing', 'Machine Learning', 'Computer Vision'],
    moderators: [
      { name: 'Prof. Anantha Chandrakasan', role: 'Department Head' },
      { name: 'Dr. Sarah Chen', role: 'Graduate Coordinator' },
      { name: 'Prof. Erik Demaine', role: 'Undergraduate Advisor' }
    ],
    discussions: [
      { id: 1, text: 'What are the best resources for learning quantum computing?', author: 'CS Student', replies: 12, time: '2 hours ago' },
      { id: 2, text: 'Tips for surviving 6.006 Algorithms?', author: 'Sophomore', replies: 8, time: '1 day ago' },
      { id: 3, text: 'Research opportunities in AI this semester', author: 'Grad Student', replies: 15, time: '3 days ago' }
    ],
    resources: [
      { id: 1, title: '6.042J Course Notes', type: 'Lecture Notes', link: '#' },
      { id: 2, title: 'CSAIL Research Papers', type: 'Research', link: '#' },
      { id: 3, title: 'Programming Competition Guide', type: 'Guide', link: '#' },
      { id: 4, title: 'Internship Database', type: 'Career', link: '#' }
    ],
    events: [
      { id: 1, name: 'AI Ethics Workshop', date: 'Nov 25, 2023' },
      { id: 2, name: 'Quantum Computing Seminar', date: 'Dec 2, 2023' },
      { id: 3, name: 'Career Fair Prep Session', date: 'Dec 5, 2023' }
    ],
    mentors: [
      { name: 'Dr. Alex Kumar', expertise: 'Machine Learning' },
      { name: 'Prof. Lisa Wang', expertise: 'Computer Vision' },
      { name: 'Dr. Michael Chen', expertise: 'Robotics' }
    ],
    projects: [
      { name: 'Autonomous Vehicle Navigation', status: 'Active' },
      { name: 'Quantum Algorithm Optimization', status: 'Planning' },
      { name: 'AI for Healthcare', status: 'Completed' }
    ]
  },
  'Mechanical Engineering': {
    overview: 'The Mechanical Engineering department combines fundamental engineering principles with cutting-edge research in robotics, energy systems, and manufacturing.',
    tags: ['Robotics', 'Energy Systems', 'Manufacturing', 'Biomechanics', 'Thermodynamics'],
    moderators: [
      { name: 'Prof. Evelyn Wang', role: 'Department Head' },
      { name: 'Dr. James Rodriguez', role: 'Graduate Coordinator' },
      { name: 'Prof. Maria Santos', role: 'Undergraduate Advisor' }
    ],
    discussions: [
      { id: 1, text: 'Best CAD software for beginners?', author: 'ME Freshman', replies: 6, time: '4 hours ago' },
      { id: 2, text: '2.007 project ideas discussion', author: 'Sophomore', replies: 10, time: '1 day ago' },
      { id: 3, text: 'Research in renewable energy systems', author: 'Grad Student', replies: 7, time: '2 days ago' }
    ],
    resources: [
      { id: 1, title: '2.007 Lab Manual', type: 'Lab Guide', link: '#' },
      { id: 2, title: 'Heat Transfer Journal', type: 'Research', link: '#' },
      { id: 3, title: 'CAD Tutorial Series', type: 'Tutorial', link: '#' },
      { id: 4, title: 'Industry Connections Database', type: 'Career', link: '#' }
    ],
    events: [
      { id: 1, name: 'Robotics Design Challenge', date: 'Nov 28, 2023' },
      { id: 2, name: 'Energy Systems Symposium', date: 'Dec 4, 2023' },
      { id: 3, name: 'Manufacturing Workshop', date: 'Dec 8, 2023' }
    ],
    mentors: [
      { name: 'Dr. Robert Kim', expertise: 'Robotics' },
      { name: 'Prof. Jennifer Lee', expertise: 'Energy Systems' },
      { name: 'Dr. David Park', expertise: 'Manufacturing' }
    ],
    projects: [
      { name: 'Sustainable Energy Solutions', status: 'Active' },
      { name: 'Advanced Robotics Platform', status: 'Planning' },
      { name: 'Smart Manufacturing Systems', status: 'Completed' }
    ]
  }
};

type UserRole = 'student' | 'guest';
type FilterType = 'All' | 'Departmental' | 'Career Services' | 'Campus Life';

// ApplyBoard-style Hero Section
const HeroSection = ({ onSearchClick, onGuestClick, onStudentLogin, onStudentDashboard }: { 
  onSearchClick: () => void, 
  onGuestClick: () => void,
  onStudentLogin: () => void,
  onStudentDashboard: () => void
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Perfect University
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with top institutions worldwide. Find programs, explore campuses, and join vibrant student communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={onSearchClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Universities
            </button>
            <button 
              onClick={onGuestClick}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Explore as Guest
            </button>
          </div>
          
          {/* Student Section */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Already a Student?</h2>
            <p className="text-gray-600 mb-6">Access your university dashboard and connect with your community.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onStudentLogin}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Student Login
              </button>
              <button 
                onClick={onStudentDashboard}
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ApplyBoard-style University Card
const UniversityCard = ({ university, onSelect }: { university: any, onSelect: (uni: any) => void }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img 
          src={university.images?.[0] || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'} 
          alt={university.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-semibold text-gray-700">
          #{university.ranking}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{university.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {university.famousPrograms?.slice(0, 3).map((program: string) => (
            <span key={program} className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
              {program}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div>Founded: {university.founded}</div>
            <div>Type: {university.institutionType}</div>
          </div>
          <button 
            onClick={() => onSelect(university)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// ApplyBoard-style University Detail Page
const UniversityDetailPage = ({ university, onBack }: { university: any, onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Universities
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{university.name}</h1>
              <div className="flex items-center text-gray-600 mt-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{university.location}</span>
                <span className="mx-2">•</span>
                <span>#{university.ranking} in world</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <img 
                  src={university.images?.[currentImageIndex] || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'} 
                  alt={university.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {university.images && university.images.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                    {currentImageIndex + 1} of {university.images.length}
                  </div>
                )}
              </div>
              {university.images && university.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {university.images.map((img: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded border-2 ${
                        index === currentImageIndex ? 'border-blue-500' : 'border-gray-300'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover rounded" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {['overview', 'programs', 'students'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {university.name}</h2>
                <p className="text-gray-600 mb-6">{university.history}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why {university.name}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {university.showcase?.map((item: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">What we offer at {university.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {university.features?.map((feature: any, index: number) => (
                    <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        feature.available ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {feature.available ? '✓' : '✗'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">
                          {feature.available ? 'Available' : 'Not Available'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'programs' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Academic Programs</h2>
                  <div className="flex gap-2">
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                      <option>All Levels</option>
                      <option>Undergraduate</option>
                      <option>Graduate</option>
                      <option>PhD</option>
                    </select>
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                      <option>All Disciplines</option>
                      <option>Engineering</option>
                      <option>Computer Science</option>
                      <option>Business</option>
                      <option>Arts & Humanities</option>
                    </select>
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                      <option>All Intakes</option>
                      <option>Fall 2024</option>
                      <option>Spring 2025</option>
                      <option>Summer 2025</option>
                    </select>
                  </div>
                </div>

                {/* Featured Programs */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Programs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {university.famousPrograms?.map((program: string) => (
                      <div key={program} className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-blue-900">{program}</h4>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Featured</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">One of the most prestigious programs in the world</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Duration: 4 years</span>
                          <span>Tuition: {university.averageTuition}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Categories */}
                <div className="space-y-6">
                  {/* Undergraduate Programs */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                      Undergraduate Programs
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Learn the fundamentals of computing and software development</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 4 years</span>
                          <span>Credits: 120</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Bachelor of Engineering</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Comprehensive engineering education with hands-on experience</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 4 years</span>
                          <span>Credits: 128</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Bachelor of Arts in Economics</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Study economic theory and its real-world applications</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 4 years</span>
                          <span>Credits: 120</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Bachelor of Science in Physics</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Explore the fundamental laws of the universe</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 4 years</span>
                          <span>Credits: 120</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Graduate Programs */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                      Graduate Programs
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Master of Science in Computer Science</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Advanced studies in algorithms, AI, and software systems</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 2 years</span>
                          <span>Credits: 60</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Master of Business Administration</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Develop leadership skills and business acumen</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 2 years</span>
                          <span>Credits: 60</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">Master of Engineering</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Specialized engineering research and development</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 2 years</span>
                          <span>Credits: 60</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">PhD in Computer Science</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Cutting-edge research in computer science</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>Duration: 4-6 years</span>
                          <span>Credits: 90</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">{university.averageTuition}</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">Apply Now</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Highlights</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-sm text-gray-600">Programs Available</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
                        <div className="text-sm text-gray-600">Employment Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">$85K</div>
                        <div className="text-sm text-gray-600">Average Starting Salary</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Current Students</h2>
                  <div className="flex gap-2">
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                      <option>All Years</option>
                      <option>Freshman</option>
                      <option>Sophomore</option>
                      <option>Junior</option>
                      <option>Senior</option>
                      <option>Graduate</option>
                    </select>
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                      <option>All Programs</option>
                      <option>Computer Science</option>
                      <option>Engineering</option>
                      <option>Business</option>
                      <option>Arts & Humanities</option>
                    </select>
                  </div>
                </div>

                {/* Student Statistics */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Community Overview</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{university.studentCount}</div>
                      <div className="text-sm text-gray-600">Total Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">45%</div>
                      <div className="text-sm text-gray-600">International Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">120+</div>
                      <div className="text-sm text-gray-600">Countries Represented</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">4.2</div>
                      <div className="text-sm text-gray-600">Average GPA</div>
                    </div>
                  </div>
                </div>

                {/* Featured Students */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Students</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {university.currentStudents?.slice(0, 6).map((student: any) => (
                      <div key={student.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3 mb-3">
                          <img 
                            src={student.avatar} 
                            alt={student.name} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{student.name}</h4>
                            <p className="text-xs text-gray-600">{student.program}</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">{student.year}</span>
                              <span>{student.country}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">{student.bio}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">GPA: {student.gpa}</span>
                          <button className="text-blue-600 hover:text-blue-700 font-semibold">Connect</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Stories */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Stories</h3>
                  <div className="space-y-4">
                    {university.studentStories?.slice(0, 3).map((story: any) => (
                      <div key={story.id} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <img 
                            src={story.student.avatar} 
                            alt={story.student.name} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{story.student.name}</h4>
                            <p className="text-xs text-gray-600">{story.student.program} • {story.student.year}</p>
                          </div>
                          <span className="text-xs text-gray-500 ml-auto">{story.date}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{story.content}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>"{story.quote}"</span>
                          <button className="text-blue-600 hover:text-blue-700">Read More</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Graduates */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Graduates</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {university.recentGraduates?.slice(0, 4).map((grad: any) => (
                      <div key={grad.id} className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={grad.avatar} 
                            alt={grad.name} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{grad.name}</h4>
                            <p className="text-xs text-gray-600">{grad.program} • Class of {grad.graduationYear}</p>
                            <p className="text-xs text-gray-600 mt-1">{grad.currentRole} at {grad.company}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Graduated</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Institution Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-semibold">{university.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">School ID</span>
                  <span className="font-semibold">{university.schoolId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Institution Type</span>
                  <span className="font-semibold">{university.institutionType}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cost and Duration</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average application fee</span>
                    <span className="font-semibold">{university.applicationFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average undergraduate program</span>
                    <span className="font-semibold">4 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost of living</span>
                    <span className="font-semibold">{university.costOfLiving}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average gross tuition</span>
                    <span className="font-semibold">{university.averageTuition}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Average Time to Receive Letter of Acceptance</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">January - April</span>
                    <span className="font-semibold">31+ days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">May - August</span>
                    <span className="font-semibold">31+ days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">September - December</span>
                    <span className="font-semibold">31+ days</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition-colors duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Student Dashboard Component
const StudentDashboard = ({ onBack }: { onBack: () => void }) => {
  const [selectedClub, setSelectedClub] = useState<any | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Use MIT as the student's university
  const university = universities.mit;
  const role: UserRole = 'student';

  const renderContent = () => {
    if (selectedClub) {
      return <ClubDetails club={selectedClub} onBack={() => setSelectedClub(null)} role={role} />;
    }
    if (selectedDepartment) {
      return <DepartmentDetails department={selectedDepartment} onBack={() => setSelectedDepartment(null)} role={role} />;
    }

    // Student dashboard with all community features
    return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-glow p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to {university.name}</h2>
          <p className="text-xl opacity-90 max-w-3xl">
            Your academic journey starts here. Explore resources, connect with peers, and make the most of your university experience.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-soft text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{university.clubs?.length || 15}</div>
            <div className="text-gray-600">Active Clubs</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{university.departments?.length || 8}</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{university.professors?.length || 120}</div>
            <div className="text-gray-600">Faculty</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-soft text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{university.announcements?.length || 5}</div>
            <div className="text-gray-600">Events</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Events & Announcements */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Events & Announcements</h2>
                <span className="text-sm text-gray-500">Stay updated</span>
              </div>
              <div className="space-y-4">
                {university.announcements && university.announcements.length > 0 ? (
                  university.announcements.slice(0, 4).map((announcement: any) => (
                    <div key={announcement.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border-l-4 border-blue-500">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{announcement.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{announcement.description}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3">{announcement.type}</span>
                            <span>{announcement.date}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {announcement.type === 'Departmental' && <Building className="w-6 h-6 text-gray-400" />}
                          {announcement.type === 'Career Services' && <Briefcase className="w-6 h-6 text-gray-400" />}
                          {announcement.type === 'Campus Life' && <Users className="w-6 h-6 text-gray-400" />}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <p>No recent announcements. Check back soon!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Departments Section */}
            <div className="bg-white rounded-xl shadow-soft p-6 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Departments</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {university.departments && university.departments.length > 0 ? (
                  university.departments.slice(0, 4).map((dept: any) => (
                    <div key={dept.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedDepartment(dept)}>
                      <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Headed by {dept.head}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">Department</span>
                        <span>Click to explore</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 p-8 text-center text-gray-500">
                    <p>Department information coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Access */}
          <div className="space-y-6">
            {/* Clubs Section */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Clubs</h3>
              <div className="space-y-3">
                {university.clubs && university.clubs.length > 0 ? (
                  university.clubs.slice(0, 3).map((club: any) => (
                    <div key={club.name} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedClub(club)}>
                      <h4 className="font-semibold text-gray-900 mb-1">{club.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{club.members} members</p>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    <p className="text-sm">No clubs available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Faculty Section */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Faculty</h3>
              <div className="space-y-3">
                {university.professors && university.professors.length > 0 ? (
                  university.professors.slice(0, 3).map((prof: any) => (
                    <div key={prof.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                      <img src={prof.avatar} alt={prof.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{prof.name}</h4>
                        <p className="text-xs text-gray-600">{prof.department}</p>
                        <div className="flex items-center text-xs text-yellow-600">
                          <Star className="w-3 h-3 mr-1" />
                          {prof.rating}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    <p className="text-sm">No faculty information</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="font-semibold text-blue-900">View Academic Materials</div>
                  <div className="text-xs text-blue-700">Access course notes and resources</div>
                </button>
                <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="font-semibold text-green-900">Find Mentors</div>
                  <div className="text-xs text-green-700">Connect with experienced students</div>
                </button>
                <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="font-semibold text-purple-900">Join Discussions</div>
                  <div className="text-xs text-purple-700">Participate in department forums</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Discovery
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Student!</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

// Club Details Component
const ClubDetails = ({ club, onBack, role }: { club: any, onBack: () => void, role: UserRole }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg relative animate-fade-in">
    <button onClick={onBack} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
      <X className="w-6 h-6" />
    </button>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">{club.name}</h2>
    <p className="text-gray-600 mb-6">{club.description}</p>

    {role === 'student' ? (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Events</h3>
          <div className="space-y-3">
            {club.events?.map((event: any) => (
              <div key={event.name} className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{event.name}</p>
                <p className="text-sm text-blue-700">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Coordinators</h3>
           <div className="space-y-3">
            {club.coordinators?.map((c: any) => (
              <div key={c.name} className="flex items-center bg-gray-100 p-3 rounded-lg">
                <UserCheck className="w-5 h-5 mr-3 text-gray-500"/>
                <div>
                  <p className="font-semibold text-gray-800">{c.name}</p>
                  <p className="text-sm text-gray-600">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">
          <strong>Guest Access:</strong> This information is available to enrolled students only. 
          Contact the university for more details about this club.
        </p>
      </div>
    )}
  </div>
);

// Department Details Component
const DepartmentDetails = ({ department, onBack, role }: { department: any, onBack: () => void, role: UserRole }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const details = departmentDetailsData[department.name];

  if (!details) {
    return <div>Details not found for this department.</div>;
  }

  const renderDeptContent = () => {
    if (role === 'guest') {
      return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Guest Access Limited</h3>
          <p className="text-yellow-700 mb-4">
            As a guest, you can view basic department information. Detailed discussions, resources, 
            events, and other content are available to enrolled students only.
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Department Overview</h4>
            <p className="text-gray-600 mb-4">{details.overview}</p>
            <div className="flex flex-wrap gap-2">
              {details.tags.map((tag:string) => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'Discussions':
        return (
          <div className="space-y-4">
            {details.discussions.map((d: any) => (
              <div key={d.id} className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-900">{d.text}</p>
                <div className="text-sm text-gray-500 mt-2 flex justify-between">
                  <span>By {d.author} - <span className="font-semibold">{d.replies} replies</span></span>
                  <span>{d.time}</span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Resources':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {details.resources.map((r: any) => (
               <div key={r.id} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{r.title}</p>
                  <p className="text-sm text-gray-600">{r.type}</p>
                </div>
                <a href={r.link} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  View
                </a>
              </div>
            ))}
          </div>
        );
      case 'Events':
        return (
           <div className="space-y-4">
            {details.events.map((e: any) => (
              <div key={e.id} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <p className="font-semibold text-gray-900">{e.name}</p>
                <span className="font-bold text-blue-600">{e.date}</span>
              </div>
            ))}
          </div>
        );
      case 'Mentors':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {details.mentors.map((m: any) => (
               <div key={m.name} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{m.name}</p>
                  <p className="text-sm text-gray-600">Expertise: {m.expertise}</p>
                </div>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        );
      case 'Projects':
         return (
          <div className="space-y-4">
            {details.projects.map((p: any) => (
              <div key={p.name} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">{p.name}</p>
                <div className="text-sm text-gray-500 mt-2 flex justify-between">
                  <span>Status: <span className="font-semibold">{p.status}</span></span>
                  <button className="text-blue-600 font-bold hover:underline">View Board</button>
                </div>
              </div>
            ))}
          </div>
        );
      default: // Overview
        return (
           <div>
            <p className="text-gray-600 mb-6">{details.overview}</p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Popular Topics</h4>
              <div className="flex flex-wrap gap-2">
                {details.tags.map((tag:string) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Moderators</h4>
              <div className="space-y-2">
                {details.moderators.map((m: any) => (
                  <div key={m.name} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <UserCheck className="w-5 h-5 mr-3 text-gray-500"/>
                    <div>
                      <p className="font-semibold text-gray-800">{m.name}</p>
                      <p className="text-sm text-gray-600">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative animate-fade-in">
      <button onClick={onBack} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{department.name}</h2>
      <p className="text-gray-600 mb-6">Headed by {department.head}</p>

      {role === 'student' && (
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {['Overview', 'Discussions', 'Resources', 'Events', 'Mentors', 'Projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      )}

      {renderDeptContent()}
    </div>
  );
};

// Main Community Page with ApplyBoard styling
const Community = () => {
  const [selectedUni, setSelectedUni] = useState<any | null>(null);
  const [showStudentDashboard, setShowStudentDashboard] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // If student dashboard is active, show it
  if (showStudentDashboard) {
    return <StudentDashboard onBack={() => setShowStudentDashboard(false)} />;
  }

  // If a university is selected, show its detail page
  if (selectedUni) {
    return <UniversityDetailPage university={selectedUni} onBack={() => setSelectedUni(null)} />;
  }

  // Filter universities based on search
  const filteredUniversities = Object.values(universities).filter(uni =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        onSearchClick={() => document.getElementById('universities-section')?.scrollIntoView({ behavior: 'smooth' })}
        onGuestClick={() => setSelectedUni(Object.values(universities).find(u => u.id !== 'mit'))}
        onStudentLogin={() => setShowStudentDashboard(true)}
        onStudentDashboard={() => setShowStudentDashboard(true)}
      />
      
      <div id="universities-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Universities</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">Featured Universities</h2>
            <span className="text-gray-600">{filteredUniversities.length} universities found</span>
          </div>
        </div>

        {/* University Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <UniversityCard 
              key={university.id} 
              university={university} 
              onSelect={setSelectedUni}
            />
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No universities found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have found their perfect university through our platform.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;