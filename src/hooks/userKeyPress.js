import { useState, useEffect } from 'react'

const useKeyPress = (targetKeyCode) => {
	// 键是否被按下
	const [KeyPressed, setKeyPressed] = useState(false)

	// 如果某代码的键被按下，则该键的状态为ture
	const keyDownHandler = ({ keyCode }) => {
		if (keyCode === targetKeyCode) {
			setKeyPressed(true)
		}
	}
	// 当该键被放开时，设置该键的状态为FALSE
	const keyUpHandler = ({ keyCode }) => {
		if (keyCode === targetKeyCode) {
			setKeyPressed(false)
		}
	}

	// 添加上述两个事件到监听
	useEffect(() => {
		document.addEventListener('keydown', keyDownHandler)
		document.addEventListener('keyup', keyUpHandler)
		// 清除副作用
		return () => {
			document.removeEventListener('keydown', keyDownHandler)
			document.removeEventListener('keyup', keyUpHandler)
		}
	}, [])

	// 返回对键状态的判断
	return KeyPressed
}

export default useKeyPress
