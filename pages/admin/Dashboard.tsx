
import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">System Status</h1>
          <p className="text-slate-500">Platform-wide performance and engagement metrics.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white dark:bg-slate-800 border px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm"><span className="material-icons text-sm">file_download</span> Export Report</button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-primary-hover transition-colors">Live Refresh</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Students', val: '124,592', change: '+12%', icon: 'school', color: 'blue' },
          { label: 'Total Teachers', val: '8,430', change: '+4.2%', icon: 'person_outline', color: 'purple' },
          { label: 'Active Sessions', val: '4,200', sub: 'Across 142 institutes', icon: 'insights', color: 'orange', pulse: true },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm relative group overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{s.label}</p>
                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{s.val}</h3>
              </div>
              <div className={`p-2 bg-${s.color}-100 text-${s.color}-600 rounded-lg ${s.pulse ? 'animate-pulse' : ''}`}><span className="material-icons">{s.icon}</span></div>
            </div>
            {s.change && <div className="text-sm font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 inline-block px-2 py-0.5 rounded-full relative z-10">↑ {s.change} <span className="text-slate-400 font-normal">vs last month</span></div>}
            {s.sub && <p className="text-sm text-slate-500 relative z-10">{s.sub}</p>}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 bg-${s.color}-500/5 rounded-full`}></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Platform Traffic (30 Days)</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 35, 40, 75, 90, 60, 50, 30].map((v, i) => (
              <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-t" style={{ height: `${v}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-4">
             <span>Aug 01</span><span>Aug 15</span><span>Aug 30</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h3 className="font-bold mb-6">System Health</h3>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {[{ label: 'Database Load', v: 34, c: 'primary' }, { label: 'Server CPU', v: 58, c: 'yellow-400' }, { label: 'Storage', v: 82, c: 'emerald-500' }].map((h, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between text-sm mb-2 font-bold"><span>{h.label}</span><span>{h.v}%</span></div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                   <div className={`h-full transition-all`} style={{ width: `${h.v}%`, backgroundColor: h.c === 'primary' ? '#135bec' : h.c === 'yellow-400' ? '#facc15' : '#10b981' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
