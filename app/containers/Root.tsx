import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import Routes from '../Routes'

type Props = {
  store: any
  history: History<any>
}

const Root = (props: Props) => {
  const { store, history } = props
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
