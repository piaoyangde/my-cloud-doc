import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch'
import BottomBtn from './components/BottomBtn'
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons' //引入具体的图标

function App() {
	return (
		<div className="App container-fluid">
			<div className="row">
				<div className="col-6  left-panel">
					<FileSearch
						title="我的云文档"
						onFileSearch={(value) => {
							console.log('搜索关键词', value)
						}}
					></FileSearch>
					<div className="row">
						<div className="col-6">
							<BottomBtn
								colorClass="btn-primary"
								text="新建"
								icon={faPlus}
							></BottomBtn>
						</div>
						<div className="col-6">
							<BottomBtn
								text="导入"
								icon={faFileImport}
								colorClass="btn-success"
							></BottomBtn>
						</div>
					</div>
				</div>
				<div className="col-6 bg-primary">
					<h1>我是右边栏</h1>
				</div>
			</div>
		</div>
	)
}

export default App
