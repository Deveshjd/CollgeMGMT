
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary"><span className="material-icons">library_books</span></div>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Active</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Total Subjects</h3>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">8</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600"><span className="material-icons">pending_actions</span></div>
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded">Action Needed</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Pending Assignments</h3>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600"><span className="material-icons">check_circle</span></div>
            <span className="text-slate-400 text-xs font-semibold px-2 py-1 rounded">+2 this week</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Submitted Assignments</h3>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">12</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Study Materials</h2>
            <Link to="/student/materials" className="text-primary text-sm font-medium flex items-center gap-1">View All <span className="material-icons text-sm">arrow_forward</span></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Week 4 Notes: Integration', subject: 'Calculus II', time: '2h ago', icon: 'picture_as_pdf', color: 'red' },
              { title: 'Thermodynamics Intro', subject: 'Physics', time: 'Yesterday', icon: 'play_circle', color: 'purple' },
              { title: 'WWII Essay Guide', subject: 'History', time: '2 days ago', icon: 'description', color: 'orange' },
              { title: 'Github Repo: Project A', subject: 'Computer Sci', time: '3 days ago', icon: 'link', color: 'teal' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4 hover:border-primary/30 transition-all cursor-pointer">
                <div className={`w-14 h-14 rounded-lg bg-${item.color}-50 flex items-center justify-center text-${item.color}-500 shrink-0`}>
                  <span className="material-icons text-2xl">{item.icon}</span>
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">{item.subject}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white truncate mt-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-hidden shadow-xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10 blur-xl"></div>
            <h3 className="text-lg font-bold mb-4 relative z-10">Upcoming Live Class</h3>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"><span className="material-icons">videocam</span></div>
              <div>
                <p className="font-semibold text-sm">Advanced Chemistry</p>
                <p className="text-xs text-blue-100">Today, 2:00 PM</p>
              </div>
            </div>
            <button className="w-full py-2.5 bg-white text-primary font-bold rounded-lg text-sm hover:bg-blue-50 transition-colors relative z-10">Join Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
