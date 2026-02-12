
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Grading: React.FC = () => {
  const navigate = useNavigate();

  return (
    // Replaced class with className
    <div className="h-screen flex flex-col bg-background-light dark:bg-background-dark font-display overflow-hidden">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center shrink-0 z-20">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
            <span className="material-icons text-lg">arrow_back</span> Back to List
          </button>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>History 101</span> <span className="material-icons text-[10px]">chevron_right</span> <span>Mid-Term Essay</span>
            </div>
            <h1 className="font-bold text-lg leading-tight">The Industrial Revolution Impact</h1>
          </div>
        </div>
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
          <button className="p-1 hover:bg-white rounded-md text-slate-500"><span className="material-icons">chevron_left</span></button>
          <div className="flex items-center gap-2 px-3">
            <img src="https://picsum.photos/24/24" className="w-6 h-6 rounded-full" alt="Student" />
            <span className="text-sm font-bold">Alex Smith</span>
            <span className="text-xs text-slate-400">4 of 28</span>
          </div>
          <button className="p-1 hover:bg-white rounded-md text-slate-500"><span className="material-icons">chevron_right</span></button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <section className="flex-1 bg-slate-200 dark:bg-slate-950/50 p-8 flex justify-center overflow-y-auto">
          <div className="w-full max-w-3xl bg-white dark:bg-slate-100 text-slate-900 min-h-[1000px] p-12 shadow-2xl relative text-serif">
            <div className="text-right text-xs text-slate-500 mb-12">
              History 101<br/>Alex Smith<br/>October 12, 2023
            </div>
            <h2 className="text-3xl font-bold text-center mb-8">The Industrial Revolution: A Catalyst for Modernity</h2>
            <div className="space-y-4 text-lg leading-relaxed font-serif">
              <p>The Industrial Revolution, which took place from the 18th to 19th centuries, was a period during which predominantly agrarian, rural societies in Europe and America became industrial and urban. Prior to the Industrial Revolution, manufacturing was often done in people's homes...</p>
              <div className="my-8 h-48 bg-slate-100 rounded flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 italic text-sm">[Chart Placeholder: Figure 1: Economic Output vs Population]</span>
              </div>
              <p>Industrialization marked a shift to powered, special-purpose machinery, factories and mass production. The iron and textile industries, along with the development of the steam engine, played central roles...</p>
            </div>
          </div>
        </section>

        <aside className="w-[450px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
          <div className="p-6 border-b">
            <h2 className="text-lg font-bold">Evaluation</h2>
            <p className="text-xs text-slate-500 mt-1">Status: <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">Pending Review</span></p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">Total Score</label>
              <div className="flex items-center gap-3">
                <input className="w-32 text-3xl font-bold text-center py-2 bg-white dark:bg-slate-900 border-2 border-primary rounded-lg text-primary outline-none" type="number" defaultValue={85} />
                <span className="text-2xl text-slate-400 font-light">/ 100</span>
              </div>
              <button className="w-full flex items-center justify-between text-sm text-slate-500 mt-4 pt-4 border-t border-slate-200 hover:text-primary">
                <span>View Rubric Breakdown</span>
                <span className="material-icons">expand_more</span>
              </button>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold">Feedback Comments</label>
              <textarea className="w-full p-4 h-48 bg-slate-50 dark:bg-slate-800 border-slate-200 rounded-lg text-sm resize-none focus:ring-primary focus:border-primary" placeholder="Type feedback here..." defaultValue="Excellent analysis, Alex. Great focus on the social impacts. Check page 3 for missing citation on the chart."></textarea>
            </div>
          </div>
          <div className="p-6 border-t flex gap-3">
            <button onClick={() => navigate(-1)} className="flex-1 py-3 bg-white dark:bg-slate-800 border rounded-lg font-bold hover:bg-slate-50 transition-all">Save Draft</button>
            <button onClick={() => navigate(-1)} className="flex-[2] py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary-hover transition-all flex justify-center items-center gap-2">
              <span className="material-icons text-sm">send</span> Submit Evaluation
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Grading;
