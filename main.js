const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		webPreferences: {
			nodeIntegration: true,
		},
	})
	// 如果是开发环境,加载的地址是本地的3000，否则是（这里暂时为虚假的地址）
	const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl'
	mainWindow.loadURL(urlLocation)
})
