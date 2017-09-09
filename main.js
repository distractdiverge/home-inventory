const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.webContents.openDevTools();

    win.on('closed', () => {
       win = null;
    });
}

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
   if (process.platform !== 'darwin') {
       // don't quit if we're on osx when all windows have closed
       // this is the typical behavior for osx apps
       app.quit();
   }
});

app.on('activate', () => {
   if (win === null) {
       // on osx it's common to re-create the window when clicking on the dock icon
       // this will recreate the window if none are open
       createWindow();
   }
});