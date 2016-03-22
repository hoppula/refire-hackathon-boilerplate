import refireApp, { Firebase } from 'refire-app'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// import global styles, place your component specific styles in components
import './global.css'

import url from './url'
import bindings from './bindings'
import routes from './routes'

refireApp({ url, bindings, routes })
