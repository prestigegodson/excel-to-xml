exports.getFileType = function(filename){

    let arr = filename.split('.');
    return arr[arr.length - 1].toLowerCase();
}

exports.getFormattedDate = function(){

    let date = new Date();
    let year = date.getFullYear();
    let d = date.getDate();
    let month = date.getMonth() + 1;
    
    month = month < 12 ? "0"+month : month;

    return d + "/" + month+ "/" +year
}

exports.cleanObjects = (obj) => {

    Object.keys(obj).forEach(key => {
        if(obj[key] == undefined){
            obj[key] = "";
        }
    })

    return obj;
}