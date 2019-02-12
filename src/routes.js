import { Home, About } from './pages'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    name: 'About',
    path: '/about',
    component: About
  }
]
