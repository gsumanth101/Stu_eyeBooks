import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const facultySitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: paths.dashboard,
    icon: 'hugeicons:grid-view',
    active: true,
  },
  {
    id: 'courses',
    subheader: 'Courses',
    icon: 'mynaui:lock-password',
    active: true,
    items: [
      {
        name: 'My Courses',
        pathName: 'courses',
        icon: '',
        path: paths.courses,
      },
      {
        name: 'Sign Up',
        pathName: 'signup',
        icon: '',
        path: paths.signup,
      },
    ],
  },
  {
    id: 'task',
    subheader: 'Faculty',
    path: '#!',
    icon: 'hugeicons:book-open-01',
  },
  {
    id: 'mentors',
    subheader: 'Mentors',
    path: '#!',
    icon: 'mynaui:user-hexagon',
  },
  {
    id: 'messages',
    subheader: 'Messages',
    path: '#!',
    icon: 'mage:message-dots',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },
];

const studentSitemap: MenuItem[] = [
  {
    id: 'studentDashboard',
    subheader: 'StudetDashboard',
    path: paths.studentDashboard,
    icon: 'hugeicons:grid-view',
    active: true,
  },
  {
    id: 'studentCourses',
    subheader: 'Courses',
    icon: 'mynaui:lock-password',
    active: true,
    items: [
      {
        name: 'My Courses',
        pathName: 'studentCourses',
        icon: '',
        path: paths.studentCourses,
      },
      {
        name: 'Profile',
        pathName: 'studentProfile',
        icon: '',
        path: paths.studentProfile,
      },
    ],
  },
  {
    id: 'studentTask',
    subheader: 'Student',
    path: '#!',
    icon: 'hugeicons:book-open-01',
  },
  {
    id: 'studentMentors',
    subheader: 'Mentors',
    path: '#!',
    icon: 'mynaui:user-hexagon',
  },
  {
    id: 'studentMessages',
    subheader: 'Messages',
    path: '#!',
    icon: 'mage:message-dots',
  },
  {
    id: 'studentSettings',
    subheader: 'Settings',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },
];

export { facultySitemap, studentSitemap };