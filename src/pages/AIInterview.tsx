import React, { useState } from 'react';
import {
  MicrophoneIcon,
  VideoCameraIcon,
  ArrowPathIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function AIInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Tell me about yourself and your experience in software development.",
    "What is your approach to handling difficult team situations?",
    "How do you stay updated with the latest technologies?",
    "Describe a challenging project you worked on and how you overcame obstacles.",
    "What are your strengths and areas for improvement?"
  ];

  const handleStartInterview = () => {
    setCurrentQuestion(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl border border-blue-100 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Interview Practice</h1>
        <p className="text-gray-600">Practice your interview skills with our AI-powered interview simulator.</p>
      </div>

      {/* Main Interview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Interview Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Interview Controls</h2>
            <div className="space-y-4">
              <button
                onClick={handleStartInterview}
                className="w-full bg-blue-600 text-white rounded-lg py-3 px-4 font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <ArrowPathIcon className="h-5 w-5" />
                Start New Interview
              </button>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`w-full rounded-lg py-3 px-4 font-semibold transition flex items-center justify-center gap-2 ${
                  isRecording
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <MicrophoneIcon className="h-5 w-5" />
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
              <button
                className="w-full bg-blue-100 text-blue-600 rounded-lg py-3 px-4 font-semibold hover:bg-blue-200 transition flex items-center justify-center gap-2"
              >
                <VideoCameraIcon className="h-5 w-5" />
                Generate Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Interview Questions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-blue-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Current Question</h2>
              <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-gray-800">{questions[currentQuestion]}</p>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleNextQuestion}
                disabled={currentQuestion === questions.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                  currentQuestion === questions.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next Question
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 