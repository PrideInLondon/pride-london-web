import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import Author from '../author'
import SocialList from '../socialList'
import { FlexDiv, ShareText } from '../blogHeader/styles'
import Input from '../../../../components/input'
import { Summary, NoteToEditor } from './styles'

export const StyledInput = styled(Input)`
  label {
    color: ${theme.colors.darkGrey};
  }
  input {
    color: ${theme.colors.darkGrey};
  }
`

const BlogFooter = ({ author }) => (
  <>
    <hr />
    <Summary>
      {author && <Author author={author} />}
      <FlexDiv>
        <ShareText>Share this post</ShareText>
        <SocialList />
      </FlexDiv>
    </Summary>
    <NoteToEditor>
      <StyledInput
        label={'Note to editors'}
        id={'noteToEditor'}
        type={'text'}
      />
    </NoteToEditor>
  </>
)

BlogFooter.propTypes = {
  author: PropTypes.object,
}
BlogFooter.defaultProps = {
  author: {
    imageSrc: 'imageSrc',
    display_name: {
      display_name: 'FullName',
    },
  },
}

export default BlogFooter
