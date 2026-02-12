
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-primary to-blue-400 rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Mr. Anderson!</h2>
          <p className="text-blue-100 max-w-xl">You have <span className="font-bold text-white">12 pending evaluations</span> that need your attention. Your next class starts in 45 minutes.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/teacher/submissions" className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-blue-50 transition-colors">Review Now</Link>
            <button className="bg-primary-dark/30 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-dark/50 transition-colors backdrop-blur-sm">View Schedule</button>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Students', val: '145', sub: '+2 this week', icon: 'groups', color: 'blue' },
          { label: 'Assignments Created', val: '24', sub: 'Active', icon: 'assignment', color: 'indigo' },
          { label: 'Pending Evaluations', val: '12', sub: 'Needs Action', icon: 'pending_actions', color: 'orange', pulse: true },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm relative">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 bg-${s.color}-50 text-${s.color}-600 rounded-lg`}><span className="material-icons">{s.icon}</span></div>
              <span className={`text-xs font-bold px-2 py-1 bg-${s.color === 'orange' ? 'orange' : 'green'}-100 text-${s.color === 'orange' ? 'orange' : 'green'}-700 rounded-full ${s.pulse ? 'animate-pulse' : ''}`}>{s.sub}</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{s.val}</h3>
            <p className="text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="font-bold text-lg">Recent Submissions</h3>
            <Link to="/teacher/submissions" className="text-primary text-sm font-bold hover:underline">View All</Link>
          </div>
          <table className="w-full text-left">
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {[
                { name: 'Sarah Jenkins', task: 'History Essay: WWII', time: '2 mins ago', status: 'Pending' },
                { name: 'Mike Ross', task: 'Math Quiz: Algebra', time: '15 mins ago', status: 'Pending' },
                { name: 'Jessica Pearson', task: 'Biology Lab: Cells', time: '1 hour ago', status: 'Graded' },
              ].map((sub, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"><img src={`https://picsum.photos/30/30?random=${i+10}`} alt={sub.name} /></div>
                    <span className="font-bold text-sm">{sub.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{sub.task}</td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">{sub.time}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to="/teacher/grading/1" className="text-primary text-sm font-bold">{sub.status === 'Pending' ? 'Grade' : 'Review'}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'add_circle', label: 'Assignment', color: 'blue' },
                { icon: 'upload_file', label: 'Material', color: 'purple' },
                { icon: 'announcement', label: 'Notice', color: 'green' },
                { icon: 'event', label: 'Event', color: 'orange' },
              ].map((a, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:border-primary transition-all group border border-transparent">
                  <span className={`material-icons text-${a.color}-600 mb-2 group-hover:scale-110 transition-transform`}>{a.icon}</span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{a.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
