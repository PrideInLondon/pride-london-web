import React from 'react'
import ReactHelmet from 'react-helmet'

export interface HelmetProps {
  title: string
  description?: string
}

export const generateTitle = (title: string) =>
  title.includes('|') ? title : `${title} | Pride in London`

const Helmet: React.FC<HelmetProps> = ({ title, description }) => {
  return (
    <ReactHelmet
      title={generateTitle(title)}
      meta={[
        {
          name: 'description',
          content: `${title}. ${description}`,
        },
      ]}
    />
  )
}

Helmet.defaultProps = {
  description:
    "In June and July 2020, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances",
}

export default Helmet
