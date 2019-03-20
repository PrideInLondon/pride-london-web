import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../../../theme/theme'
import ViewsCard from '../../components/viewsCard'
import Title from '../../components/title'
import { Container, CardContainer } from './styles'

const ViewsContainer = ({ views }) => {
  return (
    <>
      <Container>
        <Title theme={theme} isLight isCentered>
          Views
        </Title>
        <CardContainer>
          {views.map(view => (
            <ViewsCard {...view} />
          ))}
        </CardContainer>
      </Container>
    </>
  )
}

ViewsContainer.propTypes = {
  views: PropTypes.arrayOf(PropTypes.shape({})),
}

ViewsContainer.defaultProps = {
  views: [],
}

export default ViewsContainer
