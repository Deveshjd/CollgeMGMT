
import React from 'react';

const Upload: React.FC = () => {
  return (
    // Replaced class with className
    <div className="p-8 max-w-7xl mx-auto">
       <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Upload Study Material</h1>
        <p className="text-slate-500 mt-1">Share resources with your students. Supported formats: PDF documents and video links.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form className="bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 border border-slate-100 dark:border-slate-800 space-y-8">
            <div className="space-y-6">
               <h2 className="text-lg font-bold flex items-center gap-2 border-b pb-2"><span className="material-icons text-primary">info</span> Material Details</h2>
               <div>
                  <label className="block text-sm font-bold mb-2">Subject</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-3 focus:ring-primary">
                    <option>Mathematics 101 - Algebra</option>
                    <option>Physics 201 - Mechanics</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-bold mb-2">Material Title</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-3 focus:ring-primary" placeholder="e.g. Chapter 4: Linear Equations Notes" />
               </div>
               <div>
                  <label className="block text-sm font-bold mb-2">Description</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-3 focus:ring-primary h-32" placeholder="Briefly describe the contents..."></textarea>
               </div>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-lg font-bold flex items-center gap-2 border-b pb-2"><span className="material-icons text-primary">cloud_upload</span> Content Resources</h2>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-12 text-center group hover:border-primary transition-all cursor-pointer">
                <span className="material-icons text-4xl text-slate-300 group-hover:text-primary mb-2">upload_file</span>
                <p className="font-bold">Click to upload <span className="text-slate-400 font-normal">or drag and drop</span></p>
                <p className="text-xs text-slate-400 mt-1">PDF only (MAX 10MB)</p>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Video Resource (Optional)</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-3 focus:ring-primary" placeholder="https://youtube.com/watch?v=..." />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t">
              <button className="px-6 py-2.5 bg-white dark:bg-slate-800 border rounded-lg font-bold hover:bg-slate-50">Save Draft</button>
              <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover">Publish Material</button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg">
             <h3 className="font-bold mb-4">Tips for Great Materials</h3>
             <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
               <li className="flex gap-2"><span className="material-icons text-green-500 text-sm">check_circle</span> <strong>Clear Titles:</strong> Use descriptive names.</li>
               <li className="flex gap-2"><span className="material-icons text-green-500 text-sm">check_circle</span> <strong>PDF Format:</strong> Ensure accessibility.</li>
               <li className="flex gap-2"><span className="material-icons text-green-500 text-sm">check_circle</span> <strong>Video Length:</strong> Keep under 15 mins.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
