import React from 'react'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => (
	<button
		onClick={onBtnClick}
		type="button"
		className={`btn btn-block no-border ${colorClass}`}
	>
		<FontAwesomeIcon size="lg" icon={icon} />
		{text}
	</button>
)

BottomBtn.prototype = {
	text: PropTypes.string,
	colorClass: PropTypes.string,
	icon: PropTypes.element.isRequired,
	onBtnClick: PropTypes.func,
}

BottomBtn.defaultProps = {
	text: '新建',
}
export default BottomBtn
