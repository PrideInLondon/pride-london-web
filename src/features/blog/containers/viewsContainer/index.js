import React, { Fragment } from 'react'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import ViewsCard from '../../components/viewsCard'
import Title from '../../components/title'

const Container = styled.div`
  margin: 1rem;
`

// Replace with container that pulls api data?
const CardContainer = styled.div`
  overflow: scroll;
  display: flex;
`

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
