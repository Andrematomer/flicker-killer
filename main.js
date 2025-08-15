const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');

let tray = null;
let win = null;

// Function to create the invisible, always-on-top window
function createFlickerWindow() {
  win = new BrowserWindow({
    width: 8,
    height: 8,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true, // This is key to hiding it from Alt+Tab and the taskbar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.setIgnoreMouseEvents(true); // Makes the window click-through
  win.loadFile('index.html');

  // When the window is closed, we'll nullify the object reference.
  win.on('closed', () => {
    win = null;
  });
}

// Function to create the System Tray icon and its context menu
function createTray() {
  // Create an icon. Use your own icon.ico or a default one.
  const iconPath = path.join(__dirname, 'icon.ico');
  const icon = nativeImage.createFromPath(iconPath);
  tray = new Tray(icon);

  // This function builds the menu that appears when you right-click the tray icon
  const buildContextMenu = () => {
    return Menu.buildFromTemplate([
      { label: 'Flicker Killer is Active', enabled: false }, // A simple status message
      { type: 'separator' },
      {
        label: 'Run on Startup',
        type: 'checkbox',
        // Check the current startup setting to set the checkbox state
        checked: app.getLoginItemSettings().openAtLogin,
        // When the checkbox is clicked...
        click: (item) => {
          const isChecked = item.checked;
          app.setLoginItemSettings({
            openAtLogin: isChecked,
            path: app.getPath('exe') // Ensures it's THIS executable that runs
          });
        }
      },
      { type: 'separator' },
      { label: 'Quit Flicker Killer', role: 'quit' } // 'role: quit' handles quitting automatically
    ]);
  };

  tray.setToolTip('Flicker Killer');
  tray.setContextMenu(buildContextMenu());

  // Rebuild the context menu when the app is ready to ensure the startup check is accurate
  app.on('ready', () => {
    tray.setContextMenu(buildContextMenu());
  });
}

// Ensure only one instance of the app can run at a time
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  // This will run when the app is launched
  app.on('ready', () => {
    createFlickerWindow();
    createTray();
  });
}

// This prevents the app from closing when the invisible window is technically "closed"
app.on('window-all-closed', (e) => {
  e.preventDefault();
});