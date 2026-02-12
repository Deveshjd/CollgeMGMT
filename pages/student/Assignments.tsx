
import React from 'react';
import { Link } from 'react-router-dom';

const Assignments: React.FC = () => {
  const list = [
    { id: '1', title: 'Calculus Midterm Project', subject: 'Mathematics', due: 'Today, 11:59 PM', status: 'Not Submitted', statusColor: 'red' },
    { id: '2', title: 'Hamlet Analytical Essay', subject: 'English Lit', due: 'Oct 20, 2023', status: 'Submitted', statusColor: 'yellow' },
    { id: '3', title: 'Photosynthesis Lab Report', subject: 'Biology', due: 'Oct 10, 2023', status: 'Evaluated', grade: '95/100', statusColor: 'green' },
    { id: '4', title: 'World War II Timeline', subject: 'History', due: 'Oct 05, 2023', status: 'Late', statusColor: 'gray' },
  ];

  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">My Assignments</h1>
          <p className="text-slate-500">Track your progress and upcoming deadlines.</p>
        </div>
        <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-icons">add</span> Submit External Work
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Pending Submission', 'Awaiting Evaluation', 'Completed This Term'].map((label, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">{label}</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{[3, 5, 12][i]}</h3>
            </div>
            <div className={`p-2 rounded-lg bg-${['orange', 'blue', 'green'][i]}-50 text-${['orange', 'blue', 'green'][i]}-500`}>
              <span className="material-icons">{['hourglass_empty', 'fact_check', 'verified'][i]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Assignment Title</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {list.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded bg-${a.statusColor}-100 flex items-center justify-center text-${a.statusColor}-600`}>
                        <span className="material-icons">{a.status === 'Evaluated' ? 'check_circle' : 'description'}</span>
                      </div>
                      <Link to={`/student/assignments/${a.id}`} className="font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">{a.title}</Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-primary/5 text-primary text-xs font-bold rounded">{a.subject}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{a.due}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-${a.statusColor}-100 text-${a.statusColor}-700`}>
                      {a.status}
                    </span>
                    {a.grade && <p className="text-xs font-bold mt-1 text-slate-900 dark:text-white">Grade: {a.grade}</p>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/student/assignments/${a.id}`} className="text-primary hover:underline text-sm font-bold">
                      {a.status === 'Not Submitted' ? 'Submit Now' : 'View Details'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
