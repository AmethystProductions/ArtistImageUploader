const authentication = require("./authentication");
const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

// Listen for app to be ready
app.on("ready", function() 
{
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load HTML into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol: "file:",
        slashes: true
    }));

    // Quit app when main windows closes
    mainWindow.on("closed", function() 
    {
        app.quit();
    })

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Inset menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label: "File", 
        submenu: [
            {
                label: "Authenticate",
                click() {
                    console.log("test console");
                    authentication.Authenticate();
                }
            }
        ]
    }
];

