import { useState } from 'react';
import { 
  StarIcon,
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  HeartIcon,
  ShareIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface Expert {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  expertise: string[];
  services: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  bio: string;
  image: string;
  linkedinUrl: string;
  websiteUrl: string;
  email: string;
  phone: string;
  availability: string[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
  reviews: {
    id: number;
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
    service: string;
  }[];
  certifications: string[];
  languages: string[];
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Software Engineer & Interview Coach",
    company: "Google",
    location: "San Francisco, CA",
    expertise: ["Technical Interviews", "System Design", "Frontend Development", "Career Coaching"],
    services: ["Mock Interviews", "Resume Review", "Career Guidance", "Technical Training"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 150,
    experience: "8+ years",
    bio: "Senior Software Engineer at Google with extensive experience in technical interviews and career development. I've helped 200+ candidates land jobs at top tech companies including Google, Meta, Amazon, and Microsoft.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    websiteUrl: "https://sarahjohnson.dev",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    projects: [
      {
        title: "Interview Prep Platform",
        description: "Built a comprehensive platform for technical interview preparation with 10K+ users",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        link: "https://github.com/sarahjohnson/interview-prep"
      },
      {
        title: "Career Coaching App",
        description: "Mobile app for career guidance and mentorship matching",
        technologies: ["React Native", "Firebase", "Stripe"],
        link: "https://github.com/sarahjohnson/career-app"
      }
    ],
    reviews: [
      {
        id: 1,
        reviewer: "Alex Chen",
        rating: 5,
        comment: "Sarah helped me prepare for my Google interview. Her mock interviews were incredibly realistic and her feedback was spot-on. I got the job!",
        date: "2024-01-15",
        service: "Mock Interview"
      },
      {
        id: 2,
        reviewer: "Maria Rodriguez",
        rating: 5,
        comment: "Excellent resume review service. Sarah identified key improvements that helped me get more interview calls.",
        date: "2024-01-10",
        service: "Resume Review"
      }
    ],
    certifications: ["Google Cloud Professional", "AWS Solutions Architect", "Certified Career Coach"],
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Tech Lead & Interview Specialist",
    company: "Microsoft",
    location: "Seattle, WA",
    expertise: ["System Design", "Backend Development", "Leadership", "Team Building"],
    services: ["System Design Interviews", "Leadership Coaching", "Technical Mentoring", "Team Management"],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 180,
    experience: "12+ years",
    bio: "Tech Lead at Microsoft with deep expertise in system design and leadership. I specialize in helping senior developers and engineering managers advance their careers.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    websiteUrl: "https://michaelchen.tech",
    email: "michael.chen@email.com",
    phone: "+1 (555) 987-6543",
    availability: ["Tuesday", "Thursday", "Sunday"],
    projects: [
      {
        title: "Distributed System Architecture",
        description: "Designed and implemented a scalable microservices architecture serving 1M+ users",
        technologies: ["Kubernetes", "Docker", "Redis", "PostgreSQL"]
      },
      {
        title: "Leadership Training Program",
        description: "Created comprehensive leadership development program for engineering managers",
        technologies: ["React", "Node.js", "MongoDB"]
      }
    ],
    reviews: [
      {
        id: 3,
        reviewer: "David Kim",
        rating: 5,
        comment: "Michael's system design coaching was invaluable. He has a unique way of breaking down complex problems.",
        date: "2024-01-12",
        service: "System Design Interview"
      }
    ],
    certifications: ["Microsoft Azure Solutions Architect", "Kubernetes Administrator", "Project Management Professional"],
    languages: ["English", "Mandarin"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Career Coach & Resume Expert",
    company: "CareerBoost",
    location: "New York, NY",
    expertise: ["Resume Writing", "Career Strategy", "Job Search", "Personal Branding"],
    services: ["Resume Writing", "LinkedIn Optimization", "Career Planning", "Interview Preparation"],
    rating: 4.9,
    reviews: 234,
    hourlyRate: 120,
    experience: "6+ years",
    bio: "Professional career coach specializing in tech industry job searches. I've helped 500+ professionals land their dream jobs with personalized career strategies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    websiteUrl: "https://emilyrodriguez.com",
    email: "emily.rodriguez@email.com",
    phone: "+1 (555) 456-7890",
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    projects: [
      {
        title: "Career Success Stories",
        description: "Documentary series featuring successful career transitions in tech",
        technologies: ["Video Production", "Storytelling", "Career Development"]
      }
    ],
    reviews: [
      {
        id: 4,
        reviewer: "Jennifer Lee",
        rating: 5,
        comment: "Emily completely transformed my resume and LinkedIn profile. I got 3 job offers within 2 weeks!",
        date: "2024-01-08",
        service: "Resume Writing"
      }
    ],
    certifications: ["Certified Professional Resume Writer", "LinkedIn Career Coach", "Career Development Facilitator"],
    languages: ["English", "Spanish", "Portuguese"]
  }
];

export default function Experts() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [showBooking, setShowBooking] = useState(false);

  const handleBookSession = () => {
    if (!selectedService) {
      alert('Please select a service first');
      return;
    }
    setShowBooking(true);
  };

  const closeModal = () => {
    setSelectedExpert(null);
    setSelectedService('');
    setShowBooking(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Expert Interview Coaches & Career Mentors</h1>
        <p className="mt-2 text-gray-600">Connect with industry experts for interview preparation, career guidance, and professional development.</p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedExpert(expert)}
          >
            {/* Expert Header */}
            <div className="flex items-start space-x-4">
              <img
                src={expert.image}
                alt={expert.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                <p className="text-sm text-gray-600">{expert.title}</p>
                <p className="text-sm text-gray-500">{expert.company}</p>
                <div className="flex items-center mt-1">
                  <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">{expert.location}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 text-sm font-medium text-gray-900">{expert.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({expert.reviews} reviews)</span>
              </div>
              <div className="ml-auto">
                <span className="text-lg font-bold text-blue-600">${expert.hourlyRate}</span>
                <span className="text-sm text-gray-500">/hr</span>
              </div>
            </div>

            {/* Expertise */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expert.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
                {expert.expertise.length > 3 && (
                  <span className="text-xs text-gray-500">+{expert.expertise.length - 3} more</span>
                )}
              </div>
            </div>

            {/* Services */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Services</h4>
              <div className="flex flex-wrap gap-2">
                {expert.services.slice(0, 2).map((service, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
                  >
                    {service}
                  </span>
                ))}
                {expert.services.length > 2 && (
                  <span className="text-xs text-gray-500">+{expert.services.length - 2} more</span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedExpert(expert);
              }}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
            >
              View Profile & Book
            </button>
          </div>
        ))}
      </div>

      {/* Expert Detail Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* Expert Header */}
                <div className="flex items-start space-x-6">
                  <img
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedExpert.name}</h3>
                    <p className="text-lg text-gray-600">{selectedExpert.title}</p>
                    <p className="text-gray-500">{selectedExpert.company}</p>
                    <div className="flex items-center mt-2">
                      <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-500">{selectedExpert.location}</span>
                    </div>
                    
                    {/* Rating and Price */}
                    <div className="flex items-center mt-4 space-x-6">
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 font-medium text-gray-900">{selectedExpert.rating}</span>
                        <span className="ml-1 text-gray-500">({selectedExpert.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="h-5 w-5 text-green-500" />
                        <span className="ml-1 font-bold text-green-600">${selectedExpert.hourlyRate}</span>
                        <span className="ml-1 text-gray-500">/hour</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-blue-500" />
                        <span className="ml-1 text-gray-500">{selectedExpert.experience} experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">About</h4>
                  <p className="text-gray-600">{selectedExpert.bio}</p>
                </div>

                {/* Services */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedExpert.services.map((service, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Projects</h4>
                  <div className="space-y-3">
                    {selectedExpert.projects.map((project, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <h5 className="font-medium text-gray-900">{project.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mt-2"
                          >
                            View Project <ExternalLinkIcon className="h-4 w-4 ml-1" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Recent Reviews</h4>
                  <div className="space-y-3">
                    {selectedExpert.reviews.map((review) => (
                      <div key={review.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-900">{review.reviewer}</span>
                            <span className="ml-2 text-sm text-gray-500">• {review.service}</span>
                          </div>
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 text-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2">{review.comment}</p>
                        <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact & Social */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact</h4>
                    <div className="space-y-2">
                      <a href={`mailto:${selectedExpert.email}`} className="flex items-center text-gray-600 hover:text-blue-600">
                        <EnvelopeIcon className="h-4 w-4 mr-2" />
                        {selectedExpert.email}
                      </a>
                      <a href={`tel:${selectedExpert.phone}`} className="flex items-center text-gray-600 hover:text-blue-600">
                        <PhoneIcon className="h-4 w-4 mr-2" />
                        {selectedExpert.phone}
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Social</h4>
                    <div className="space-y-2">
                      <a
                        href={selectedExpert.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <GlobeAltIcon className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </a>
                      <a
                        href={selectedExpert.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <GlobeAltIcon className="h-4 w-4 mr-2" />
                        Personal Website
                      </a>
                    </div>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Book a Session</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Service
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Choose a service...</option>
                        {selectedExpert.services.map((service, index) => (
                          <option key={index} value={service}>
                            {service} - ${selectedExpert.hourlyRate}/hour
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={handleBookSession}
                      disabled={!selectedService}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBooking && selectedExpert && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowBooking(false)}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-3 text-lg font-medium leading-6 text-gray-900">
                  Session Booked!
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Your {selectedService} session with {selectedExpert.name} has been scheduled. You'll receive a confirmation email with meeting details shortly.
                </p>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={() => setShowBooking(false)}
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 