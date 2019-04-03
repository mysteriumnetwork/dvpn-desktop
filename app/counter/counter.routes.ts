import { NAV_COUNTER } from './counter.navlink'
import CounterPage from './pages/CounterPage'

// eslint-disable-next-line import/prefer-default-export
export const counterRoutes = [
  {
    ...NAV_COUNTER,
    component: CounterPage,
  },
]
