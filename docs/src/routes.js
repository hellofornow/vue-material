/* Root */
const Introduction = (r) => require.ensure([], () => r(require('./pages/Introduction')), 'base');
const RSVP = (r) => require.ensure([], () => r(require('./pages/RSVP')), 'base');
const Error404 = (r) => require.ensure([], () => r(require('./pages/Error')), 'base');

const main = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: RSVP
  }
];

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
];

export default [].concat(main, error);
