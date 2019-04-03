import { NAV_HOME } from './home.navlink'
import HomePage from './pages/HomePage'

// eslint-disable-next-line import/prefer-default-export
export const homeRoutes = [
  {
    ...NAV_HOME,
    component: HomePage,
  },
]
