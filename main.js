// Bringing in the Electron, URL, and PATH node modules
const electron = require('electron');
const url = require('url');
const path = require('path');
const client = require('discord-rich-presence')('513971484859826176');
const {
    app,
    BrowserWindow,
    Menu
} = electron;

// Setting up Main screen
let mainWindow;

// Listen for Matter to be ready
app.on('ready', function () {
    // Create new window
    mainWindow = new BrowserWindow({
        width: 480,
        height: 500,
        transparent: true,
        resizable: true,
        frame: false,
        backgroundColor: '#2D2F3D'
    });
    // Load HTML file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Quit App when X button is clicked
    mainWindow.on('closed', function () {
        client.disconnect();
        app.quit();
    });

    // Build mainMenuTemplate to constant variable mainMenu
   // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Set menu items from template
   // Menu.setApplicationMenu(mainMenu);
});


client.updatePresence({
    state: 'Debugging Matter',
    details: 'Rewriting Matter from Python to JavaScript',
    startTimestamp: Date.now(),
    largeImageKey: 'logo',
    largeImageText: 'Matter Discord Rich Presence Controller',
    smallImageKey: 'electron',
    smallImageText: 'Electron App Engine',
    instance: true,
});

// Create menu template
const mainMenuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'Quit',

        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',

        click() {
            client.disconnect();
            app.quit();
        }
    }]
}]