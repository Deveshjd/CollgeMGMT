
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    // Replaced class with className
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <span className="material-icons text-primary">school</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">EduFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary font-medium transition-colors" href="#">Home</a>
              <a className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary font-medium transition-colors" href="#features">Features</a>
              <a className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary font-medium transition-colors" href="#about">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">New Session Open</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
                Empowering Education for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Everyone.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The all-in-one platform for managing study materials, assignments, and grading. Seamlessly connect students, teachers, and administrators in one unified space.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/login" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-primary hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                  Get Started
                  <span className="material-icons ml-2 text-sm">arrow_forward</span>
                </Link>
                <a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-slate-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all" href="#features">
                  View Features
                </a>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img alt="Modern dashboard" className="rounded-xl w-full h-auto object-cover shadow-inner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-w1CTQcDO2D3j_n_fSjDU3J6e_VezdnwjYYuU6GPM7BjBfzoZnX_MDsmRILapj4ccfLzTU8Lw__mfxEJ1V-HDhibUAl10fKfskqeHOAjGYcsSj9eJxVzCw9pXnSH6KTfv1NDpP3BtWCzwSV7gKBTTR8XJIYKPPgovWxqhgDe5T9xkwJjRkxUIz6RNZTFswYNDuNX582rZQ7L-4q6KwmxHyzamCjg5LNjXbLiL6CqzVUIWY0fXGV9TPCJnx91k8gyT6a9xBYh6F5U"/>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <span className="material-icons">assignment_turned_in</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Assignment Status</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">All Graded Successfully</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-slate-800 py-12 border-y border-slate-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['50k+', '1.2k+', '99.9%', '24/7'].map((val, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-primary mb-1">{val}</div>
                <div className="text-sm text-slate-500 font-medium">{['Active Students', 'Institutions', 'Uptime Guarantee', 'Support Available'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-background-light dark:bg-background-dark relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">Why Choose EduFlow?</h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Built for the Modern Classroom</p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: 'admin_panel_settings', title: 'Role-Based Access', text: 'Secure portals tailored for every user type. Admins manage users, teachers handle grading, and students access learning materials.' },
              { icon: 'library_books', title: 'Resource Library', text: 'A centralized digital library where teachers can upload study materials, lecture notes, and video resources for instant student access.' },
              { icon: 'task', title: 'Assignment Tracking', text: 'Streamlined workflow for creating, submitting, and grading assignments. Real-time notifications keep everyone on schedule.' },
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-primary text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© 2024 EduFlow Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
