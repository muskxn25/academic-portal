export default function RightSidebar() {
  return (
    <aside className="space-y-6">
      {/* AI Interview Practice Widget */}
      <div className="bg-white rounded-xl border border-blue-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">AI Interview Practice</h2>
        <p className="text-gray-600 mb-4">Practice technical and behavioral questions for software engineering roles.</p>
        <button className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition">Start Practice</button>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>30 min</span>
          <span>1,245 practiced</span>
        </div>
      </div>

      {/* Recommended Mentors Widget */}
      <div className="bg-white rounded-xl border border-blue-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Mentors</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">JL</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Jennifer Lee <span className="text-yellow-500">4.9★</span></div>
              <div className="text-xs text-gray-500">Product Manager, Google</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">RG</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Robert Garcia <span className="text-yellow-500">4.8★</span></div>
              <div className="text-xs text-gray-500">Engineer, Microsoft</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 