import '../styles/globals.css'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faEnvelope)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
