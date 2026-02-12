
import React from 'react';

const Profile: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Student Profile</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold">Edit Profile</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="h-32 bg-primary/10 relative">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#135bec 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
          <div className="px-6 pb-6 relative -mt-16 text-center">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqdVVykqmPWlhxo2XFIreVCQ1ZucreDE59ndg9CJXJ4Ss2vTOy0j0ti4I6ZCUnpYsYIC3ZfsduqPl713IYaPxwrwaRF0bBefNW9FYs9I_LjAjJl-oa3TeTZRAbYe5UQT3p2SDqNWyg1sPS20aI5bd3P0r4010I9-hHX4sBu9NtvdHq5OzImGjX2fmcFBc4mEITtidDieB0l1TIHJ84Jys86X5zOIdZUv7jHsPdsPSGKEgQaZvL48Mpy-Vy7Tz2W1TqlC0xoKfPjAc" className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 mx-auto object-cover bg-white" alt="Alex Morgan" />
            <h2 className="text-xl font-bold mt-4">Alex Morgan</h2>
            <p className="text-slate-500 text-sm">Roll No: CS2023-459</p>
            <div className="mt-6 text-left space-y-3 border-t pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Branch</span>
                <span className="font-bold">Computer Science</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Year / Sem</span>
                <span className="font-bold">3rd Year / 5th Sem</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Email</span>
                <span className="font-bold">alex.j@uni.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Cumulative GPA', val: '3.82', sub: '+0.2 since last sem', icon: 'grade', color: 'primary' },
              { label: 'Attendance', val: '94%', sub: 'Excellent standing', icon: 'event_available', color: 'primary' },
              { label: 'Credits Earned', val: '86 / 120', sub: 'On track', icon: 'class', color: 'primary' },
            ].map((s, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-icons">{s.icon}</span></div>
                  <p className="text-xs font-bold text-slate-500 uppercase">{s.label}</p>
                </div>
                <p className="text-2xl font-bold">{s.val}</p>
                <p className="text-xs text-green-600 font-bold mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-6">Semester Performance</h3>
            <div className="h-64 flex items-end justify-between gap-4">
               {[1, 2, 3, 4, 5].map(v => (
                 <div key={v} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full bg-primary/20 rounded-t group-hover:bg-primary transition-all" style={{ height: `${v * 15 + 20}%` }}></div>
                    <span className="text-xs text-slate-500">Sem {v}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
