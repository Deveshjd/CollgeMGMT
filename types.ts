
export enum UserRole {
  GUEST = 'guest',
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  idNumber?: string;
  department?: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'Not Submitted' | 'Submitted' | 'Evaluated' | 'Late' | 'Missing' | 'Draft' | 'Active' | 'Closed';
  grade?: string;
  description?: string;
}
