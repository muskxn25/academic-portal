import React, { useState } from 'react'
import { 
  MicrophoneIcon,
  StopIcon,
  PlayIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

interface InterviewQuestion {
  id: number
  question: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  sampleAnswer?: string
}

interface InterviewFeedback {
  strengths: string[]
  improvements: string[]
  score: number
  detailedFeedback: string
}

const sampleQuestions: InterviewQuestion[] = [
  {
    id: 1,
    question: "Tell me about yourself and your technical background.",
    category: "General",
    difficulty: "Beginner",
    sampleAnswer: "I am a software developer with 3 years of experience in full-stack development..."
  },
  {
    id: 2,
    question: "Explain the concept of React hooks and their benefits.",
    category: "Frontend",
    difficulty: "Intermediate",
    sampleAnswer: "React hooks are functions that allow you to use state and other React features..."
  },
  {
    id: 3,
    question: "How would you design a scalable microservices architecture?",
    category: "System Design",
    difficulty: "Advanced",
    sampleAnswer: "A scalable microservices architecture should consider several key factors..."
  }
]

export default function AIInterview() {
  const [isRecording, setIsRecording] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<InterviewQuestion | null>(null)
  const [feedback, setFeedback] = useState<InterviewFeedback | null>(null)
  const [interviewHistory, setInterviewHistory] = useState<Array<{
    question: InterviewQuestion
    feedback: InterviewFeedback
  }>>([])

  const startInterview = () => {
    setCurrentQuestion(sampleQuestions[0])
    setFeedback(null)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Here you would implement actual recording functionality
  }

  const generateFeedback = () => {
    // Simulated feedback generation
    const mockFeedback: InterviewFeedback = {
      strengths: [
        "Clear communication",
        "Good technical knowledge",
        "Well-structured response"
      ],
      improvements: [
        "Could provide more specific examples",
        "Consider elaborating on implementation details"
      ],
      score: 85,
      detailedFeedback: "Your response demonstrated a good understanding of the concept..."
    }
    setFeedback(mockFeedback)
    if (currentQuestion) {
      setInterviewHistory([...interviewHistory, { question: currentQuestion, feedback: mockFeedback }])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Interview Practice</h1>
        <p className="mt-2 text-gray-600">Practice your interview skills with our AI-powered interview simulator.</p>
      </div>

      {/* Interview Controls */}
      <div className="flex gap-4">
        <button
          onClick={startInterview}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
        >
          <PlayIcon className="mr-2 h-5 w-5" />
          Start New Interview
        </button>
        <button
          onClick={toggleRecording}
          className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm ${
            isRecording
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isRecording ? (
            <>
              <StopIcon className="mr-2 h-5 w-5" />
              Stop Recording
            </>
          ) : (
            <>
              <MicrophoneIcon className="mr-2 h-5 w-5" />
              Start Recording
            </>
          )}
        </button>
      </div>

      {/* Current Question */}
      {currentQuestion && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Current Question</h3>
            <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
              {currentQuestion.difficulty}
            </span>
          </div>
          <p className="mt-2 text-gray-600">{currentQuestion.question}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {currentQuestion.category}
            </span>
          </div>
        </div>
      )}

      {/* Feedback Section */}
      {feedback && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">AI Feedback</h3>
            <div className="flex items-center">
              <SparklesIcon className="mr-1 h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">Score: {feedback.score}/100</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Strengths</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {feedback.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Areas for Improvement</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Detailed Feedback</h4>
            <p className="mt-2 text-sm text-gray-600">{feedback.detailedFeedback}</p>
          </div>
        </div>
      )}

      {/* Interview History */}
      {interviewHistory.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Interview History</h3>
          <div className="mt-4 space-y-4">
            {interviewHistory.map((item, index) => (
              <div key={index} className="rounded-lg border border-gray-100 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{item.question.question}</h4>
                  <span className="text-sm text-gray-500">Score: {item.feedback.score}/100</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    {item.question.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    {item.question.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={generateFeedback}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
        >
          <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
          Generate Feedback
        </button>
        <button
          onClick={() => setCurrentQuestion(null)}
          className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-200"
        >
          <ArrowPathIcon className="mr-2 h-5 w-5" />
          Next Question
        </button>
      </div>
    </div>
  )
} 