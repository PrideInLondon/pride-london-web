import React from 'react'
import theme from '../../../../theme/theme'
import ViewsCard from '../../components/viewsCard'
import Title from '../../components/title'
import { Container, CardContainer } from './styles'

const ViewsContainer = ({ views }) => {
  return (
    <>
      <Container>
        <Title theme={theme} isLight>
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

export default ViewsContainer
