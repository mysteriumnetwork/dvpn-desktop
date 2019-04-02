import * as React from 'react'

type Props = {
  children: React.ReactNode
}

const App = ({ children }: Props) => <React.Fragment>{children}</React.Fragment>

export default App
