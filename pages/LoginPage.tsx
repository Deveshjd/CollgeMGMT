
import React from 'react';
import { useAuth } from '../App';
import { UserRole } from '../types';

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  return (
    // Replaced class with className
    <div className="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-5xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-slate-100 dark:border-slate-700">
        <div className="relative w-full md:w-1/2 bg-primary flex flex-col justify-between p-12 text-white overflow-hidden group">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img alt="Library" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdDzriZSWSvo0_Jjd-YIaUbCU0fvdF042L9yUUXBnTWNpF2uTTpdIYz4_SYoYxlZ5yFiW4ge3fnyvcaEVSFlF6OFdL-IkNiiZ1gO8nXa3EoiE-PDQd3i6-UGxSbscONyVTybY7tNH7I3q3y8fAmDh7KcsiGKI_XrxopTqs1tm_ZHvQNN-2d9N1g-wbZOE8d9ZSccTc6wcA-erTNrI-qY7hAgK5kolEIQhVh-dG8bcQzHtJnwNjo5xBPjzXbXWH0O7HApuU1qbTZDc"/>
          </div>
          <div className="relative z-10 mt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Secure Environment
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-4">Empowering the next generation of learners.</h2>
            <p className="text-blue-100/90 text-lg font-light leading-relaxed">Access your personalized dashboard to manage courses, grades, and administrative tasks securely.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-slate-800">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-10 text-center">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome back</h1>
              <p className="text-slate-500 text-sm">Select your role to sign in</p>
            </div>
            <div className="space-y-4">
              <button onClick={() => login(UserRole.STUDENT)} className="w-full py-4 px-4 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                <span className="material-icons">school</span>
                Sign in as Student
              </button>
              <button onClick={() => login(UserRole.TEACHER)} className="w-full py-4 px-4 bg-white border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                <span className="material-icons">cast_for_education</span>
                Sign in as Teacher
              </button>
              <button onClick={() => login(UserRole.ADMIN)} className="w-full py-4 px-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <span className="material-icons">admin_panel_settings</span>
                Super Admin Panel
              </button>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-3">
                <span className="material-icons text-slate-400 text-sm mt-0.5">info</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Demo credentials: No password required. Just select a role to view the corresponding dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
