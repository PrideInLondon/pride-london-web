import React from 'react'
import PropTypes from 'prop-types'

const CalendarIcon = ({ color, ...props }) => (
  <svg
    height="21"
    viewBox="0 0 21 21"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      style={{
        stroke: color,
        strokeWidth: 1.5,
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLineJoin: 'round',
      }}
      transform="translate(1 1)"
    >
      <path d="m.45396429 18.52975h18.28207141v-16.08825h-18.28207141z" />
      <path d="m.44446429 18.52975h18.28207141v-10.77164286h-18.28207141z" />
      <path d="m5.18204643.52351786v3.41457143" />
      <path d="m14.0081571.52351786v3.41457143" />
      <path d="m3.451825 11.4734214h1.95564286" />
      <path d="m8.60740714 11.4734214h1.95564286" />
      <path d="m13.7629214 11.4734214h1.9556429" />
      <path d="m3.451825 14.8145714h1.95564286" />
      <path d="m8.60740714 14.8145714h1.95564286" />
      <path d="m13.7629214 14.8145714h1.9556429" />
    </g>
  </svg>
)

CalendarIcon.propTypes = {
  color: PropTypes.string.isRequired,
}

export default CalendarIcon
