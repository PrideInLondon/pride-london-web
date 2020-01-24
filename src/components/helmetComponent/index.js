import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const HelmetComponent = ({ title, description }) => {
  return (
    <Helmet
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

HelmetComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

HelmetComponent.defaultProps = {
  description:
    "In June and July 2020, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances",
}

export default HelmetComponent
