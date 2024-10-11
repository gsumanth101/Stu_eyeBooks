export const rootPaths = {
  root: '/',
  pageRoot: '',
  authRoot: 'authentication',
  errorRoot: 'error',
  studentRoot: 'student',
};

export default {
  dashboard: `/${rootPaths.pageRoot}/dashboard`,
  courses: `/${rootPaths.pageRoot}/my_courses`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  404: `/${rootPaths.errorRoot}/404`,

  // Student routes
  stuentLogin:`/${rootPaths.studentRoot}/login`,
  studentDashboard: `/${rootPaths.studentRoot}/dashboard`,
  studentCourses: `/${rootPaths.studentRoot}/courses`,
  studentProfile: `/${rootPaths.studentRoot}/profile`,
};