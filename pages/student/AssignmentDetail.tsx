
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AssignmentDetail: React.FC = () => {
  const { id } = useParams();

  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto">
      <nav className="flex text-sm text-slate-500 mb-8">
        <Link to="/student/assignments" className="hover:text-primary">Assignments</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-white font-bold">Mid-Term History Essay</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">Pending Submission</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Essay</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <span className="material-icons text-primary">star</span> 100 Points Possible
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Mid-Term History Essay: The Industrial Revolution</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center gap-3">
                <span className="material-icons text-primary">calendar_today</span>
                <div>
                  <p className="text-xs text-slate-500">Due Date</p>
                  <p className="text-sm font-bold">Oct 24, 2023 at 11:59 PM</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center gap-3">
                <span className="material-icons text-primary">folder_open</span>
                <div>
                  <p className="text-xs text-slate-500">Category</p>
                  <p className="text-sm font-bold">Unit 3: Social Changes</p>
                </div>
              </div>
            </div>
            <div className="prose dark:prose-invert">
              <h3 className="text-lg font-bold mb-2">Instructions</h3>
              <p className="text-slate-600 dark:text-slate-400">Please submit your 2,000-word essay on the social impacts of the Industrial Revolution. Your analysis should cover urbanization, working conditions, and the emergence of the middle class.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Your Submission</h2>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center hover:border-primary transition-all cursor-pointer group mb-6">
              <span className="material-icons text-slate-400 group-hover:text-primary text-4xl mb-2">cloud_upload</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Click to upload <span className="text-slate-400 font-normal">or drag and drop</span></p>
              <p className="text-xs text-slate-400 mt-1">PDF, DOCX (max 10MB)</p>
            </div>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <span className="material-icons">send</span> Submit Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
