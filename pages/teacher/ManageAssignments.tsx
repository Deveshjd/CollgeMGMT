
import React from 'react';

const ManageAssignments: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Assignments</h1>
          <p className="text-slate-500">Create, edit and track student tasks.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-icons">add</span> Create New Assignment
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-4">Assignment Name</th>
              <th className="px-6 py-4">Class</th>
              <th className="px-6 py-4">Due Date</th>
              <th className="px-6 py-4">Submissions</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { name: 'Introduction to Cell Biology', class: 'Biology 101', due: 'Oct 24, 2023', sub: '24/32', status: 'Active' },
              { name: 'Essay on World War II', class: 'History 202', due: 'Nov 01, 2023', sub: '0/28', status: 'Draft' },
              { name: 'Linear Algebra Quiz', class: 'Math 303', due: 'Oct 10, 2023', sub: '28/28', status: 'Closed' },
            ].map((a, i) => (
              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-bold">{a.name}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{a.class}</td>
                <td className="px-6 py-4 text-sm">{a.due}</td>
                <td className="px-6 py-4 text-sm font-bold text-primary">{a.sub}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${a.status === 'Active' ? 'bg-green-100 text-green-700' : a.status === 'Draft' ? 'bg-slate-100 text-slate-600' : 'bg-red-100 text-red-700'}`}>
                    {a.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors mx-2"><span className="material-icons">edit</span></button>
                  <button className="text-slate-400 hover:text-red-500 transition-colors"><span className="material-icons">delete</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAssignments;
