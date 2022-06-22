import { useState, useEffect } from 'react'

const useKeyPress = (targetKeyCode) => {
	// 键是否被按下
	const [KeyPressed, setKeyPressed] = useState(false)
	const params = null

	// 如果某代码的键被按下，则该键的状态为ture
	const keyDownHandler = (event) => {
		if (event.keyCode === targetKeyCode) {
			setKeyPressed(true)
			params = event
		}
	}
	// 当该键被放开时，设置该键的状态为FALSE
	const keyUpHandler = (event) => {
		if (event.keyCode === targetKeyCode) {
			setKeyPressed(false)
			params = event
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
	return { KeyPressed, params }
}

export default useKeyPress
