import React from 'react'
import { AnnouncementsContent } from './Announcements.styles'
import { Container, Row, Column } from '../components/grid'
import styled from 'styled-components'

const BgAnnouncement = styled.div`
  position: relative;
  margin-top: 30px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 43%;
    z-index: -10;
    background-color: #efefef;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const LiveStreamEmbed = () => (
  <AnnouncementsContent>
    <BgAnnouncement>
      <Container>
        <Row>
          <Column width={1}>
            <VideoWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/f_XDwCxle0A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
          </Column>
        </Row>
        <Row>
          <Column width={1}>
            Livestream provided by broadcast partner <a href="https://www.emglive.com/home" target="_blank">EMG Gravity Media</a> and captioning partner <a href="https://www.redbeemedia.com/" target="_blank">Red Bee Media</a>
          </Column>
        </Row>
      </Container>
    </BgAnnouncement>
  </AnnouncementsContent>
)

export default LiveStreamEmbed
