import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch'
function App() {
	return (
		<div className="App container-fluid">
			<div className="row">
				<div className="col-6 bg-danger left-panel">
					<FileSearch
						title="我的云文档"
						onFileSearch={(value) => {
							console.log('搜索关键词', value)
						}}
					></FileSearch>
				</div>
				<div className="col-6 bg-primary">
					<h1>我是右边栏</h1>
				</div>
			</div>
		</div>
	)
}

export default App
