import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

import data from '../content/data.json'
import { size } from '../utils/openGraphImage'

export { alt, size, contentType } from '../utils/openGraphImage'

export const dynamic = 'force-static'

const dataUri = async (path: string, mimeType: string) =>
  `data:${mimeType};base64,${(await readFile(join(process.cwd(), path))).toString('base64')}`

const OpenGraphImage = async () => {
  const [avatar, background, font] = await Promise.all([
    dataUri('images/avatar-og.jpg', 'image/jpeg'),
    dataUri('images/background.png', 'image/png'),
    readFile(join(process.cwd(), 'fonts/SourceSansPro-Regular-latin.woff')),
  ])

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 136,
        paddingLeft: 96,
        backgroundColor: '#034577',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '88px 88px',
        fontFamily: 'Source Sans Pro',
        fontSize: 58,
        color: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <img src={avatar} width={340} height={340} style={{ borderRadius: '50%' }} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <span style={{ color: '#ffffff' }}>{data.site.author}</span>
        <span>{data.author.jobTitle}</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{data.author.email}</span>
          <div
            style={{
              height: 2,
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.4) 50%, transparent 50%)',
              backgroundSize: '4px 2px',
            }}
          />
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'Source Sans Pro', data: font, weight: 400, style: 'normal' }],
    }
  )
}

export default OpenGraphImage
