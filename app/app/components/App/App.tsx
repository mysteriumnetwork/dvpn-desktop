import * as React from 'react'
import { RouteDef } from '../../app.types'
import { homeRoutes } from '../../../home/home.routes'
import Routes from '../Routes/Routes'
import { counterRoutes } from '../../../counter/counter.routes'

const routes: RouteDef[] = [...homeRoutes, ...counterRoutes]

const App = () => {
  return <Routes routes={routes} />
}

export default App
