import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Custom = () => {
  // Note: Helmet doesn't support 'data-ad-client' attribute
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      script.async = true
      script['data-ad-client'] = 'ca-pub-8056728269548028'
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }, [])

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
