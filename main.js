const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
    webPreferences: { nodeIntegration: true }
  })
  win.loadFile('index.html') // Εδώ βάλε το όνομα του HTML αρχείου σου
}

app.whenReady().then(createWindow)
