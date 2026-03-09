import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

const AppleIcon = () =>
  new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#034577',
        color: '#ffffff',
        fontSize: 110,
        fontWeight: 700,
        borderRadius: 36,
      }}
    >
      P
    </div>,
    size
  )

export default AppleIcon
