import React from 'react'
import { bindings, styles } from 'refire-app'

const App = ({ _status: { connected, initialFetchDone }, children, styles }) => {
  const component = connected && initialFetchDone
    ? children
    : <div>Loading...</div>
  return (
    <div className={styles.app}>
      {component}
    </div>
  )
}

const css = {
  app: {
    maxWidth: "980px",
    margin: "0 auto",
    padding: "0 20px"
  }
}

export default styles(
  css,
  bindings(["_status"])(App)
)
