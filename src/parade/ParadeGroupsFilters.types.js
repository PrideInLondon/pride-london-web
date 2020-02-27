import PropTypes from 'prop-types'

export const paradeGroupFilterPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  hexColour: PropTypes.string.isRequired,
})
