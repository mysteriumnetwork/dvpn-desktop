import * as React from 'react'
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import { RouteDef } from '../../app.types'

interface Props extends RouteComponentProps {
  routes: RouteDef[]
}

const Routes = (props: Props) => (
  <Switch>
    {props.routes.map(route => {
      return <Route exact key={route.path} path={route.path} component={route.component} />
    })}
  </Switch>
)

export default withRouter<Props>(Routes)
