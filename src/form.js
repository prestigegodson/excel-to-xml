let formFields = {
        file_path : '',
        save_path: '',
        auth_name: '',
        auth_designation: '',
        auth_position: '',
        auth_tel_no: '',
        auth_extn: '',
        contact_name: '',
        contact_designation: '',
        contact_tel_no: '',
        contact_extn: ''

};

exports.getDtrFormDetails = function(){

    let file_path = document.querySelector('#dtr_file_path').value;
    let auth_name = document.querySelector('#auth_name').value;
    let auth_designation = document.querySelector('#auth_designation').value;
    let auth_position = document.querySelector('#auth_position').value;
    let auth_tel_no = document.querySelector('#auth_tel_no').value;
    let auth_extn = document.querySelector('#auth_extn').value;
    let contact_name = document.querySelector('#contact_name').value;
    let contact_designation = document.querySelector('#contact_designation').value;
    let contact_tel_no = document.querySelector('#contact_tel_no').value;
    let contact_extn = document.querySelector('#contact_extn').value;

    formFields.file_path = file_path;
    formFields.auth_name = auth_name;
    formFields.auth_designation = auth_designation;
    formFields.auth_position = auth_position;
    formFields.auth_tel_no = auth_tel_no;
    formFields.auth_extn = auth_extn;
    formFields.contact_name = contact_name;
    formFields.contact_designation = contact_designation;
    formFields.contact_tel_no = contact_tel_no
    formFields.contact_extn = contact_extn;

    console.log(formFields);

    return formFields;

}

exports.validateDtrForm = function(){

    let file_path = document.querySelector('#dtr_file_path').value;

    formFields.file_path = file_path;

    if(file_path.length > 0){
        return true; 
    }

    return false;
}