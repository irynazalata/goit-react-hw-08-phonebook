import { lazy } from 'react';

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./pages/Home/Home')),
  },
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('./pages/Loginization/Loginization')),
  },
  {
    exact: true,
    path: '/register',
    component: lazy(() => import('./pages/Registration/Registration')),
  },
  {
    exact: true,
    path: '/contacts',
    component: lazy(() => import('./pages/Contacts/Contacts')),
  },
];

export default routes;
