import React, { Fragment } from 'react'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import ViewsCard from '../../Components/viewsCard'

const StyledTitle = styled.h2`
  font-weight: 700;
  color: ${props => props.theme.colors.lightGrey};
`

const Container = styled.div`
  margin: 1rem;
`

const CardContainer = styled.div`
  overflow: scroll;
  display: flex;
`

const ViewsContainer = () => {
  return (
    <Fragment>
      <Container>
        <StyledTitle theme={theme}>Views</StyledTitle>
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
    </Fragment>
  )
}

export default ViewsContainer
