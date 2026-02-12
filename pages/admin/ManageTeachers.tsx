
import React from 'react';

const ManageTeachers: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Teachers</h1>
          <p className="text-slate-500">Manage teaching staff access and assignments.</p>
        </div>
        <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-icons">add</span> Create Teacher Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Teachers', val: '124', icon: 'groups', color: 'blue' },
          { label: 'Active Now', val: '98', icon: 'radio_button_checked', color: 'green' },
          { label: 'On Leave', val: '4', icon: 'flight_takeoff', color: 'orange' },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start justify-between">
            <div><p className="text-sm font-bold text-slate-500">{s.label}</p><h3 className="text-2xl font-bold mt-1">{s.val}</h3></div>
            <div className={`p-2 rounded-lg bg-${s.color}-50 text-${s.color}-600`}><span className="material-icons">{s.icon}</span></div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-4">Teacher</th>
              <th className="px-6 py-4">Subjects</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { name: 'Sarah Jenkins', subjects: ['Physics', 'Math'], dept: 'Science', status: 'Active' },
              { name: 'David Miller', subjects: ['History'], dept: 'Humanities', status: 'Active' },
              { name: 'Elena Rodriguez', subjects: ['Spanish', 'French'], dept: 'Languages', status: 'On Leave' },
              { name: 'Jane Cooper', subjects: ['English Lit'], dept: 'Humanities', status: 'Active' },
            ].map((t, i) => (
              <tr key={i} className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden"><img src={`https://picsum.photos/40/40?random=${i+30}`} alt={t.name} /></div>
                   <div><div className="font-bold">{t.name}</div><div className="text-xs text-slate-400">@school.edu</div></div>
                </td>
                <td className="px-6 py-4">
                  {t.subjects.map(s => <span key={s} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mr-1">{s}</span>)}
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{t.dept}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${t.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{t.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                   <div className="opacity-0 group-hover:opacity-100 transition-all flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">edit</span></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><span className="material-icons text-sm">delete</span></button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeachers;
