/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import MainLayout from '../pages/faculty/layouts/main-layout';
import StudentLayout from 'pages/student/layouts/main-layout';
import StudentAuthLayout from 'pages/student/layouts/auth-layout/index';
import AuthLayout from '../pages/faculty/layouts/auth-layout';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import FacultyDashboard from 'pages/faculty/FacultyDashboard';
import Courses from 'pages/faculty/layouts/Courses';
import StudentDashboard from 'pages/student/StudentDashboard';

const App = lazy(() => import('App'));
const FacultySignIn = lazy(() => import('pages/faculty/SignIn'));
const Signup = lazy(() => import('pages/authentication/Signup'));
const StudentSignIn = lazy(() => import('pages/student/SignIn'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <AuthLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </AuthLayout>
          ),
          children: [
            {
              index: true,
              element: <FacultySignIn />,
            },
            {
              path: paths.signup,
              element: <Signup />,
            },
          ],
        },
        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          ),
          children: [
            {
              path: paths.signup,
              element: <Signup />,
            },
          ],
        },
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            {
              path: 'dashboard',
              element: <FacultyDashboard />,
            },
            {
              path: 'my_courses',
              element: <Courses />,
            },
          ],
        },
        {
          path: rootPaths.studentRoot,
          children: [
            {
              path: '',
              element: (
                <StudentAuthLayout>
                  <Suspense fallback={<PageLoader />}>
                    <Outlet />
                  </Suspense>
                </StudentAuthLayout>
              ),
              children: [
                {
                  index: true,
                  element: <StudentSignIn />,
                },
              ],
            },
            {
              path: '',
              element: (
                <StudentLayout>
                  <Suspense fallback={<PageLoader />}>
                    <Outlet />
                  </Suspense>
                </StudentLayout>
              ),
              children: [
                {
                  path: 'dashboard',
                  element: <StudentDashboard />,
                },
                // {
                //   path: 'courses',
                //   element: <StudentCourses />,
                // },
                // {
                //   path: 'profile',
                //   element: <StudentProfile />,
                // },
              ],
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);

export default router;