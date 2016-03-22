import React from 'react'
import { IndexRoute, Route } from 'refire-app'

import App from './components/App'
import Index from './components/Index'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
  </Route>
)
