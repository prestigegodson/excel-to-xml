const electron = require('electron');
const { readDTRXlsFile } =  require('./src/excel-reader');
const { getFileType } = require('./src/utility');
const { dtr_202_xml, dtr_217_xml, dtr_305_xml, dtr_315_xml } = require('./src/jsonToXmlWriter');
const path = require('path');
const os = require('os');

const { BrowserWindow, ipcMain, Menu, app, dialog, Tray} = electron;

let mainWindow;
let convertTray;
let notificationWindow;

let isVisible = false;

app.on('ready', () => {

    mainWindow = new BrowserWindow({});
    // mainWindow.setFullScreen(true);
    mainWindow.setTitle("Excel to XML");
    mainWindow.loadURL(`file://${__dirname}/views/index.html`);

    mainWindow.on("close", () => {
        mainWindow = null;
        app.exit();
    });

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

})

app.on('window-all-closed',() => {
    mainWindow = null;
    convertTray = null;
    notificationWindow = null;
    console.log('Set mainwindow to null');
})

ipcMain.on("DTR_EXCEL_SELECT", (evt, data) => {

    dialog.showOpenDialog({ filters: [{name: 'Excel', extensions: ['xls']}]}, (filenames) => {

        if(filenames != undefined){
            console.log("Filename : " + filenames[0])

            let filename = filenames[0];
            let fileType = getFileType(filename);

            if(fileType == 'xlsx'){
                console.log("cannot read file extension xlsx");
                mainWindow.webContents.send('ERROR', "cannot read file extension xlsx");
            }
            else if(fileType == 'xls'){

                mainWindow.webContents.send('DTR_FILE_SELECTED', filename);

            }else{
                console.log("File type not supported");
                mainWindow.webContents.send('ERROR', `file type ${fileType} not supported`);
            }
            
        }
    });

}); //END OF DTR FILE SELECT LISTENER


ipcMain.on('SUBMIT_DTR_FORM', (event, form_data) => {

    readDTRXlsFile(form_data.file_path, (err, data) => {

                if(err == null){

                    console.log("Data : ", data);
                    
                    let defaultPath = path.join(os.homedir(), 'desktop');
                    dialog.showOpenDialog({title: 'Select Location to Save XML file', properties: ['openDirectory']},
                     (pathNames) => {
                        
                        let successMessage = '';

                        if(pathNames == undefined){
                            form_data.save_path = defaultPath
                            successMessage = `Conversion completed, files saved at ${defaultPath}`;
                        }else{
                            form_data.save_path = pathNames[0];
                            successMessage = `Conversion completed, files saved at ${pathNames[0]}`;
                        }

                        dtr_202_xml(data.dtr_202,form_data)
                        dtr_217_xml(data.dtr_217,form_data)
                        dtr_305_xml(data.dtr_305,form_data)
                        dtr_315_xml(data.dtr_315,form_data)

                        mainWindow.send('SUCCESS', successMessage)

                    });
                    
                }
                else{
                    mainWindow.webContents.send('ERROR', err);
                }
            });
}); //END OF SUBMIT_DTR_FORM LISTENER


let menuTemplate = [
    {
        label : 'File',
        submenu : [
            {
                label : 'Open',
                accelerator : process.platform === 'darwin' ? 'Command+O' : 'Ctrl+O',
                click(){
                    console.log("Open clicked")
                }
            }
        ]
    },
    {
        label : 'Settings',
        submenu : [
            {
                role : 'reload'
            },
            {
                label : 'Dev Tools',
                accelerator : process.platform === 'darwin' ? 'Command+Alt+D' : 'Ctrl+Alt+D',
                click() {
                    mainWindow.webContents.openDevTools();
                }
            }
        ]
    }
];

