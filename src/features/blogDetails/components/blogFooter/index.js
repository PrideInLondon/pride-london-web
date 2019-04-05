import React from 'react'
import PropTypes from 'prop-types'
import Author from '../author'
import SocialList from '../socialList'
import { FlexDiv, ShareText } from '../blogHeader/styles'
import Input from '../../../../components/input'
import { Summary, NoteToEditor } from './styles'

const BlogFooter = ({ author }) => (
  <>
    <hr />
    <Summary>
      <Author author={author} />
      <FlexDiv>
        <ShareText>Share this post</ShareText>
        <SocialList />
      </FlexDiv>
    </Summary>
    <NoteToEditor>
      <Input label="Note to editors" id="noteToEditor" type="text" />
    </NoteToEditor>
  </>
)

BlogFooter.propTypes = {
  author: PropTypes.object.isRequired,
}

export default BlogFooter
