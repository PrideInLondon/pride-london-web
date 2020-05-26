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
    'The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community',
}

export default Helmet
