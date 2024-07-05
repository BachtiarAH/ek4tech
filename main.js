const {app, BrowserWindow} = require('electron')

const createWindows = () => {
    const win = new BrowserWindow({
        with: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(()=>{
    createWindows()
})