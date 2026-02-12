
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';
import { UserRole, User } from './types';

// Contexts
interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// --- Mock Components for Pages ---
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/student/Dashboard';
import StudentMaterials from './pages/student/Materials';
import StudentAssignments from './pages/student/Assignments';
import StudentAssignmentDetail from './pages/student/AssignmentDetail';
import StudentProfile from './pages/student/Profile';

import TeacherDashboard from './pages/teacher/Dashboard';
import TeacherAssignments from './pages/teacher/ManageAssignments';
import TeacherSubmissions from './pages/teacher/Submissions';
import TeacherGrading from './pages/teacher/Grading';
import TeacherUpload from './pages/teacher/Upload';

import AdminDashboard from './pages/admin/Dashboard';
import AdminTeachers from './pages/admin/ManageTeachers';

const StudentLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/student' },
    { icon: 'library_books', label: 'Study Material', path: '/student/materials' },
    { icon: 'assignment', label: 'Assignments', path: '/student/assignments' },
    { icon: 'calendar_today', label: 'Schedule', path: '/student/schedule' },
    { icon: 'chat', label: 'Messages', path: '/student/messages', badge: 2 },
  ];

  return (
    // Replaced class with className
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">E</div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">EduFlow</span>
        </div>
        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                location.pathname === item.path
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-slate-500 hover:text-primary hover:bg-primary/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800'
              }`}
            >
              <span className="material-icons text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.badge && <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
          <Link to="/student/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
            <span className="material-icons text-xl">person</span>
            <span className="font-medium">Profile</span>
          </Link>
          <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-1">
            <span className="material-icons text-xl">logout</span>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back, {user?.name}!</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Here's what's happening with your courses today.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-lg">search</span>
              <input className="pl-10 pr-4 py-2 w-64 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none" placeholder="Search courses, notes..." type="text"/>
            </div>
            <button className="flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 p-1.5 rounded-lg transition-colors">
              <img src={user?.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" alt="Profile" />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">{user?.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Grade 11 - Science</p>
              </div>
              <span className="material-icons text-slate-400">expand_more</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

const TeacherLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/teacher' },
    { icon: 'assignment_ind', label: 'Manage Assignments', path: '/teacher/assignments' },
    { icon: 'cloud_upload', label: 'Upload Material', path: '/teacher/upload' },
    { icon: 'grading', label: 'Evaluations', path: '/teacher/submissions', badge: 12 },
    { icon: 'people', label: 'Students', path: '/teacher/students' },
  ];

  return (
    // Replaced class with className
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <span className="material-icons text-xl">school</span>
          </div>
          <span className="font-bold text-xl tracking-tight dark:text-white">EduManager</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                location.pathname === item.path
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-500 hover:bg-primary/5 hover:text-primary dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800'
              }`}
            >
              <span className="material-icons text-[20px]">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
              {item.badge && <span className="ml-auto bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors" onClick={logout}>
            <div className="relative">
              <img src={user?.avatar} className="w-10 h-10 rounded-full object-cover border border-slate-200" alt="Teacher" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Senior Instructor</p>
            </div>
            <span className="material-icons text-gray-400 text-sm">logout</span>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden h-screen">
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex justify-between items-center px-6 lg:px-8 z-10">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">EduManager Dashboard</h1>
          <div className="flex items-center gap-4">
             <button className="relative p-2 text-gray-400 hover:text-primary transition-colors">
              <span className="material-icons">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <span className="material-icons">help_outline</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/admin' },
    { icon: 'analytics', label: 'Analytics', path: '/admin/analytics' },
    { icon: 'people_alt', label: 'Users & Roles', path: '/admin/users' },
    { icon: 'apartment', label: 'Institutes', path: '/admin/institutes' },
    { icon: 'people', label: 'Manage Teachers', path: '/admin/teachers' },
    { icon: 'dns', label: 'Server Health', path: '/admin/server' },
    { icon: 'settings', label: 'Platform Settings', path: '/admin/settings' },
  ];

  return (
    // Replaced class with className
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <span className="material-icons text-3xl">school</span>
            <span>Ed<span className="text-slate-900 dark:text-white">Nexus</span></span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 hover:text-primary'
              }`}
            >
              <span className="material-icons text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-gray-800">
          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors">
            <span className="material-icons text-xl">logout</span>
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden h-screen">
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10">
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">Super Admin Overview</h1>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-slate-800 dark:text-white">{user?.name}</div>
              <div className="text-xs text-slate-500">Super Admin</div>
            </div>
            <img src={user?.avatar} className="w-9 h-9 rounded-full border-2 border-white shadow-sm" alt="Admin" />
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (role: UserRole) => {
    let mockUser: User;
    if (role === UserRole.STUDENT) {
      mockUser = { id: 's1', name: 'Alex Morgan', email: 'alex.j@university.edu', role: UserRole.STUDENT, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7O0XcxpOdOgqqR08YZd82zMy-SprSndf2IxId9x8hNSK-AdvgIZuqvGsCvF0-4j0doTzx333bZAEHrSY96_kjkRly5S5II4rRLlSaMRWEZ-YIFldL-Pr2oyCwIl9e630uGBoE33SV8q1HiSw1BcXaw5DejvQRz0G8jSeYdRfVT7WifWOcdh_F6uzH6EBFvCp76Goc7RaWBSoJfIkJ7S0IPfAxZ2MZpX36KdtVO5rMGLRU8c6kw30N6N_qvUl6-e1-Bf7yIYLdgiU' };
    } else if (role === UserRole.TEACHER) {
      mockUser = { id: 't1', name: 'Sarah Wilson', email: 'sarah.w@school.edu', role: UserRole.TEACHER, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkxE4bo7_17041lFRb7EBQ1U3cWVedVWLj77Hmkx1YqdQ916gJZp1FPjXOLjY8A9M2GcDrqZcxG3Rm-g9KXiJVGsCESZHv42AZCJTID4974_04zjpGpQXq8SFoVR5GfHPujnwS0_BsVKJIfa-fhLe3Ge0S-cLTN9GIs9nt_4pPsHCR3-k5rnrjIAPpnAVwxd4hLEmJlthz-YUER_j2jsJafsilGtxBDXBkxd2BNnSt0pU9QKtHppb35Tms2gZpfS4U2YHwtogAkIs' };
    } else {
      mockUser = { id: 'a1', name: 'System Admin', email: 'admin@edu.com', role: UserRole.ADMIN, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtXM0gDhSABZ9cJEG4yC0m1nZiSN7Kse3-mLaMbLF30f_TlsVQ2_oN6N5FyrvUAblfZVVT3L-bAEPmit6a-1_hqZ7lh_mWchlYRr_l40Bv10YcoXSOGl-vNzEqFb8t9v4u-XKE2y4CvHcLrrfthAW-WFDxhXJnVD9jMnY1VtrU76eI_MCJ2Kn0etfXM1YnOZBrm1Oo5_R61SBHc7qj51jtVmlBv6yr0pT0OOZ8fdwcoU8V0BgwGzCYOih03c9jpKTrDTF3pusxYSM' };
    }
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Simple redirect logic
    if (role === UserRole.STUDENT) navigate('/student');
    else if (role === UserRole.TEACHER) navigate('/teacher');
    else if (role === UserRole.ADMIN) navigate('/admin');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute: React.FC<{ role: UserRole; children: React.ReactNode }> = ({ role, children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Student Routes */}
          <Route path="/student" element={<ProtectedRoute role={UserRole.STUDENT}><StudentLayout><StudentDashboard /></StudentLayout></ProtectedRoute>} />
          <Route path="/student/materials" element={<ProtectedRoute role={UserRole.STUDENT}><StudentLayout><StudentMaterials /></StudentLayout></ProtectedRoute>} />
          <Route path="/student/assignments" element={<ProtectedRoute role={UserRole.STUDENT}><StudentLayout><StudentAssignments /></StudentLayout></ProtectedRoute>} />
          <Route path="/student/assignments/:id" element={<ProtectedRoute role={UserRole.STUDENT}><StudentLayout><StudentAssignmentDetail /></StudentLayout></ProtectedRoute>} />
          <Route path="/student/profile" element={<ProtectedRoute role={UserRole.STUDENT}><StudentLayout><StudentProfile /></StudentLayout></ProtectedRoute>} />
          
          {/* Teacher Routes */}
          <Route path="/teacher" element={<ProtectedRoute role={UserRole.TEACHER}><TeacherLayout><TeacherDashboard /></TeacherLayout></ProtectedRoute>} />
          <Route path="/teacher/assignments" element={<ProtectedRoute role={UserRole.TEACHER}><TeacherLayout><TeacherAssignments /></TeacherLayout></ProtectedRoute>} />
          <Route path="/teacher/submissions" element={<ProtectedRoute role={UserRole.TEACHER}><TeacherLayout><TeacherSubmissions /></TeacherLayout></ProtectedRoute>} />
          <Route path="/teacher/grading/:id" element={<ProtectedRoute role={UserRole.TEACHER}><TeacherGrading /></ProtectedRoute>} />
          <Route path="/teacher/upload" element={<ProtectedRoute role={UserRole.TEACHER}><TeacherLayout><TeacherUpload /></TeacherLayout></ProtectedRoute>} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute role={UserRole.ADMIN}><AdminLayout><AdminDashboard /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/teachers" element={<ProtectedRoute role={UserRole.ADMIN}><AdminLayout><AdminTeachers /></AdminLayout></ProtectedRoute>} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
