# 🧠 GrowWith Dashboard Breakdown (Post-Login Home)

## 🔹 Top Navigation Bar (Global)
- **Logo:** "GrowWith" → Home/Dashboard
- **Tabs:** Dashboard | Colleges | Departments | Academic Materials | Courses
- **User Avatar:** → Dropdown (Profile, Settings, Logout)

## 🔹 Left Sidebar Menu
- **Home Feed:** Shows posts/stories from connections
- **AI Interview Practice:** Navigate to /interview-practice
- **Find Mentors:** Mentor discovery page
- **Skill Certifications:** List + Earned badges
- **Job Board:** Explore & apply jobs
- **My Profile:** /profile
- **Settings:** Notification, privacy, account config

## 🔹 Center Panel (Feed Area)
- **User Stories Bar:** Horizontal scroll of stories like Instagram/LinkedIn
- **Feed Post Cards:** Each post shows:
  - Author info
  - Image/Video
  - Reactions (like, bookmark, comment)

## 🔹 Right Sidebar
- **AI Interview Practice Widget**
  - Title + Description + CTA Button (Start Practice)
  - Time: 30 min | Practiced count
- **Recommended Mentors**
  - Small cards (Name, Title, Company, Rating)
  - View All → Full mentor list
- **Progress Tracker**
  - Progress bars: Profile Completion, Interview Readiness, Skills Verified
  - View Career Path button

---

## 🛠️ Development Plan (Post-Login Page)

| Section            | Frontend (React)                | Backend (API endpoints)           |
|--------------------|---------------------------------|-----------------------------------|
| Auth redirect      | /login → /dashboard             | /auth/check-session               |
| Stories + Feed     | FeedList.jsx, StoryList.jsx      | /api/posts, /api/stories          |
| Sidebar buttons    | SidebarMenu.jsx                 | Static routes                     |
| Interview Practice | InterviewCard.jsx               | /api/interview-practice/start     |
| Mentor List        | MentorCard.jsx, MentorList.jsx  | /api/mentors/recommended          |
| Progress Tracker   | ProgressBar.jsx                 | /api/user/progress                |

---

# Academic Portal

A comprehensive academic portal built with React, TypeScript, and Tailwind CSS. This application provides a modern interface for students to access academic materials, explore departments, and manage their academic journey.

## Features

- **Academic Materials**: Access and download course materials, lecture notes, and study resources
- **Department Explorer**: Browse through different academic departments and their programs
- **College Information**: View detailed information about colleges and their offerings
- **Responsive Design**: Modern UI that works seamlessly across all devices
- **Search Functionality**: Easy-to-use search and filter options

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Heroicons
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/academic-portal.git
cd academic-portal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/) 