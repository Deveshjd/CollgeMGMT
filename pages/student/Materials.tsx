
import React from 'react';

const Materials: React.FC = () => {
  const materials = [
    { title: 'Chapter 4: Calculus Fundamentals', subject: 'Mathematics', teacher: 'Mr. Anderson', date: 'Oct 24, 2023', size: '2.4 MB', type: 'PDF Note' },
    { title: 'History of the Cold War - Part 1', subject: 'History', teacher: 'Ms. Roberts', date: 'Oct 22, 2023', size: '14:20', type: 'Video Lecture' },
    { title: 'Quantum Mechanics: Wave-Particle Duality', subject: 'Physics', teacher: 'Dr. Stevens', date: 'Oct 20, 2023', size: '1.8 MB', type: 'PDF Note' },
    { title: 'Cell Division: Mitosis & Meiosis', subject: 'Biology', teacher: 'Mrs. Clark', date: 'Oct 18, 2023', size: '45:00', type: 'Video Lecture' },
  ];

  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Study Materials</h1>
        <p className="text-slate-500">Access all your course notes, video lectures, and resources in one place.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-4 sticky top-24">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Subjects</h3>
            <nav className="space-y-1">
              {['All Subjects', 'Mathematics', 'Physics', 'Biology', 'History'].map((s, i) => (
                <button key={i} className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg ${i === 0 ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                  {s}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {materials.map((m, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all overflow-hidden flex flex-col">
              <div className="p-5 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className={`p-2 rounded-lg bg-${m.type.includes('PDF') ? 'red' : 'blue'}-50 text-${m.type.includes('PDF') ? 'red' : 'blue'}-500`}>
                    <span className="material-icons">{m.type.includes('PDF') ? 'picture_as_pdf' : 'play_circle'}</span>
                  </span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded">{m.subject}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">{m.title}</h3>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden"><img src={`https://picsum.photos/30/30?random=${i}`} /></div>
                  <span className="text-xs font-medium text-slate-500">{m.teacher}</span>
                </div>
              </div>
              <div className="px-5 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{m.type}</span>
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                  {m.type.includes('PDF') ? 'Download' : 'Watch Now'}
                  <span className="material-icons text-sm">{m.type.includes('PDF') ? 'download' : 'arrow_forward'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;
