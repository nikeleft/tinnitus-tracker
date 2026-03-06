const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Δημιουργία του παραθύρου του browser.
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Επιτρέπει στην εφαρμογή να χρησιμοποιεί λειτουργίες της Python/Node αν χρειαστεί
    },
    title: "SNR Adaptive App",
    icon: path.join(__dirname, 'icon.ico') // Αν έχεις εικονίδιο
  });

  // Φόρτωση του index.html της εφαρμογής σου.
  win.loadFile('index.html');

  // Προαιρετικό: Άνοιγμα των Developer Tools (για σφάλματα) - το κλείνεις πριν την πώληση
  // win.webContents.openDevTools();
}

// Αυτή η μέθοδος καλείται όταν το Electron ολοκληρώσει την προετοιμασία
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Στα Mac είναι σύνηθες να ξαναδημιουργείται παράθυρο όταν πατάς το εικονίδιο
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Κλείσιμο της εφαρμογής όταν κλείσουν όλα τα παράθυρα (εκτός Mac)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
