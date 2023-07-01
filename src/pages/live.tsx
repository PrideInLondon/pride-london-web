import React from 'react'
import { Banner } from '../components/banner'
import { colors } from '../theme/colors'

const Live = () => {
  return (
    <>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/841452011?h=92dd187213&autoplay=1&title=0&byline=0&portrait=0"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Livestream"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <Banner
        titleText="Parade Live"
        subtitleText="Powered by Openreach, Cisco and Celebro Media"
        color={colors.bondiBlue}
      />
    </>
  )
}

export default Live
