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

ipcMain.on("data", (e, data) => {
    mainWindow.webContents.send("data", data);
});


// Create menu template
const mainMenuTemplate = [
    {
        label: "File", 
        submenu: [
            {
                label: "Authenticate",
                click() {
                    //authentication.Authenticate();
                    CreateAuthenticationWindow();
                }
            }
        ]
    }
];

// If OSX, add empty object to menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

// Add developer tools option if in dev
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        role: 'reload'
      },
      {
        label: 'Toggle DevTools',
        accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}

function CreateAuthenticationWindow() {
    let authWindow = new BrowserWindow();
    
    authWindow.loadURL(url.format({
        pathname: path.join(__dirname, "authentication.html"),
        protocol: "file:",
        slashes: true
    }));

    authWindow.setMenuBarVisibility(false);

    authWindow.on("close", function() {
        authWindow = null;
    });
}