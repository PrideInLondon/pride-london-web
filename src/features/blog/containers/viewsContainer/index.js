import React from 'react'
import theme from '../../../../theme/theme'
import ViewsCard from '../../components/viewsCard'
import Title from '../../components/title'
import { Container, CardContainer } from './styles'

const ViewsContainer = () => {
  return (
    <>
      <Container>
        <Title theme={theme} isLight>
          Views
        </Title>
        <CardContainer>
          <ViewsCard />
          <ViewsCard />
          <ViewsCard />
          <ViewsCard />
          <ViewsCard />
          <ViewsCard />
          <ViewsCard />
        </CardContainer>
      </Container>
    </>
  )
}

export default ViewsContainer
