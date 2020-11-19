import { AppProps } from 'next/app'
import '../styles/globals.css'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faEnvelope)

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />

export default MyApp
