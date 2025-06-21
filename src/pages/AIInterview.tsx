import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Clock, 
  Star, 
  TrendingUp, 
  Users, 
  Target,
  CheckCircle,
  XCircle,
  AlertCircle,
  Brain,
  Code,
  Briefcase,
  Building,
  Heart,
  Zap,
  Award
} from 'lucide-react';

// Mock data for interview types and questions
const interviewTypes = [
  {
    id: 'technical',
    name: 'Technical Interview',
    icon: Code,
    description: 'Coding challenges, algorithms, and system design',
    difficulty: 'Advanced',
    duration: '45-60 min',
    questions: 15,
    color: 'blue'
  },
  {
    id: 'behavioral',
    name: 'Behavioral Interview',
    icon: Users,
    description: 'STAR method, leadership, and teamwork scenarios',
    difficulty: 'Intermediate',
    duration: '30-45 min',
    questions: 10,
    color: 'green'
  },
  {
    id: 'case-study',
    name: 'Case Study Interview',
    icon: Briefcase,
    description: 'Business problems, analysis, and strategic thinking',
    difficulty: 'Advanced',
    duration: '45-60 min',
    questions: 12,
    color: 'purple'
  },
  {
    id: 'system-design',
    name: 'System Design Interview',
    icon: Building,
    description: 'Architecture, scalability, and technical design',
    difficulty: 'Expert',
    duration: '60-90 min',
    questions: 8,
    color: 'orange'
  }
];

const mockQuestions = {
  technical: [
    {
      id: 1,
      question: "Implement a function to find the longest palindromic substring in a given string.",
      type: "coding",
      difficulty: "medium",
      timeLimit: 15,
      hints: ["Consider using dynamic programming", "Think about expanding around center"]
    },
    {
      id: 2,
      question: "Explain the difference between a stack and a queue. When would you use each?",
      type: "conceptual",
      difficulty: "easy",
      timeLimit: 5,
      hints: ["Think about LIFO vs FIFO", "Consider real-world examples"]
    },
    {
      id: 3,
      question: "Design an algorithm to find the shortest path in a weighted graph.",
      type: "algorithm",
      difficulty: "hard",
      timeLimit: 20,
      hints: ["Consider Dijkstra's algorithm", "Think about edge weights"]
    }
  ],
  behavioral: [
    {
      id: 1,
      question: "Tell me about a time when you had to work with a difficult team member. How did you handle it?",
      type: "star",
      difficulty: "medium",
      timeLimit: 8,
      hints: ["Use STAR method", "Focus on resolution and learning"]
    },
    {
      id: 2,
      question: "Describe a situation where you had to learn a new technology quickly to complete a project.",
      type: "star",
      difficulty: "medium",
      timeLimit: 8,
      hints: ["Show your learning process", "Highlight adaptability"]
    },
    {
      id: 3,
      question: "Give me an example of when you had to make a decision without all the information you needed.",
      type: "star",
      difficulty: "hard",
      timeLimit: 10,
      hints: ["Show analytical thinking", "Explain your decision-making process"]
    }
  ],
  'case-study': [
    {
      id: 1,
      question: "A tech startup wants to enter the food delivery market. Analyze the competitive landscape and recommend a strategy.",
      type: "analysis",
      difficulty: "medium",
      timeLimit: 15,
      hints: ["Consider market size", "Analyze competitors", "Think about differentiation"]
    },
    {
      id: 2,
      question: "A company's customer retention rate has dropped by 20%. How would you investigate and address this issue?",
      type: "problem-solving",
      difficulty: "hard",
      timeLimit: 20,
      hints: ["Start with data analysis", "Consider multiple hypotheses", "Propose solutions"]
    }
  ],
  'system-design': [
    {
      id: 1,
      question: "Design a URL shortening service like bit.ly. Consider scalability, availability, and performance.",
      type: "architecture",
      difficulty: "expert",
      timeLimit: 25,
      hints: ["Think about database design", "Consider caching strategies", "Plan for scale"]
    },
    {
      id: 2,
      question: "Design a real-time chat application that can handle millions of concurrent users.",
      type: "architecture",
      difficulty: "expert",
      timeLimit: 30,
      hints: ["Consider WebSocket connections", "Think about message delivery", "Plan for reliability"]
    }
  ]
};

const AIInterview = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [performance, setPerformance] = useState<{
    score: number;
    feedback: string;
    areas: string[];
    suggestions: string[];
  }>({
    score: 0,
    feedback: '',
    areas: [],
    suggestions: []
  });

  const startInterview = (type: string) => {
    setSelectedType(type);
    setIsInterviewActive(true);
    setCurrentQuestion(0);
    setTimeRemaining(mockQuestions[type as keyof typeof mockQuestions][0].timeLimit * 60);
  };

  const endInterview = () => {
    setIsInterviewActive(false);
    setShowResults(true);
    // Mock performance calculation
    setPerformance({
      score: Math.floor(Math.random() * 40) + 60, // 60-100
      feedback: "Good overall performance! You showed strong technical knowledge and clear communication. Consider practicing more system design questions.",
      areas: ["Technical Knowledge", "Communication", "Problem Solving"],
      suggestions: ["Practice more coding problems", "Work on STAR method responses", "Study system design patterns"]
    });
  };

  const nextQuestion = () => {
    if (selectedType && currentQuestion < mockQuestions[selectedType as keyof typeof mockQuestions].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeRemaining(mockQuestions[selectedType as keyof typeof mockQuestions][currentQuestion + 1].timeLimit * 60);
    } else {
      endInterview();
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isInterviewActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isInterviewActive, timeRemaining]);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Interview Complete!</h1>
              <p className="text-gray-600">Here's your performance analysis</p>
            </div>

            {/* Score Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{performance.score}/100</div>
                <div className="text-lg opacity-90">Overall Score</div>
              </div>
            </div>

            {/* Performance Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Strengths</h3>
                <div className="space-y-2">
                  {performance.areas.map((area, index) => (
                    <div key={index} className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas for Improvement</h3>
                <div className="space-y-2">
                  {performance.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center text-orange-700">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Feedback</h3>
              <p className="text-gray-700">{performance.feedback}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setShowResults(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Practice Again
              </button>
              <button 
                onClick={() => window.location.href = '/job-board'}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isInterviewActive && selectedType) {
    const questions = mockQuestions[selectedType as keyof typeof mockQuestions];
    const currentQ = questions[currentQuestion];
    const selectedInterview = interviewTypes.find(t => t.id === selectedType);

    return (
      <div className="min-h-screen bg-gray-900">
        {/* Interview Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsInterviewActive(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Back
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{selectedInterview?.name}</h1>
                <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-red-600">
                <Clock className="w-4 h-4" />
                <span className="font-mono">
                  {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <button 
                onClick={endInterview}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                End Interview
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-screen">
          {/* Video Area */}
          <div className="flex-1 bg-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-blue-400" />
                </div>
                <p className="text-lg">AI Interviewer</p>
                <p className="text-sm text-gray-400">Ready to begin</p>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <button 
                onClick={() => setIsRecording(!isRecording)}
                className={`p-3 rounded-full ${isRecording ? 'bg-red-600' : 'bg-gray-700'} text-white`}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 rounded-full ${isVideoOn ? 'bg-blue-600' : 'bg-gray-700'} text-white`}
              >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Question Panel */}
          <div className="w-96 bg-white border-l">
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Current Question</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentQ.question}</h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span>Type: {currentQ.type}</span>
                  <span>Difficulty: {currentQ.difficulty}</span>
                </div>

                {currentQ.hints && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <h4 className="font-medium text-yellow-800 mb-2">💡 Hints</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      {currentQ.hints.map((hint, index) => (
                        <li key={index}>• {hint}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button 
                  onClick={nextQuestion}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                >
                  Next Question
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold">
                  Skip Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">AI Interview Practice</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master your interview skills with our AI-powered interview simulator. 
            Practice with realistic questions and get instant feedback to improve your performance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Practice Questions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Students Helped</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Interview Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Interview Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div 
                  key={type.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-200"
                  onClick={() => startInterview(type.id)}
                >
                  <div className={`w-12 h-12 bg-${type.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${type.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <span className="font-medium">{type.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{type.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Questions:</span>
                      <span className="font-medium">{type.questions}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Performance */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">78</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Interviews Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">+15%</div>
              <div className="text-sm text-gray-600">Score Improvement</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              AI-Powered Feedback
            </h3>
            <p className="text-gray-600 mb-4">
              Get instant, detailed feedback on your performance including communication skills, 
              technical knowledge, and areas for improvement.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Real-time performance scoring</li>
              <li>• Detailed feedback analysis</li>
              <li>• Personalized improvement suggestions</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              Progress Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Track your interview performance over time and see your improvement across 
              different interview types and question categories.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Performance analytics</li>
              <li>• Progress visualization</li>
              <li>• Skill development tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInterview; 