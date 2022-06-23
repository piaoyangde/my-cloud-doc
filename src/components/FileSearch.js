import React, { useState, useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //从跟组件中引入
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons' //引入具体的图标

const FileSearch = ({ title, onFileSearch }) => {
	// 输入被激活与否的状态
	const [inputActive, setInputActive] = useState(false)
	// 输入值的状态
	const [value, setValue] = useState('')

	// 写一个关闭方法
	const closeSearch = (e) => {
		e.preventDefault() //e 是传递的事件对象，阻止默认行为，在这里没有用，可以删除
		setInputActive(false)
		setValue('')
	}
	// 副作用 hook
	useEffect(() => {
		// 在这里的event 并不是普通的参数，应该是保留的参数，具有特殊意义——系统事件对象

		const handleInputEvent = (event) => {
			const { keyCode } = event
			if (keyCode === 13 && inputActive) {
				//回车键+被激活，调用回调函数
				onFileSearch(value)
				// 回车键按下后，调用回调函数并传值，然后清空输入框的值，这样比较符合操作习惯
				setValue('')
			} else if (keyCode === 27 && inputActive) {
				closeSearch(event)
			}
		}
		// 添加到事件监听
		document.addEventListener('keyup', handleInputEvent)
		// 删除事件监听
		return () => {
			document.removeEventListener('keyup', handleInputEvent)
		}
	})

	// 添加一个useRef对象
	const node = useRef(null)
	useEffect(() => {
		if (inputActive) {
			node.current.focus()
		}
	}, [inputActive]) //当inputActive改变时才让副作用生效
	// 返回页面标签
	return (
		<div className="alert alert-primary d-flex justify-content-between align-items-center">
			{/* 表达式：如果inputActive没有被激活，则渲染此组件 */}
			{!inputActive && (
				<>
					<span>{title}</span>
					<button
						type="button"
						className="icon-button"
						onClick={() => {
							setInputActive(true)
						}}
					>
						<FontAwesomeIcon
							title="搜索"
							size="lg"
							icon={faSearch}
						/>
					</button>
				</>
			)}
			{/* 表达式：如果inputActive被激活，则渲染此组件 */}
			{inputActive && (
				<>
					<input
						ref={node}
						className="form-control"
						value={value}
						onChange={(e) => {
							setValue(e.target.value)
						}}
					/>

					<button
						type="button"
						className="icon-button"
						onClick={closeSearch}
					>
						<FontAwesomeIcon
							icon={faTimes}
							title="关闭"
							size="lg"
						/>
					</button>
				</>
			)}
		</div>
	)
}

export default FileSearch
