import React from 'react'
import ReactHelmet from 'react-helmet'
import PropTypes from 'prop-types'

const Helmet = ({ title, description }) => {
  return (
    <ReactHelmet
      title={title.includes('|') ? title : `${title} | Pride in London`}
      meta={[
        {
          name: 'description',
          content: `${title}. ${description}`,
        },
      ]}
    />
  )
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

Helmet.defaultProps = {
  description:
    "In June and July 2020, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances",
}

export default Helmet
