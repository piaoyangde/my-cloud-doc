
<h1>开发日志</h1>

# 001- 搭建开发环境


# 002- 开发第一个组件


# 003- 开发第一个自定义hook
> 需求：判断是否按下了某键。思路：提供某键代码作为参数，如果按下的键代码等于参数，则该键的状态为TRUE，否则为FALSE。

```js
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

```

在上述代码中，有两个事件——按下按钮与弹出按钮，按下时返回TRUE，弹开时返回FALSE，也就是说：在某个按键被按下的实际操作过程中，此自定义hook先返回了TRUE，然后又返回FALSE（状态的恢复），但在返回TRUE的时候，已经实现了判断按键被按下的目的。

![20220622163027](http://cnd.qslawyer.work/vscode20220622163027.png)