import React from 'react'
import { Helmet } from 'react-helmet'

const Custom = () => {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Krub:wght@300;400&family=Chonburi&family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      />
      <style type="text/css">{`
.center { display: flex; align-items: center; justify-content: center; }
@media (max-width: 480px) { .center img { width: 100%; } }
`}</style>
    </Helmet>
  )
}

export default Custom
