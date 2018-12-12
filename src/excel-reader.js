const XLSX  = require('xlsx-extract').XLSX;
const xlsxParser  = require('xls-parser');
const fs = require('fs');
const xls = require('xlsx');

let data = [];

let readXlsxFile = function (filename, callback) {

    let xlsx = new XLSX().extract(filename, {sheet_id : 1})
    .on('row', (row) => {
        data.push(row);
    })
    .on('error', (err) => {

        console.log(err);
        callback(data);
    })
    .on('end', (err) => {
        console.log("END OF File");
        callback(data);
    })
}

// let readXlsFile = function (filename, callback) {

//     let file = fs.createReadStream(filename);

//     xlsxParser
//     .onFileSelection(file)
//     .then(data => {
//         file.close();
//         callback(data);
//     });
// }

let readDTRXlsFile = function (filename, callback) {

    let err = null;
    let wb = xls.readFile(filename);
 
    /* Get worksheet */
    let dtr_202_sheet = wb.Sheets['DTR202'];
    let dtr_217_sheet = wb.Sheets['DTR217'];
    let dtr_305_sheet = wb.Sheets['DTR305'];
    let dtr_315_sheet = wb.Sheets['DTR315'];

    if(dtr_202_sheet == undefined){
        console.log("Cannot find sheet DTR202");
        err = 'Cannot find sheet DTR202';
        callback(err,null);
        return;
    }

    if(dtr_217_sheet == undefined){
        console.log("Cannot find sheet DTR217");
        err = 'Cannot find sheet DTR217';
        callback(err,null);
        return;
    }

    if(dtr_305_sheet == undefined){
        console.log("Cannot find sheet DTR305");
        err = 'Cannot find sheet DTR305';
        callback(err,null);
        return;
    }

    if(dtr_315_sheet == undefined){
        console.log("Cannot find sheet DTR315");
        err = 'Cannot find sheet DTR315';
        callback(err,null);
        return;
    }

    let dtr_202_data =  xls.utils.sheet_to_json(dtr_202_sheet);
    let dtr_217_data =  xls.utils.sheet_to_json(dtr_217_sheet);
    let dtr_305_data =  xls.utils.sheet_to_json(dtr_305_sheet);
    let dtr_315_data =  xls.utils.sheet_to_json(dtr_315_sheet);

    const data = {
        'dtr_202': dtr_202_data,
        'dtr_217': dtr_217_data,
        'dtr_305': dtr_305_data,
        'dtr_315': dtr_315_data 
    };

    callback(null, data);
    
}

exports.readDTRXlsFile = readDTRXlsFile;
