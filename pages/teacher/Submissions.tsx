
import React from 'react';
import { Link } from 'react-router-dom';

const Submissions: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Submissions Queue</h1>
          <p className="text-slate-500">Grading tasks waiting for evaluation.</p>
        </div>
        <button className="bg-primary text-white px-5 py-2 rounded-lg font-bold shadow-lg shadow-primary/20">Export All Grades</button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4">Assignment</th>
              <th className="px-6 py-4">Submitted</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { name: 'Sarah Jenkins', task: 'History Essay: WWII', time: '2 mins ago', status: 'Pending' },
              { name: 'Mike Ross', task: 'Math Quiz: Algebra', time: '15 mins ago', status: 'Pending' },
              { name: 'Diana Ross', task: 'Physics Lab Report', time: 'Yesterday', status: 'Pending' },
              { name: 'Louis Litt', task: 'English Poetry', time: '3 hours ago', status: 'Late' },
            ].map((sub, i) => (
              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 flex items-center gap-3">
                   <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden"><img src={`https://picsum.photos/40/40?random=${i+20}`} alt={sub.name} /></div>
                   <span className="font-bold">{sub.name}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{sub.task}</td>
                <td className="px-6 py-4 text-xs font-bold text-slate-400">{sub.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${sub.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    {sub.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to="/teacher/grading/1" className="bg-primary/10 text-primary px-4 py-1.5 rounded text-sm font-bold hover:bg-primary hover:text-white transition-all">Grade Now</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submissions;
