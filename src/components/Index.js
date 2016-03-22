import React from 'react'
import { bindings, styles } from 'refire-app'

const Index = ({
  settings: { value: settings } = {},
  styles
}) => {
  return (
    <div className={styles.container}>
      {settings.indexTitle}
    </div>
  )
}

const css = {
  container: {}
}

export default styles(css, bindings(["settings"])(Index))
