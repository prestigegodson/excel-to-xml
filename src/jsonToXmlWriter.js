const fs = require('fs');
const os = require('os');
const path = require('path');
const XMLWriter = require('xml-writer');
const {getFormattedDate, cleanObjects } = require('../src/utility');


exports.dtr_202_xml = function(data, form_data){

    let xw = new XMLWriter(true);

    xw.startDocument('1.0', 'utf-8'); // START DOCUMENT
    xw.startElement('CALLREPORT') //START CALLREPORT
    .writeAttribute('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
    .writeAttribute('xsi:noNamespaceSchemaLocation','eBAS_SCHEMA_DTR202.xsd');

    xw.startElement('HEADER'); // START HEADER
    xw.writeElement('CALLREPORT_ID','DTR202');
    xw.writeElement('CALLREPORT_DESC','FOREIGN EXCHANGE FLOW STATEMENT');
    xw.writeElement('INST_CODE','20601');
    xw.writeElement('INST_NAME','abcon');
    xw.writeElement('AS_AT', getFormattedDate());
    xw.endElement(); // END HEADER

    xw.startElement('BODY'); //START BODY
    xw.startElement('CALLREPORT_DATA'); //START CALLREPORT_DATA
    data.map(d => {
        xw.startElement(d.TYPE);
        xw.writeElement('CODE',d.CODE);
        xw.writeElement('DESCRIPTION',d.DESCRIPTION);
        xw.writeElement('USD',d.USD == undefined ? 0 : d.USD);
        xw.endElement();

    })
    xw.endElement(); //END CALLREPORT_DATA
    xw.endElement(); //END BODY

    xw.startElement('FOOTER'); //START FOOTER

    xw.startElement('AUTH_SIGNATORY'); //START AUTH_SIGNATORY
    xw.writeElement('NAME',form_data.auth_name);
    xw.writeElement('DESIGNATION',form_data.auth_designation);
    xw.writeElement('POSITION',form_data.auth_position);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.auth_tel_no);
    xw.writeElement('EXTN',form_data.auth_extn);
    xw.endElement(); //END AUTH_SIGNATORY

    xw.startElement('CONTACT_DETAILS'); //START CONTACT_DETAILS
    xw.writeElement('NAME',form_data.contact_name);
    xw.writeElement('DESIGNATION',form_data.contact_designation);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.contact_tel_no);
    xw.writeElement('EXTN',form_data.contact_extn);
    xw.endElement(); //END CONTACT DETAILS

    xw.endElement(); //END FOOTER
    
    xw.endElement(); //END CALLREPORT
    xw.endDocument(); //END DOCUMENT

    
    let filePath = path.join(form_data.save_path,'DTR202.xml');
    console.log(filePath);
    let writeStream = fs.createWriteStream(filePath);
    writeStream.write(xw.toString());
    writeStream.close();


    console.log(xw.toString());


}

exports.dtr_217_xml = function(data, form_data){

    let xw = new XMLWriter(true);

    xw.startDocument('1.0', 'utf-8'); // START DOCUMENT
    xw.startElement('CALLREPORT') //START CALLREPORT
    .writeAttribute('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
    .writeAttribute('xsi:noNamespaceSchemaLocation','eBAS_SCHEMA_DTR217.xsd');

    xw.startElement('HEADER'); // START HEADER
    xw.writeElement('CALLREPORT_ID','DTR217');
    xw.writeElement('CALLREPORT_DESC','CUSTOMER INFORMATION');
    xw.writeElement('INST_CODE','20601');
    xw.writeElement('INST_NAME','abcon');
    xw.writeElement('AS_AT', getFormattedDate());
    xw.endElement(); // END HEADER

    xw.startElement('BODY'); //START BODY
    data.map(d => {
        xw.startElement('CALLREPORT_DATA'); //START CALLREPORT_DATA
        xw.writeElement('UNIQUE_IDENTIFICATION_TYPE','BVN');
        xw.writeElement('UNIQUE_IDENTIFICATION_NO',d.BVN);
        xw.writeElement('RC_NO',d['RC NO']);
        xw.writeElement('CLIENT_NAME',d['CLIENT NAME']);
        xw.writeElement('NEPC_NO',d['NEPC NO']);
        xw.writeElement('ADDRESS',d['ADDRESS']);
        xw.writeElement('CITY',d['CITY']);
        xw.writeElement('STATE',d['STATE']);
        xw.writeElement('DATE_REGISTERED',d['DATE REGISTERED']);
        xw.writeElement('DOM_ACCOUNT_NO',d['DOM ACCOUNT NO']);
        xw.writeElement('EMAIL_ADDRESS',d['EMAIL ADDRESS']);
        xw.endElement(); //END CALLREPORT_DATA
    })
    xw.endElement(); //END BODY

    xw.startElement('FOOTER'); //START FOOTER

    xw.startElement('AUTH_SIGNATORY'); //START AUTH_SIGNATORY
    xw.writeElement('NAME',form_data.auth_name);
    xw.writeElement('DESIGNATION',form_data.auth_designation);
    xw.writeElement('POSITION',form_data.auth_position);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.auth_tel_no);
    xw.writeElement('EXTN',form_data.auth_extn);
    xw.endElement(); //END AUTH_SIGNATORY

    xw.startElement('CONTACT_DETAILS'); //START CONTACT_DETAILS
    xw.writeElement('NAME',form_data.contact_name);
    xw.writeElement('DESIGNATION',form_data.contact_designation);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.contact_tel_no);
    xw.writeElement('EXTN',form_data.contact_extn);
    xw.endElement(); //END CONTACT DETAILS

    xw.endElement(); //END FOOTER
    
    xw.endElement(); //END CALLREPORT
    xw.endDocument(); //END DOCUMENT

    
    let filePath = path.join(form_data.save_path,'DTR217.xml');
    console.log(filePath);
    let writeStream = fs.createWriteStream(filePath);
    writeStream.write(xw.toString());
    writeStream.close();


    console.log(xw.toString());


}

exports.dtr_305_xml = function(data, form_data){

    let xw = new XMLWriter(true);

    xw.startDocument('1.0', 'utf-8'); // START DOCUMENT
    xw.startElement('CALLREPORT') //START CALLREPORT
    .writeAttribute('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
    .writeAttribute('xsi:noNamespaceSchemaLocation','eBAS_SCHEMA_DTR305.xsd');

    xw.startElement('HEADER'); // START HEADER
    xw.writeElement('CALLREPORT_ID','DTR305');
    xw.writeElement('CALLREPORT_DESC','DETAILS OF TOTAL FOREX SALES TO END-USERS');
    xw.writeElement('INST_CODE','20601');
    xw.writeElement('INST_NAME','abcon');
    xw.writeElement('FOR_THE_MONTH_ENDED', getFormattedDate());
    xw.endElement(); // END HEADER

    xw.startElement('BODY'); //START BODY
    data.map(d => {
        xw.startElement('CALLREPORT_DATA'); //START CALLREPORT_DATA
        xw.writeElement('SL_NO',d['SL/NO']);
        if(d['SL/NO'] == 'T_99999'){

            xw.writeElement('UNIQUE_IDENTIFICATION_TYPE','BVN');
            xw.writeElement('UNIQUE_IDENTIFICATION_NO','');
            xw.startElement('CUSTOMER') //START CUSTOMER
            xw.writeElement('FORM_NUMBER','');
            xw.writeElement('RC_PASSPORT_NO','');
            xw.writeElement('NAME','');
            xw.writeElement('ADDRESS','');
            xw.endElement()//END CUSTOMER
            xw.writeElement('AMOUNT',d.AMOUNT);
            xw.writeElement('SOURCE_OF_FUNDS','');
            xw.writeElement('PURPOSE','');
            xw.writeElement('VISIBLE_CODE','');
            xw.writeElement('INVISIBLE_CODE','');
            xw.writeElement('VALID','');
            xw.writeElement('TRANSACTION_DATE',getFormattedDate());
            xw.writeElement('PAYMENT_MODE','');
            xw.writeElement('COUNTRY_OF_PAYMENT','');
            xw.endElement(); //END CALLREPORT_DATA
        }else{

            xw.writeElement('UNIQUE_IDENTIFICATION_TYPE','BVN');
            xw.writeElement('UNIQUE_IDENTIFICATION_NO',d.BVN);
            xw.startElement('CUSTOMER') //START CUSTOMER
            xw.writeElement('FORM_NUMBER',d['FORM NUMBER']);
            xw.writeElement('RC_PASSPORT_NO',d['RC PASSPORT NUMBER']);
            xw.writeElement('NAME',d.NAME);
            xw.writeElement('ADDRESS',d.ADDRESS);
            xw.endElement()//END CUSTOMER
            xw.writeElement('AMOUNT',d.AMOUNT);
            xw.writeElement('SOURCE_OF_FUNDS',d['SOURCE OF FUNDS']);
            xw.writeElement('PURPOSE',d.PURPOSE);
            xw.writeElement('VISIBLE_CODE',d['VISIBLE CODE']);
            xw.writeElement('INVISIBLE_CODE',d['INVISIBLE CODE']);
            xw.writeElement('VALID',d.VALID);
            xw.writeElement('TRANSACTION_DATE',d['TRANS DATE']);
            xw.writeElement('PAYMENT_MODE',d['PAYMENT MODE']);
            xw.writeElement('COUNTRY_OF_PAYMENT',d['COUNTRY OF PAYMENT']);
            xw.endElement(); //END CALLREPORT_DATA
        }
        
    })
    xw.endElement(); //END BODY

    xw.startElement('FOOTER'); //START FOOTER

    xw.startElement('AUTH_SIGNATORY'); //START AUTH_SIGNATORY
    xw.writeElement('NAME',form_data.auth_name);
    xw.writeElement('DESIGNATION',form_data.auth_designation);
    xw.writeElement('POSITION',form_data.auth_position);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.auth_tel_no);
    xw.writeElement('EXTN',form_data.auth_extn);
    xw.endElement(); //END AUTH_SIGNATORY

    xw.startElement('CONTACT_DETAILS'); //START CONTACT_DETAILS
    xw.writeElement('NAME',form_data.contact_name);
    xw.writeElement('DESIGNATION',form_data.contact_designation);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.contact_tel_no);
    xw.writeElement('EXTN',form_data.contact_extn);
    xw.endElement(); //END CONTACT DETAILS

    xw.endElement(); //END FOOTER
    
    xw.endElement(); //END CALLREPORT
    xw.endDocument(); //END DOCUMENT

    
    let filePath = path.join(form_data.save_path,'DTR305.xml');
    console.log(filePath);
    let writeStream = fs.createWriteStream(filePath);
    writeStream.write(xw.toString());
    writeStream.close();


    console.log(xw.toString());


}

exports.dtr_315_xml = function(data, form_data){

    let xw = new XMLWriter(true);

    xw.startDocument('1.0', 'utf-8'); // START DOCUMENT
    xw.startElement('CALLREPORT') //START CALLREPORT
    .writeAttribute('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
    .writeAttribute('xsi:noNamespaceSchemaLocation','eBAS_SCHEMA_DTR315.xsd');

    xw.startElement('HEADER'); // START HEADER
    xw.writeElement('CALLREPORT_ID','DTR315');
    xw.writeElement('CALLREPORT_DESC','DETAILS OF FOREX SOLD AND PURCHASED BY BUREAU DE CHANGE/HOTEL');
    xw.writeElement('BDC_HOTEL_CODE','20601');
    xw.writeElement('BDC_HOTEL_NAME','abcon');
    xw.writeElement('FOR_THE_MONTH_ENDED', getFormattedDate());
    xw.endElement(); // END HEADER

    xw.startElement('BODY'); //START BODY
    data.map(d => {
        xw.startElement('CALLREPORT_DATA'); //START CALLREPORT_DATA
        xw.writeElement('CURRENCY_CODE',d.CURRENCY_CODE);
        xw.writeElement('OPENING_BALANCE',d.OPENING_BALANCE);
        xw.writeElement('AMOUNT_PURCHASED',d.AMOUNT_PURCHASED);
        xw.writeElement('PURCHASE_EXCHANGE',d.PURCHASE_EXCHANGE);
        xw.writeElement('NAIRA_EQUIVALENT_PURCHASED',d.NAIRA_EQUIVALENT_PURCHASED);
        xw.writeElement('AMOUNT_SOLD',d.AMOUNT_SOLD);
        xw.writeElement('SALES_EXCHANGE_RATE',d.SALES_EXCHANGE_RATE);
        xw.writeElement('NAIRA_EQUIVALENT_SALES',d.NAIRA_EQUIVALENT_SALES);
        xw.writeElement('CLOSING_BALANCE',d.CLOSING_BALANCE);

        xw.endElement(); //END CALLREPORT_DATA
    })
    xw.endElement(); //END BODY

    xw.startElement('FOOTER'); //START FOOTER

    xw.startElement('AUTH_SIGNATORY'); //START AUTH_SIGNATORY
    xw.writeElement('NAME',form_data.auth_name);
    xw.writeElement('DESIGNATION',form_data.auth_designation);
    xw.writeElement('POSITION',form_data.auth_position);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.auth_tel_no);
    xw.writeElement('EXTN',form_data.auth_extn);
    xw.endElement(); //END AUTH_SIGNATORY

    xw.startElement('CONTACT_DETAILS'); //START CONTACT_DETAILS
    xw.writeElement('NAME',form_data.contact_name);
    xw.writeElement('DESIGNATION',form_data.contact_designation);
    xw.writeElement('DATE',getFormattedDate());
    xw.writeElement('TEL_NO',form_data.contact_tel_no);
    xw.writeElement('EXTN',form_data.contact_extn);
    xw.endElement(); //END CONTACT DETAILS

    xw.endElement(); //END FOOTER
    
    xw.endElement(); //END CALLREPORT
    xw.endDocument(); //END DOCUMENT

    
    let filePath = path.join(form_data.save_path,'DTR315.xml');
    console.log(filePath);
    let writeStream = fs.createWriteStream(filePath);
    writeStream.write(xw.toString());
    writeStream.close();


    console.log(xw.toString());


}